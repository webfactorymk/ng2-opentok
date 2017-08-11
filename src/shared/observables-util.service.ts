import {Observable, Observer} from "rxjs";

export class ObservablesUtil {

  public static getObservableMethod(object: Object, func: any, param?: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      object[func](param, (error) => {
        if (error) {
          observer.error(error);
        }
        else {
          observer.next(true);
          observer.complete();
        }
      });
    });
  }

  public static getObservableEvent(object: Object, func: any, param?: string, context?:Object): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      object[func](param, (event:any) => {
        observer.next(event);
        observer.complete();
      }, context);
    });
  }
}
