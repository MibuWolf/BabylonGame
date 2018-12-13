/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class ResView extends ui.elements.ResViewUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.onResize();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
                this.list_items.renderHandler = new Laya.Handler(this, this.renderHandler);
                managers.EventManager.getInstance().on(core.EventType.S2C_Substance_Items, this, this.updateResItemsHandler);
            }
            disableLinks(status) {
                if (this._data)
                    this._data.forEach((value, index) => {
                        if (status)
                            this.list_items.getCell(index).removeDownloadLink();
                        else
                            this.list_items.getCell(index).addDownloadLink();
                    });
            }
            renderHandler(item, index) {
                if (!this._data || index >= this._data.length)
                    return;
                item.data = this._data[index];
            }
            updateResItemsHandler() {
                let resItems = managers.SubstanceManager.inst.getSortedSubstanceExtras();
                this.setData(resItems);
            }
            destroy(destroyChild) {
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
                managers.EventManager.getInstance().off(core.EventType.S2C_Substance_Items, this, this.updateResItemsHandler);
                super.destroy(destroyChild);
            }
            setData(data) {
                this._data = data;
                if (this.list_items.array) {
                    this.list_items.array.forEach((value, index) => {
                        this.list_items.getCell(index).removeDownloadLink();
                    });
                }
                this.update();
            }
            update() {
                this.list_items.array = this._data;
            }
            onResize() {
                this.size(this.width, (Laya.stage.height - this.y));
                this.list_items.size(this.width, this.height);
            }
        }
        elements.ResView = ResView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=ResView.js.map