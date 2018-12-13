/**
* 物质管理器
* @author confiner
*/
var managers;
(function (managers) {
    class SubstanceManager {
        constructor() {
            this._substanceExtras = null; // 物质信息库
            this._prefabs = null; // 预设列表
            this._pageSocket = null;
        }
        initialize() {
            this._prefabs = new Array();
            this._substanceExtras = new Map();
        }
        // 获取排序后的物质列表
        getSortedSubstanceExtras() {
            return Array.from(this._substanceExtras.values());
        }
        clearSubstanceExtras() {
            this._substanceExtras.forEach((value) => {
                value.dispose();
            });
            this._substanceExtras.clear();
        }
        createSubstanceExtra() {
            let substanceExtr = new models.SubstanceExtra();
            return substanceExtr;
        }
        addSubstanceExtra(extra) {
            if (!this._substanceExtras.has(extra.id)) {
                this._substanceExtras.set(extra.id, extra);
            }
        }
        createPrefab(id) {
            let prefab = new models.Prefab(id);
            this._prefabs.push(prefab);
            return prefab;
        }
        getPrefabByName(name) {
            return this._prefabs.find((value) => {
                return value.file.substring(0, value.file.indexOf(".")) == name;
            });
        }
        getPrefab(id) {
            return this._prefabs.find((value) => {
                return value.id == id;
            });
        }
        get prefabs() {
            return this._prefabs;
        }
        destory() {
            this.clearSubstanceExtras();
        }
        connect(domain, target) {
            this._pageSocket = new core.PageSocket(domain, "*");
            this._pageSocket.on(core.PageSocket.Message, this, this.onRecivePageMessage);
        }
        sendModels(data) {
            this._pageSocket.send(data);
        }
        disconnect() {
            this._pageSocket.offAll();
            this._pageSocket = null;
        }
        onRecivePageMessage(data) {
        }
        static get inst() {
            if (!SubstanceManager._instance) {
                SubstanceManager._instance = new SubstanceManager();
            }
            return SubstanceManager._instance;
        }
    }
    SubstanceManager._instance = null;
    managers.SubstanceManager = SubstanceManager;
})(managers || (managers = {}));
//# sourceMappingURL=SubstanceManager.js.map