/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class LoginView extends ui.views.LoginViewUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.item_pwd.input.type = "password";
                this.item_pwd.label.text = "Password:";
                this.item_account.input.type = "text";
                this.item_account.label.text = "Account:";
                this.btn_forget.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_login.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signup.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.check_pwd.on(Laya.Event.CLICK, this, this.onClickHandler);
                events.on(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
                let pwd = Laya.LocalStorage.getItem("pwd");
                if (pwd) {
                    this.item_pwd.input.text = pwd;
                }
            }
            destroy(destroyChild = true) {
                super.destroy(destroyChild);
                this.btn_forget.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_login.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_signup.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.check_pwd.off(Laya.Event.CLICK, this, this.onClickHandler);
                events.off(core.EventType.Input_Focus, this, this.onFocusChangeHandler);
            }
            onFocusChangeHandler(target) {
                this.item_account.bg_focus.visible = false;
                this.item_pwd.bg_focus.visible = false;
                if (target == this.item_account) {
                    this.item_account.bg_focus.visible = true;
                }
                else if (target == this.item_pwd) {
                    this.item_pwd.bg_focus.visible = true;
                    let name = this.item_account.input.text.trim();
                    if (!name) {
                        this.item_account.bg_error.visible = true;
                    }
                }
            }
            onClickHandler(evt) {
                if (evt.target == this.btn_forget) {
                    win.popup(view.PanelEnum.FindPasswordPanel);
                }
                else if (evt.target == this.btn_signup) {
                    win.popup(view.PanelEnum.RegisterPanel);
                }
                else if (evt.target == this.btn_login) {
                    let name = this.item_account.input.text.trim();
                    let pwd = this.item_pwd.input.text.trim();
                    if (!name) {
                        this.item_account.bg_error.visible = true;
                        win.showTip(lang.Lang.Get(lang.LangID.Error_Login_Name_Empty));
                        return;
                    }
                    if (!pwd) {
                        this.item_pwd.bg_error.visible = true;
                        win.showTip(lang.Lang.Get(lang.LangID.Error_Login_Pwd_Empty));
                        return;
                    }
                    let account = managers.LoginManager.inst.createAccount();
                    account.setId(name);
                    account.setPwd(pwd);
                    managers.LoginManager.inst.login(account);
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