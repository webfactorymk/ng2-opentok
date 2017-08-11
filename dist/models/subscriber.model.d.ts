import { Observable } from "rxjs";
import { IOTEventListener } from "../shared/event-listener.interface";
import { OTEventBase } from "./events/shared/event-base.model";
export declare const SUBSCRIBER_EVENTS: {
    audioLevelUpdated: string;
    connected: string;
    destroyed: string;
    disconnected: string;
    videoDimensionsChanged: string;
    videoDisabled: string;
    videoDisableWarning: string;
    videoDisableWarningLifted: string;
    videoElementCreated: string;
    videoEnabled: string;
};
export declare class OTSubscriber implements IOTEventListener {
    opentokSubscriber: any;
    constructor(opentokSubscriber: any);
    off(event?: string, context?: Object): Observable<OTEventBase>;
    on(event?: string, context?: Object): Observable<OTEventBase>;
    once(event?: string, context?: Object): Observable<OTEventBase>;
    getImageData(): string;
    private _mapEvent(eventName, event);
}
