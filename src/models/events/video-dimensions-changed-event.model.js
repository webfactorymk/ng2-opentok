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
var OTVideoDimensionsChangedEvent = (function (_super) {
    __extends(OTVideoDimensionsChangedEvent, _super);
    function OTVideoDimensionsChangedEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.newValue = _this.event.newValue;
        _this.oldValue = _this.event.oldValue;
        return _this;
    }
    return OTVideoDimensionsChangedEvent;
}(event_base_model_1.OTEventBase));
exports.OTVideoDimensionsChangedEvent = OTVideoDimensionsChangedEvent;
