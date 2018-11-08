import { Engine, Entity } from '../ash';
import { MeshRenderSystem } from '../ECS/System/MeshRenderSystem';
import { MeshComponent } from '../ECS/Component/MeshComponent';
import { ComponentPool } from '../ash/tools/ComponentPool';
import { PostionComponent } from '../ECS/Component/PostionComponent';
export class EntityManager
{
    private static instance: EntityManager = new EntityManager();
    private ecsEngine: Engine;
    private constructor()
    {

    }


    public static GetInstance(): EntityManager
    {
        return EntityManager.instance;
    }


    public Initialize( engine: Engine ): void
    {
        this.ecsEngine = engine;

        this.ecsEngine.addSystem( new MeshRenderSystem, 0 );
    }

    /**
     * CreateMeshEntity
        根据服务器返回数据创建Mesh模型
    */
    public CreateMeshEntity( resPath: string, meshName: string, baseTex: string, normalTex: string, metroughTex: string,
        environmentTex: string, posX: number = 0.0, posY: number = 0.0, posZ: number = 0.0 )
    {
        var entity: Entity = new Entity();

        var mesh = ComponentPool.get( MeshComponent );
        mesh.Initialize( resPath, meshName, baseTex, normalTex, metroughTex, environmentTex, null );
        entity.add( mesh );

        var pos = ComponentPool.get( PostionComponent );
        pos.Initialize( posX, posY, posZ );
        entity.add( pos );

        this.ecsEngine.addEntity( entity );
    }
};
