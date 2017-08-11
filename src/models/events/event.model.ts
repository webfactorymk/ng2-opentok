// Opentok Event
// https://tokbox.com/developer/sdks/js/reference/Event.html

import {OTEventBase} from "./shared/event-base.model";
export class OTEvent extends OTEventBase {

  readonly cancelable: boolean;
  readonly target: Object;
  readonly type: string;

  constructor(event: any) {
    super(event);

    this.cancelable = this.event.cancelable;
    this.target = this.event.target;
    this.type = this.event.type;
  }

}
