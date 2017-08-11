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
var OTSessionConnectEvent = (function (_super) {
    __extends(OTSessionConnectEvent, _super);
    function OTSessionConnectEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OTSessionConnectEvent;
}(event_base_model_1.OTEventBase));
exports.OTSessionConnectEvent = OTSessionConnectEvent;
//# sourceMappingURL=session-connect-event.model.js.map