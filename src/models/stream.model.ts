// Opentok Stream
// https://tokbox.com/developer/sdks/js/reference/Stream.html
import {OTConnection} from "./connection.model";

export class OTStream {
  private _stream: any;

  constructor(stream: any) {
    this._stream = stream;
  }

  getStream(): any {
    return this._stream;
  }

  getConnection(): OTConnection {
    return this._stream ? new OTConnection(this._stream.connection) : null;
  }

  getCreationTime(): number {
    return this._stream ? this._stream.creationTime : null;
  }

  getFrameRate(): number {
    return this._stream ? this._stream.frameRate : null;
  }

  hasAudio(): boolean {
    return this._stream ? this._stream.hasAudio : null;
  }

  hasVideo(): boolean {
    return this._stream ? this._stream.hasVideo : null;
  }

  getName(): string {
    return this._stream ? this._stream.name : null;
  }

  getStreamId(): string {
    return this._stream ? this._stream.streamId : null;
  }

  getVideoDimensions(): Object {
    return this._stream ? this._stream.videoDimensions : null;
  }

  getVideoType(): string {
    return this._stream ? this._stream.videoType : null;
  }
}
