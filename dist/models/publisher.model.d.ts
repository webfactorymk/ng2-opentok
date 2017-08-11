import { Observable } from "rxjs";
import { OTSession } from "./session.model";
import { OTStream } from "./stream.model";
import { IOTEventListener } from "../shared/event-listener.interface";
import { OTEventBase } from "./events/shared/event-base.model";
export declare const PUBLISHER_EVENTS: {
    accessAllowed: string;
    accessDenied: string;
    accessDialogOpened: string;
    accessDialogClosed: string;
    streamCreated: string;
    streamDestroyed: string;
    audioLevelUpdated: string;
    destroyed: string;
    mediaStopped: string;
    videoDimensionsChanged: string;
    videoElementCreated: string;
};
export declare class OTPublisher implements IOTEventListener {
    opentokPublisher: any;
    constructor(opentokPublisher: any);
    static init(publisherContainer?: string, properties?: {}): OTPublisher;
    off(event?: string, context?: Object): Observable<OTEventBase>;
    on(event?: string, context?: Object): Observable<OTEventBase>;
    once(event?: string, context?: Object): Observable<OTEventBase>;
    getAccessAllowed(): boolean;
    getElement(): HTMLElement;
    getId(): string;
    getStream(): OTStream;
    getSession(): OTSession;
    destroy(): void;
    getImgData(): string;
    getStyle(): Object;
    publishAudio(value: boolean): void;
    publishVideo(value: boolean): void;
    videoHeight(): number;
    videoWidth(): number;
    setStyle(obj: {
        [style: string]: string;
    }): void;
    private _mapEvent(eventName, event);
}
