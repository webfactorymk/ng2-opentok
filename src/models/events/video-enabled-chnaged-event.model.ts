import {OTEventBase} from "./shared/event-base.model";
export class OTVideoEnabledChangedEvent extends OTEventBase {


  readonly cancelable: boolean;
  readonly reason: string;
  readonly target: Object;
  readonly type: string;

  constructor(event: any) {
    super(event);
    this.cancelable = this.event.cancelable;
    this.reason = this.event.reason;
    this.target = this.event.target;
    this.type = this.event.type;
  }

}
