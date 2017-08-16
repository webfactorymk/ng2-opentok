import { OTSession } from "./models/session.model";
import { Observable } from "rxjs";
import { OpentokConfig } from "./opentok.config";
import { OTStreamEvent } from "./models/events/stream-event.model";
import { OTSessionDisconnectEvent } from "./models/events/session-disconnect-event.model";
import { OTStreamPropertyChangedEvent } from "./models/events/stream-property-changed-event.model";
import { OTEventBase } from "./models/events/shared/event-base.model";
import { OTConnectionEvent } from "./models/events/connection-event.model";
import { OTEvent } from "./models/events/event.model";
import { OTSignalEvent } from "./models/events/signal-event.model";
export declare class OpentokService {
    private opentokConfig;
    private _apiKey;
    private _session;
    private _publisher;
    private _subscriber;
    private _publisherTag;
    private _subscriberTag;
    private _isVideoActive;
    constructor(opentokConfig: OpentokConfig);
    isWebRTCSupported(): boolean;
    connectToSession(sessionId: string, token: string, publisherTag?: string, subscriberTag?: string): Observable<OTSession>;
    call(publisherProperties?: {}): Observable<boolean>;
    hangUp(): void;
    publishVideo(show: boolean): void;
    onIncomingCall(subscriberProperties?: {}): Observable<OTStreamEvent>;
    onEndCall(): Observable<OTConnectionEvent>;
    onNetworkFailedForPublisher(): Observable<OTSessionDisconnectEvent>;
    getSubscriberScreenshot(): string;
    onVideoChanged(): Observable<OTStreamPropertyChangedEvent>;
    sendSignal(signalType: string, data?: string): Observable<boolean>;
    onSignal(signalType: string): Observable<OTSignalEvent>;
    onReconnecting(): Observable<OTEvent>;
    onReconnected(): Observable<OTEvent>;
    onOpenMediaAccessDialog(): Observable<OTEventBase>;
    onMediaAccessDenied(): Observable<OTEventBase>;
    private _initPublisher(publisherProperties?);
}