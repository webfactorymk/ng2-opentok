import { OTEventBase } from "./shared/event-base.model";
export declare const SessionDisconnectReasons: {
    clientDisconnected: string;
    forceDisconnected: string;
    networkDisconnected: string;
};
export declare class OTSessionDisconnectEvent extends OTEventBase {
    readonly reason: string;
    constructor(event: any);
    hasClientDisconnected(): boolean;
    isForceDisconnected(): boolean;
    isNetworkDisconnected(): boolean;
}
