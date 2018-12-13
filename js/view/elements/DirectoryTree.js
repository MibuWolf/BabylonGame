/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class DirectoryTree extends ui.elements.DirectoryTreeUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.tree_main.scrollBar.autoHide = true;
                this.tree_main.scrollBar.mouseWheelEnable = true;
                this.tree_main.renderHandler = new Laya.Handler(this, this.itemRenderHandler);
                this.onResize();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
            }
            itemRenderHandler(item, index) {
                item.setData(item.dataSource);
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
            }
            onResize() {
                this.sp_bg.graphics.drawRect(0, 0, 258, Laya.stage.height - 51, "#333333");
                this.tree_main.height = Laya.stage.height - 51;
            }
        }
        elements.DirectoryTree = DirectoryTree;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=DirectoryTree.js.map