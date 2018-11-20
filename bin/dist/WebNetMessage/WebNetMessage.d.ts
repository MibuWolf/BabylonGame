export declare enum WebMessageID {
    UNDEFINE = 0,
    SHOW_MESHES = 1
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
