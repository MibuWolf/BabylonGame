/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class ResItem extends ui.elements.ResItemUI {
            constructor() {
                super();
                managers.EventManager.getInstance().on(core.EventType.Fork_Res, this, this.hideOrShowForkCheck);
            }
            initialize() {
                this.btn_favorite.on(Laya.Event.CLICK, this, this.mouseHandler);
                this.check.on(Laya.Event.CLICK, this, this.clickHandler);
                this.graphics.drawRect(0, 0, this.width, this.height, "##1B1B1B");
            }
            clickHandler(evt) {
                evt.stopPropagation();
            }
            hideOrShowForkCheck(show) {
                this.box_fork.visible = show;
                this.box_normal.visible = !show;
                if (show)
                    this.removeDownloadLink();
                else
                    this.addDownloadLink();
            }
            addDownloadLink() {
                if (!this._link) {
                    this._link = Laya.Browser.document.createElement("a");
                    let pos = this.btn_down.localToGlobal(new Laya.Point(0, 0));
                    let styleStr = "position: absolute; display: inline-block; background: #D0EEFF;" +
                        "filter:alpha(opacity=0);opacity:0;";
                    styleStr += "left:" + pos.x + "px;";
                    styleStr += "top:" + pos.y + "px;";
                    styleStr += "width:" + this.btn_down.width + "px;";
                    styleStr += "height:" + this.btn_down.height + "px;";
                    this._link.setAttribute("style", styleStr);
                    this._link.setAttribute("id", "test");
                    this._link.style.zIndex = 999;
                    this._link.innerText = "  ";
                    this._link.download = "";
                    Laya.Browser.document.body.appendChild(this._link);
                }
                if (this._data)
                    this._link.href = GameConfig.Substance_Static_URL + "/" + this._data.id + "/" + this._data.version + "/" + this._data.id + ".rar";
            }
            removeDownloadLink() {
                if (this._link) {
                    Laya.Browser.document.body.removeChild(this._link);
                    this._link = null;
                }
            }
            mouseHandler(evt) {
                switch (evt.target) {
                    case this.btn_down:
                        break;
                    case this.btn_favorite:
                        let subs = new Array();
                        let substance = new models.SubstanceExtra();
                        subs.push(this._data);
                        proxy.HttpProxy.req_fork_res(subs, "private", managers.LoginManager.inst.account.getId(), models.Directory.PERSONALITY, models.ResGroup.MY_FAVORITE);
                        break;
                }
            }
            destroy(destroyChild) {
                this.removeDownloadLink();
                this.btn_favorite.off(Laya.Event.CLICK, this, this.mouseHandler);
                this.check.off(Laya.Event.CLICK, this, this.clickHandler);
                managers.EventManager.getInstance().off(core.EventType.Fork_Res, this, this.hideOrShowForkCheck);
                super.destroy(destroyChild);
            }
            update() {
                this.txt_name.text = this._data.name;
                this.img_res.skin = GameConfig.Substance_Static_URL + "/" + this._data.id + "/" + this._data.version + "/" + this._data.thumb;
                this.btn_favorite.selected = this._data.isMyFavorite();
                this.btn_favorite.mouseEnabled = !this._data.isMyFavorite();
            }
            set data(data) {
                this._data = data;
                this.update();
                this.hideOrShowForkCheck(false);
            }
        }
        elements.ResItem = ResItem;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=ResItem.js.map