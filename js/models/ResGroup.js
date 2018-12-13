/**
* 资源分组
*/
var models;
(function (models) {
    class ResGroup extends models.Model {
        constructor(name, tmp = false) {
            super();
            // private _project:string = null;
            // private _sub_project:string;
            this._owner = null;
            this._name = null;
            this._num = 0;
            this._tmp = false;
            this._name = name;
            this._tmp = tmp;
        }
        changeName(name) {
            this._name = name;
        }
        get tmp() {
            return this._tmp;
        }
        get owner() {
            return this._owner;
        }
        get num() {
            return this._num;
        }
        set num(value) {
            this._num = value;
        }
        get name() {
            return this._name;
        }
        serialize() {
            let obj = {};
            // obj["project"] = this._project;
            // obj["sub_project"] = this._sub_project;
            // obj["parent"] = this._owner;
            obj["target"] = this._name;
            //obj["num"] = this._num;
            return obj;
        }
        deserialize(data) {
            // this._project = data["project"];
            // this._sub_project = data["sub_project"];
            // this._owner = data["parent"];
            this._name = data["target"];
            this._num = data["num"];
        }
    }
    ResGroup.MY_FAVORITE = "my_favorite"; // 个人收藏
    models.ResGroup = ResGroup;
})(models || (models = {}));
//# sourceMappingURL=ResGroup.js.map