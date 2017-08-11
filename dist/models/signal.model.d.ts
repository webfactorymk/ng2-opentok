export declare class OTSignal {
    private data;
    private to;
    private type;
    private event;
    constructor(type: string, data?: string, to?: any);
    getSignalEvent(): string;
    getSignal(): Object;
}
