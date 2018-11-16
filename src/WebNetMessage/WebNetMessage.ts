export enum WebMessageID
{
    UNDEFINE = 0,
    SELECT_MESH,                // 主页面下发 选中显示模型信息
    SELECT_SUBMESH,             // 主页面下发 选中显示子模型
    SELECT_IDTEXTURE,           // 主页面下发 设置ID图
    SET_MATERIAL,               //  主页面下发  设置子模型材质
    REQUEST_UPDATEIDTEX,        // 向主页面请求 更新ID贴图
    REQUEST_GENERATESBSAR,      // 向主页面请求 生成SBSAR

}

// SELECT_MESH/SELECT_SUBMESH
export abstract class MessageInfo
{
    public messageID: WebMessageID;
    abstract fromObj( obj: any ): void;
}

export class MeshInfo extends MessageInfo
{
    public meshName: string;

    public subMeshList: Map<WebMessageID, SubMeshInfo>

    public constructor( message: WebMessageID = WebMessageID.UNDEFINE, name: string = "" )
    {
        super();
        this.messageID = message;
        this.meshName = name;
    }


    public fromObj( obj: any ): void
    {
        this.messageID = obj.messageID;
        this.meshName = obj.meshName;
    }


}


export class SubMeshInfo extends MessageInfo
{
    public subMeshName: string;

    public idTexName: string;
    public materil: MaterialInfo

    public constructor( message: WebMessageID = WebMessageID.UNDEFINE, name: string = "" )
    {
        super();
        this.messageID = message;
        this.subMeshName = name;
    }


    public fromObj( obj: any ): void
    {
        this.messageID = obj.messageID;
        this.subMeshName = obj.subMeshName;
    }


}


export class IDTextureInfo extends MessageInfo
{
    public meshName: string;
    public subMeshName: string;
    public idTexture: string;

    public constructor( mesh: string = "", submesh: string = "", idTex: string = "" )
    {
        super();
        this.messageID = WebMessageID.SELECT_IDTEXTURE;
        this.meshName = mesh;
        this.subMeshName = submesh;
        this.idTexture = idTex;
    }


    public fromObj( obj: any ): void
    {
        this.messageID = obj.messageID;
        this.meshName = obj.meshName;
        this.subMeshName = obj.subMeshName;
        this.idTexture = obj.idTexture;
    }
}


export class MaterialInfo extends MessageInfo
{
    public meshName: string;
    public subMeshName: string;
    public baseTexture: string;
    public normalTexture: string;
    public metroughTexture: string;
    public environmentTexture: string;
    public idTexture: string;

    public constructor( mesh: string = "", submesh: string = "", baseTex: string = "", normalTex: string = "",
        metroughTex: string = "", environmentTex: string = "", idTex: string = "" )
    {
        super();
        this.messageID = WebMessageID.SELECT_IDTEXTURE;
        this.meshName = mesh;
        this.subMeshName = submesh;
        this.idTexture = idTex;
    }


    public fromObj( obj: any ): void
    {
        this.messageID = obj.messageID;
        this.meshName = obj.meshName;
        this.subMeshName = obj.subMeshName;
        this.idTexture = obj.idTexture;
    }
}