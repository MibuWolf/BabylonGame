import { SceneManager } from './Manager/SceneManager';
import { EntityManager } from './Manager/EntityManager';
import { Engine } from './ash';

SceneManager.GetInstance().Initialize();
EntityManager.GetInstance().Initialize();

EntityManager.GetInstance().CreateMeshEntity( "http://172.16.1.110/dist/Asset/", "head.obj", "http://172.16.1.110/dist/Asset/male_sd_0001_head_basecolor.bmp", "http://172.16.1.110/dist/Asset/male_sd_0001_head_ddna.bmp",
    "http://172.16.1.110/dist/Asset/male_sd_0001_head_metrough.bmp", "http://172.16.1.110/dist/Asset/environment.dds" )
// EntityManager.GetInstance().CreateMeshEntity( "http://172.16.1.110/dist/Asset/", "DamagedHelmet.obj", "Default_albedo.jpg", "Default_normal.jpg",
//     "Default_metalRoughness.jpg", "environment.dds" )

SceneManager.GetInstance().GetEngine().runRenderLoop( () =>
{
    EntityManager.GetInstance().GetECSEngine().update( SceneManager.GetInstance().GetEngine().getDeltaTime() );
    SceneManager.GetInstance().Update();
}

);
