/**
* 物质库
* @author confiner
*/
var models;
(function (models) {
    class SubstanceLib extends models.Model {
        constructor() {
            super();
            this._directories = null; // 所有物质下的分组
            this._profile = null; // 个人专用分组
            this._substances = null; // 所有物质
        }
        serialize() {
            return null;
        }
        deserialize(data) {
        }
    }
    models.SubstanceLib = SubstanceLib;
})(models || (models = {}));
//# sourceMappingURL=SubstanceLib.js.map