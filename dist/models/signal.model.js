// Opentok signaling https://tokbox.com/developer/guides/signaling/js/#send_signal_to_client
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        Object.keys(signalAsHash).forEach(function (signalProperty) { return (signalAsHash[signalProperty] == null) && delete signalAsHash[signalProperty]; });
        return signalAsHash;
    };
    return OTSignal;
}());
exports.OTSignal = OTSignal;
//# sourceMappingURL=signal.model.js.map