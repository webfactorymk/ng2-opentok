import {DefaultBehaviour} from "./default_behavior.interface";

export class OTEventBase implements DefaultBehaviour {
  protected event: any;

  constructor(event: any) {
    this.event = event;
  }

  isDefaultPrevented(): boolean {
    return this.event.isDefaultPrevented();
  }

  preventDefault(): void {
    this.event.preventDefault();
  }
}
