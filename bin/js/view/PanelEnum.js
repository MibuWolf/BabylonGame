/**
* 面板管理器
* @author confiner
*/
var view;
(function (view) {
    let PanelEnum;
    (function (PanelEnum) {
        PanelEnum[PanelEnum["RegisterPanel"] = 0] = "RegisterPanel";
        PanelEnum[PanelEnum["LoginPanel"] = 1] = "LoginPanel";
        PanelEnum[PanelEnum["FindPasswordPanel"] = 2] = "FindPasswordPanel";
        PanelEnum[PanelEnum["MainPanel"] = 3] = "MainPanel";
    })(PanelEnum = view.PanelEnum || (view.PanelEnum = {}));
    let AlertEnum;
    (function (AlertEnum) {
        AlertEnum[AlertEnum["EluaAlert"] = 0] = "EluaAlert";
    })(AlertEnum = view.AlertEnum || (view.AlertEnum = {}));
    class AlertCreate {
        // 创建弹窗
        static create(name) {
            let dialog = null;
            switch (name) {
                case AlertEnum.EluaAlert:
                    dialog = new view.alerts.EulaAlert();
                    break;
            }
            return dialog;
        }
    }
    view.AlertCreate = AlertCreate;
    class PanelCreator {
        // 创建面板
        static create(name) {
            let panel = null;
            switch (name) {
                case PanelEnum.RegisterPanel:
                    panel = new view.views.RegisterView();
                    break;
                case PanelEnum.LoginPanel:
                    panel = new view.views.LoginView();
                    break;
                case PanelEnum.FindPasswordPanel:
                    panel = new view.views.FindPwdView();
                    break;
                case PanelEnum.MainPanel:
                    panel = new view.views.MainView();
                    break;
            }
            return panel;
        }
    }
    view.PanelCreator = PanelCreator;
})(view || (view = {}));
//# sourceMappingURL=PanelEnum.js.map