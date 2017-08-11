import {OTEventBase} from "./shared/event-base.model";
export class OTVideoElementCreatedEvent extends OTEventBase {

  readonly element: number;

  constructor(event: any) {
    super(event);
    this.element = this.event.element;
  }
}
