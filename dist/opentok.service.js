"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        if (publisherTag)
            this._publisherTag = publisherTag;
        if (subscriberTag)
            this._subscriberTag = subscriberTag;
        this._session = session_model_1.OTSession.init(this._apiKey, sessionId);
        return this._session.connect(token);
    };
    OpentokService.prototype.call = function () {
        this._initPublisher();
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
        if (this._subscriber) {
            this._subscriber = null;
        }
    };
    OpentokService.prototype.publishVideo = function (show) {
        this._publisher.publishVideo(show);
    };
    OpentokService.prototype.onIncomingCall = function () {
        var _this = this;
        var subscriberProperties = {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        };
        return this._session.on(session_model_1.SESSION_EVENTS.streamCreated).do(function (event) {
            if (!_this._subscriber) {
                _this._subscriber = _this._session.subscribeToStream(event.stream, _this._subscriberTag, subscriberProperties);
                _this._isVideoActive = event.stream.hasAudio();
            }
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/ConnectionEvent.html
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
        this._session.on(session_model_1.SESSION_EVENTS.sessionReconnected);
    };
    // onStreamDestroyed(onComplete: () => void) {
    //   this._subscribeToDestroyedStreams(onComplete);
    // }
    //
    // onSubscriberConnected(onComplete: (event) => void) {
    //   var eventHandler = (event) => {
    //     if (onComplete) onComplete(event);
    //   };
    //
    //   this._subscriber.addEventListener(SUBSCRIBER_EVENTS.connected, eventHandler);
    // }
    //
    // onSubscriberDisconnected(onComplete: (event) => void) {
    //   var eventHandler = (event) => {
    //     if (onComplete) onComplete(event);
    //   };
    //
    //   this._subscriber.addEventListener(SUBSCRIBER_EVENTS.disconnected, eventHandler);
    // }
    //
    // onSubscriberDestroyed() {
    //   this._subscriber.on(SUBSCRIBER_EVENTS.destroyed);
    // }
    OpentokService.prototype._initPublisher = function () {
        var publisherProperties = {
            insertMode: 'append',
            width: '100%',
            height: '100%',
            usePreviousDeviceSelection: true
        };
        this._publisher = publisher_model_1.OTPublisher.init(this._publisherTag, publisherProperties);
    };
    // private _subscribeToDestroyedStreams() {
    //     return this._session.on(SESSION_EVENTS.streamDestroyed);
    // }
    //
    //
    OpentokService.prototype.onOpenMediaAccessDialog = function () {
        return this._publisher.on(publisher_model_1.PUBLISHER_EVENTS.accessDialogOpened);
    };
    OpentokService.prototype.onMediaAccessDenied = function () {
        var _this = this;
        return this._publisher.on(publisher_model_1.PUBLISHER_EVENTS.accessDenied).do(function () {
            _this.hangUp();
        });
    };
    return OpentokService;
}());
OpentokService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [opentok_config_1.OpentokConfig])
], OpentokService);
exports.OpentokService = OpentokService;
//# sourceMappingURL=opentok.service.js.map