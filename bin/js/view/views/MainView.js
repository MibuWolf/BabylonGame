/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class MainView extends ui.views.MainViewUI {
            constructor() {
                super();
                this._context = null;
                this.showBabylonView();
            }
            showBabylonView() {
                let iframe = laya.utils.Browser.window.document.createElement('iframe');
                iframe.setAttribute('src', "./babylon.html");
                iframe.setAttribute('frameborder', 0);
                var body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
                body.appendChild(iframe);
                iframe.setAttribute('width', 500);
                iframe.setAttribute('height', 500);
                iframe.setAttribute('style', "position: absolute; left: 0px; top: 0px; z-index: 100009;");
                this._context = iframe.contentWindow || iframe.contentDocument;
                iframe.contentWindow.onload = function () {
                    let message = new views.MeshList();
                    let meshInfo = new views.MeshInfo("test", "http://test.com/abc.obj");
                    message.AddMeshInfo(meshInfo);
                    console.log("send message to babylon");
                    iframe.contentWindow.postMessage(message, "*");
                };
            }
        }
        views.MainView = MainView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=MainView.js.map