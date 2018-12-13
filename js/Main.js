var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
const net = managers.NetManager.getInstance();
const win = managers.WindowManager.getInstance();
const events = managers.EventManager.getInstance();
const http = core.Http.inst;
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
const DEBUG = true;
window.onresize = function () {
    Laya.stage.width = window.innerWidth;
    Laya.stage.height = window.innerHeight;
};
//程序入口
Config.isAntialias = true;
Laya.init(window.innerWidth, window.innerHeight, WebGL);
// Laya.DebugTool.init();
//Laya.init(1920, 1080, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
function beginLoad() {
    // Laya.Stat.show();
    Laya.loader.load(["res/atlas/ui.atlas", "res/language.json"], Handler.create(null, onLoaded));
}
function onLoaded() {
    startup();
    //win.popup(view.PanelEnum.MainPanel);
    events.on(core.EventType.Connect_OK, this, login);
    net.connect(GameConfig.Login_URL);
}
function onComplete(data) {
    console.log(data);
}
function startup() {
    managers.LoginManager.inst.initialize();
    managers.ProjectManager.inst.initialize();
    managers.WindowManager.getInstance().initialize();
    managers.SubstanceManager.inst.initialize();
}
function login() {
    events.off(core.EventType.Connect_OK, this, login);
    win.popup(view.PanelEnum.LoginPanel);
}
//# sourceMappingURL=Main.js.map