import {OTEventBase} from "./shared/event-base.model";
export class OTAudioLevelUpdatedEvent extends OTEventBase {

  readonly audioLevel:number;

  constructor(event: any) {
    super(event);
    this.audioLevel = this.event.audioLevel;
  }
}
