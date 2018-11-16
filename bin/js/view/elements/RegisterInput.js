/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class RegisterInput extends ui.elements.RegisterInputUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.bg_error.visible = false;
                this.bg_focus.visible = false;
                this.input.on(Laya.Event.FOCUS, this, this.onFoucsHandler);
            }
            onFoucsHandler(target) {
                if (target == this.input) {
                    this.bg_focus.visible = true;
                    this.bg_error.visible = false;
                    events.event(core.EventType.Input_Focus, this);
                }
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                this.input.off(Laya.Event.FOCUS, this, this.onFoucsHandler);
            }
        }
        elements.RegisterInput = RegisterInput;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=RegisterInput.js.map