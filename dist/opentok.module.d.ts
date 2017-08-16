import { ModuleWithProviders } from "@angular/core";
import { OpentokConfig } from "./opentok.config";
export * from "./opentok.service";
export * from "./opentok.config";
export * from "./models/subscriber.model";
export * from "./models/stream.model";
export * from "./models/signal.model";
export * from "./models/session.model";
export * from "./models/publisher.model";
export * from "./models/connection.model";
export * from "./models/capabilities.model";
export * from "./models/events/shared/default_behavior.interface";
export * from "./models/events/shared/event-base.model";
export * from "./models/events/audio-level-updated-event.model";
export * from "./models/events/connection-event.model";
export * from "./models/events/event.model";
export * from "./models/events/session-connect-event.model";
export * from "./models/events/session-disconnect-event.model";
export * from "./models/events/stream-event.model";
export * from "./models/events/stream-property-changed-event.model";
export * from "./models/events/video-dimensions-changed-event.model";
export * from "./models/events/video-element-created-event.model";
export * from "./models/events/video-enabled-chnaged-event.model";
export * from "./models/events/signal-event.model";
export declare class OpentokModule {
    static forRoot(opentokConfig?: OpentokConfig): ModuleWithProviders;
}
