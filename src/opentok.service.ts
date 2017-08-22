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
import {OTAudioLevelUpdatedEvent} from "./models/events/audio-level-updated-event.model";

declare var OT: any;
const HAS_SYSTEM_REQUIREMENTS = 1;

@Injectable()
export class OpentokService {

    private _apiKey: string;
    private _session: OTSession;
    private _publisher: OTPublisher;
    private _subscriber: OTSubscriber;
    private _isVideoActive: boolean = false;

    constructor(private opentokConfig: OpentokConfig) {
        this._apiKey = opentokConfig.apiKey;
    }

    isWebRTCSupported():boolean {
        return OT.checkSystemRequirements() == HAS_SYSTEM_REQUIREMENTS;
    };

    connectToSession(sessionId: string, token: string):Observable<OTSession> {
        this._session = OTSession.init(this._apiKey, sessionId);
        return this._session.connect(token).map(()=>{
            return this._session;
        });
    }

    call(publisherTag?: string, publisherProperties?:{}):Observable<boolean> {
        this._initPublisher(publisherTag, publisherProperties);
        return this._session.publish(this._publisher);
    }

    hangUp():void {
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

        if (this._subscriber) {
            this._subscriber.off();
            this._subscriber = null;
        }
    }

    publishVideo(show: boolean):void {
        this._publisher.publishVideo(show);
    }

    onIncomingCall(subscriberTag?: string, subscriberProperties?: {}): Observable<OTStreamEvent> {
        return this._session.on(SESSION_EVENTS.streamCreated).do((event: OTStreamEvent) => {
            if (!this._subscriber) {
                this._subscriber = this._session.subscribeToStream(event.stream, subscriberTag, subscriberProperties);
                this._isVideoActive = event.stream.hasVideo();
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

    getSubscriberScreenshot():string {
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
    sendSignal(signalType?: string, data?: string): Observable<boolean> {
        let OTsignal: OTSignal = new OTSignal(signalType, data);
        return this._session.signal(OTsignal);
    }

    onSignal(signalType?: string):Observable<OTSignalEvent> {
        let OTsignal: OTSignal = new OTSignal(signalType);
        return this._session.onSignal(OTsignal);
    }

    onReconnecting(): Observable<OTEvent> {
        return this._session.on(SESSION_EVENTS.sessionReconnecting);
    }

    onReconnected(): Observable<OTEvent> {
        return this._session.on(SESSION_EVENTS.sessionReconnected);
    }

    onOpenMediaAccessDialog(): Observable<OTEvent> {
        return this._publisher.on(PUBLISHER_EVENTS.accessDialogOpened);
    }

    onClosedMediaAccessDialog(): Observable<OTEvent> {
        return this._publisher.on(PUBLISHER_EVENTS.accessDialogClosed);
    }

    onAudioLevelUpdated():Observable<OTAudioLevelUpdatedEvent>{
        return this._publisher.on(PUBLISHER_EVENTS.audioLevelUpdated);
    }

    onMediaAccessDenied(): Observable<OTEvent> {
        return this._publisher.on(PUBLISHER_EVENTS.accessDenied);
    }

    onMediaAccessAllowed(): Observable<OTEvent> {
        return this._publisher.on(PUBLISHER_EVENTS.accessAllowed);
    }

    private _initPublisher(publisherTag?: string, publisherProperties?: {}){
        this._publisher = OTPublisher.init(publisherTag, publisherProperties);
    }

}
