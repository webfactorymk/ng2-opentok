import {OTEventBase} from "./shared/event-base.model";

export const SessionDisconnectReasons = {
  clientDisconnected: "clientDisconnected",
  forceDisconnected: "forceDisconnected",
  networkDisconnected: "networkDisconnected"
}

export class OTSessionDisconnectEvent extends OTEventBase {

  readonly reason: string;

  constructor(event: any) {
    super(event);
    this.reason = this.event.reason;
  }

  hasClientDisconnected(){
    return this.reason == SessionDisconnectReasons.clientDisconnected;
  }

  isForceDisconnected(){
    return this.reason == SessionDisconnectReasons.forceDisconnected;
  }

  isNetworkDisconnected(){
    return this.reason == SessionDisconnectReasons.networkDisconnected;
  }
}
