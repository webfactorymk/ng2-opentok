import {Observable} from "rxjs";
import {ObservablesUtil} from "../shared/observables-util.service";
import {OTEvent} from "./events/event.model";
import {IOTEventListener} from "../shared/event-listener.interface";
import {OTEventBase} from "./events/shared/event-base.model";
import {OTAudioLevelUpdatedEvent} from "./events/audio-level-updated-event.model";
import {OTVideoDimensionsChangedEvent} from "./events/video-dimensions-changed-event.model";
import {OTVideoEnabledChangedEvent} from "./events/video-enabled-chnaged-event.model";
import {OTVideoElementCreatedEvent} from "./events/video-element-created-event.model";

// Opentok Subscriber
// https://tokbox.com/developer/sdks/js/reference/Subscriber.html

export const SUBSCRIBER_EVENTS = {
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
}

export class OTSubscriber implements IOTEventListener {

  opentokSubscriber: any;

  constructor(opentokSubscriber: any) {
    this.opentokSubscriber = opentokSubscriber;
  }

  //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#off
  off(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'off', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#on
  on(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'on', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  //https://tokbox.com/developer/sdks/js/reference/Subscriber.html#once
  once(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokSubscriber, 'once', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  getImageData() {
    return "data:image/png;base64," + this.opentokSubscriber.getImgData();
  }

  private _mapEvent(eventName: string, event: any): OTEventBase {

    let e: OTEventBase;

    switch (eventName) {
      case SUBSCRIBER_EVENTS.audioLevelUpdated: {
        e = new OTAudioLevelUpdatedEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.connected: {
        e = new OTEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.destroyed: {
        e = new OTEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.disconnected: {
        e = new OTEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoDimensionsChanged: {
        e = new OTVideoDimensionsChangedEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoDisabled: {
        e = new OTVideoEnabledChangedEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoDisableWarning: {
        e = new OTEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoDisableWarningLifted: {
        e = new OTEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoElementCreated: {
        e = new OTVideoElementCreatedEvent(event);
        break;
      }
      case SUBSCRIBER_EVENTS.videoEnabled: {
        e = new OTVideoEnabledChangedEvent(event);
        break;
      }
    }
    return e;
  }
}
