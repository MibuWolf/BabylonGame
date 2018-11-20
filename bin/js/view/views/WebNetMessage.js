var view;
(function (view) {
    var views;
    (function (views) {
        let WebMessageID;
        (function (WebMessageID) {
            WebMessageID[WebMessageID["UNDEFINE"] = 0] = "UNDEFINE";
            WebMessageID[WebMessageID["SHOW_MESHES"] = 1] = "SHOW_MESHES";
        })(WebMessageID = views.WebMessageID || (views.WebMessageID = {}));
        // SELECT_MESH/SELECT_SUBMESH
        class MessageInfo {
        }
        views.MessageInfo = MessageInfo;
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
        views.MeshInfo = MeshInfo;
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
        views.MeshList = MeshList;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=WebNetMessage.js.map