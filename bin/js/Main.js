var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
const net = managers.NetManager.getInstance();
const win = managers.WindowManager.getInstance();
const events = managers.EventManager.getInstance();
window.onresize = function () {
    Laya.stage.width = window.innerWidth;
    Laya.stage.height = window.innerHeight;
};
//程序入口
Config.isAntialias = true;
Laya.init(window.innerWidth, window.innerHeight, WebGL);
//Laya.init(1920, 1080, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
function beginLoad() {
    Laya.Stat.show();
    Laya.loader.load(["res/atlas/ui.atlas", "font/ADOBEHEITISTD-REGULAR.OTF", "font/FZSJ-YMYYTJW.TTF"], Handler.create(null, onLoaded));
}
function onLoaded() {
    win.popup(view.PanelEnum.MainPanel);
    // startup();
    // events.on(core.EventType.Connect_OK, this, login);
    // net.connect("ws://172.16.1.156:6677");
}
function startup() {
    managers.LoginManager.inst.initialize();
    managers.ProjectManager.inst.initialize();
}
function login() {
    events.off(core.EventType.Connect_OK, this, login);
    win.popup(view.PanelEnum.LoginPanel);
}
//# sourceMappingURL=Main.js.map