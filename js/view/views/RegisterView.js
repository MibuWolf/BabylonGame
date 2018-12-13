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
                this._verifyError = true;
                this._bg = null;
                this.init();
            }
            init() {
                this.changeLanguage();
                this.box_known.visible = false;
                this._bg = new view.elements.BackgoundView();
                this._data = new models.Register();
                let acc = new models.Account();
                this._data.setAccount(acc);
                this.item_account.focusOutCallback = new Laya.Handler(this, this.accountFocusOutCallback);
                this.item_pwd.focusOutCallback = new Laya.Handler(this, this.pwdFocusOutCallback);
                this.item_email.focusOutCallback = new Laya.Handler(this, this.emailFocusOutCallback);
                this.item_pwd_confirm.focusOutCallback = new Laya.Handler(this, this.pwdConfirmFocusOutCallback);
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
                this.input_phone.on(Laya.Event.BLUR, this, this.onBlurHandler);
                this.input_code.on(Laya.Event.BLUR, this, this.onBlurHandler);
                this.btn_agree.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_register.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signIn.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_send.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_known.on(Laya.Event.CLICK, this, this.onClickHandler);
                events.on(core.EventType.S2C_Register_Email_Error, this, this.s2cEmailErrorHandler);
                events.on(core.EventType.S2C_Register_Phone_Error, this, this.s2cPhoneErrorHandler);
                events.on(core.EventType.S2C_Register_Name_Error, this, this.s2cNameErrorHandler);
                events.on(core.EventType.S2C_Register_Success, this, this.s2cSuccessHandler);
                this.onResizeHandler();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResizeHandler);
                managers.EventManager.getInstance().on(core.EventType.Language_Changed, this, this.changeLanguage);
                this.update();
            }
            onFocusHandler(target) {
                if (target == this.input_phone) {
                    this.phone_bg_error.visible = false;
                    this.phone_focus.visible = true;
                }
                else if (target == this.input_code) {
                    this.code_bg_focus.visible = true;
                    this.code_bg_error.visible = false;
                }
            }
            onBlurHandler(target) {
                if (target == this.input_phone) {
                    this.phone_bg_error.visible = false;
                    this.phone_focus.visible = false;
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
                        this.phone_bg_error.visible = true;
                    }
                }
                else if (target == this.input_code) {
                    this.code_bg_focus.visible = false;
                    this.code_bg_error.visible = false;
                    let verifyCode = this.input_code.text.trim();
                    if (!verifyCode) {
                        this.code_bg_error.visible = true;
                        this._verifyError = true;
                    }
                    else {
                        this._verifyError = false;
                        this._data.setVerifyCode(verifyCode);
                    }
                }
            }
            changeLanguage() {
                this.txt_register.text = lang.Lang.Get(lang.LangID.Lang_Register);
                this.item_account.label.text = lang.Lang.Get(lang.LangID.Lang_Account);
                this.item_email.label.text = lang.Lang.Get(lang.LangID.Lang_Email);
                this.item_pwd.label.text = lang.Lang.Get(lang.LangID.Lang_Pwd);
                this.item_pwd_confirm.label.text = lang.Lang.Get(lang.LangID.Lang_VerifyPwd);
                this.btn_send.label = lang.Lang.Get(lang.LangID.Lang_SendCode);
                this.label2.text = lang.Lang.Get(lang.LangID.Lang_RelativLaw);
                this.btn_agree.label = lang.Lang.Get(lang.LangID.Lang_LawContent);
                this.btn_register.label = lang.Lang.Get(lang.LangID.Lang_RegisterGo);
                this.txt_title.text = lang.Lang.Get(lang.LangID.Lang_Congratulation);
                this.txt_importInfo.text = lang.Lang.Get(lang.LangID.Lang_FollowInfo);
                this.txt_okAccount.text = lang.Lang.Get(lang.LangID.Lang_Account);
                this.txt_okEmail.text = lang.Lang.Get(lang.LangID.Lang_Email);
                this.txt_okPhone.text = lang.Lang.Get(lang.LangID.Lang_Phone);
            }
            onResizeHandler() {
                this.box_registerContent.x = Laya.stage.width * (742 / DESIGN_WIDTH);
                this.box_registerContent.y = Laya.stage.height * (239 / DESIGN_HEIGHT);
                this.box_known.x = Laya.stage.width * (786 / DESIGN_WIDTH);
                this.box_known.y = Laya.stage.height * (287 / DESIGN_HEIGHT);
            }
            s2cSuccessHandler() {
                this.box_known.visible = true;
                this.box_registerContent.visible = false;
                this.txt_okAccountValue.text = managers.LoginManager.inst.account.getId();
                this.txt_okEmailValue.text = managers.LoginManager.inst.account.getEmail();
                this.txt_okPhoneValue.text = managers.LoginManager.inst.account.getPhone();
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
            s2cPhoneErrorHandler() {
                this.txt_phone_error.visible = true;
                this.phone_bg_error.visible = true;
                this.txt_phone_error.text = lang.Lang.Get(lang.LangID.Error_PhoneRegisterd);
            }
            onClickHandler(evt) {
                if (evt.target == this.btn_register) {
                    if (!this.check_agree.selected) {
                        this.txt_agree_error.visible = true;
                        this.txt_agree_error.text = lang.Lang.Get(lang.LangID.Error_Law_Agree);
                        return;
                    }
                    if (!this._idError && !this._pwdError && !this._conPwdError
                        && !this._emailError && !this._phoneError && !this._verifyError) {
                        return;
                    }
                    managers.LoginManager.inst.register(this._data);
                }
                else if (evt.target == this.btn_signIn) {
                    win.popup(view.PanelEnum.LoginPanel);
                }
                else if (evt.target == this.btn_send) {
                    managers.LoginManager.inst.requestRegisterCode(this._data.getAccount().getPhone());
                }
                else if (evt.target == this.btn_agree) {
                    win.showAlert(view.AlertEnum.EluaAlert);
                }
                else if (evt.target == this.btn_known) {
                    win.popup(view.PanelEnum.LoginPanel);
                }
            }
            destroy(destroyChild = true) {
                super.destroy(destroyChild);
                this.btn_agree.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_register.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signIn.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_send.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_known.off(Laya.Event.CLICK, this, this.onClickHandler);
                events.off(core.EventType.S2C_Register_Email_Error, this, this.s2cEmailErrorHandler);
                events.off(core.EventType.S2C_Register_Phone_Error, this, this.s2cPhoneErrorHandler);
                events.off(core.EventType.S2C_Register_Name_Error, this, this.s2cNameErrorHandler);
                events.off(core.EventType.S2C_Register_Success, this, this.s2cSuccessHandler);
                if (this._data) {
                    this._data.dispose();
                    this._data = null;
                }
                this.sp_bg.destroy(true);
                this._bg.destroy(true);
                this._bg = null;
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResizeHandler);
                managers.EventManager.getInstance().off(core.EventType.Language_Changed, this, this.changeLanguage);
                this.input_phone.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_code.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_phone.off(Laya.Event.BLUR, this, this.onBlurHandler);
                this.input_code.off(Laya.Event.BLUR, this, this.onBlurHandler);
            }
            emailFocusOutCallback() {
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
                    this.item_email.bg_error.visible = true;
                }
            }
            accountFocusOutCallback() {
                let id = this.item_account.input.text.trim();
                let ret = models.Account.verifyId(id);
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
            pwdFocusOutCallback() {
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
            pwdConfirmFocusOutCallback() {
                let pwd = this.item_pwd.input.text.trim();
                let confirmPwd = this.item_pwd_confirm.input.text.trim();
                if (!confirmPwd || pwd != confirmPwd) {
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
            update() {
                let account = this._data.getAccount();
                this.item_account.input.text = account.getId();
                this.item_email.input.text = account.getEmail();
                this.item_pwd.input.text = account.getPwd();
                this.item_pwd_confirm.input.text = account.getPwd();
            }
        }
        views.RegisterView = RegisterView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=RegisterView.js.map