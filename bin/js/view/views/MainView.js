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
                let a = 10;
                iframe.contentWindow.onload = function () {
                    console.log("==========#################=======laya send message to babylon===========");
                    // let c2sMsg: client_to_svr.add_group_into_project = client_to_svr.add_group_into_project.create();
                    // c2sMsg.project = "test";
                    // c2sMsg.group = "client";
                    console.log("=================laya send message to babylon===========");
                    let index = 10;
                    window.addEventListener('message', function (e) {
                        console.log("OnMessage");
                        if (e.source != window.parent)
                            return;
                        console.log(e.data);
                        let color = e.data;
                    });
                    iframe.contentWindow.postMessage(a);
                };
            }
        }
        views.MainView = MainView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=MainView.js.map