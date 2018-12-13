/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var alerts;
    (function (alerts) {
        class EulaAlert extends ui.alerts.EulaAlertUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.size(Laya.stage.width, Laya.stage.height);
                this.btn_close.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.txtArea_content.text = lang.Lang.Get(lang.LangID.Lang_Elua);
                this.bg.height = this.txtArea_content.y + this.txtArea_content.height + 20;
            }
            onClickHandler(evt) {
                this.btn_close.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.close();
            }
        }
        alerts.EulaAlert = EulaAlert;
    })(alerts = view.alerts || (view.alerts = {}));
})(view || (view = {}));
//# sourceMappingURL=EulaAlert.js.map