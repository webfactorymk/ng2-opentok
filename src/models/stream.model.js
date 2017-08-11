"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Opentok Stream
// https://tokbox.com/developer/sdks/js/reference/Stream.html
var connection_model_1 = require("./connection.model");
var OTStream = (function () {
    function OTStream(stream) {
        this._stream = stream;
    }
    OTStream.prototype.getStream = function () {
        return this._stream;
    };
    OTStream.prototype.getConnection = function () {
        return this._stream ? new connection_model_1.OTConnection(this._stream.connection) : null;
    };
    OTStream.prototype.getCreationTime = function () {
        return this._stream ? this._stream.creationTime : null;
    };
    OTStream.prototype.getFrameRate = function () {
        return this._stream ? this._stream.frameRate : null;
    };
    OTStream.prototype.hasAudio = function () {
        return this._stream ? this._stream.hasAudio : null;
    };
    OTStream.prototype.hasVideo = function () {
        return this._stream ? this._stream.hasVideo : null;
    };
    OTStream.prototype.getName = function () {
        return this._stream ? this._stream.name : null;
    };
    OTStream.prototype.getStreamId = function () {
        return this._stream ? this._stream.streamId : null;
    };
    OTStream.prototype.getVideoDimensions = function () {
        return this._stream ? this._stream.videoDimensions : null;
    };
    OTStream.prototype.getVideoType = function () {
        return this._stream ? this._stream.videoType : null;
    };
    return OTStream;
}());
exports.OTStream = OTStream;
