/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class UploadButton extends ui.elements.UploadButtonUI {
            constructor() {
                super();
                this._callback = null;
            }
            set callback(cb) {
                this._callback = cb;
            }
            initialize() {
                this.on(Laya.Event.MOUSE_OVER, this, this.onMouseHandler);
                this.on(Laya.Event.MOUSE_OUT, this, this.onMouseHandler);
                this.on(Laya.Event.CLICK, this, this.onMouseHandler);
            }
            onMouseHandler(evt) {
                if (evt.type == Laya.Event.MOUSE_OUT)
                    this.clip_icon.index = 0;
                else if (evt.type == Laya.Event.MOUSE_OVER)
                    this.clip_icon.index = 1;
                else if (evt.type == Laya.Event.CLICK) {
                    if (this._callback)
                        this._callback.run();
                }
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                this.off(Laya.Event.MOUSE_OVER, this, this.onMouseHandler);
                this.off(Laya.Event.MOUSE_OUT, this, this.onMouseHandler);
                this.off(Laya.Event.CLICK, this, this.onMouseHandler);
                if (this._callback) {
                    this._callback = null;
                }
            }
        }
        elements.UploadButton = UploadButton;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=UploadButton.js.map