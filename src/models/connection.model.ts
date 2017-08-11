export class OTConnection {
  private _connection;

  constructor(connection: any) {
    this._connection = connection;
  }

  getConnectionId(): string {
    return this._connection.connectionId;
  }

  getCreationTime(): number {
    return this._connection.creationTime;
  }

  getData(): string {
    return this._connection.data;
  }
}
