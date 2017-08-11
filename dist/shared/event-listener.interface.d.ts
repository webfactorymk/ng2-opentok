import { Observable } from "rxjs";
import { OTEventBase } from "../models/events/shared/event-base.model";
export interface IOTEventListener {
    on(type: string, context?: Object): Observable<OTEventBase>;
    once(type: string, context?: Object): Observable<OTEventBase>;
    off(type?: string, context?: Object): Observable<OTEventBase>;
}
