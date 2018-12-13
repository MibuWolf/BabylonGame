/**
* 网络管理器
* @author confiner
*/
var managers;
(function (managers) {
    class NetManager {
        constructor() {
            this._url = null;
            this._socket = null;
            this._open = false;
            this._data = null; // 当前数据
            this._offset = 0; // 偏移
        }
        // 连接服务器
        connect(url) {
            this._socket = new Laya.Socket();
            this._socket.connectByUrl(url);
            this._socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
            this._socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
            this._socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
            this._socket.on(Laya.Event.ERROR, this, this.onConnectError);
        }
        onSocketClose() {
            this._open = false;
        }
        onSocketOpen() {
            this._open = true;
            events.event(core.EventType.Connect_OK);
        }
        send(msg_id, msg) {
            if (!this._open) {
                alert("断开连接");
                return;
            }
            let c2s_msg = this.createC2SMessage(msg_id, msg);
            let bytes = client_to_svr.client_msg.encode(c2s_msg).finish();
            let totalBytes = new Uint8Array(bytes.length + NetManager._SIZE_LEN);
            totalBytes = totalBytes.fill(bytes.length & 0xff, 0, 1);
            totalBytes = totalBytes.fill(bytes.length >> 8 & 0xff, 1, 2);
            totalBytes.set(bytes, NetManager._SIZE_LEN);
            this._socket.send(totalBytes);
        }
        createC2SMessage(msg_id, msg) {
            let c2s_msg = client_to_svr.client_msg.create();
            switch (msg_id) {
                case client_to_svr.client_msg_id.user_register_id:
                    c2s_msg._register_info = msg;
                    break;
                case client_to_svr.client_msg_id.user_login_id:
                    c2s_msg._user_login_info = msg;
                    break;
                case client_to_svr.client_msg_id.confirm_phone_verification_code_id:
                    c2s_msg._confirm_phone_verification_code = msg;
                    break;
                case client_to_svr.client_msg_id.confirm_mail_verification_code_id:
                    c2s_msg._confirm_mail_verification_code = msg;
                    break;
                case client_to_svr.client_msg_id.confirm_verification_code_id:
                    c2s_msg._confirm_verification_code = msg;
                    break;
                case client_to_svr.client_msg_id.restore_passwnd_id:
                    c2s_msg._restore_passwnd = msg;
                    break;
                case client_to_svr.client_msg_id.get_verification_code_id:
                    c2s_msg._get_verification_code = msg;
                    break;
                case client_to_svr.client_msg_id.create_project_id:
                    c2s_msg._create_project = msg;
                    break;
                case client_to_svr.client_msg_id.get_project_repository_id:
                    c2s_msg._get_project_repository = msg;
                    break;
                case client_to_svr.client_msg_id.add_repository_group_id:
                    c2s_msg._add_repository_group = msg;
                    break;
            }
            c2s_msg._id = msg_id;
            return c2s_msg;
        }
        onMessageReveived(data) {
            let bytes = new Uint8Array(data);
            let totalBytes = new Uint8Array(bytes.length + this._offset);
            if (this._data)
                totalBytes.set(this._data);
            totalBytes.set(bytes, this._offset);
            let len = 0;
            let message = null;
            let tmp = null;
            while (totalBytes.length > NetManager._SIZE_LEN) {
                len = totalBytes[0] | totalBytes[1] << 8;
                if (len + NetManager._SIZE_LEN > totalBytes.length)
                    break; // 超过长度
                message = new Uint8Array(len);
                message.set(totalBytes.subarray(NetManager._SIZE_LEN, NetManager._SIZE_LEN + len));
                if (len + NetManager._SIZE_LEN < totalBytes.length) {
                    tmp = new Uint8Array(totalBytes.length - (len + NetManager._SIZE_LEN));
                    tmp.set(totalBytes.subarray(len + NetManager._SIZE_LEN, totalBytes.length - (len + NetManager._SIZE_LEN)));
                    totalBytes = tmp;
                }
                else {
                    totalBytes = null;
                    break;
                }
            }
            this._data = totalBytes;
            this._offset = totalBytes == null ? 0 : totalBytes.length;
            let s2c_msg = svr_to_client.svr_msg.decode(message);
            this.handleMessage(s2c_msg);
        }
        handleMessage(msg) {
            let data = null;
            switch (msg._id) {
                case svr_to_client.svr_msg_id.status_code_ntf_id:
                    let ret = msg._status_code_ntf._code;
                    switch (ret) {
                        case svr_to_client.status_code.repeated_name:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Register_Name_Error);
                            break;
                        case svr_to_client.status_code.repeated_phone:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Register_Phone_Error);
                            break;
                        case svr_to_client.status_code.repeated_email:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Register_Email_Error);
                            break;
                        case svr_to_client.status_code.user_register_success:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Register_Success);
                            break;
                        case svr_to_client.status_code.pwd_is_wrong:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Login_Fail, lang.Lang.Get(lang.LangID.Error_Login_Pwd));
                            break;
                        case svr_to_client.status_code.invaild_user:
                            managers.EventManager.getInstance().event(core.EventType.S2C_Login_Fail, lang.Lang.Get(lang.LangID.Error_Login_Name));
                            break;
                        case svr_to_client.status_code.confirm_verification_code_success:
                            managers.EventManager.getInstance().event(core.EventType.S2C_FindPwd_Verify_Success);
                            break;
                        case svr_to_client.status_code.verification_code_is_wrong:
                            managers.EventManager.getInstance().event(core.EventType.S2C_FindPwd_Verify_Fail);
                            break;
                        case svr_to_client.status_code.wrong_email:
                            managers.EventManager.getInstance().event(core.EventType.S2C_FindPwd_Email_Fail);
                            managers.WindowManager.getInstance().showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Email));
                            break;
                        case svr_to_client.status_code.wrong_phone:
                            managers.EventManager.getInstance().event(core.EventType.S2C_FindPwd_Phone_Fail);
                            managers.WindowManager.getInstance().showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Phone));
                            break;
                        case svr_to_client.status_code.unverified_verification_code:
                            managers.WindowManager.getInstance().showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Verify_Code));
                            break;
                        case svr_to_client.status_code.verification_code_timeout:
                            managers.WindowManager.getInstance().showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Verify_Code));
                            break;
                        case svr_to_client.status_code.send_verification_code_phone_success:
                            //EventManager.getInstance().event(core.EventType.S2C_FindPwd_Verify_Success);
                            break;
                        case svr_to_client.status_code.send_verification_code_mail_success:
                            break;
                        case svr_to_client.status_code.send_verification_code_phone_success:
                            break;
                        case svr_to_client.status_code.restore_pwd_success:
                            managers.EventManager.getInstance().event(core.EventType.S2C_FindPwd_Reset_Success);
                            break;
                        case svr_to_client.status_code.user_login_success:
                            //alert("登陆成功，功能待开发。。。。");
                            //proxy.ProtobuffProxy.req_create_project("四人帮", "public");
                            //proxy.HttpProxy.req_sd_url();
                            proxy.HttpProxy.req_prefabs();
                            managers.ProjectManager.inst.requestAllProjectInfos();
                            win.popup(view.PanelEnum.MainPanel);
                            break;
                        case svr_to_client.status_code.create_project_success:
                            //alert("创建项目成功");
                            break;
                    }
                    break;
                case svr_to_client.svr_msg_id.all_project_list_id:
                    proxy.ProtobuffProxy.on_all_project_list(msg._all_project_list);
                    managers.EventManager.getInstance().event(core.EventType.S2C_All_Project_List); // 用于更新界面
                    break;
                case svr_to_client.svr_msg_id.all_group_list_id:
                    proxy.ProtobuffProxy.on_all_group_list(msg._all_group_list);
                    break;
                case svr_to_client.svr_msg_id.user_token_id:
                    proxy.ProtobuffProxy.on_user_token(msg._user_token);
                    break;
                case svr_to_client.svr_msg_id.user_permission_id:
                    proxy.ProtobuffProxy.on_user_permission(msg._user_permission);
                    break;
                case svr_to_client.svr_msg_id.project_member_id:
                    proxy.ProtobuffProxy.on_project_member(msg._project_member);
                    break;
                case svr_to_client.svr_msg_id.group_member_id:
                    proxy.ProtobuffProxy.on_group_member(msg._group_member);
                    break;
                case svr_to_client.svr_msg_id.group_permission_id:
                    proxy.ProtobuffProxy.on_group_permission(msg._group_permission);
                    break;
                case svr_to_client.svr_msg_id.project_repository_id:
                    proxy.ProtobuffProxy.on_project_repository(msg._project_repository);
                    break;
                case svr_to_client.svr_msg_id.create_project_result_id:
                    proxy.ProtobuffProxy.on_create_project_result(msg._create_project_result);
                    break;
                case svr_to_client.svr_msg_id.create_repository_group_id:
                    proxy.ProtobuffProxy.on_create_repository_group(msg._create_repository_group);
                    break;
            }
        }
        onConnectError(e) {
            console.log("error");
        }
        static getInstance() {
            if (!NetManager._instance)
                NetManager._instance = new NetManager();
            return NetManager._instance;
        }
    }
    NetManager._SIZE_LEN = 2;
    managers.NetManager = NetManager;
})(managers || (managers = {}));
//# sourceMappingURL=NetManager.js.map