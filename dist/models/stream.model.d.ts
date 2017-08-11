import { OTConnection } from "./connection.model";
export declare class OTStream {
    private _stream;
    constructor(stream: any);
    getStream(): any;
    getConnection(): OTConnection;
    getCreationTime(): number;
    getFrameRate(): number;
    hasAudio(): boolean;
    hasVideo(): boolean;
    getName(): string;
    getStreamId(): string;
    getVideoDimensions(): Object;
    getVideoType(): string;
}
