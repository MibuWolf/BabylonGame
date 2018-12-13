/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var alerts;
    (function (alerts) {
        class CreateResGroupAlert extends ui.alerts.CreateResGroupAlertUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this._input_name = new view.elements.CustomInput(314, 32, "分组名称：");
                this._input_name.pos(97, 87);
                this.addChild(this._input_name);
            }
        }
        alerts.CreateResGroupAlert = CreateResGroupAlert;
    })(alerts = view.alerts || (view.alerts = {}));
})(view || (view = {}));
//# sourceMappingURL=CreateResGroupAlert.js.map