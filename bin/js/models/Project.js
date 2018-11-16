/**
* 项目结构
* @author confiner
*/
var models;
(function (models) {
    class Project extends models.Model {
        constructor() {
            super();
            this.name = null; // 项目名名称
            this._persons = null; // 个人成员列表【不属于分组】
            this._groups = null; // 分组成员	
            this._groups = new Set();
            this._persons = new Map();
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