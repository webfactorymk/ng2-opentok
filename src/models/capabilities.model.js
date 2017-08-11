// Opentok Capabilities
// https://tokbox.com/developer/sdks/js/reference/Capabilities.html
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OTCapabilities = (function () {
    function OTCapabilities(capabilities) {
        this._capabilities = capabilities;
    }
    OTCapabilities.prototype.canforceDisconnect = function () {
        return this._capabilities.forceDisconnect == 1;
    };
    OTCapabilities.prototype.canForceUnpublish = function () {
        return this._capabilities.forceDisconnect == 1;
    };
    OTCapabilities.prototype.canPublish = function () {
        return this._capabilities.publish == 1;
    };
    OTCapabilities.prototype.canSubscribe = function () {
        return this._capabilities.subscribe == 1;
    };
    return OTCapabilities;
}());
exports.OTCapabilities = OTCapabilities;
