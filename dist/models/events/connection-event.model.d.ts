import { OTConnection } from "../connection.model";
import { OTEventBase } from "./shared/event-base.model";
export declare class OTConnectionEvent extends OTEventBase {
    readonly connection: OTConnection;
    readonly reason: string;
    constructor(event: any);
}
