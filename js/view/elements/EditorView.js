/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class EditorView extends ui.elements.EditorViewUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.bg.graphics.drawRect(0, 0, this.bg.width, this.bg.height, "#1C1C1C");
                this.tab.selectHandler = new Laya.Handler(this, this.selectHandler);
            }
            selectHandler() {
                this.box_info.visible = this.box_editor.visible = this.box_update.visible = false;
                switch (this.tab.selectedIndex) {
                    case 0:
                        this.box_info.visible = true;
                        break;
                    case 1:
                        this.box_editor.visible = true;
                        break;
                    case 2:
                        this.box_update.visible = true;
                        break;
                }
            }
            setData(data) {
                this._data = data;
                this.update();
                this.tab.selectedIndex = 0;
            }
            update() {
                this.txt_name.text = this._data.name;
                this.txt_desc.text = "   " + this._data.describe;
            }
        }
        elements.EditorView = EditorView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=EditorView.js.map