import {OTEventBase} from "./shared/event-base.model";
import {OTConnection} from "../connection.model";

// Signal Event
// https://tokbox.com/developer/sdks/js/reference/SignalEvent.html

export class OTSignalEvent extends OTEventBase {
    readonly data: string;
    readonly to: any; //Opentok Connection
    readonly type: string;
    readonly from: OTConnection;

    constructor(event: any) {
        super(event);
        this.from = new OTConnection(this.event.from);
        this.data = this.event.data;
        this.to = this.event.to;
        this.type = this.event.type;
    }
}