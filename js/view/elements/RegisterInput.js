/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class RegisterInput extends ui.elements.RegisterInputUI {
            constructor() {
                super();
                this.focusInCallback = null;
                this.focusOutCallback = null;
                this.init();
            }
            init() {
                this.bg_error.visible = false;
                this.bg_focus.visible = false;
                this.input.on(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input.on(Laya.Event.BLUR, this, this.onBlurHandler);
            }
            onFocusHandler() {
                this.bg_focus.visible = true;
                this.bg_error.visible = false;
                this.focusInCallback && this.focusInCallback.run();
            }
            onBlurHandler() {
                this.bg_focus.visible = false;
                this.bg_error.visible = false;
                this.focusOutCallback && this.focusOutCallback.run();
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                this.input.off(Laya.Event.FOCUS, this, this.onFocusHandler);
                this.input.off(Laya.Event.BLUR, this, this.onBlurHandler);
                this.focusInCallback = null;
                this.focusOutCallback = null;
            }
        }
        elements.RegisterInput = RegisterInput;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=RegisterInput.js.map