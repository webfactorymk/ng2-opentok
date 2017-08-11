// Opentok Capabilities
// https://tokbox.com/developer/sdks/js/reference/Capabilities.html

export class OTCapabilities {
  private _capabilities;

  constructor(capabilities: any) {
    this._capabilities = capabilities;
  }

  canforceDisconnect(): boolean {
    return this._capabilities.forceDisconnect == 1;
  }

  canForceUnpublish(): boolean {
    return this._capabilities.forceDisconnect == 1;
  }

  canPublish(): boolean {
    return this._capabilities.publish == 1;
  }

  canSubscribe(): boolean {
    return this._capabilities.subscribe == 1;
  }
}
