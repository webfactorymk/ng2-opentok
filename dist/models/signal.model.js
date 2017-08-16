"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Opentok signaling https://tokbox.com/developer/guides/signaling/js/#send_signal_to_client
var util_1 = require("util");
var OTSignal = (function () {
    function OTSignal(type, data, to) {
        this.type = type;
        this.event = this.getSignalEvent();
        if (to)
            this.to = to;
        if (data)
            this.data = data;
    }
    OTSignal.prototype.getSignalEvent = function () {
        return this.type ? ('signal:' + this.type) : 'signal';
    };
    OTSignal.prototype.getSignal = function () {
        var signalAsHash = {
            data: this.data,
            type: this.type,
            to: this.to
        };
        Object.keys(signalAsHash).forEach(function (signalProperty) {
            if (util_1.isNullOrUndefined(signalAsHash[signalProperty]))
                delete signalAsHash[signalProperty];
        });
        return signalAsHash;
    };
    return OTSignal;
}());
exports.OTSignal = OTSignal;
//# sourceMappingURL=signal.model.js.map