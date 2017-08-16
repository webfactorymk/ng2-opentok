"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscriber_model_1 = require("./subscriber.model");
var publisher_model_1 = require("./publisher.model");
var observables_util_service_1 = require("../shared/observables-util.service");
var event_model_1 = require("./events/event.model");
var connection_model_1 = require("./connection.model");
var capabilities_model_1 = require("./capabilities.model");
var event_base_model_1 = require("./events/shared/event-base.model");
var connection_event_model_1 = require("./events/connection-event.model");
var session_connect_event_model_1 = require("./events/session-connect-event.model");
var session_disconnect_event_model_1 = require("./events/session-disconnect-event.model");
var stream_event_model_1 = require("./events/stream-event.model");
var stream_property_changed_event_model_1 = require("./events/stream-property-changed-event.model");
var signal_event_model_1 = require("./events/signal-event.model");
// Opentok session
// https://tokbox.com/developer/guides/connect-session/js/#initialize_session
// https://tokbox.com/developer/sdks/js/reference/Session.html
exports.SESSION_EVENTS = {
    connectionCreated: "connectionCreated",
    connectionDestroyed: "connectionDestroyed",
    sessionConnected: "sessionConnected",
    sessionDisconnected: "sessionDisconnected",
    sessionReconnecting: "sessionReconnecting",
    sessionReconnected: "sessionReconnected",
    streamCreated: "streamCreated",
    streamDestroyed: "streamDestroyed",
    streamPropertyChanged: "streamPropertyChanged",
    signal: "signal"
};
var OTSession = (function () {
    function OTSession(session) {
        if (session)
            this._session = session;
    }
    OTSession.init = function (apiKey, sessionId) {
        return new OTSession(OT.initSession(apiKey, sessionId));
    };
    OTSession.prototype.getConnection = function () {
        return this._session ? new connection_model_1.OTConnection(this._session.connection) : null;
    };
    OTSession.prototype.getCapabilities = function () {
        return this._session ? new capabilities_model_1.OTCapabilities(this._session.capabilities) : null;
    };
    OTSession.prototype.getSessionId = function () {
        return this._session ? this._session : null;
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#off
    OTSession.prototype.off = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this._session, 'off', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#on
    OTSession.prototype.on = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this._session, 'on', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#once
    OTSession.prototype.once = function (event, context) {
        var _this = this;
        return observables_util_service_1.ObservablesUtil.getObservableEvent(this._session, 'once', event, context).map(function (e) {
            return _this._mapEvent(event, e);
        });
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#connect
    OTSession.prototype.connect = function (token) {
        return observables_util_service_1.ObservablesUtil.getObservableMethod(this._session, 'connect', token);
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#disconnect
    OTSession.prototype.disconnect = function () {
        if (this._session) {
            this._session.disconnect();
            this._session = null;
        }
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#forceDisconnect
    OTSession.prototype.forceDisconnect = function (connection) {
        var _this = this;
        if (this._session) {
            return observables_util_service_1.ObservablesUtil.getObservableMethod(this._session, 'forceDisconnect', connection.getConnectionId())
                .do(function () {
                _this._session = null;
            });
        }
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#forceUnpublish
    OTSession.prototype.forceUnpublish = function (stream) {
        return observables_util_service_1.ObservablesUtil.getObservableMethod(this._session, 'forceDisconnect', stream.getStream());
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#getPublisherForStream
    OTSession.prototype.getPublisherForStream = function (stream) {
        return new publisher_model_1.OTPublisher(this._session.getPublisherForStream(stream.getStream()));
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#getSubscribersForStream
    OTSession.prototype.getSubscribersForStream = function (stream) {
        return this._session.getSubscribersForStream(stream.getStream()).map(function (subscriber) {
            return new subscriber_model_1.OTSubscriber(subscriber);
        });
    };
    // Listen to signal
    //https://tokbox.com/developer/sdks/js/reference/SignalEvent.html
    OTSession.prototype.onSignal = function (signal) {
        return this.on(signal.getSignalEvent());
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#publish
    OTSession.prototype.publish = function (publisher) {
        return observables_util_service_1.ObservablesUtil.getObservableMethod(this._session, 'publish', publisher.opentokPublisher);
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#signal
    OTSession.prototype.signal = function (signal) {
        return observables_util_service_1.ObservablesUtil.getObservableMethod(this._session, 'signal', signal.getSignal());
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#subscribe
    OTSession.prototype.subscribeToStream = function (stream, subscriberContainer, subscriberProperties) {
        if (subscriberProperties === void 0) { subscriberProperties = {}; }
        return new subscriber_model_1.OTSubscriber(this._session.subscribe(stream.getStream(), subscriberContainer, subscriberProperties));
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#unpublish
    OTSession.prototype.unpublish = function (publisher) {
        this._session.unpublish(publisher.opentokPublisher);
    };
    //https://tokbox.com/developer/sdks/js/reference/Session.html#unsubscribe
    OTSession.prototype.unsubscribe = function (subscriber) {
        this._session.unsubscribe(subscriber.opentokSubscriber);
    };
    OTSession.prototype.canPublish = function () {
        return this._session.capabilities.publish == 1;
    };
    OTSession.prototype._mapEvent = function (eventName, event) {
        var e;
        if (eventName.indexOf(exports.SESSION_EVENTS.signal) != -1) {
            e = new signal_event_model_1.OTSignalEvent(event);
        }
        else {
            switch (eventName) {
                case exports.SESSION_EVENTS.connectionCreated: {
                    e = new connection_event_model_1.OTConnectionEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.connectionDestroyed: {
                    e = new connection_event_model_1.OTConnectionEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.sessionConnected: {
                    e = new session_connect_event_model_1.OTSessionConnectEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.sessionDisconnected: {
                    e = new session_disconnect_event_model_1.OTSessionDisconnectEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.sessionReconnecting: {
                    e = new event_model_1.OTEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.sessionReconnected: {
                    e = new event_model_1.OTEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.streamCreated: {
                    e = new stream_event_model_1.OTStreamEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.streamDestroyed: {
                    e = new stream_event_model_1.OTStreamEvent(event);
                    break;
                }
                case exports.SESSION_EVENTS.streamPropertyChanged: {
                    e = new stream_property_changed_event_model_1.OTStreamPropertyChangedEvent(event);
                    break;
                }
                default: {
                    e = new event_base_model_1.OTEventBase(event);
                    break;
                }
            }
        }
        return e;
    };
    return OTSession;
}());
exports.OTSession = OTSession;
