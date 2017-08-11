import { OTEventBase } from "./shared/event-base.model";
export declare class OTVideoDimensionsChangedEvent extends OTEventBase {
    readonly newValue: Object;
    readonly oldValue: Object;
    constructor(event: any);
}
