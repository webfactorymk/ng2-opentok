"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observables_util_service_1 = require("../shared/observables-util.service");
var event_model_1 = require("./events/event.model");
var audio_level_updated_event_model_1 = require("./events/audio-level-updated-event.model");
var video_dimensions_changed_event_model_1 = require("./events/video-dimensions-changed-event.model");
var video_enabled_chnaged_event_model_1 = require("./events/video-enabled-chnaged-event.model");
var video_element_created_event_model_1 = require("./events/video-element-created-event.model");
// Opentok Subscriber
// https://tokbox.com/developer/sdks/js/reference/Subscriber.html
exports.SUBSCRIBER_EVENTS = {
    audioLevelUpdated: "audioLevelUpdated",
    connected: "connected",
    destroyed: "destroyed",
    disconnected: 'disconnected',
    videoDimensionsChanged: "videoDimensionsChanged",
    videoDisabled: "videoDisabled",
    videoDisableWarning: "videoDisableWarning",
    videoDisableWarningLifted: "videoDisableWarningLifted",
    videoElementCreated: "videoElementCreated",
    videoEnabled: "videoEnabled"
};
var OTSubscriber = (function () {
    function OTSubscriber(opentokSubscriber) {
        this.opentokSubscriber = opentokSubscriber;
    }
    //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#off
    OTSubscriber.prototype.off = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'off', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#on
    OTSubscriber.prototype.on = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'on', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#once
    OTSubscriber.prototype.once = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'once', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    OTSubscriber.prototype.getImageData = function () {
        return "data:image/png;base64," + this.opentokSubscriber.getImgData();
    };
    OTSubscriber.prototype._mapEvent = function (eventName, event) {
        var e;
        switch (eventName) {
            case exports.SUBSCRIBER_EVENTS.audioLevelUpdated: {
                e = new audio_level_updated_event_model_1.OTAudioLevelUpdatedEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.connected: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.destroyed: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.disconnected: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoDimensionsChanged: {
                e = new video_dimensions_changed_event_model_1.OTVideoDimensionsChangedEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoDisabled: {
                e = new video_enabled_chnaged_event_model_1.OTVideoEnabledChangedEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoDisableWarning: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoDisableWarningLifted: {
                e = new event_model_1.OTEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoElementCreated: {
                e = new video_element_created_event_model_1.OTVideoElementCreatedEvent(event);
                break;
            }
            case exports.SUBSCRIBER_EVENTS.videoEnabled: {
                e = new video_enabled_chnaged_event_model_1.OTVideoEnabledChangedEvent(event);
                break;
            }
        }
        return e;
    };
    return OTSubscriber;
}());
exports.OTSubscriber = OTSubscriber;
//# sourceMappingURL=subscriber.model.js.map