/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class BackgoundView extends ui.elements.BackgoundViewUI {
            constructor() {
                super();
                this._imgs = new Array();
                this.init();
            }
            init() {
                this.changeLanguage();
                this.drawBg();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
                Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            }
            onKeyDown(evt) {
                if (evt.keyCode == Laya.Keyboard.F6) {
                    this.changeLanguage();
                }
            }
            changeLanguage() {
                this.txt_title0.text = lang.Lang.Get(lang.LangID.Lang_BaseRender);
                this.txt_title1.text = lang.Lang.Get(lang.LangID.Lang_MaterialTool);
            }
            destroy(destroyChild) {
                if (this._imgs)
                    this._imgs.length = 0;
                this._imgs = null;
                super.destroy(destroyChild);
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
                Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            }
            drawBg() {
                this.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#34363d");
                this.graphics.drawRect(0, Laya.stage.height - 100, Laya.stage.width, 100, "#1f2024");
                let cnt = Math.ceil(Laya.stage.width / 864);
                let img = null;
                for (let i = 0; i < cnt; ++i) {
                    if (i > this._imgs.length - 1) {
                        img = new Laya.Image();
                        img.skin = "ui/bg_top.png";
                        img.x = 864 * i;
                        this._imgs.push(img);
                        this.sp_bg.addChild(img);
                    }
                    else {
                        img = this._imgs[i];
                        img.visible = true;
                    }
                }
                for (let i = cnt; i < this._imgs.length; ++i) {
                    this._imgs[i].visible = false;
                }
            }
            onResize() {
                this.drawBg();
                this.img_logo.x = Laya.stage.width - 164;
                this.img_logo.y = Laya.stage.height - 61;
            }
        }
        elements.BackgoundView = BackgoundView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=BackgoundView.js.map