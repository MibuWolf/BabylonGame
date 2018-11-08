import { SceneManager } from './Manager/SceneManager';
import { EntityManager } from './Manager/EntityManager';
import { Engine } from './ash';

let ecs: Engine = new Engine();

SceneManager.GetInstance().Initialize();
EntityManager.GetInstance().Initialize( ecs );

EntityManager.GetInstance().CreateMeshEntity( "http://172.16.1.110/dist/Asset/", "head.obj", "male_sd_0001_head_basecolor.bmp", "male_sd_0001_head_ddna.bmp",
    "male_sd_0001_head_metrough.bmp", "environment.dds" )
// EntityManager.GetInstance().CreateMeshEntity( "http://172.16.1.110/dist/Asset/", "DamagedHelmet.obj", "Default_albedo.jpg", "Default_normal.jpg",
//     "Default_metalRoughness.jpg", "environment.dds" )

SceneManager.GetInstance().GetEngine().runRenderLoop( () =>
{
    ecs.update( SceneManager.GetInstance().GetEngine().getDeltaTime() );
    SceneManager.GetInstance().Update();
}


);
