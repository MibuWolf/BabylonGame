import { TextureData } from '../VO/TextureData';
import { WebNetManager } from './WebNetManager';
import { WebMessageID, MeshList, MeshInfo, UpdateTexture } from '../WebNetMessage/WebNetMessage';
import { EntityManager } from './EntityManager';
import { Entity } from '../ash';
import { TextureComponent } from '../ECS/Component/TextureComponent';
import { ComponentPool } from '../ash/tools/ComponentPool';
export class LogicWebSerivce
{
    private static instance: LogicWebSerivce = new LogicWebSerivce();
    private constructor()
    {

    }

    public static GetInstance(): LogicWebSerivce
    {
        return LogicWebSerivce.instance;
    }

    public Initialize(): void
    {
        WebNetManager.GetInstance().RegisterMessage( WebMessageID.SHOW_MESHES, this.onShowMeshList );
        WebNetManager.GetInstance().RegisterMessage( WebMessageID.UPDATE_TEXTURE, this.onUpdateTexture )
    }


    protected onShowMeshList = ( message: any ): void =>
    {
        if ( message == null )
            return;

        let meshList: MeshList = new MeshList();
        meshList.fromObj( message );

        EntityManager.GetInstance().ClearAllMesh();

        let meshCount = meshList.meshList.length;

        for ( let index = 0; index < meshCount; index++ )
        {
            let meshInfo: MeshInfo = meshList.meshList[ index ];

            if ( meshInfo != null )
                EntityManager.GetInstance().CreateMeshEntity( meshInfo.uUid, meshInfo.meshName, meshInfo.posX, meshInfo.posY, meshInfo.posZ );
        }
    }


    protected onUpdateTexture = ( message: any ): void =>
    {
        if ( message == null )
            return;

        let updateTexInfo: UpdateTexture = new UpdateTexture();

        updateTexInfo.fromObj( message );

        let entity: Entity = EntityManager.GetInstance().GetEntityByUUID( updateTexInfo.materialID.uUid );

        if ( entity != null )
        {
            let texCom: TextureComponent = entity.get( TextureComponent );

            if ( texCom == null )
                texCom = ComponentPool.get( TextureComponent );

            texCom.SetTextureInfo( updateTexInfo.materialID.materialName, updateTexInfo.texInfo.baseTexPath,
                updateTexInfo.texInfo.normalTexPath, updateTexInfo.texInfo.metroughTexPath, updateTexInfo.texInfo.environmentTexPath )
        }
    }

}