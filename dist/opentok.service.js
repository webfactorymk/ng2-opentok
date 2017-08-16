"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_model_1 = require("./models/session.model");
var publisher_model_1 = require("./models/publisher.model");
var signal_model_1 = require("./models/signal.model");
var opentok_config_1 = require("./opentok.config");
var util_1 = require("util");
var HAS_SYSTEM_REQUIREMENTS = 1;
var OpentokService = (function () {
    function OpentokService(opentokConfig) {
        this.opentokConfig = opentokConfig;
        this._publisherTag = "publisher";
        this._subscriberTag = "subscriber";
        this._isVideoActive = false;
        this._apiKey = opentokConfig.apiKey;
    }
    OpentokService.prototype.isWebRTCSupported = function () {
        return OT.checkSystemRequirements() == HAS_SYSTEM_REQUIREMENTS;
    };
    ;
    OpentokService.prototype.connectToSession = function (sessionId, token, publisherTag, subscriberTag) {
        var _this = this;
        if (publisherTag)
            this._publisherTag = publisherTag;
        if (subscriberTag)
            this._subscriberTag = subscriberTag;
        this._session = session_model_1.OTSession.init(this._apiKey, sessionId);
        return this._session.connect(token).map(function () {
            return _this._session;
        });
    };
    OpentokService.prototype.call = function (publisherProperties) {
        this._initPublisher(publisherProperties);
        return this._session.publish(this._publisher);
    };
    OpentokService.prototype.hangUp = function () {
        if (this._session) {
            if (this._publisher)
                this._session.unpublish(this._publisher);
            if (this._subscriber)
                this._session.unsubscribe(this._subscriber);
            this._session.off();
            this._session.disconnect();
            this._session = null;
        }
        if (this._publisher) {
            this._publisher.off();
            this._publisher.destroy();
            this._publisher = null;
        }
        //TODO: check this for off and destroy
        if (this._subscriber) {
            this._subscriber.off();
            this._subscriber = null;
        }
    };
    OpentokService.prototype.publishVideo = function (show) {
        this._publisher.publishVideo(show);
    };
    OpentokService.prototype.onIncomingCall = function (subscriberProperties) {
        var _this = this;
        return this._session.on(session_model_1.SESSION_EVENTS.streamCreated).do(function (event) {
            if (!_this._subscriber) {
                _this._subscriber = _this._session.subscribeToStream(event.stream, _this._subscriberTag, subscriberProperties);
                _this._isVideoActive = event.stream.hasAudio();
            }
        });
    };
    OpentokService.prototype.onEndCall = function () {
        return this._session.on(session_model_1.SESSION_EVENTS.connectionDestroyed);
    };
    OpentokService.prototype.onNetworkFailedForPublisher = function () {
        return this._session.on(session_model_1.SESSION_EVENTS.sessionDisconnected).filter(function (event) {
            return event.isNetworkDisconnected();
        });
    };
    OpentokService.prototype.getSubscriberScreenshot = function () {
        return this._isVideoActive ? this._subscriber.getImageData() : null;
    };
    OpentokService.prototype.onVideoChanged = function () {
        var _this = this;
        return this._session.on(session_model_1.SESSION_EVENTS.streamPropertyChanged)
            .filter(function (event) {
            return event.hasVideoChanged();
        }).do(function (event) {
            _this._isVideoActive = !util_1.isNullOrUndefined(event.newValue);
        });
    };
    //https://tokbox.com/developer/guides/signaling/js/
    // Signal type should be a string of only the custom type without the 'signal:' key as said in the documentation.
    OpentokService.prototype.sendSignal = function (signalType, data) {
        var OTsignal = new signal_model_1.OTSignal(signalType, data);
        return this._session.signal(OTsignal);
    };
    OpentokService.prototype.onSignal = function (signalType) {
        var OTsignal = new signal_model_1.OTSignal(signalType);
        return this._session.onSignal(OTsignal);
    };
    OpentokService.prototype.onReconnecting = function () {
        return this._session.on(session_model_1.SESSION_EVENTS.sessionReconnecting);
    };
    OpentokService.prototype.onReconnected = function () {
        return this._session.on(session_model_1.SESSION_EVENTS.sessionReconnected);
    };
    OpentokService.prototype.onOpenMediaAccessDialog = function () {
        return this._publisher.on(publisher_model_1.PUBLISHER_EVENTS.accessDialogOpened);
    };
    OpentokService.prototype.onMediaAccessDenied = function () {
        return this._publisher.on(publisher_model_1.PUBLISHER_EVENTS.accessDenied);
    };
    OpentokService.prototype._initPublisher = function (publisherProperties) {
        this._publisher = publisher_model_1.OTPublisher.init(this._publisherTag, publisherProperties);
    };
    return OpentokService;
}());
OpentokService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
OpentokService.ctorParameters = function () { return [
    { type: opentok_config_1.OpentokConfig, },
]; };
exports.OpentokService = OpentokService;
//# sourceMappingURL=opentok.service.js.map