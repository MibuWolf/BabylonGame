import * as BABYLON from 'babylonjs';
import { Engine, Scene, ArcRotateCamera, DirectionalLight, Vector3, Light, Mesh, SceneLoader } from "babylonjs";

export class SceneManager
{
    private static instance: SceneManager = new SceneManager();

    private m_engine: Engine
    private m_scene: Scene;
    private m_camera: ArcRotateCamera;

    private constructor()
    {

    }


    public static GetInstance(): SceneManager
    {
        return SceneManager.instance;
    }

    public Initialize(): void
    {
        var canvas: any = document.getElementById( "renderCanvas" );
        this.m_engine = new Engine( canvas, true );

        this.m_scene = new Scene( this.m_engine );

        let camTarget = BABYLON.Vector3.Zero().clone();
        camTarget.y = 5;
        this.m_camera = new ArcRotateCamera( "Camera", 0, Math.PI / 10, 10, camTarget, this.m_scene );
        this.m_camera.attachControl( canvas, true );
        this.m_camera.setTarget( new Vector3( 0, 40, 0 ) );
        this.m_camera.wheelDeltaPercentage /= 5;

        var light1: BABYLON.DirectionalLight = new DirectionalLight( "light1", new Vector3( 1, -1, 0 ), this.m_scene );
        var light2: BABYLON.DirectionalLight = new DirectionalLight( "light2", new Vector3( 1, 0, 0 ), this.m_scene );
        var light2: DirectionalLight = new DirectionalLight( "light3", new Vector3( 1, 0, 1 ), this.m_scene );
        light1.diffuse = new BABYLON.Color3( 10, 10, 10 );
    }

    public GetScene(): Scene
    {
        return this.m_scene;
    }


    public GetEngine(): Engine
    {
        return this.m_engine;
    }

    public Update(): void
    {
        if ( this.m_scene != null )
            this.m_scene.render();
    }

};
