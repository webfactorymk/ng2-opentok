"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OTConnection = (function () {
    function OTConnection(connection) {
        this._connection = connection;
    }
    OTConnection.prototype.getConnectionId = function () {
        return this._connection.connectionId;
    };
    OTConnection.prototype.getCreationTime = function () {
        return this._connection.creationTime;
    };
    OTConnection.prototype.getData = function () {
        return this._connection.data;
    };
    return OTConnection;
}());
exports.OTConnection = OTConnection;
//# sourceMappingURL=connection.model.js.map