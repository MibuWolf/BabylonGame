/**
* 窗口管理器
* @author confiner
*/
var managers;
(function (managers) {
    class WindowManager {
        constructor() {
            this._panels = new Map();
        }
        initialize() {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
        }
        destory() {
        }
        // 弹窗
        popup(name) {
            this.closeAll();
            let panel = null;
            if (this._panels.has(name)) {
                panel = this._panels.get(name);
            }
            else {
                panel = view.PanelCreator.create(name);
                this._panels.set(name, panel);
            }
            Laya.stage.addChild(panel);
        }
        // 关闭所有界面
        closeAll() {
            this._panels.forEach((value, key) => {
                this.close(key);
            });
        }
        // 关闭
        close(name, destory = true) {
            let panel = null;
            if (this._panels.has(name)) {
                panel = this._panels.get(name);
                Laya.stage.removeChild(panel);
                if (destory) {
                    panel.destroy(true);
                    this._panels.delete(name);
                    panel = null;
                }
            }
        }
        // 显示弹窗
        showAlert(name, callback = null) {
            let dialog = view.AlertCreate.create(name);
            dialog.popupCenter = true;
            if (callback)
                dialog.closeHandler = callback;
            dialog.popup(false);
        }
        // 显示tip
        showTip(info) {
            let label = new Laya.Label();
            label.fontSize = 20;
            label.color = "#ff0000";
            label.align = "left";
            label.text = info;
            label.bold = true;
            label.mouseEnabled = false;
            let posX = Laya.stage.mouseX;
            if (Laya.stage.mouseX + label.width > Laya.stage.width) {
                posX = Laya.stage.width - label.width;
            }
            let posY = Laya.stage.mouseY - label.height;
            if (posY < label.height)
                posY = 2 * label.height + 10;
            Laya.stage.addChild(label);
            label.pos(posX, posY);
            // 	晃动上升渐隐
            Laya.Tween.to(label, { y: posY - 100, alpha: 0 }, 1500, Laya.Ease.strongIn, Laya.Handler.create(this, function () {
                Laya.Tween.clearTween(label);
                Laya.stage.removeChild(label);
            }), 1000);
        }
        onKeyDown(evt) {
            if (evt.keyCode == Laya.Keyboard.F6) {
                lang.Lang.switch();
                managers.EventManager.getInstance().event(core.EventType.Language_Changed);
            }
        }
        static getInstance() {
            if (!WindowManager._instance)
                WindowManager._instance = new WindowManager();
            return WindowManager._instance;
        }
    }
    managers.WindowManager = WindowManager;
})(managers || (managers = {}));
//# sourceMappingURL=WindowManager.js.map