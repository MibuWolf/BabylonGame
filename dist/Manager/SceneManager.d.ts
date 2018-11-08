import { Engine, Scene } from "babylonjs";
export declare class SceneManager {
    private static instance;
    private m_engine;
    private m_scene;
    private m_camera;
    private constructor();
    static GetInstance(): SceneManager;
    Initialize(): void;
    GetScene(): Scene;
    GetEngine(): Engine;
    Update(): void;
}
