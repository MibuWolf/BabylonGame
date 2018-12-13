/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class CustomInput extends ui.elements.CustomInputUI {
            constructor(width, height, title) {
                super();
                this.size(width, height);
                this.txt_title.text = title;
                this.init();
            }
            init() {
                this.img_default.size(this.width, this.height);
                this.img_focus.visible = false;
                this.img_focus.size(this.width, this.height);
                this.input.x = this.txt_title.x + this.txt_title.width + 10;
                this.input.width = this.width - 20 - this.input.x;
                this.input.on(Laya.Event.FOCUS, this, this.onFocus);
                this.input.on(Laya.Event.BLUR, this, this.onBlur);
            }
            set title(title) {
                this.txt_title.text = title;
                this.input.x = this.txt_title.x + this.txt_title.width + 10;
                this.input.width = this.width - 20 - this.input.x;
            }
            onFocus() {
                this.img_focus.visible = true;
            }
            onBlur() {
                this.img_focus.visible = false;
            }
        }
        elements.CustomInput = CustomInput;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=CustomInput.js.map