// Opentok signaling https://tokbox.com/developer/guides/signaling/js/#send_signal_to_client

export class OTSignal {
  private data: string;
  private to: any; //Opentok Connection
  private type: string;
  private event: string

  constructor(type: string, data?: string, to?: any) {
    this.type = type;
    this.event = this.getSignalEvent();
    if (to) this.to = to;
    if (data) this.data = data;
  }

  getSignalEvent(): string {
    return this.type ? ('signal:' + this.type) : 'signal';
  }

  getSignal(): Object {
    let signalAsHash: Object = {
      data: this.data,
      type: this.type,
      to: this.to
    };

    Object.keys(signalAsHash).forEach((signalProperty) => (signalAsHash[signalProperty] == null) && delete signalAsHash[signalProperty]);
    return signalAsHash;
  }

}
