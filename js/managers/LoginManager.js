/**
* 登陆管理器
* @author confiner
*/
var managers;
(function (managers) {
    class LoginManager {
        constructor() {
            this._user = null; // 用户
        }
        initialize() {
            if (DEBUG)
                this.debug();
            events.on(core.EventType.S2C_Login_Fail, this, this.responseLoginFail);
        }
        debug() {
            this._user = new models.Account();
            this._user.setId("Test User");
        }
        destory() {
            if (this._user)
                this._user.dispose();
            this._user = null;
            events.off(core.EventType.S2C_Login_Fail, this, this.responseLoginFail);
        }
        // 响应登陆失败
        responseLoginFail() {
            this._user = null;
        }
        // 创建账户
        createAccount() {
            let account = new models.Account();
            return account;
        }
        // 获取账户
        get account() {
            return this._user;
        }
        // 创建注册
        createRegister() {
            let register = new models.Register();
            let account = this.createAccount();
            register.setAccount(account);
            return register;
        }
        // 账号密码登陆
        login(account) {
            this._user = account;
            let c2s_msg = client_to_svr.user_login_info.create();
            c2s_msg.name = account.getId();
            c2s_msg.passwnd = account.getPwd();
            net.send(client_to_svr.client_msg_id.user_login_id, c2s_msg);
        }
        // 注册信息
        register(register) {
            this._user = register.getAccount();
            let c2s_msg = client_to_svr.register_info.create();
            c2s_msg.email = register.getAccount().getEmail();
            c2s_msg.name = register.getAccount().getId();
            c2s_msg.passwnd = register.getAccount().getPwd();
            c2s_msg.phone_num = register.getAccount().getPhone();
            c2s_msg.verification_code = register.getVerifyCode();
            net.send(client_to_svr.client_msg_id.user_register_id, c2s_msg);
        }
        // 通过手机找回密码
        findPasswordByPhone(phone) {
            let s2c_msg = client_to_svr.confirm_phone_verification_code.create();
            s2c_msg.phone = phone;
            net.send(client_to_svr.client_msg_id.confirm_phone_verification_code_id, s2c_msg);
        }
        // 通过手机找回密码
        findPasswordByEmail(email) {
            let s2c_msg = client_to_svr.confirm_mail_verification_code.create();
            s2c_msg.mail = email;
            net.send(client_to_svr.client_msg_id.confirm_mail_verification_code_id, s2c_msg);
        }
        // 找回密码
        findPasswordVerifyCode(code) {
            let s2c_msg = client_to_svr.confirm_verification_code.create();
            s2c_msg.verification_code = code;
            net.send(client_to_svr.client_msg_id.confirm_verification_code_id, s2c_msg);
        }
        // 重置密码
        resetPassword(pwd) {
            let s2c_msg = client_to_svr.restore_passwnd.create();
            s2c_msg.passwnd = pwd;
            net.send(client_to_svr.client_msg_id.restore_passwnd_id, s2c_msg);
        }
        requestRegisterCode(phone) {
            let s2c_msg = client_to_svr.get_verification_code.create();
            s2c_msg.phone_num = phone;
            net.send(client_to_svr.client_msg_id.get_verification_code_id, s2c_msg);
        }
        static get inst() {
            if (!LoginManager._instance)
                LoginManager._instance = new LoginManager();
            return LoginManager._instance;
        }
    }
    managers.LoginManager = LoginManager;
})(managers || (managers = {}));
//# sourceMappingURL=LoginManager.js.map