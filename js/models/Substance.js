/**
* 基础物质数据
*/
var models;
(function (models) {
    class Substance extends models.Model {
        constructor(id, name) {
            super();
            this._id = id;
            this._name = name;
            this._args = new models.SubstanceArgs();
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get args() {
            return this._args;
        }
    }
    models.Substance = Substance;
})(models || (models = {}));
//# sourceMappingURL=Substance.js.map