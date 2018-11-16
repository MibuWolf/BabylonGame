/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class FindPwdView extends ui.views.FindPwdViewUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.box_phoneOrEmail.visible = true;
                this.item_pwd.label.text = "Password:";
                this.item_pwd_confirm.label.text = "Verify Pwd:";
                this.item_pwd_confirm.input.type = this.item_pwd.input.type = "password";
                this.btn_email.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_phone.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_request_code.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.phone_input.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.code_input.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_phoneStep.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_resetPwd.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_compete.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.email_input.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_email_code.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_emailStep.on(Laya.Event.CLICK, this, this.onClickHandler);
                events.on(core.EventType.S2C_FindPwd_Phone_Fail, this, this.findPwdPhoneFailHandler);
                events.on(core.EventType.S2C_FindPwd_Email_Fail, this, this.findPwdEmailFailHandler);
                events.on(core.EventType.S2C_FindPwd_Verify_Success, this, this.verifySuccessHandler);
                events.on(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
                events.on(core.EventType.S2C_FindPwd_Reset_Success, this, this.resetPwdSuccessHandler);
            }
            resetPwdSuccessHandler() {
                this.box_resetPwd.visible = false;
                this.box_complete.visible = true;
            }
            onFocusChangeHandler(target) {
                this.item_pwd.bg_focus.visible = false;
                this.item_pwd_confirm.bg_focus.visible = false;
                if (target == this.item_pwd) {
                    this.item_pwd.bg_focus.visible = true;
                }
                else if (target == this.item_pwd_confirm) {
                    this.item_pwd_confirm.bg_focus.visible = true;
                    this.checkPwd();
                }
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
                }
                else {
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
            findPwdPhoneFailHandler() {
                this.phone_bg_error.visible = true;
                this.phone_bg_focus.visible = false;
                this.txt_error.text = lang.Lang.Get(lang.LangID.Error_FindPwd_Phone);
            }
            findPwdEmailFailHandler() {
                this.email_bg_error.visible = true;
                this.email_bg_focus.visible = false;
                this.txt_email_error.text = lang.Lang.Get(lang.LangID.Error_FindPwd_Email);
            }
            verifySuccessHandler() {
                this.box_fillEmail.visible = false;
                this.box_fillPhone.visible = false;
                this.box_resetPwd.visible = true;
            }
            onFocusHandler(target) {
                switch (target) {
                    case this.phone_input:
                        this.phone_bg_focus.visible = true;
                        this.phone_bg_error.visible = false;
                        this.txt_error.visible = false;
                        break;
                    case this.email_input:
                        this.email_bg_error.visible = false;
                        this.email_bg_focus.visible = true;
                        this.txt_email_error.visible = false;
                        break;
                }
            }
            onClickHandler(evt) {
                switch (evt.target) {
                    case this.btn_email:
                        this.box_fillEmail.visible = true;
                        this.box_phoneOrEmail.visible = false;
                        break;
                    case this.btn_phone:
                        this.box_fillPhone.visible = true;
                        this.box_phoneOrEmail.visible = false;
                        break;
                    case this.btn_request_code:
                        let phone = this.phone_input.text.trim();
                        let ret = models.Account.verifyPhone(phone);
                        if (ret != lang.LangID.OK) {
                            this.phone_bg_error.visible = true;
                            this.phone_bg_focus.visible = false;
                            this.txt_error.visible = true;
                            this.txt_error.text = lang.Lang.Get(ret);
                        }
                        else {
                            this.txt_error.visible = false;
                            this.phone_bg_error.visible = false;
                            managers.LoginManager.inst.findPasswordByPhone(phone);
                        }
                        break;
                    case this.btn_phoneStep:
                        let code = this.code_input.text.trim();
                        if (!code) {
                            win.showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Verify_Code_Empty));
                        }
                        else {
                            managers.LoginManager.inst.findPasswordVerifyCode(code);
                        }
                        break;
                    case this.btn_resetPwd:
                        let result = this.checkConfirmPwd();
                        if (result) {
                            let pwd = this.item_pwd.input.text.trim();
                            managers.LoginManager.inst.resetPassword(pwd);
                        }
                        break;
                    case this.btn_compete:
                        console.log("进入主界面");
                        win.popup(view.PanelEnum.LoginPanel);
                        break;
                    case this.btn_email_code:
                        let email = this.email_input.text.trim();
                        let rt = models.Account.verifyEmail(email);
                        if (rt != lang.LangID.OK) {
                            this.email_bg_error.visible = true;
                            this.email_bg_focus.visible = false;
                            this.txt_email_error.visible = true;
                            this.txt_email_error.text = lang.Lang.Get(rt);
                        }
                        else {
                            this.txt_email_error.visible = false;
                            this.email_bg_error.visible = false;
                            managers.LoginManager.inst.findPasswordByEmail(email);
                        }
                        break;
                    case this.btn_emailStep:
                        let emailCode = this.input_email_code.text.trim();
                        if (!emailCode) {
                            win.showTip(lang.Lang.Get(lang.LangID.Error_FindPwd_Verify_Code_Empty));
                        }
                        else {
                            managers.LoginManager.inst.findPasswordVerifyCode(emailCode);
                        }
                        break;
                }
            }
            checkConfirmPwd() {
                let ret = false;
                let pwd = this.item_pwd.input.text.trim();
                let confirmPwd = this.item_pwd_confirm.input.text.trim();
                if (pwd != confirmPwd) {
                    this.txt_pwd_conform_error.text = lang.Lang.Get(lang.LangID.Error_Pwd_Diff);
                    this.txt_pwd_conform_error.visible = true;
                }
                else {
                    this.txt_pwd_conform_error.visible = false;
                    ret = true;
                }
                return ret;
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                this.btn_email.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_phone.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.phone_input.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.code_input.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_request_code.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_phoneStep.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_resetPwd.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_compete.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.email_input.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.btn_email_code.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_emailStep.off(Laya.Event.CLICK, this, this.onClickHandler);
                events.off(core.EventType.S2C_FindPwd_Phone_Fail, this, this.findPwdPhoneFailHandler);
                events.off(core.EventType.S2C_FindPwd_Email_Fail, this, this.findPwdEmailFailHandler);
                events.off(core.EventType.S2C_FindPwd_Verify_Success, this, this.verifySuccessHandler);
                events.off(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
                events.off(core.EventType.S2C_FindPwd_Reset_Success, this, this.resetPwdSuccessHandler);
            }
        }
        views.FindPwdView = FindPwdView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=FindPwdView.js.map