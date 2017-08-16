"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var event_base_model_1 = require("./shared/event-base.model");
var connection_model_1 = require("../connection.model");
// Signal Event
// https://tokbox.com/developer/sdks/js/reference/SignalEvent.html
var OTSignalEvent = (function (_super) {
    __extends(OTSignalEvent, _super);
    function OTSignalEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.from = new connection_model_1.OTConnection(_this.event.from);
        _this.data = _this.event.data;
        _this.to = _this.event.to;
        _this.type = _this.event.type;
        return _this;
    }
    return OTSignalEvent;
}(event_base_model_1.OTEventBase));
exports.OTSignalEvent = OTSignalEvent;
