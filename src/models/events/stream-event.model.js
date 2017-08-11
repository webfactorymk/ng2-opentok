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
// Opentok Event
// https://tokbox.com/developer/sdks/js/reference/StreamEvent.html
var event_base_model_1 = require("./shared/event-base.model");
var stream_model_1 = require("../stream.model");
var OTStreamEvent = (function (_super) {
    __extends(OTStreamEvent, _super);
    function OTStreamEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.cancelable = _this.event.cancelable;
        _this.reason = _this.event.reason;
        _this.stream = new stream_model_1.OTStream(_this.event.stream);
        return _this;
    }
    return OTStreamEvent;
}(event_base_model_1.OTEventBase));
exports.OTStreamEvent = OTStreamEvent;
