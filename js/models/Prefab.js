/**
* 预设数据
* @author confiner
*/
var models;
(function (models) {
    class Prefab {
        constructor(id) {
            this._id = id;
        }
        get id() {
            return this._id;
        }
        get file() {
            return this._file;
        }
        get submeshs() {
            return this._submeshs;
        }
        serialize() {
        }
        deserialize(data) {
            let submeshs = data["cfg"];
            let _this = this;
            this._submeshs = new Array();
            submeshs.forEach((value, index, array) => {
                _this._submeshs.push(value["submesh_name"]);
            });
            this._file = data["obj_name"];
        }
    }
    models.Prefab = Prefab;
})(models || (models = {}));
//# sourceMappingURL=Prefab.js.map