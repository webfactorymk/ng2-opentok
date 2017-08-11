import { OTEventBase } from "./shared/event-base.model";
import { OTStream } from "../stream.model";
export declare class OTStreamEvent extends OTEventBase {
    readonly cancelable: boolean;
    readonly reason: string;
    readonly stream: OTStream;
    constructor(event: any);
}
