export declare enum WebMessageID {
    UNDEFINE = 0,
    SHOW_MESHES = 1,
    UPDATE_TEXTURE = 2
}
export declare abstract class MessageInfo {
    abstract fromObj(obj: any): void;
}
export declare class MeshInfo extends MessageInfo {
    uUid: string;
    meshName: string;
    posX: number;
    posY: number;
    posZ: number;
    constructor(id?: string, name?: string, x?: number, y?: number, z?: number);
    fromObj(obj: any): void;
}
export declare class MeshList extends MessageInfo {
    messageID: WebMessageID;
    meshList: Array<MeshInfo>;
    constructor();
    AddMeshInfo(mesh: MeshInfo): void;
    fromObj(obj: any): void;
}
export declare class MaterialID extends MessageInfo {
    uUid: string;
    materialName: string;
    constructor(id?: string, name?: string);
    fromObj(obj: any): void;
}
export declare class TextureInfo extends MessageInfo {
    baseTexPath: string;
    normalTexPath: string;
    metroughTexPath: string;
    environmentTexPath: string;
    constructor(baseTex?: string, normalTex?: string, metroughTex?: string, environmentTex?: string);
    fromObj(obj: any): void;
}
export declare class IDTextureInfo extends MessageInfo {
    uUid: string;
    idTexPath: string;
    constructor(id?: string, path?: string);
    fromObj(obj: any): void;
}
export declare class UpdateTexture extends MessageInfo {
    messageID: WebMessageID;
    materialID: MaterialID;
    texInfo: TextureInfo;
    constructor(meshID?: string, matID?: string, baseTex?: string, normalTex?: string, metroughTex?: string, environmentTex?: string);
    fromObj(obj: any): void;
}
