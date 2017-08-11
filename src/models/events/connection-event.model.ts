// Opentok Event
// https://tokbox.com/developer/sdks/js/reference/ConnectionEvent.html


import {OTConnection} from "../connection.model";
import {OTEventBase} from "./shared/event-base.model";

export class OTConnectionEvent extends OTEventBase{

  readonly connection: OTConnection;
  readonly reason: string;

  constructor(event: any) {
    super(event);
  }

}
