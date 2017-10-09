import {Observable} from "rxjs";
import {OTSession} from "./session.model";
import {ObservablesUtil} from "../shared/observables-util.service";
import {OTEvent} from "./events/event.model";
import {OTStream} from "./stream.model";
import {IOTEventListener} from "../shared/event-listener.interface";
import {OTEventBase} from "./events/shared/event-base.model";
import {OTVideoEnabledChangedEvent} from "./events/video-enabled-chnaged-event.model";
import {OTVideoElementCreatedEvent} from "./events/video-element-created-event.model";
import {OTAudioLevelUpdatedEvent} from "./events/audio-level-updated-event.model";
import {OTStreamEvent} from "./events/stream-event.model";
import {OTVideoDimensionsChangedEvent} from "./events/video-dimensions-changed-event.model";

declare var OT: any;
declare var scriptLoaded: any;

// Opentok Publisher
// https://tokbox.com/developer/guides/publish-stream/js/#create_publisher
// https://tokbox.com/developer/sdks/js/reference/Publisher.html

export const PUBLISHER_EVENTS = {
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
}

export class OTPublisher implements IOTEventListener {
  opentokPublisher: any;

  constructor(opentokPublisher: any) {
    this.opentokPublisher = opentokPublisher;
  }

  static init(publisherContainer?: string, properties?: {}): OTPublisher {
    //https://tokbox.com/developer/sdks/js/reference/OT.html#initPublisher
    return new OTPublisher(OT.initPublisher(publisherContainer, properties));
  }

  //https://tokbox.com/developer/sdks/js/reference/Publisher.html#off
  off(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokPublisher, 'off', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  //https://tokbox.com/developer/sdks/js/reference/Publisher.html#on
  on(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokPublisher, 'on', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  //https://tokbox.com/developer/sdks/js/reference/Publisher.html#once
  once(event?: string, context?: Object): Observable<OTEventBase> {
    return ObservablesUtil.getObservableEvent(this.opentokPublisher, 'once', event, context).map((e) => {
      return this._mapEvent(event, e);
    });
  }

  getAccessAllowed(): boolean {
    return this.opentokPublisher.accessAllowed;
  }

  getElement(): HTMLElement {
    return this.opentokPublisher.element;
  }

  getId(): string {
    return this.opentokPublisher.id;
  }

  getStream(): OTStream {
    return new OTStream(this.opentokPublisher.stream);
  }

  getSession(): OTSession {
    return new OTSession(this.opentokPublisher.session);
  }

  // https://tokbox.com/developer/sdks/js/reference/Publisher.html#destroy
  destroy(): void {
    this.opentokPublisher.destroy();
  }

  //Returns the base-64-encoded string of PNG data representing the Publisher video.
  getImgData(): string {
    return "data:image/png;base64," + this.opentokPublisher.getImgData();
  }

  getStyle(): Object {
    return this.opentokPublisher.getStyle();
  }

  publishAudio(value: boolean): void {
    this.opentokPublisher.publishAudio(value);
  }

  publishVideo(value: boolean): void {
    this.opentokPublisher.publishVideo(value);
  }

  videoHeight(): number {
    return this.opentokPublisher.videoHeight();
  }

  videoWidth(): number {
    return this.opentokPublisher.videoWidth();
  }

  setStyle(obj: {[style: string]: string}): void {
    this.opentokPublisher.setStyle(obj);
  }

  private _mapEvent(eventName: string, event: any): OTEventBase {

    let e: OTEventBase;

    switch (eventName) {
      case PUBLISHER_EVENTS.accessAllowed: {
        e = new OTEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.accessDenied: {
        e = new OTEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.accessDialogOpened: {
        e = new OTEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.accessDialogClosed: {
        e = new OTEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.streamCreated: {
        e = new OTStreamEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.streamDestroyed: {
        e = new OTStreamEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.audioLevelUpdated: {
        e = new OTAudioLevelUpdatedEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.destroyed: {
        e = new OTEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.mediaStopped: {
        e = new OTStreamEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.videoDimensionsChanged: {
        e = new OTVideoDimensionsChangedEvent(event);
        break;
      }
      case PUBLISHER_EVENTS.videoElementCreated: {
        e = new OTVideoElementCreatedEvent(event);
        break;
      }
    }
    return e;
  }
}
