import { OTEventBase } from "./shared/event-base.model";
export declare class OTVideoElementCreatedEvent extends OTEventBase {
    readonly element: number;
    constructor(event: any);
}
