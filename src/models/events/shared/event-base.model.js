"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OTEventBase = (function () {
    function OTEventBase(event) {
        this.event = event;
    }
    OTEventBase.prototype.isDefaultPrevented = function () {
        return this.event.isDefaultPrevented();
    };
    OTEventBase.prototype.preventDefault = function () {
        this.event.preventDefault();
    };
    return OTEventBase;
}());
exports.OTEventBase = OTEventBase;
