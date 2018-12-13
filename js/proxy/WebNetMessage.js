var proxy;
(function (proxy) {
    let WebMessageID;
    (function (WebMessageID) {
        WebMessageID[WebMessageID["UNDEFINE"] = 0] = "UNDEFINE";
        WebMessageID[WebMessageID["SHOW_MESHES"] = 1] = "SHOW_MESHES";
        WebMessageID[WebMessageID["UPDATE_TEXTURE"] = 2] = "UPDATE_TEXTURE";
    })(WebMessageID = proxy.WebMessageID || (proxy.WebMessageID = {}));
    // SELECT_MESH/SELECT_SUBMESH
    class MessageInfo {
    }
    proxy.MessageInfo = MessageInfo;
    class MeshInfo extends MessageInfo {
        constructor(id = "", name = "", x = 0.0, y = 0.0, z = 0.0) {
            super();
            this.uUid = id;
            this.meshName = name;
            this.posX = x;
            this.posY = y;
            this.posZ = z;
        }
        fromObj(obj) {
            this.uUid = obj.uUid;
            this.meshName = obj.meshName;
            this.posX = obj.posX;
            this.posY = obj.posY;
            this.posZ = obj.posZ;
        }
    }
    proxy.MeshInfo = MeshInfo;
    class MeshList extends MessageInfo {
        constructor() {
            super();
            this.messageID = WebMessageID.SHOW_MESHES;
            this.meshList = new Array();
        }
        AddMeshInfo(mesh) {
            if (mesh == null)
                return;
            this.meshList.push(mesh);
        }
        fromObj(obj) {
            this.meshList.length = 0;
            let array = obj.meshList;
            if (array == null)
                return;
            for (let i = 0; i <= array.length; i++) {
                let data = array[i];
                let meshInfo = new MeshInfo();
                meshInfo.fromObj(data);
                this.meshList.push(meshInfo);
            }
        }
    }
    proxy.MeshList = MeshList;
    class MaterialID extends MessageInfo {
        constructor(id = "", name = "") {
            super();
            this.uUid = id;
            this.materialName = name;
        }
        fromObj(obj) {
            this.uUid = obj.uUid;
            this.materialName = obj.materialName;
        }
    }
    proxy.MaterialID = MaterialID;
    class TextureInfo extends MessageInfo {
        constructor() {
            super();
            // this.baseTexPath = baseTex;
            // this.normalTexPath = normalTex;
            // this.metroughTexPath = metroughTex;
            // this.environmentTexPath = environmentTex;
            this.texPaths = new Map();
        }
        fromObj(obj) {
            // this.baseTexPath = obj.baseTexPath;
            // this.normalTexPath = obj.normalTexPath;
            // this.metroughTexPath = obj.metroughTexPath;
            // this.environmentTexPath = obj.environmentTexPath;
            obj.texPaths.forEach((value, key) => {
                this.texPaths.set(key, value);
            });
        }
    }
    proxy.TextureInfo = TextureInfo;
    class IDTextureInfo extends MessageInfo {
        constructor(id = "", path = "") {
            super();
            this.uUid = id;
            this.idTexPath = path;
        }
        fromObj(obj) {
            this.uUid = obj.uUid;
            this.idTexPath = obj.idTexPath;
        }
    }
    proxy.IDTextureInfo = IDTextureInfo;
    class UpdateTexture extends MessageInfo {
        constructor(meshID = "", matID = "") {
            super();
            this.messageID = WebMessageID.UPDATE_TEXTURE;
            this.materialID = new MaterialID(meshID, matID);
            this.texInfo = new TextureInfo();
        }
        fromObj(obj) {
            this.materialID.fromObj(obj.materialID);
            this.texInfo.fromObj(obj.texInfo);
        }
    }
    proxy.UpdateTexture = UpdateTexture;
})(proxy || (proxy = {}));
//# sourceMappingURL=WebNetMessage.js.map