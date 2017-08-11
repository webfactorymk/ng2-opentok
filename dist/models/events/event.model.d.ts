import { OTEventBase } from "./shared/event-base.model";
export declare class OTEvent extends OTEventBase {
    readonly cancelable: boolean;
    readonly target: Object;
    readonly type: string;
    constructor(event: any);
}
