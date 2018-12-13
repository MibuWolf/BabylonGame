/**
* name
*/
var utils;
(function (utils) {
    class TypeUtil {
        constructor() {
        }
        static toRepositoryEnum(type) {
            let repository_enum = null;
            switch (type) {
                case common.repository_type.dynaimc.toString():
                    repository_enum = common.repository_type.dynaimc;
                    break;
                case common.repository_type.substance.toString():
                    repository_enum = common.repository_type.substance;
                    break;
                case common.repository_type.model.toString():
                    repository_enum = common.repository_type.model;
                    break;
                case common.repository_type.action.toString():
                    repository_enum = common.repository_type.action;
                    break;
            }
            return repository_enum;
        }
    }
    utils.TypeUtil = TypeUtil;
})(utils || (utils = {}));
//# sourceMappingURL=TypeUtil.js.map