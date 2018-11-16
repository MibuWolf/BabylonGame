/**
* protobuff代理
* @author confiner
*/
var proxy;
(function (proxy) {
    class ProtobuffProxy {
        constructor() {
        }
        static initialize() {
        }
        //===================================================请求消息======================================================================//
        static req_create_project(project) {
            let c2sMsg = client_to_svr.create_project.create();
            c2sMsg.project = project;
            net.send(client_to_svr.client_msg_id.create_project_id, c2sMsg);
        }
        static req_add_group_into_project(project, group) {
            let c2sMsg = client_to_svr.add_group_into_project.create();
            c2sMsg.project = project;
            c2sMsg.group = group;
            net.send(client_to_svr.client_msg_id.add_group_into_project_id, c2sMsg);
        }
        static req_remove_group_from_project(project, group) {
            let c2sMsg = client_to_svr.remove_group_from_project.create();
            c2sMsg.project = project;
            c2sMsg.group = group;
            net.send(client_to_svr.client_msg_id.remove_group_from_project_id, c2sMsg);
        }
        static req_add_user_into_project(project, user) {
            let c2sMsg = client_to_svr.add_user_into_project.create();
            c2sMsg.project = project;
            c2sMsg.name = user;
            net.send(client_to_svr.client_msg_id.add_user_into_project_id, c2sMsg);
        }
        static req_remove_user_from_project(project, user) {
            let c2sMsg = client_to_svr.remove_user_from_project.create();
            c2sMsg.project = project;
            c2sMsg.name = user;
            net.send(client_to_svr.client_msg_id.remove_user_from_project_id, c2sMsg);
        }
        static req_create_group(group) {
            let c2sMsg = client_to_svr.create_group.create();
            c2sMsg.group = group;
            net.send(client_to_svr.client_msg_id.create_group_id, c2sMsg);
        }
        static req_add_user_into_group(group, user) {
            let c2sMsg = client_to_svr.add_user_into_group.create();
            c2sMsg.group = group;
            c2sMsg.name = user;
            net.send(client_to_svr.client_msg_id.add_user_into_group_id, c2sMsg);
        }
        static req_remove_user_from_group(group, user) {
            let c2sMsg = client_to_svr.remove_user_from_group.create();
            c2sMsg.group = group;
            c2sMsg.name = user;
            net.send(client_to_svr.client_msg_id.remove_user_from_group_id, c2sMsg);
        }
        static req_set_user_project_permission(user, project, permissions) {
            let c2sMsg = client_to_svr.set_user_project_permission.create();
            c2sMsg.project = project;
            c2sMsg.name = user;
            c2sMsg.permission = permissions;
            net.send(client_to_svr.client_msg_id.remove_user_from_group_id, c2sMsg);
        }
        static req_set_group_project_permission(group, project, permissions) {
            let c2sMsg = client_to_svr.set_group_project_permission.create();
            c2sMsg.project = project;
            c2sMsg.group = group;
            c2sMsg.permission = permissions;
            net.send(client_to_svr.client_msg_id.set_group_project_permission_id, c2sMsg);
        }
        static req_get_project_member(project) {
            let c2sMsg = client_to_svr.get_project_member.create();
            c2sMsg.project = project;
            net.send(client_to_svr.client_msg_id.get_project_member_id, c2sMsg);
        }
        static req_get_group_member(group) {
            let c2sMsg = client_to_svr.get_group_member.create();
            c2sMsg.group = group;
            net.send(client_to_svr.client_msg_id.get_project_member_id, c2sMsg);
        }
        static req_get_user_project_permission(user, project) {
            let c2sMsg = client_to_svr.get_user_project_permission.create();
            c2sMsg.project = project;
            c2sMsg.name = user;
            net.send(client_to_svr.client_msg_id.get_user_project_permission_id, c2sMsg);
        }
        static req_get_group_project_permission(group, project) {
            let c2sMsg = client_to_svr.get_group_project_permission.create();
            c2sMsg.project = project;
            c2sMsg.group = group;
            net.send(client_to_svr.client_msg_id.get_group_project_permission_id, c2sMsg);
        }
        static req_get_all_project() {
            let c2sMsg = client_to_svr.get_all_project.create();
            net.send(client_to_svr.client_msg_id.get_all_project_id, c2sMsg);
        }
        static req_get_all_group() {
            let c2sMsg = client_to_svr.get_all_group.create();
            net.send(client_to_svr.client_msg_id.get_all_group_id, c2sMsg);
        }
        static req_manger_alloc_peas(user, peas) {
            let c2sMsg = client_to_svr.manger_alloc_peas.create();
            c2sMsg.add_peas_num = peas;
            c2sMsg.target_name = user;
            net.send(client_to_svr.client_msg_id.manger_alloc_peas_id, c2sMsg);
        }
        //==================================================响应消息======================================================================//		
        static on_group_permission(data) {
            let group = managers.ProjectManager.inst.getGroup(data.group_name);
            data.group_permission_list.forEach((value, index, array) => {
                group.addPermission(value);
            });
        }
        static on_group_member(data) {
            let group = managers.ProjectManager.inst.getGroup(data.group_name);
            data.users.forEach((value, index, array) => {
                group.addMember(value);
            });
        }
        static on_user_token(data) {
            managers.LoginManager.inst.account.token = data.token;
        }
        static on_all_project_list(data) {
            data.project.forEach((value, index, array) => {
                let project = managers.ProjectManager.inst.createProject(value);
                managers.ProjectManager.inst.addProject(project);
            });
        }
        static on_all_group_list(data) {
            data.group.forEach((value, index, array) => {
                let group = managers.ProjectManager.inst.createGroup(value);
                managers.ProjectManager.inst.addGroup(group);
            });
        }
        static on_user_permission(data) {
            managers.LoginManager.inst.account.permissions = data.user_permission_list;
        }
        static on_project_member(data) {
            let project = managers.ProjectManager.inst.getProject(data.project_name);
            data.groups.forEach((value, index, arr) => {
                let group = managers.ProjectManager.inst.createGroup(value);
                managers.ProjectManager.inst.addGroup(group);
                project.addGroup(value);
            });
            data.users.forEach((value, index, array) => {
                project.addPerson(value.name, value.permission_list);
            });
        }
    }
    proxy.ProtobuffProxy = ProtobuffProxy;
})(proxy || (proxy = {}));
//# sourceMappingURL=ProtobuffProxy.js.map