/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class RegisterView extends ui.views.RegisterViewUI {
            constructor() {
                super();
                this._idError = true;
                this._pwdError = true;
                this._conPwdError = true;
                this._emailError = true;
                this._phoneError = true;
                this.init();
            }
            init() {
                this._data = new models.Register();
                let acc = new models.Account();
                this._data.setAccount(acc);
                this.label0.textField.font = "FZLTXHJW_2";
                this.item_account.label.text = "Account:";
                this.item_email.label.text = "Email:";
                this.item_pwd.label.text = "Password:";
                this.item_pwd_confirm.label.text = "Verify Pwd:";
                this.icon_right.visible = false;
                this.txt_account_error.visible = false;
                this.item_pwd_confirm.input.type = this.item_pwd.input.type = "password";
                this.item_email.input.type = "email";
                this.box_pwd.visible = false;
                this.phone_bg_error.visible = false;
                this.phone_focus.visible = false;
                this.code_bg_focus.visible = false;
                this.check_agree.selected = false;
                this.icon_confirmPwd.visible = false;
                this.icon_email_right.visible = false;
                this.txt_pwd_conform_error.visible = false;
                this.txt_email_error.visible = false;
                this.txt_phone_error.visible = false;
                this.icon_phone_right.visible = false;
                this.input_phone.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_code.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_agree.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_register.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signIn.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_send.on(Laya.Event.CLICK, this, this.onClickHandler);
                events.on(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
                events.on(core.EventType.S2C_Register_Email_Error, this, this.s2cEmailErrorHandler);
                events.on(core.EventType.S2C_Register_Name_Error, this, this.s2cNameErrorHandler);
                events.on(core.EventType.S2C_Register_Success, this, this.s2cSuccessHandler);
                this.update();
            }
            s2cSuccessHandler() {
                win.popup(view.PanelEnum.LoginPanel);
            }
            s2cNameErrorHandler() {
                this.icon_right.visible = false;
                this.item_account.bg_error.visible = true;
                this.txt_account_error.visible = true;
                this.txt_account_error.text = lang.Lang.Get(lang.LangID.Error_Account_Repeat);
            }
            s2cEmailErrorHandler() {
                this.icon_email_right.visible = false;
                this.item_email.bg_error.visible = true;
                this.txt_email_error.visible = true;
                this.txt_email_error.text = lang.Lang.Get(lang.LangID.Error_Email_Repeat);
            }
            onClickHandler(evt) {
                if (evt.target == this.btn_register) {
                    if (!this.check_agree.selected) {
                        this.txt_agree_error.visible = true;
                        this.txt_agree_error.text = lang.Lang.Get(lang.LangID.Error_Law_Agree);
                        return;
                    }
                    if (!this._idError && !this._pwdError && !this._conPwdError
                        && !this._emailError && !this._phoneError) {
                        return;
                    }
                    let verifyCode = this.input_code.text.trim();
                    this._data.setVerifyCode(verifyCode);
                    managers.LoginManager.inst.register(this._data);
                }
                else if (evt.target == this.btn_signIn) {
                    win.popup(view.PanelEnum.LoginPanel);
                }
                else if (evt.target == this.btn_send) {
                    this.checkPhone();
                    managers.LoginManager.inst.requestRegisterCode(this._data.getAccount().getPhone());
                }
                else if (evt.target == this.btn_agree) {
                    win.showAlert(view.AlertEnum.EluaAlert);
                }
            }
            destroy(destroyChild = true) {
                super.destroy(destroyChild);
                this.input_phone.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_code.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_agree.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_register.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signIn.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_send.off(Laya.Event.CLICK, this, this.onClickHandler);
                events.off(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
                events.off(core.EventType.S2C_Register_Email_Error, this, this.s2cEmailErrorHandler);
                events.off(core.EventType.S2C_Register_Name_Error, this, this.s2cNameErrorHandler);
                events.off(core.EventType.S2C_Register_Success, this, this.s2cSuccessHandler);
                if (this._data) {
                    this._data.dispose();
                    this._data = null;
                }
            }
            onFocusChangeHandler(target) {
                this.clearFocus();
                if (target == this.item_account) {
                    this.item_account.bg_focus.visible = true;
                }
                else if (target == this.item_pwd) {
                    this.item_pwd.bg_focus.visible = true;
                    this.checkId();
                }
                else if (target == this.item_pwd_confirm) {
                    this.item_pwd_confirm.bg_focus.visible = true;
                    this.checkId();
                    this.checkPwd();
                }
                else if (target == this.item_email) {
                    this.item_email.bg_focus.visible = true;
                    this.checkId();
                    this.checkPwd();
                    this.checkConfirmPwd();
                }
                else if (target == this.input_phone) {
                    this.phone_focus.visible = true;
                    this.checkId();
                    this.checkPwd();
                    this.checkConfirmPwd();
                    this.checkEmail();
                }
                else if (target == this.input_code) {
                    this.code_bg_focus.visible = true;
                    this.checkId();
                    this.checkPwd();
                    this.checkConfirmPwd();
                    this.checkEmail();
                    this.checkPhone();
                }
            }
            checkPhone() {
                this.phone_focus.visible = true;
                let phone = this.input_phone.text.trim();
                let ret = models.Account.verifyPhone(phone);
                if (ret == lang.LangID.OK) {
                    this.txt_phone_error.visible = false;
                    this._phoneError = false;
                    this._data.getAccount().setPhone(phone);
                }
                else {
                    this.txt_phone_error.visible = true;
                    this.txt_phone_error.text = lang.Lang.Get(ret);
                    this._phoneError = true;
                }
            }
            checkConfirmPwd() {
                let pwd = this.item_pwd.input.text.trim();
                let confirmPwd = this.item_pwd_confirm.input.text.trim();
                if (pwd != confirmPwd) {
                    this.txt_pwd_conform_error.text = lang.Lang.Get(lang.LangID.Error_Pwd_Diff);
                    this.icon_confirmPwd.visible = false;
                    this.txt_pwd_conform_error.visible = true;
                    this._conPwdError = true;
                }
                else {
                    this.icon_confirmPwd.visible = true;
                    this.txt_pwd_conform_error.visible = false;
                    this._conPwdError = false;
                }
            }
            checkEmail() {
                let email = this.item_email.input.text.trim();
                let ret = models.Account.verifyEmail(email);
                if (ret == lang.LangID.OK) {
                    this.icon_email_right.visible = true;
                    this.txt_email_error.visible = false;
                    this._emailError = false;
                    this._data.getAccount().setEmail(email);
                }
                else {
                    this.icon_email_right.visible = false;
                    this.txt_email_error.visible = true;
                    this.txt_email_error.text = lang.Lang.Get(ret);
                    this._emailError = true;
                }
            }
            clearFocus() {
                this.item_account.bg_focus.visible = false;
                this.item_email.bg_focus.visible = false;
                this.item_pwd.bg_focus.visible = false;
                this.item_pwd_confirm.bg_focus.visible = false;
                this.code_bg_focus.visible = false;
                this.phone_focus.visible = false;
            }
            checkPwd() {
                this.item_pwd.bg_error.visible = false;
                this.item_pwd.bg_focus.visible = false;
                let pwd = this.item_pwd.input.text.trim();
                let ret = models.Account.verifyPwd(pwd);
                if (ret == lang.LangID.Error_Pwd_Length) {
                    this.txt_pwd_error.visible = true;
                    this.box_pwd.visible = false;
                    this.item_pwd.bg_error.visible = true;
                    this.txt_pwd_error.text = lang.Lang.Get(ret);
                    this._idError = true;
                }
                else {
                    this._idError = false;
                    this._data.getAccount().setPwd(pwd);
                    this.box_pwd.visible = true;
                    this.txt_pwd_error.visible = false;
                    this.clip_pwd0.index = 1;
                    this.clip_pwd1.index = 1;
                    this.clip_pwd2.index = 1;
                    if (ret == lang.LangID.Error_Pwd_Weak) {
                        this.clip_pwd0.visible = true;
                        this.clip_pwd0.index = 0;
                    }
                    else if (ret == lang.LangID.OK) {
                        this.clip_pwd0.index = 0;
                        this.clip_pwd1.index = 0;
                        this.clip_pwd2.index = 0;
                    }
                }
            }
            checkId() {
                let id = this.item_account.input.text.trim();
                let ret = models.Account.verifyId(id);
                this.item_account.bg_error.visible = false;
                this.item_account.bg_focus.visible = false;
                if (ret == lang.LangID.OK) {
                    this.icon_right.visible = true;
                    this.txt_account_error.visible = false;
                    this._idError = false;
                    this._data.getAccount().setId(id);
                }
                else {
                    this.icon_right.visible = false;
                    this.txt_account_error.visible = true;
                    this.txt_account_error.text = lang.Lang.Get(ret);
                    this.item_account.bg_error.visible = true;
                    this._idError = true;
                }
            }
            update() {
                let account = this._data.getAccount();
                this.item_account.input.text = account.getId();
                this.item_email.input.text = account.getEmail();
                this.item_pwd.input.text = account.getPwd();
                this.item_pwd_confirm.input.text = account.getPwd();
            }
            onFocusHandler(target) {
                events.event(core.EventType.Input_Focus, target);
            }
        }
        views.RegisterView = RegisterView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=RegisterView.js.map