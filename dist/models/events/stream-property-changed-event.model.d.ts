import { OTEventBase } from "./shared/event-base.model";
import { OTStream } from "../stream.model";
export declare const StreamPropertyChanged: {
    hasVideo: string;
    hasAudio: string;
    videoDimensions: string;
};
export declare class OTStreamPropertyChangedEvent extends OTEventBase {
    readonly changedProperty: string;
    readonly newValue: Object;
    readonly oldValue: Object;
    readonly stream: OTStream;
    constructor(event: any);
    hasVideoChanged(): boolean;
    hasAudioChanged(): boolean;
    videoDimensionsChanged(): boolean;
}
