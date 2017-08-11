// Opentok Event
// https://tokbox.com/developer/sdks/js/reference/StreamEvent.html
import {OTEventBase} from "./shared/event-base.model";
import {OTStream} from "../stream.model";

export class OTStreamEvent extends OTEventBase {

  readonly cancelable: boolean;
  readonly reason: string;
  readonly stream: OTStream;

  constructor(event: any) {
    super(event);
    this.cancelable = this.event.cancelable;
    this.reason = this.event.reason;
    this.stream = new OTStream(this.event.stream);
  }

}
