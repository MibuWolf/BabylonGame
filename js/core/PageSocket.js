/**
* 网页直接通信Socket
* @author confiner
*/
var core;
(function (core) {
    class PageSocket extends core.EventEmitter {
        /**
         * socket communication between pages
         * @param context otherwindow
         * @param target otherwindow origin
         */
        constructor(context, target) {
            super();
            this._context = context;
            this._target = target;
            window.addEventListener("message", this.receiveMessage, false);
        }
        receiveMessage(event) {
            let origin = event.origin || event.originalEvent.origin;
            if (origin !== this._target) {
                this.event(PageSocket.Error, "the target is error!");
            }
            else {
                this.event(PageSocket.Message, event.data);
            }
        }
        /**
         * send data to the destination page
         * @param data string or arraybuffer
         */
        send(data) {
            this._context.postMessage(data, this._target);
        }
    }
    PageSocket.Error = "error";
    PageSocket.Message = "message";
    core.PageSocket = PageSocket;
})(core || (core = {}));
//# sourceMappingURL=PageSocket.js.map