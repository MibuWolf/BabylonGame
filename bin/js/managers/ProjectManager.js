/**
* 项目管理器
*/
var managers;
(function (managers) {
    class ProjectManager {
        constructor() {
            this._projects = null; // 所有的项目
            this._groups = null; // 所有分组
        }
        // 初始化
        initialize() {
            this._projects = new Map();
            this._groups = new Map();
        }
        destory() {
            if (this._projects) {
                for (let key of this._projects.keys()) {
                    let project = this._projects.get(key);
                    project.dispose();
                    this._projects.delete(key);
                }
                this._projects.clear();
                this._projects = null;
            }
            if (this._groups) {
                for (let key of this._groups.keys()) {
                    let group = this._groups.get(key);
                    group.dispose();
                    this._groups.delete(key);
                }
                this._groups.clear();
                this._groups = null;
            }
        }
        // 请求创建项目
        requestCreateProject(project) {
            proxy.ProtobuffProxy.req_create_project(project.name);
        }
        // 给项目添加分组
        requestAddGroupIntoProject(project, group) {
            proxy.ProtobuffProxy.req_add_group_into_project(project, group);
        }
        // 移除分组从项目中
        requestRemoveGroupFromProject(project, group) {
            proxy.ProtobuffProxy.req_remove_group_from_project(project, group);
        }
        // 给项目添加个人用户
        requestAddUserFromProject(project, user) {
            proxy.ProtobuffProxy.req_add_user_into_project(project, user);
        }
        // 从项目中移除个人用户
        requestRemoveUserFromProject(project, user) {
            proxy.ProtobuffProxy.req_remove_user_from_project(project, user);
        }
        // 请求创建分组
        requestCreateGroup(group) {
            proxy.ProtobuffProxy.req_create_group(group);
        }
        // 给分组添加用户
        requestAddUserIntoGroup(group, user) {
            proxy.ProtobuffProxy.req_add_user_into_group(group, user);
        }
        // 从分组中删除用户
        requestRemoveUserFromGroup(group, user) {
            proxy.ProtobuffProxy.req_remove_user_from_group(group, user);
        }
        // 设置项目中个人用户的权限
        requestSetUserProjectPermissions(user, project, permissions) {
            proxy.ProtobuffProxy.req_set_user_project_permission(user, project, permissions);
        }
        // 设置项目中分组的权限
        requestSetGroupProjectPermissions(user, project, permissions) {
            proxy.ProtobuffProxy.req_set_group_project_permission(user, project, permissions);
        }
        // 创建项目
        createProject(name) {
            if (this.getProject(name))
                return null;
            let project = new models.Project();
            project.name = name;
            return project;
        }
        // 创建分组
        createGroup(name) {
            if (this.getGroup(name))
                return;
            let group = new models.Group();
            return group;
        }
        // 获取分组
        getGroup(name) {
            return this._groups.get(name);
        }
        // 添加分组
        addGroup(group) {
            if (this.getGroup(group.name))
                return;
            this._groups.set(group.name, group);
        }
        // 获取项目
        getProject(name) {
            return this._projects.get(name);
        }
        // 添加项目
        addProject(project) {
            if (this.getProject(name))
                return;
            this._projects.set(project.name, project);
        }
        // 移除项目
        removeProject(name) {
            if (this.getProject(name))
                return;
            this._projects.delete(name);
        }
        static get inst() {
            if (!ProjectManager._instance) {
                ProjectManager._instance = new ProjectManager();
            }
            return ProjectManager._instance;
        }
    }
    ProjectManager._instance = null;
    managers.ProjectManager = ProjectManager;
})(managers || (managers = {}));
//# sourceMappingURL=ProjectManager.js.map