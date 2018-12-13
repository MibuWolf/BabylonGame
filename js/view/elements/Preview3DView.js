/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class Preview3DView extends ui.elements.Preview3DViewUI {
            constructor() {
                super();
                this.iframeCB = null;
            }
            size(width, height) {
                super.size(width, height);
                this._iframe.setAttribute('width', this.width);
                this._iframe.setAttribute('height', this.height);
                return this;
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
            }
            addBabylonView(width, height) {
                if (!this._iframe) {
                    this._iframe = laya.utils.Browser.window.document.createElement('iframe');
                    this._iframe.setAttribute('src', "./babylon.html");
                    this._iframe.setAttribute('frameborder', 0);
                    this._iframe.onload = () => {
                        if (this.iframeCB) {
                            this.iframeCB.call(null);
                        }
                    };
                    var body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
                    body.appendChild(this._iframe);
                    this._iframe.setAttribute('width', width);
                    this._iframe.setAttribute('height', height);
                    let pos = this.localToGlobal(new Laya.Point(10, 0));
                    this._iframe.setAttribute('style', "position: absolute; left: " + pos.x + "px; top: " + pos.y + "px; z-index: 100009;");
                    let context = this._iframe.contentWindow || this._iframe.contentDocument;
                    this._pageSocket = new core.PageSocket(context, "*");
                    this._pageSocket.on(core.PageSocket.Message, this, this.onMsgHandler);
                }
            }
            removeBabylonView() {
                if (this._iframe) {
                    Laya.Browser.document.body.removeChild(this._iframe);
                    this._iframe = null;
                }
            }
            onMsgHandler(data) {
                let id = data.messageID;
                switch (id) {
                    case proxy.WebMessageID.SHOW_MESHES:
                        break;
                    case proxy.WebMessageID.UPDATE_TEXTURE:
                        break;
                }
            }
            send(data) {
                this._pageSocket.send(data);
            }
        }
        elements.Preview3DView = Preview3DView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=Preview3DView.js.map