"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var OpentokModule = OpentokModule_1 = (function () {
    function OpentokModule() {
    }
    OpentokModule.forRoot = function (opentokConfig) {
        return {
            ngModule: OpentokModule_1,
            providers: [{ provide: opentok_config_1.OpentokConfig, useValue: opentokConfig },
                opentok_service_1.OpentokService]
        };
    };
    return OpentokModule;
}());
OpentokModule = OpentokModule_1 = __decorate([
    core_1.NgModule()
], OpentokModule);
exports.OpentokModule = OpentokModule;
var OpentokModule_1;
//# sourceMappingURL=opentok.module.js.map