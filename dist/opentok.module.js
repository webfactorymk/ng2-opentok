"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var opentok_service_1 = require("./opentok.service");
var opentok_config_1 = require("./opentok.config");
__export(require("./opentok.service"));
__export(require("./opentok.config"));
// models
__export(require("./models/subscriber.model"));
__export(require("./models/stream.model"));
__export(require("./models/signal.model"));
__export(require("./models/session.model"));
__export(require("./models/publisher.model"));
__export(require("./models/connection.model"));
__export(require("./models/capabilities.model"));
__export(require("./models/events/shared/event-base.model"));
__export(require("./models/events/audio-level-updated-event.model"));
__export(require("./models/events/connection-event.model"));
__export(require("./models/events/event.model"));
__export(require("./models/events/session-connect-event.model"));
__export(require("./models/events/session-disconnect-event.model"));
__export(require("./models/events/stream-event.model"));
__export(require("./models/events/stream-property-changed-event.model"));
__export(require("./models/events/video-dimensions-changed-event.model"));
__export(require("./models/events/video-element-created-event.model"));
__export(require("./models/events/video-enabled-chnaged-event.model"));
__export(require("./models/events/signal-event.model"));
var OpentokModule = (function () {
    function OpentokModule() {
    }
    OpentokModule.forRoot = function (opentokConfig) {
        return {
            ngModule: OpentokModule,
            providers: [{ provide: opentok_config_1.OpentokConfig, useValue: opentokConfig },
                opentok_service_1.OpentokService]
        };
    };
    return OpentokModule;
}());
OpentokModule.decorators = [
    { type: core_1.NgModule },
];
/** @nocollapse */
OpentokModule.ctorParameters = function () { return []; };
exports.OpentokModule = OpentokModule;
//# sourceMappingURL=opentok.module.js.map