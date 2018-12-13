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
        // 设置当前域
        set curDomain(domain) {
            if (this._projects.has(domain))
                this._domain = domain;
        }
        // 获取当前域
        get curDomain() {
            return this._domain;
        }
        // 设置当前项目
        set curProject(project) {
            let projects = this._projects.get(this._domain);
            if (projects) {
                let target = projects.find((value) => {
                    return value.name == project;
                });
                if (target) {
                    this._project = project;
                }
            }
        }
        // 获取当前项目
        get curProject() {
            return this._project;
        }
        // 获取项目
        getProject(domain, project_name) {
            let projects = this._projects.get(domain);
            if (projects) {
                return projects.find((value) => {
                    return value.name == project_name;
                });
            }
            return null;
        }
        // 初始化
        initialize() {
            this._projects = new Map();
            this._groups = new Map();
        }
        getDomains() {
            let names = new Array();
            names = Array.from(this._projects.keys());
            return names;
        }
        getProjectNames(parent) {
            let arr = new Array();
            let projects = this._projects.get(parent);
            if (projects) {
                projects.forEach((value, index, array) => {
                    arr.push(value.name);
                });
            }
            return arr;
        }
        // 获取所有项目的信息
        requestAllProjectInfos() {
            this._projects.forEach((projects, key) => {
                projects.forEach((project, index) => {
                    project.repositories.forEach((repository, repository_type) => {
                        proxy.ProtobuffProxy.req_get_project_repository(key, project.name, repository_type);
                    });
                });
            });
        }
        destory() {
            if (this._projects) {
                for (let key of this._projects.keys()) {
                    let subProjects = this._projects.get(key);
                    if (subProjects) {
                        subProjects.forEach((value, index) => {
                            value.dispose();
                        });
                    }
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
        // 添加项目
        createProject(name, parent) {
            if (this.getProject(name, parent))
                return null;
            let projects = this._projects.get(name);
            if (!parent) {
                // 创建主项目
                if (!projects) {
                    projects = new Array();
                    this._projects.set(name, projects);
                }
            }
            else {
                // 创建子项目
                projects = this._projects.get(parent);
                if (!projects) {
                    projects = new Array();
                    this._projects.set(parent, projects);
                }
                let project = new models.Project(parent);
                project.owner = parent;
                project.name = name;
                projects.push(project);
            }
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
        // 移除项目
        removeProject(name, parent) {
            if (!this.getProject(name, parent))
                return;
            let projects = this._projects.get(parent);
            if (projects) {
                for (let i, len = projects.length; i < len; ++i) {
                    if (projects[i].name == name) {
                        projects.splice(i, 1);
                        break;
                    }
                }
                if (projects.length == 0)
                    this._projects.delete(name);
            }
        }
        // 获取项目树数据
        getProjectXMLData(domain) {
            var treeData = "<data>";
            let projects = this._projects.get(domain);
            if (!projects || projects.length == 0)
                return null;
            treeData += "<dir label='" + lang.Lang.Get(lang.LangID.Lang_AllAssets) + "' isOpen='true' level='0'>";
            const _LIBS = [lang.Lang.Get(lang.LangID.Lang_Dynaimc), lang.Lang.Get(lang.LangID.Lang_SubstanceLib),
                lang.Lang.Get(lang.LangID.Lang_ModelLib), lang.Lang.Get(lang.LangID.Lang_ActionLib)];
            for (let i = 0, len = projects.length; i < len; ++i) {
                treeData += "<dir label='" + projects[i].name + "' isOpen='false' level='1'>";
                for (let pro of projects[i].repositories.keys()) {
                    treeData += "<file label='" + _LIBS[pro] + "' isOpen='false' level='2' project='" + projects[i].name + "' repository='" + pro + "'/>";
                }
                treeData += "</dir>";
            }
            treeData += "</dir>";
            treeData += "</data>";
            return treeData;
        }
        // 获取上传位置
        getUploadPathXMLData() {
            var treeData = "<data>";
            const _LIBS = [lang.Lang.Get(lang.LangID.Lang_Dynaimc), lang.Lang.Get(lang.LangID.Lang_SubstanceLib),
                lang.Lang.Get(lang.LangID.Lang_ModelLib), lang.Lang.Get(lang.LangID.Lang_ActionLib)];
            for (let domain of this._projects.keys()) {
                treeData += "<dir label='" + domain + "' isOpen='true'>";
                let projects = this._projects.get(domain);
                if (!projects || projects.length == 0)
                    continue;
                for (let i = 0, len = projects.length; i < len; ++i) {
                    treeData += "<dir label='" + projects[i].name + "' isOpen='false'>";
                    for (let pro of projects[i].repositories.keys()) {
                        treeData += "<dir label='" + _LIBS[pro] + "'>";
                        let directories = projects[i].repositories.get(pro).directories;
                        for (let key of directories.keys()) {
                            treeData += "<dir label='" + key + "'>";
                            let groups = directories.get(key).groups;
                            for (let j = 0; j < groups.length; ++j) {
                                treeData += "<file label='" + groups[j].name + "' domain='" + domain + "' project='" + projects[i].name
                                    + "' repository='" + pro + "' directory='" + key + "' group='" + groups[j].name + "'/>";
                            }
                            treeData += "</dir>";
                        }
                        treeData += "</dir>";
                    }
                    treeData += "</dir>";
                }
                treeData += "</dir>";
            }
            treeData += "</data>";
            return treeData;
        }
        static get inst() {
            if (!ProjectManager._instance) {
                ProjectManager._instance = new ProjectManager();
            }
            return ProjectManager._instance;
        }
    }
    ProjectManager.PUBLIC_NAME = "public";
    ProjectManager._instance = null;
    managers.ProjectManager = ProjectManager;
})(managers || (managers = {}));
//# sourceMappingURL=ProjectManager.js.map