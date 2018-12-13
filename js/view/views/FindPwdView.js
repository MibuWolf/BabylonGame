/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class FindPwdView extends ui.views.FindPwdViewUI {
            constructor() {
                super();
                this._bg = null;
                this.init();
            }
            init() {
                this.changeLanguage();
                this._bg = new view.elements.BackgoundView();
                this._bg.addChild(this._bg);
                this.box_phoneOrEmail.visible = true;
                this.item_pwd_confirm.input.type = this.item_pwd.input.type = "password";
                this.item_pwd.focusOutCallback = new Laya.Handler(this, this.pwdFocusOutCB);
                this.item_pwd_confirm.focusOutCallback = new Laya.Handler(this, this.pwdConfirmFocusOutCB);
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
                events.on(core.EventType.S2C_FindPwd_Verify_Fail, this, this.verifyFailHandler);
                events.on(core.EventType.S2C_FindPwd_Reset_Success, this, this.resetPwdSuccessHandler);
                managers.EventManager.getInstance().on(core.EventType.Language_Changed, this, this.changeLanguage);
                this.onResizeHandler();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResizeHandler);
            }
            changeLanguage() {
                this.item_pwd.label.text = lang.Lang.Get(lang.LangID.Lang_Pwd);
                this.txt_retrieve.text = lang.Lang.Get(lang.LangID.Lang_Retrieve);
                this.btn_phone.label = lang.Lang.Get(lang.LangID.Lang_RetrievePhone);
                this.btn_email.label = lang.Lang.Get(lang.LangID.Lang_RetrieveEmail);
                this.item_pwd_confirm.label.text = lang.Lang.Get(lang.LangID.Lang_VerifyPwd);
                this.btn_request_code.label = lang.Lang.Get(lang.LangID.Lang_SendCode);
                this.btn_resetPwd.label = this.btn_emailStep.label = this.btn_phoneStep.label = lang.Lang.Get(lang.LangID.Lang_NextStep);
                this.btn_email_code.label = lang.Lang.Get(lang.LangID.Lang_SendCode);
                this.btn_compete.label = lang.Lang.Get(lang.LangID.Lang_Complete);
                this.txt_info.text = lang.Lang.Get(lang.LangID.Lang_ResetPwdOK);
                this.txt_41.text = this.txt_31.text = this.txt_21.text = this.txt_11.text = lang.Lang.Get(lang.LangID.Lang_Authen);
                this.txt_11d.text = lang.Lang.Get(lang.LangID.Lang_FillPhone);
                this.txt_21d.text = lang.Lang.Get(lang.LangID.Lang_FillEmail);
                this.txt_41.text = this.txt_31.text = lang.Lang.Get(lang.LangID.Lang_FillEmailOrPhone);
                this.txt_42.text = this.txt_32.text = this.txt_22.text = this.txt_12.text = lang.Lang.Get(lang.LangID.Lang_ResetPwd);
                this.txt_42d.text = this.txt_32d.text = this.txt_22d.text = this.txt_12d.text = lang.Lang.Get(lang.LangID.Lang_NewPwd);
                this.txt_43.text = this.txt_33.text = this.txt_23.text = this.txt_13.text = lang.Lang.Get(lang.LangID.Lang_Complete);
                this.txt_43d.text = this.txt_33d.text = this.txt_23d.text = this.txt_13d.text = lang.Lang.Get(lang.LangID.Lang_SetNewPwdOK);
            }
            onResizeHandler() {
                this.box_findPwd.x = Laya.stage.width * (425 / DESIGN_WIDTH);
                this.box_findPwd.y = Laya.stage.height * (236 / DESIGN_HEIGHT);
            }
            resetPwdSuccessHandler() {
                this.box_resetPwd.visible = false;
                this.box_complete.visible = true;
            }
            pwdConfirmFocusOutCB() {
                let pwd = this.item_pwd.input.text.trim();
                let confirmPwd = this.item_pwd_confirm.input.text.trim();
                if (pwd != confirmPwd) {
                    this.txt_pwd_conform_error.text = lang.Lang.Get(lang.LangID.Error_Pwd_Diff);
                    this.txt_pwd_conform_error.visible = true;
                    this.item_pwd_confirm.bg_error.visible = true;
                }
                else {
                    this.txt_pwd_conform_error.visible = false;
                }
            }
            pwdFocusOutCB() {
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
                this.txt_code_error.visible = false;
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
            verifyFailHandler() {
                this.txt_code_error.text = lang.Lang.Get(lang.LangID.Error_Verify);
                this.txt_code_error.visible = true;
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
                        if (ret == lang.LangID.OK) {
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
                        let pwd = this.item_pwd.input.text.trim();
                        let confirmPwd = this.item_pwd_confirm.input.text.trim();
                        if (pwd == confirmPwd && pwd) {
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
                events.off(core.EventType.S2C_FindPwd_Reset_Success, this, this.resetPwdSuccessHandler);
                events.off(core.EventType.S2C_FindPwd_Verify_Fail, this, this.verifyFailHandler);
                managers.EventManager.getInstance().off(core.EventType.Language_Changed, this, this.changeLanguage);
                this.sp_bg.destroy(true);
                this._bg.destroy(true);
                this._bg = null;
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResizeHandler);
            }
        }
        views.FindPwdView = FindPwdView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=FindPwdView.js.map