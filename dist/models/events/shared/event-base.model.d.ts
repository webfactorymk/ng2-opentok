import { DefaultBehaviour } from "./default_behavior.interface";
export declare class OTEventBase implements DefaultBehaviour {
    protected event: any;
    constructor(event: any);
    isDefaultPrevented(): boolean;
    preventDefault(): void;
}
