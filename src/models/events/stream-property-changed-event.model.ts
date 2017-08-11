import {OTEventBase} from "./shared/event-base.model";
import {OTStream} from "../stream.model";

//https://tokbox.com/developer/sdks/js/reference/StreamPropertyChangedEvent.html
export const StreamPropertyChanged = {
  hasVideo: "hasVideo",
  hasAudio: "hasAudio",
  videoDimensions: "videoDimensions"
}

export class OTStreamPropertyChangedEvent extends OTEventBase {

  readonly changedProperty: string;
  readonly newValue: Object;
  readonly oldValue: Object;
  readonly stream: OTStream;

  constructor(event: any) {
    super(event);
    this.changedProperty = this.event.changedProperty;
    this.newValue = this.event.newValue;
    this.oldValue = this.event.oldValue;
    this.stream = new OTStream(this.event.stream);
  }

  hasVideoChanged(){
    return this.changedProperty == StreamPropertyChanged.hasVideo;
  }

  hasAudioChanged(){
    return this.changedProperty == StreamPropertyChanged.hasAudio;
  }

  videoDimensionsChanged(){
    return this.changedProperty == StreamPropertyChanged.videoDimensions;
  }
}
