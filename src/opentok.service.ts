import {Injectable} from "@angular/core";
import {OTSession, SESSION_EVENTS} from "./models/session.model";
import {OTPublisher, PUBLISHER_EVENTS} from "./models/publisher.model";
import {OTSubscriber} from "./models/subscriber.model";
import {OTSignal} from "./models/signal.model";
import {Observable} from "rxjs";
import {OpentokConfig} from "./opentok.config";
import {OTStreamEvent} from "./models/events/stream-event.model";
import {OTSessionDisconnectEvent} from "./models/events/session-disconnect-event.model";
import {OTStreamPropertyChangedEvent} from "./models/events/stream-property-changed-event.model";
import {isNullOrUndefined} from "util";
import {OTEventBase} from "./models/events/shared/event-base.model";
import {OTConnectionEvent} from "./models/events/connection-event.model";
import {OTEvent} from "./models/events/event.model";
import {OTSignalEvent} from "./models/events/signal-event.model";

declare var OT: any;
const HAS_SYSTEM_REQUIREMENTS = 1;

@Injectable()
export class OpentokService {

    private _apiKey: string;
    private _session: OTSession;
    private _publisher: OTPublisher;
    private _subscriber: OTSubscriber;
    private _publisherTag: string = "publisher";
    private _subscriberTag: string = "subscriber";
    private _isVideoActive: boolean = false;

    constructor(private opentokConfig: OpentokConfig) {
        this._apiKey = opentokConfig.apiKey;
    }

    isWebRTCSupported() {
        return OT.checkSystemRequirements() == HAS_SYSTEM_REQUIREMENTS;
    };

    connectToSession(sessionId: string, token: string, publisherTag?: string, subscriberTag?: string):Observable<OTSession> {
        if (publisherTag) this._publisherTag = publisherTag;
        if (subscriberTag) this._subscriberTag = subscriberTag;
        this._session = OTSession.init(this._apiKey, sessionId);
        return this._session.connect(token).map(()=>{
            return this._session;
        });
    }

    call(publisherProperties?:{}) {
        this._initPublisher(publisherProperties);
        return this._session.publish(this._publisher);
    }

    hangUp() {
        if (this._session) {
            if (this._publisher) this._session.unpublish(this._publisher);
            if (this._subscriber) this._session.unsubscribe(this._subscriber);
            this._session.off();
            this._session.disconnect();
            this._session = null;
        }
        if (this._publisher) {
            this._publisher.off();
            this._publisher.destroy();
            this._publisher = null;
        }
        //TODO: check this for off and destroy
        if (this._subscriber) {
            this._subscriber.off();
            this._subscriber = null;
        }
    }

    publishVideo(show: boolean) {
        this._publisher.publishVideo(show);
    }

    onIncomingCall(subscriberProperties?: {}): Observable<OTStreamEvent> {
        return this._session.on(SESSION_EVENTS.streamCreated).do((event: OTStreamEvent) => {
            if (!this._subscriber) {
                this._subscriber = this._session.subscribeToStream(event.stream, this._subscriberTag, subscriberProperties);
                this._isVideoActive = event.stream.hasAudio();
            }
        });
    }

    onEndCall(): Observable<OTConnectionEvent> {
        return this._session.on(SESSION_EVENTS.connectionDestroyed);
    }

    onNetworkFailedForPublisher(): Observable<OTSessionDisconnectEvent> {
        return this._session.on(SESSION_EVENTS.sessionDisconnected).filter((event: OTSessionDisconnectEvent) => {
            return event.isNetworkDisconnected();
        });
    }

    getSubscriberScreenshot() {
        return this._isVideoActive ? this._subscriber.getImageData() : null;
    }

    onVideoChanged(): Observable<OTStreamPropertyChangedEvent> {
        return this._session.on(SESSION_EVENTS.streamPropertyChanged)
            .filter((event: OTStreamPropertyChangedEvent) => {
                return event.hasVideoChanged();
            }).do((event: OTStreamPropertyChangedEvent) => {
                this._isVideoActive = !isNullOrUndefined(event.newValue);
            });
    }

    //https://tokbox.com/developer/guides/signaling/js/
    // Signal type should be a string of only the custom type without the 'signal:' key as said in the documentation.
    sendSignal(signalType: string, data?: string): Observable<boolean> {
        let OTsignal: OTSignal = new OTSignal(signalType, data);
        return this._session.signal(OTsignal);
    }

    onSignal(signalType: string):Observable<OTSignalEvent> {
        let OTsignal: OTSignal = new OTSignal(signalType);
        return this._session.onSignal(OTsignal);
    }

    onReconnecting(): Observable<OTEvent> {
        return this._session.on(SESSION_EVENTS.sessionReconnecting);
    }

    onReconnected(): Observable<OTEvent> {
        return this._session.on(SESSION_EVENTS.sessionReconnected);
    }

    onOpenMediaAccessDialog(): Observable<OTEventBase> {
        return this._publisher.on(PUBLISHER_EVENTS.accessDialogOpened);
    }

    onMediaAccessDenied(): Observable<OTEventBase> {
        return this._publisher.on(PUBLISHER_EVENTS.accessDenied);
    }

    private _initPublisher(publisherProperties?: {}){
        this._publisher = OTPublisher.init(this._publisherTag, publisherProperties);
    }

}
