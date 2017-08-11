import {OTEventBase} from "./shared/event-base.model";

export class OTVideoDimensionsChangedEvent extends OTEventBase {

  readonly newValue:Object;
  readonly oldValue:Object;

  constructor(event:any){
    super(event);
    this.newValue = this.event.newValue;
    this.oldValue = this.event.oldValue;
  }
}
