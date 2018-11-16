/**
* 注册信息
* @author confiner
*/
var models;
(function (models) {
    class Register extends models.Model {
        constructor() {
            super();
        }
        getVerifyCode() {
            return this._verifyCode;
        }
        setVerifyCode(code) {
            this._verifyCode = code;
        }
        getAccount() {
            return this._account;
        }
        setAccount(account) {
            if (this._account && account.equals(this._account))
                return;
            this._account = account;
            this.invalid = true;
        }
        getAgree() {
            return this._agree;
        }
        setAgree(agree) {
            if (this._agree == agree)
                return;
            this._agree = agree;
            this.invalid = true;
        }
        equals(other) {
            if (this._agree == other.getAgree() &&
                other.getAccount().equals(this._account))
                return true;
            return false;
        }
        update() {
            if (this.invalid)
                this.event(models.Model.UPDATE, [this]);
            this.invalid = false;
        }
    }
    models.Register = Register;
})(models || (models = {}));
//# sourceMappingURL=Register.js.map