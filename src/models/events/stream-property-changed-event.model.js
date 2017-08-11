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
var stream_model_1 = require("../stream.model");
//https://tokbox.com/developer/sdks/js/reference/StreamPropertyChangedEvent.html
exports.StreamPropertyChanged = {
    hasVideo: "hasVideo",
    hasAudio: "hasAudio",
    videoDimensions: "videoDimensions"
};
var OTStreamPropertyChangedEvent = (function (_super) {
    __extends(OTStreamPropertyChangedEvent, _super);
    function OTStreamPropertyChangedEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.changedProperty = _this.event.changedProperty;
        _this.newValue = _this.event.newValue;
        _this.oldValue = _this.event.oldValue;
        _this.stream = new stream_model_1.OTStream(_this.event.stream);
        return _this;
    }
    OTStreamPropertyChangedEvent.prototype.hasVideoChanged = function () {
        return this.changedProperty == exports.StreamPropertyChanged.hasVideo;
    };
    OTStreamPropertyChangedEvent.prototype.hasAudioChanged = function () {
        return this.changedProperty == exports.StreamPropertyChanged.hasAudio;
    };
    OTStreamPropertyChangedEvent.prototype.videoDimensionsChanged = function () {
        return this.changedProperty == exports.StreamPropertyChanged.videoDimensions;
    };
    return OTStreamPropertyChangedEvent;
}(event_base_model_1.OTEventBase));
exports.OTStreamPropertyChangedEvent = OTStreamPropertyChangedEvent;
