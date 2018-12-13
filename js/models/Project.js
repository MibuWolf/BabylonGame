/**
* 项目结构
* @author confiner
*/
var models;
(function (models) {
    class Project extends models.Model {
        constructor(parent) {
            super();
            this.name = null; // 项目名名称
            this._persons = null; // 个人成员列表【不属于分组】
            this._groups = null; // 分组成员	
            this._parent = null; // 父项目
            this._parent = parent;
            this._groups = new Set();
            this._persons = new Map();
            this.initRepositories();
        }
        // 获取当前仓库
        set curRepository(repository) {
            if (this._repsitories.has(repository)) {
                this._repository = repository;
            }
        }
        // 获取当前仓库
        get curRepository() {
            return this._repository;
        }
        initRepositories() {
            this._repsitories = new Map();
            this.addRepository(common.repository_type.dynaimc);
            this.addRepository(common.repository_type.substance);
            this.addRepository(common.repository_type.model);
            this.addRepository(common.repository_type.action);
        }
        addRepository(type) {
            let repository = new models.Repository(type);
            repository.owner = this;
            this._repsitories.set(type, repository);
        }
        // 获取所有仓库
        get repositories() {
            return this._repsitories;
        }
        // 获取仓库
        getRepository(type) {
            return this._repsitories.get(type);
        }
        // 父项目
        get parent() {
            return this._parent;
        }
        // 项目添加分组
        addGroup(name) {
            this._groups.add(name);
        }
        // 项目移除分组
        removeGroup(name) {
            this._groups.delete(name);
        }
        // 添加个人
        addPerson(name, array) {
            this._persons.set(name, array);
        }
        // 移除个人
        removePerson(name) {
            this._persons.delete(name);
        }
        dispose() {
            super.dispose();
            this._groups.clear();
            this._persons.clear();
        }
    }
    models.Project = Project;
})(models || (models = {}));
//# sourceMappingURL=Project.js.map