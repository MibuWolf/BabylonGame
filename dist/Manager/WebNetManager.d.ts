import { WebMessageID } from '../WebNetMessage/WebNetMessage';
export declare class WebNetManager {
    private static instance;
    private allSignals;
    private constructor();
    static GetInstance(): WebNetManager;
    Initialize(): void;
    RegisterMessage(messageID: WebMessageID, listener: any): void;
    UnRegisterMessage(messageID: WebMessageID, listener: any): void;
    SendWebNetMessage(message: any): void;
    OnWebNetMessage(message: any): void;
}
