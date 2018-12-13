/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class RepositoryTree extends ui.elements.RepositoryTreeUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.changeLanguage();
                this.tree_repository.scrollBar.autoHide = true;
                this.tree_repository.scrollBar.mouseWheelEnable = true;
                this.tree_repository.renderHandler = new Laya.Handler(this, this.itemRenderHandler);
                this.onResize();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
                this.btn_delete.on(Laya.Event.MOUSE_OVER, this, this.clipHandler);
                this.btn_delete.on(Laya.Event.MOUSE_OUT, this, this.clipHandler);
                this.btn_editor.on(Laya.Event.MOUSE_OVER, this, this.clipHandler);
                this.btn_editor.on(Laya.Event.MOUSE_OUT, this, this.clipHandler);
                this.btn_addDir.on(Laya.Event.CLICK, this, this.clickHandler);
            }
            clickHandler(evt) {
                let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                if (project) {
                    let repository = project.getRepository(project.curRepository);
                    if (repository) {
                        let directory = repository.createDefaultDirectory();
                        repository.addDirectory(directory);
                        managers.EventManager.getInstance().event(core.EventType.S2C_Substance_Repository);
                        //proxy.ProtobuffProxy.req_add_repository_group(managers.ProjectManager.inst.curDomain, project.name, project.curRepository, this.dataSource.directory, "");
                    }
                }
            }
            clipHandler(evt) {
                let clip = evt.target == this.btn_delete ? this.clip_delete : this.clip_editor;
                clip.index = evt.type == Laya.Event.MOUSE_OVER ? 1 : 0;
            }
            changeLanguage() {
                this.btn_editor.label = lang.Lang.Get(lang.LangID.Lang_Editor);
                this.btn_delete.label = lang.Lang.Get(lang.LangID.Lang_Delete);
            }
            itemRenderHandler(item, index) {
                item.setData(item.dataSource);
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
                this.btn_delete.off(Laya.Event.MOUSE_OVER, this, this.clipHandler);
                this.btn_delete.off(Laya.Event.MOUSE_OUT, this, this.clipHandler);
                this.btn_editor.off(Laya.Event.MOUSE_OVER, this, this.clipHandler);
                this.btn_editor.off(Laya.Event.MOUSE_OUT, this, this.clipHandler);
                this.btn_addDir.off(Laya.Event.CLICK, this, this.clickHandler);
            }
            onResize() {
                this.sp_bg.graphics.drawRect(0, 0, 258, Laya.stage.height - 51, "#2b2b2b");
                this.tree_repository.height = Laya.stage.height - 51;
            }
        }
        elements.RepositoryTree = RepositoryTree;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=RepositoryTree.js.map