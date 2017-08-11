"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_model_1 = require("./session.model");
var observables_util_service_1 = require("../shared/observables-util.service");
var event_model_1 = require("./events/event.model");
var stream_model_1 = require("./stream.model");
var video_element_created_event_model_1 = require("./events/video-element-created-event.model");
var audio_level_updated_event_model_1 = require("./events/audio-level-updated-event.model");
var stream_event_model_1 = require("./events/stream-event.model");
var video_dimensions_changed_event_model_1 = require("./events/video-dimensions-changed-event.model");
// Opentok Publisher
// https://tokbox.com/developer/guides/publish-stream/js/#create_publisher
// https://tokbox.com/developer/sdks/js/reference/Publisher.html
exports.PUBLISHER_EVENTS = {
    accessAllowed: "accessAllowed",
    accessDenied: "accessDenied",
    accessDialogOpened: "accessDialogOpened",
    accessDialogClosed: "accessDialogClosed",
    streamCreated: "streamCreated",
    streamDestroyed: "streamDestroyed",
    audioLevelUpdated: "audioLevelUpdated",
    destroyed: "destroyed",
    mediaStopped: "mediaStopped",
    videoDimensionsChanged: "videoDimensionsChanged",
    videoElementCreated: "videoElementCreated"
};
var OTPublisher = (function () {
    function OTPublisher(opentokPublisher) {
        this.opentokPublisher = opentokPublisher;
    }
    OTPublisher.init = function (publisherContainer, properties) {
        //https://tokbox.com/developer/sdks/js/reference/OT.html#initPublisher
        return new OTPublisher(OT.initPublisher(publisherContainer, properties));
    };
    //https://tokbox.com/developer/sdks/js/reference/Publisher.html#off
    OTPublisher.prototype.off = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokPublisher, 'off', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Publisher.html#on
    OTPublisher.prototype.on = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokPublisher, 'on', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Publisher.html#once
    OTPublisher.prototype.once = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokPublisher, 'once', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    OTPublisher.prototype.getAccessAllowed = function () {
        return this.opentokPublisher.accessAllowed;
    };
    OTPublisher.prototype.getElement = function () {
        return this.opentokPublisher.element;
    };
    OTPublisher.prototype.getId = function () {
        return this.opentokPublisher.id;
    };
    OTPublisher.prototype.getStream = function () {
        return new stream_model_1.OTStream(this.opentokPublisher.stream);
    };
    OTPublisher.prototype.getSession = function () {
        return new session_model_1.OTSession(this.opentokPublisher.session);
    };
    OTPublisher.prototype.destroy = function () {
        this.opentokPublisher.destroy();
        this.opentokPublisher = null;
    };
    //Returns the base-64-encoded string of PNG data representing the Publisher video.
    OTPublisher.prototype.getImgData = function () {
        return "data:image/png;base64," + this.opentokPublisher.getImgData();
    };
    OTPublisher.prototype.getStyle = function () {
        return this.opentokPublisher.getStyle();
    };
    OTPublisher.prototype.publishAudio = function (value) {
        this.opentokPublisher.publishAudio(value);
    };
    OTPublisher.prototype.publishVideo = function (value) {
        this.opentokPublisher.publishVideo(value);
    };
    OTPublisher.prototype.videoHeight = function () {
        return this.opentokPublisher.videoHeight();
    };
    OTPublisher.prototype.videoWidth = function () {
        return this.opentokPublisher.videoWidth();
    };
    OTPublisher.prototype.setStyle = function (obj) {
        this.opentokPublisher.setStyle(obj);
    };
    OTPublisher.prototype._mapEvent = function (eventName, event) {
        var e;
        switch (eventName) {
            case exports.PUBLISHER_EVENTS.accessAllowed: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.accessDenied: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.accessDialogOpened: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.accessDialogClosed: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.streamCreated: {
                e = new stream_event_model_1.OTStreamEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.streamDestroyed: {
                e = new stream_event_model_1.OTStreamEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.audioLevelUpdated: {
                e = new audio_level_updated_event_model_1.OTAudioLevelUpdatedEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.destroyed: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.mediaStopped: {
                e = new stream_event_model_1.OTStreamEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.videoDimensionsChanged: {
                e = new video_dimensions_changed_event_model_1.OTVideoDimensionsChangedEvent(event);
                break;
            }
            case exports.PUBLISHER_EVENTS.videoElementCreated: {
                e = new video_element_created_event_model_1.OTVideoElementCreatedEvent(event);
                break;
            }
        }
        return e;
    };
    return OTPublisher;
}());
exports.OTPublisher = OTPublisher;
//# sourceMappingURL=publisher.model.js.map