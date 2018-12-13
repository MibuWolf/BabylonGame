/**
* 目录
* @author confiner
*/
var models;
(function (models) {
    class Directory extends models.Model {
        constructor(name, tmp = false) {
            super();
            this._tmp = false; // 是否为临时文件夹
            this._name = name;
            this._tmp = tmp;
            this._groups = new Array();
        }
        // 设置当前分组
        set curGroup(group) {
            let target = this._groups.find((value) => {
                return value.name == group;
            });
            if (target)
                this._group = group;
        }
        // 获取当前分组
        get curGroup() {
            return this._group;
        }
        get tmp() {
            return this._tmp;
        }
        changeName(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        get groups() {
            return this._groups;
        }
        // 获取资源分组
        getResGroup(groupName) {
            return this._groups.find((group) => {
                return group.name == groupName;
            });
        }
        // 创建默认资源分组
        createDefaultResGroup() {
            let defaults = this._groups.filter((group) => {
                if (group.name.indexOf(Directory._Default_Dir) > -1) {
                    return group;
                }
            });
            let name = Directory._Default_Dir + (defaults ? defaults.length : "");
            let group = this.createResGroup(name, true);
            return group;
        }
        // 添加资源分组
        addResGroup(group) {
            if (!this.getResGroup(group.name)) {
                this._groups.push(group);
            }
        }
        // 创建分组
        createResGroup(groupName, tmp = false) {
            let group = null;
            if (!this.getResGroup(groupName)) {
                group = new models.ResGroup(groupName, tmp);
            }
            return group;
        }
        // 改变分组名称
        changeResGroupName(oldName, name) {
            let duplicate = this._groups.find((value) => {
                return value.name == name;
            });
            if (duplicate)
                return false;
            let target = this._groups.find((value) => {
                return value.name == oldName;
            });
            if (target) {
                target.changeName(name);
                return true;
            }
            return false;
        }
        // 删除分组
        deleteResGroup(group) {
            for (let i = 0, len = this._groups.length; i < len; ++i) {
                if (this._groups[i].name == group.name) {
                    this._groups.splice(i, 1);
                    return;
                }
            }
        }
    }
    Directory._Default_Dir = "Untitled Group";
    Directory.PERSONALITY = "personality"; // 个人专用
    models.Directory = Directory;
})(models || (models = {}));
//# sourceMappingURL=Directory.js.map