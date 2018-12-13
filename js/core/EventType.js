/**
* 事件类型
* @author confiner
*/
var core;
(function (core) {
    class EventType {
        constructor() {
        }
    }
    EventType.Connect_OK = "connect_ok"; // 连接成功
    // 服务器返回的事件类型
    EventType.S2C_Register_Name_Error = "s2c_register_name_error"; // 注册用户名已经存在
    EventType.S2C_Register_Phone_Error = "s2c_register_phone_error"; // 注册手机号已经存在
    EventType.S2C_Register_Email_Error = "s2c_register_email_error"; // 注册邮箱复用
    EventType.S2C_Register_Success = "s2c_register_success"; // 注册成功
    EventType.S2C_FindPwd_Verify_Success = "s2c_findpwd_verify_success"; // 找回密码的验证成功
    EventType.S2C_FindPwd_Phone_Fail = "s2c_findpwd_phone_fail"; // 找回密码的手机不存在用户
    EventType.S2C_FindPwd_Email_Fail = "s2c_findpwd_email_fail"; // 找回密码的邮箱不存在用户
    EventType.S2C_FindPwd_Reset_Success = "s2c_findpwd_reset_success"; // 找回密码的修改密码成功
    EventType.S2C_Login_Fail = "s2c_login_fail"; // 登陆失败
    EventType.S2C_FindPwd_Verify_Fail = "s2c_findpwd_verify_fail"; // 找回密码的验证失败
    EventType.S2C_All_Project_List = "s2c_all_project_list"; // 所有项目列表
    EventType.S2C_All_Group_List = "s2c_all_group_list"; //所有分组列表
    EventType.S2C_Substance_Repository = "s2c_substance_repository"; // 物质库返回
    EventType.S2C_Substance_Items = "s2c_substance_items"; // 物质库资源返回
    EventType.Language_Changed = "language_changed"; // 语言切换
    EventType.Editor_Res_Group = "editor_res_group"; // 编辑资源分组
    EventType.Fork_Res = "fork_res"; // fork资源
    core.EventType = EventType;
})(core || (core = {}));
//# sourceMappingURL=EventType.js.map