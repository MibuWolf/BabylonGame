/**
* 物质结构
*/
var models;
(function (models) {
    let TextureType;
    (function (TextureType) {
        TextureType["Base"] = "";
        TextureType["Normal"] = "";
        TextureType["Metrough"] = "";
        TextureType["Environment"] = "";
    })(TextureType = models.TextureType || (models.TextureType = {}));
    class SubstanceExtra extends models.Model {
        constructor() {
            super();
            this._textures = new Map();
        }
        get describe() {
            return this._describe;
        }
        // 是否在个人收藏
        isMyFavorite() {
            return this._owner == models.Directory.PERSONALITY && this.group == models.ResGroup.MY_FAVORITE;
        }
        // 获取缩略图
        get thumb() {
            return this._thumb;
        }
        get id() {
            return this._substance.id;
        }
        get domain() {
            return this._project;
        }
        get objId() {
            return this._modelId;
        }
        get directory() {
            return this._owner;
        }
        get project() {
            return this._subProject;
        }
        get parent() {
            return this._owner;
        }
        get group() {
            return this._target;
        }
        get preview2d() {
            return GameConfig.Substance_Static_URL + "/" + this.id + "/" + this.version + "/" + this._preview2d;
        }
        get preview3d() {
            return GameConfig.Substance_Static_URL + "/" + this.id + "/" + this.version + "/" + this._preview3d;
        }
        get name() {
            return this._substance.name;
        }
        get argsFile() {
            return this._argsFile;
        }
        serialize() {
            return null;
        }
        get substance() {
            return this._substance;
        }
        get version() {
            return "v" + this._version;
        }
        get meshName() {
            return this._meshName;
        }
        get textures() {
            return this._textures;
        }
        get updateTexture() {
            let updateTexture = new proxy.UpdateTexture();
            let texInfo = new proxy.TextureInfo();
            this._textures.forEach((value, key) => {
                texInfo.texPaths.set(key, GameConfig.Substance_Static_URL + "/" + this.id + "/" + this.version + "/" + value);
            });
            updateTexture.texInfo = texInfo;
            let materialInfo = new proxy.MaterialID();
            materialInfo.uUid = this._modelId;
            materialInfo.materialName = this._meshName;
            updateTexture.materialID = materialInfo;
            return updateTexture;
        }
        get meshList() {
            let meshInfo = new proxy.MeshInfo();
            meshInfo.uUid = this._modelId;
            meshInfo.meshName = GameConfig.Substance_Static_Model_URL + "/" + managers.SubstanceManager.inst.getPrefab(this._modelId).file;
            let meshList = new proxy.MeshList();
            meshList.AddMeshInfo(meshInfo);
            return meshList;
        }
        deserialize(data) {
            this._version = data["v"];
            this._substance = new models.Substance(data["sbs_id"], data["sbs_name"]);
            this._time = data[this.version]["files"]["time"];
            this._preview3d = data[this.version]["files"]["preview3d"];
            this._argsFile = data[this.version]["files"]["sbsprs"];
            this._file = data[this.version]["files"]["sbs"];
            this._modelId = data["obj_id"];
            this._owner = data["parent"];
            this._project = data["project"];
            this._size = 100;
            this._subProject = data["sub_project"];
            this._target = data["target"];
            this._meshName = data["submesh"];
            let textures = data[this.version]["files"]["output_image"];
            if (textures) {
                for (let pro in textures) {
                    this._textures.set(pro, textures[pro]);
                }
            }
            this._preview2d = data[this.version]["files"]["preview2d"];
            this._thumb = data[this.version]["files"]["thumb"];
        }
    }
    models.SubstanceExtra = SubstanceExtra;
})(models || (models = {}));
//# sourceMappingURL=SubstanceExtra.js.map