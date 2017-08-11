import { OTEventBase } from "./shared/event-base.model";
export declare class OTAudioLevelUpdatedEvent extends OTEventBase {
    readonly audioLevel: number;
    constructor(event: any);
}
