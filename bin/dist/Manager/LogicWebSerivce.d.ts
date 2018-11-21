export declare class LogicWebSerivce {
    private static instance;
    private constructor();
    static GetInstance(): LogicWebSerivce;
    Initialize(): void;
    protected onShowMeshList: (message: any) => void;
    protected onUpdateTexture: (message: any) => void;
}
