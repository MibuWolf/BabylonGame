/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class LoginView extends ui.views.LoginViewUI {
            constructor() {
                super();
                this._self = null;
                this._data = null;
                this._errCnt = 0;
                this._verifyCom = null;
                this._bg = null;
                this.init();
            }
            init() {
                this._data = managers.LoginManager.inst.createAccount();
                this._bg = new view.elements.BackgoundView();
                this.sp_bg.addChild(this._bg);
                this.box_login.y = 574;
                this.box_verify.visible = false;
                this.item_pwd.input.type = "password";
                this.item_account.input.type = "text";
                this.box_login.y = 303;
                this.changeLanguage();
                this.btn_forget.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_login.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signup.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.check_pwd.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_fresh.on(Laya.Event.CLICK, this, this.onRefreshHandler);
                this.input_verify.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_verify.on(Laya.Event.BLUR, this, this.onBlurHandler);
                events.on(core.EventType.S2C_Login_Fail, this, this.responseLoginFail);
                let pwd = Laya.LocalStorage.getItem("pwd");
                if (pwd) {
                    this.item_pwd.input.text = pwd;
                }
                this.onResizeHandler();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResizeHandler);
                this.item_account.focusOutCallback = new Laya.Handler(this, this.accountFocusOutCB);
                this.item_pwd.focusOutCallback = new Laya.Handler(this, this.pwdFocusOutCB);
                managers.EventManager.getInstance().on(core.EventType.Language_Changed, this, this.changeLanguage);
            }
            pwdFocusOutCB() {
                let pwd = this.item_pwd.input.text.trim();
                if (!pwd) {
                    this.item_pwd.bg_error.visible = true;
                    this.txt_pwd_account_error.visible = true;
                    this.txt_pwd_account_error.text = lang.Lang.Get(lang.LangID.Error_Pwd_Length);
                }
                else {
                    this.txt_pwd_account_error.visible = false;
                    this._data.setPwd(pwd);
                }
            }
            accountFocusOutCB() {
                let name = this.item_account.input.text.trim();
                if (!name) {
                    this.item_account.bg_error.visible = true;
                    this.txt_pwd_account_error.visible = true;
                    this.txt_pwd_account_error.text = lang.Lang.Get(lang.LangID.Error_Account_Short);
                }
                else {
                    this.txt_pwd_account_error.visible = false;
                    this._data.setId(name);
                }
            }
            changeLanguage() {
                this.item_account.label.text = lang.Lang.Get(lang.LangID.Lang_Account);
                this.item_pwd.label.text = lang.Lang.Get(lang.LangID.Lang_Pwd);
                this.txt_login.text = lang.Lang.Get(lang.LangID.Lang_MemberLogin);
                this.txt_chec_label.text = lang.Lang.Get(lang.LangID.Lang_Rember);
                this.btn_fresh.label = lang.Lang.Get(lang.LangID.Lang_Refresh);
                this.txt_noAccount.text = lang.Lang.Get(lang.LangID.Lang_NoAccount);
                this.btn_signup.label = lang.Lang.Get(lang.LangID.Lang_Signup);
                this.btn_forget.label = lang.Lang.Get(lang.LangID.Lang_Forget);
                this.btn_login.label = lang.Lang.Get(lang.LangID.Lang_Login);
            }
            onResizeHandler() {
                this.box_content.x = Laya.stage.width * (742 / DESIGN_WIDTH);
                this.box_content.y = Laya.stage.height * (271 / DESIGN_HEIGHT);
            }
            onRefreshHandler(evt) {
                this._verifyCom.fresh();
            }
            onFocusHandler() {
                this.bg_verify_focus.visible = true;
                this.bg_verify_error.visible = false;
            }
            onBlurHandler() {
                this.bg_verify_focus.visible = false;
                if (this._verifyCom && this._verifyCom.codes != this.input_verify.text.trim()) {
                    this.bg_verify_error.visible = true;
                    this.txt_pwd_account_error.text = lang.Lang.Get(lang.LangID.Error_Verify);
                }
                else {
                    this.bg_verify_error.visible = false;
                }
            }
            responseLoginFail(error) {
                this._errCnt++;
                this.txt_pwd_account_error.text = error;
                this.txt_pwd_account_error.visible = true;
                if (this._errCnt > 3) {
                    this.box_login.y = 379;
                    this.box_verify.visible = true;
                    if (!this._verifyCom) {
                        this._verifyCom = new view.elements.VerificationCodeComponent(100, 40);
                        this.box_verify.addChild(this._verifyCom);
                        this._verifyCom.pos(235, 1);
                    }
                }
            }
            destroy(destroyChild = true) {
                this._errCnt = 0;
                super.destroy(destroyChild);
                this.btn_forget.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_login.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signup.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.check_pwd.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_fresh.off(Laya.Event.CLICK, this, this.onRefreshHandler);
                events.off(core.EventType.S2C_Login_Fail, this, this.responseLoginFail);
                this.input_verify.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input_verify.off(Laya.Event.BLUR, this, this.onBlurHandler);
                this.sp_bg.destroy(true);
                this._bg.destroy(true);
                this._bg = null;
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResizeHandler);
                this._data = null;
                managers.EventManager.getInstance().off(core.EventType.Language_Changed, this, this.changeLanguage);
            }
            onClickHandler(evt) {
                if (evt.target == this.btn_forget) {
                    win.popup(view.PanelEnum.FindPasswordPanel);
                }
                else if (evt.target == this.btn_signup) {
                    win.popup(view.PanelEnum.RegisterPanel);
                }
                else if (evt.target == this.btn_login) {
                    managers.LoginManager.inst.login(this._data);
                }
                else if (evt.target == this.check_pwd) {
                    if (this.check_pwd.selected) {
                        let pwd = this.item_pwd.input.text.trim();
                        Laya.LocalStorage.setItem("pwd", pwd);
                    }
                }
            }
        }
        views.LoginView = LoginView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=LoginView.js.map