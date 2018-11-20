import { SceneManager } from './Manager/SceneManager';
import { EntityManager } from './Manager/EntityManager';
import { WebNetManager } from './Manager/WebNetManager';
import { LogicWebSerivce } from './Manager/LogicWebSerivce';

SceneManager.GetInstance().Initialize();
EntityManager.GetInstance().Initialize();
WebNetManager.GetInstance().Initialize();
LogicWebSerivce.GetInstance().Initialize();

EntityManager.GetInstance().CreateMeshEntity( "test", "http://172.16.1.110/dist/Asset/head.obj", 0.0, 0.0, 0.0 );
// EntityManager.GetInstance().CreateMeshEntity( "http://172.16.1.110/dist/Asset/", "DamagedHelmet.obj", "Default_albedo.jpg", "Default_normal.jpg",
//     "Default_metalRoughness.jpg", "environment.dds" )

SceneManager.GetInstance().GetEngine().runRenderLoop( () =>
{
    EntityManager.GetInstance().GetECSEngine().update( SceneManager.GetInstance().GetEngine().getDeltaTime() );
    SceneManager.GetInstance().Update();
}

);
