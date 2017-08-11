// Opentok Event
// https://tokbox.com/developer/sdks/js/reference/Event.html
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
var OTEvent = (function (_super) {
    __extends(OTEvent, _super);
    function OTEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.cancelable = _this.event.cancelable;
        _this.target = _this.event.target;
        _this.type = _this.event.type;
        return _this;
    }
    return OTEvent;
}(event_base_model_1.OTEventBase));
exports.OTEvent = OTEvent;
//# sourceMappingURL=event.model.js.map