import { Signal2 } from '../ash/signals/Signal2';
import { TextureData } from '../VO/TextureData';
import { MeshData } from '../VO/MeshData';
export declare class LogicWebSerivce {
    meshSignal: Signal2<string, MeshData>;
    materialSignal: Signal2<string, TextureData>;
    private static instance;
    private constructor();
    static GetInstance(): LogicWebSerivce;
    Initialize(): void;
    protected onShowMeshList: (message: any) => void;
}
