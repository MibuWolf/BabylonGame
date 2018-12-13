/**
* model数据
* @author confiner
*/
var models;
(function (models) {
    class Model extends core.EventEmitter {
        constructor() {
            super();
            this.invalid = false;
        }
        copy(other) {
        }
        updateInvalidStatus(data) {
            this.invalid = true;
        }
        clone() {
            return null;
        }
        equals(other) {
            return false;
        }
        dispose() {
        }
        update() {
        }
    }
    Model.UPDATE = "update";
    models.Model = Model;
})(models || (models = {}));
//# sourceMappingURL=Model.js.map