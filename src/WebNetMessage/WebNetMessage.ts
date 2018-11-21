export enum WebMessageID
{
    UNDEFINE = 0,
    SHOW_MESHES,                // 主页面下发 选中显示模型信息

    UPDATE_TEXTURE,           // 主页面下发 更新贴图信息
}

// SELECT_MESH/SELECT_SUBMESH
export abstract class MessageInfo
{
    abstract fromObj( obj: any ): void;
}

export class MeshInfo extends MessageInfo
{
    public uUid: string;
    public meshName: string;
    public posX: number;
    public posY: number;
    public posZ: number;

    public constructor( id: string = "", name: string = "", x: number = 0.0, y: number = 0.0, z: number = 0.0 )
    {
        super();
        this.uUid = id;
        this.meshName = name;
        this.posX = x;
        this.posY = y;
        this.posZ = z;
    }


    public fromObj( obj: any ): void
    {
        this.uUid = obj.uUid;
        this.meshName = obj.meshName;
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.posZ = obj.posZ;
    }


}

export class MeshList extends MessageInfo
{
    public messageID: WebMessageID;
    public meshList: Array<MeshInfo>;

    public constructor()
    {
        super();
        this.messageID = WebMessageID.SHOW_MESHES;
        this.meshList = new Array<MeshInfo>();
    }

    public AddMeshInfo( mesh: MeshInfo ): void
    {
        if ( mesh == null )
            return;

        this.meshList.push( mesh );
    }

    public fromObj( obj: any ): void
    {
        this.meshList.length = 0;

        let array: Array<any> = obj.meshList;

        if ( array == null )
            return;

        for ( let i: number = 0; i <= array.length; i++ )
        {
            let data: any = array[ i ];
            let meshInfo: MeshInfo = new MeshInfo();
            meshInfo.fromObj( data );
            this.meshList.push( meshInfo );
        }

    }
}


export class MaterialID extends MessageInfo
{
    public uUid: string;            // 所属模型ID
    public materialName: string;    // 材质名称

    public constructor( id: string = "", name: string = "" )
    {
        super();
        this.uUid = id;
        this.materialName = name;
    }


    public fromObj( obj: any ): void
    {
        this.uUid = obj.uUid;
        this.materialName = obj.materialName;
    }
}
export class TextureInfo extends MessageInfo
{
    public baseTexPath: string;     // baseTexPath
    public normalTexPath: string;   // normalTexPath
    public metroughTexPath: string; // metroughTexPath
    public environmentTexPath: string;  // environmentTexPath


    public constructor( baseTex: string = "", normalTex: string = "", metroughTex: string = "", environmentTex: string = "" )
    {
        super();
        this.baseTexPath = baseTex;
        this.normalTexPath = normalTex;
        this.metroughTexPath = metroughTex;
        this.environmentTexPath = environmentTex;
    }


    public fromObj( obj: any ): void
    {
        this.baseTexPath = obj.baseTexPath;
        this.normalTexPath = obj.normalTexPath;
        this.metroughTexPath = obj.metroughTexPath;
        this.environmentTexPath = obj.environmentTexPath;
    }

}


export class IDTextureInfo extends MessageInfo
{
    public uUid: string;            // ID图资源ID
    public idTexPath: string;       // ID图资源路径

    public constructor( id: string = "", path: string = "" )
    {
        super();
        this.uUid = id;
        this.idTexPath = path;
    }


    public fromObj( obj: any ): void
    {
        this.uUid = obj.uUid;
        this.idTexPath = obj.idTexPath;
    }
}


export class UpdateTexture extends MessageInfo
{
    public messageID: WebMessageID;
    public materialID: MaterialID;
    public texInfo: TextureInfo;

    public constructor( meshID: string = "", matID: string = "", baseTex: string = "", normalTex: string = "", metroughTex: string = "", environmentTex: string = "" )
    {
        super();
        this.messageID = WebMessageID.UPDATE_TEXTURE;
        this.materialID = new MaterialID( meshID, matID );
        this.texInfo = new TextureInfo( baseTex, normalTex, metroughTex, environmentTex );
    }


    public fromObj( obj: any ): void
    {
        this.materialID.fromObj( obj.materialID );
        this.texInfo.fromObj( obj.texInfo );
    }
}