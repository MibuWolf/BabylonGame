/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class CustomTextArea extends ui.elements.CustomTextAreaUI {
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
                this.textarea.width = this.width;
                this.textarea.height = this.height - this.textarea.y;
                this.textarea.on(Laya.Event.FOCUS, this, this.onFocus);
                this.textarea.on(Laya.Event.BLUR, this, this.onBlur);
            }
            onFocus() {
                this.img_focus.visible = true;
            }
            onBlur() {
                this.img_focus.visible = false;
            }
        }
        elements.CustomTextArea = CustomTextArea;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=CustomTextArea.js.map