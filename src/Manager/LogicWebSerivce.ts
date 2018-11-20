import { Signal2 } from '../ash/signals/Signal2';
import { TextureData } from '../VO/TextureData';
import { MeshData } from '../VO/MeshData';
import { WebNetManager } from './WebNetManager';
import { WebMessageID, MeshList, MeshInfo } from '../WebNetMessage/WebNetMessage';
import { EntityManager } from './EntityManager';
export class LogicWebSerivce
{
    public meshSignal: Signal2<string, MeshData>;
    public materialSignal: Signal2<string, TextureData>;

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
        this.meshSignal = new Signal2<string, MeshData>();
        this.materialSignal = new Signal2<string, TextureData>();

        WebNetManager.GetInstance().RegisterMessage( WebMessageID.SHOW_MESHES, this.onShowMeshList )
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

}