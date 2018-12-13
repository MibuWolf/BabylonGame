/**
* http通信
* @author confiner
*/
var core;
(function (core) {
    class Http {
        constructor() {
            this._https = new Array();
            this._requests = new Map();
        }
        static get inst() {
            if (!Http._instance) {
                Http._instance = new Http();
            }
            return Http._instance;
        }
        get() {
            if (this._https.length > 0)
                return this._https.pop();
            let http = new XMLHttpRequest();
            return http;
        }
        recove(http) {
            http.onerror = http.onabort = http.onprogress = http.onload = null;
            this._https.push(http);
        }
        send(url, data = null, completeCB, method = "post", headers = ["Content-Type", "application/json"], startCB = null, progressCB = null) {
            let http = null;
            let _this = this;
            if (this._requests.has(url))
                http = this._requests.get(url);
            else
                http = this.get();
            http.open(method, url, true);
            if (headers) {
                for (var i = 0; i < headers.length; i++) {
                    http.setRequestHeader(headers[i++], headers[i]);
                }
            }
            http.upload.onloadstart = function (e) {
                if (startCB) {
                    startCB.call(null, null);
                }
            };
            http.onerror = function (e) {
                console.error("Request failed Status:" + http.status + " text:" + http.statusText + " ->" + e);
            };
            http.onabort = function (e) {
                console.error("Request was aborted by user");
            };
            http.upload.onprogress = function (e) {
                //暂时不处理进度
                console.log("progress: lengthComputable:" + e.lengthComputable + "  total:" + e.total + " loaded:" + e.loaded);
                if (progressCB) {
                    progressCB.call(null, e);
                }
            };
            http.onload = function (e) {
                if (completeCB) {
                    completeCB.call(null, this);
                    _this._requests.delete(url);
                    _this.recove(http);
                }
            };
            http.send(data);
        }
    }
    core.Http = Http;
})(core || (core = {}));
//# sourceMappingURL=Http.js.map