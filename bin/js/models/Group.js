/**
* 分组数据结构
* @author confiner
*/
var models;
(function (models) {
    class Group extends models.Model {
        constructor() {
            super();
            this.name = null; // 分组名称
            this._members = null; // 成员
            this._permissions = null; // 权限列表
        }
        get permissions() {
            return this._permissions;
        }
        get members() {
            return this._members;
        }
        // 添加成员
        addMember(name) {
            if (!this._members)
                this._members = new Array();
            this._members.push(name);
            this.invalid = true;
        }
        // 移除成员
        removeMember(name) {
            if (!this._members)
                return;
            let index = this._members.indexOf(name);
            if (index >= 0) {
                this._members.splice(index, 1);
                this.invalid = true;
            }
        }
        // 添加权限
        addPermission(permission) {
            if (!this._permissions)
                this._permissions = new Array();
            this._permissions.push(permission);
            this.invalid = true;
        }
        // 删除权限
        removePermission(permission) {
            if (!this._permissions)
                return;
            this._permissions = this._permissions.filter((value, index, array) => {
                if (value == permission) {
                    this.invalid = true;
                    return false;
                }
                return true;
            });
        }
        dispose() {
            super.dispose();
            this.offAll();
            if (this._members)
                this._members.length = 0;
            this._members = null;
            if (this._permissions)
                this._permissions.length = 0;
            this._permissions = null;
        }
        update() {
            if (this.invalid)
                this.event(models.Model.UPDATE, this);
            this.invalid = false;
        }
    }
    models.Group = Group;
})(models || (models = {}));
//# sourceMappingURL=Group.js.map