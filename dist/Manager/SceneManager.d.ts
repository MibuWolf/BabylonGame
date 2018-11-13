import { Engine, Scene, Camera } from "babylonjs";
export declare class SceneManager {
    private static instance;
    private m_engine;
    private m_scene;
    private m_camera;
    private m_canvas;
    private constructor();
    static GetInstance(): SceneManager;
    Initialize(): void;
    GetScene(): Scene;
    GetEngine(): Engine;
    GetCamera(): Camera;
    GetHTMLCanvasElement(): HTMLCanvasElement;
    Update(): void;
}
