import { OTEventBase } from "./shared/event-base.model";
export declare class OTVideoEnabledChangedEvent extends OTEventBase {
    readonly cancelable: boolean;
    readonly reason: string;
    readonly target: Object;
    readonly type: string;
    constructor(event: any);
}
