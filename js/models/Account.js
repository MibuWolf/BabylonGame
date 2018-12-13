/**
* 用户信息
*/
var models;
(function (models) {
    class Account extends models.Model {
        constructor() {
            super();
            this._token = null; // 指令
            this._permissions = null; // 权限列表
            this._id = "";
            this._email = "";
            this._phone = "";
            this._pwd = "";
        }
        // 是否为超级用户
        get isRoot() {
            if (this._permissions) {
                return Object.keys(common.permission_type).length == this._permissions.length;
            }
            return false;
        }
        // 设置权限列表
        set permissions(permissions) {
            this._permissions = permissions;
            this.invalid = true;
        }
        // 获取权限列表
        get permissions() {
            return this._permissions;
        }
        // 设置token
        set token(token) {
            this._token = token;
            this.invalid = true;
        }
        // 获取token
        get token() {
            return this._token;
        }
        // 验证账号
        static verifyId(id) {
            if (!id || id.length < Account.ID_MIN)
                return lang.LangID.Error_Account_Short;
            if (id.length > Account.ID_MAX)
                return lang.LangID.Error_Account_Long;
            return lang.LangID.OK;
        }
        // 验证密码
        static verifyPwd(pwd) {
            let pattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?\(\)]).*$/;
            if (pattern.test(pwd))
                return lang.LangID.OK;
            if (!pwd || pwd.length < 6 || pwd.length > 16)
                return lang.LangID.Error_Pwd_Length;
            return lang.LangID.Error_Pwd_Weak;
        }
        // 验证邮箱
        static verifyEmail(email) {
            let pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (pattern.test(email))
                return lang.LangID.OK;
            return lang.LangID.Error_Email_Format;
        }
        // 验证手机号码
        static verifyPhone(phone) {
            let pattern = /^1[34578]\d{9}$/;
            if (pattern.test(phone))
                return lang.LangID.OK;
            return lang.LangID.Error_Phone_Format;
        }
        getId() {
            return this._id;
        }
        setId(id) {
            if (id == this._id)
                return;
            if (Account.verifyId(id) != lang.LangID.OK)
                return;
            this._id = id;
            this.invalid = true;
        }
        getPwd() {
            return this._pwd;
        }
        setPwd(pwd) {
            if (pwd == this._pwd)
                return;
            if (Account.verifyPwd(pwd) == lang.LangID.Error_Pwd_Length)
                return;
            this._pwd = pwd;
            this.invalid = true;
        }
        getEmail() {
            return this._email;
        }
        setEmail(email) {
            if (this._email == email)
                return;
            if (Account.verifyEmail(email) != lang.LangID.OK)
                return;
            this._email = email;
            this.invalid = true;
        }
        getPhone() {
            return this._phone;
        }
        setPhone(phone) {
            if (this._phone == phone)
                return;
            if (Account.verifyPhone(phone) != lang.LangID.OK)
                return;
            this._phone = phone;
            this.invalid = true;
        }
        update() {
            if (this.invalid)
                this.event(models.Model.UPDATE, this);
            this.invalid = false;
        }
        equals(other) {
            if (this._id == other.getId() &&
                this._email == other.getEmail() &&
                this._phone == other.getPhone() &&
                this._pwd == other.getPwd())
                return true;
            return false;
        }
    }
    Account.ID_MIN = 3;
    Account.ID_MAX = 15;
    models.Account = Account;
})(models || (models = {}));
//# sourceMappingURL=Account.js.map