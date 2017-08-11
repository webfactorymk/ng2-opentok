"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ObservablesUtil = (function () {
    function ObservablesUtil() {
    }
    ObservablesUtil.getObservableMethod = function (object, func, param) {
        return rxjs_1.Observable.create(function (observer) {
            object[func](param, function (error) {
                if (error) {
                    observer.error(error);
                }
                else {
                    observer.next(true);
                    observer.complete();
                }
            });
        });
    };
    ObservablesUtil.getObservableEvent = function (object, func, param, context) {
        return rxjs_1.Observable.create(function (observer) {
            object[func](param, function (event) {
                observer.next(event);
                observer.complete();
            }, context);
        });
    };
    return ObservablesUtil;
}());
exports.ObservablesUtil = ObservablesUtil;
