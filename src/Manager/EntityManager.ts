import { Engine, Entity } from '../ash';
import { MeshRenderSystem } from '../ECS/System/MeshRenderSystem';
import { MeshComponent } from '../ECS/Component/MeshComponent';
import { ComponentPool } from '../ash/tools/ComponentPool';
import { TextureRenderSystem } from '../ECS/System/TextureRenderSystem';
import { UUIDComponent } from '../ECS/Component/UUIDComponent';

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


    public Initialize(): void
    {
        this.ecsEngine = new Engine();

        this.ecsEngine.addSystem( new MeshRenderSystem, 0 );
        this.ecsEngine.addSystem( new TextureRenderSystem, 0 );
    }

    public GetECSEngine(): Engine
    {
        return this.ecsEngine;
    }

    /**
     * CreateMeshEntity
        根据服务器返回数据创建Mesh模型
    */
    public CreateMeshEntity( meshID: string, meshPath: string, posX: number = 0.0, posY: number = 0.0, posZ: number = 0.0 )
    {
        console.log( "EntityManager ================================= CreateMeshEntity" );
        let entity: Entity = new Entity( meshID );

        let uUid = ComponentPool.get( UUIDComponent );
        uUid.Initialize( meshID );
        entity.add( uUid );

        let mesh = ComponentPool.get( MeshComponent );
        mesh.Initialize( meshPath, posX, posY, posZ );
        entity.add( mesh );

        this.ecsEngine.addEntity( entity );
    }


    public ClearAllMesh()
    {
        this.ecsEngine.removeAllEntities();
    }


    public GetEntityByUUID( uUid: string ): Entity
    {
        return this.ecsEngine.getEntityByName( uUid );
    }
};
