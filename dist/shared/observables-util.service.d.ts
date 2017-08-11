import { Observable } from "rxjs";
export declare class ObservablesUtil {
    static getObservableMethod(object: Object, func: any, param?: any): Observable<any>;
    static getObservableEvent(object: Object, func: any, param?: string, context?: Object): Observable<any>;
}
