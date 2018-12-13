/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var views;
    (function (views) {
        class MainView extends ui.views.MainViewUI {
            constructor() {
                super();
                this._uploadView = null;
                this._mainTree = null;
                this._repositoryTree = null;
                this._resView = null;
                this._editor = false;
                this._showEditor = false;
                this._fork = false;
                this._preview2DView = null;
                this._preview3DView = null;
                this._editorView = null;
                this.init();
                //this.showBabylonView();
            }
            init() {
                this.btn_manager.clip_icon.skin = "ui/main_manager.png";
                this.btn_hide_editor.clip_icon.skin = "ui/btn_hide.png";
                this.btn_save_args.clip_icon.skin = "ui/btn_save.png";
                this.btn_hide_editor.on(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_save_args.on(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_moveTo.on(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_fork_ok.on(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_fork_no.on(Laya.Event.CLICK, this, this.btnClickHandler);
                events.on(core.EventType.S2C_Substance_Repository, this, this.setDirectoriesTree);
                this.changeLanguage();
                this.tab.selectHandler = new Laya.Handler(this, this.selectTabHandler);
                this._mainTree = new view.elements.DirectoryTree();
                this._mainTree.tree_main.list.selectHandler = new Laya.Handler(this, this.projectTreeSelectHandler);
                this.addChild(this._mainTree);
                this._repositoryTree = new view.elements.RepositoryTree();
                this._repositoryTree.tree_repository.mouseHandler = new Laya.Handler(this, this.repositoryItemHandler);
                this.addChild(this._repositoryTree);
                this._resView = new view.elements.ResView();
                this._resView.list_items.selectHandler = new Laya.Handler(this, this.selectResItemHandler);
                this.addChild(this._resView);
                this.txt_name.text = managers.LoginManager.inst.account.getId();
                this._editorView = new view.elements.EditorView();
                this.addChild(this._editorView);
                this.setDomainTabs();
                this.tab.selectedIndex = 0;
                this._repositoryTree.btn_editor.on(Laya.Event.CLICK, this, this.onClickHandler);
                this._repositoryTree.btn_delete.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.setPreviewComboxList();
                this.cbx_view.selectHandler = new Laya.Handler(this, this.selectPreviewTabHandler);
                this.cbx_view.selectedIndex = 0;
                this.btn_upload.callback = new Laya.Handler(this, this.upload);
                this.btn_manager.callback = new Laya.Handler(this, this.managerRes);
                managers.EventManager.getInstance().on(core.EventType.Language_Changed, this, this.changeLanguage);
                managers.EventManager.getInstance().on(core.EventType.S2C_All_Project_List, this, this.update);
                this.onResize();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
            }
            managerRes() {
                this._fork = !this._fork;
                managers.EventManager.getInstance().event(core.EventType.Fork_Res, this._fork);
                this.btn_moveTo.visible = this._fork;
            }
            btnClickHandler(evt) {
                switch (evt.currentTarget) {
                    case this.btn_hide_editor:
                        this._showEditor = !this._showEditor;
                        this._editorView.visible = this._showEditor;
                        if (this._showEditor) {
                            if (this.cbx_view.selectedLabel == MainView.D2)
                                this._preview2DView.visible = true;
                            else if (this.cbx_view.selectedLabel == MainView.D3) {
                                this._preview3DView.visible = true;
                                this._preview3DView.addBabylonView(Laya.stage.width - this._preview3DView.x - 10, Laya.stage.height - this._preview3DView.y - this._editorView.height - 20);
                            }
                        }
                        else {
                            if (this.cbx_view.selectedLabel == MainView.D2)
                                this._preview2DView.visible = false;
                            else if (this.cbx_view.selectedLabel == MainView.D3) {
                                this._preview3DView.visible = false;
                                this._preview3DView.removeBabylonView();
                            }
                        }
                        break;
                    case this.btn_save_args:
                        break;
                    case this.btn_moveTo:
                        this.box_fork_tree.visible = !this.box_fork_tree.visible;
                        if (this.box_fork_tree.visible) {
                            this.tree_fork.xml = Laya.Utils.parseXMLFromString(managers.ProjectManager.inst.getUploadPathXMLData());
                        }
                        break;
                    case this.btn_fork_no:
                        this.cancelForkView();
                        break;
                    case this.btn_fork_ok:
                        if (this._resView.list_items.array) {
                            let resItem = null;
                            let substatnceExtras = new Array();
                            for (let i = 0, len = this._resView.list_items.array.length; i < len; ++i) {
                                resItem = this._resView.list_items.getCell(i);
                                if (resItem && resItem.check.selected) {
                                    substatnceExtras.push(this._resView.list_items.array[i]);
                                }
                            }
                            let path = this.tree_fork.array[this.tree_fork.selectedIndex];
                            proxy.HttpProxy.req_fork_res(substatnceExtras, path.domain, path.project, path.directory, path.group);
                            this.cancelForkView();
                        }
                        break;
                }
            }
            cancelForkView() {
                this.btn_moveTo.visible = false;
                this.box_fork_tree.visible = false;
                this._fork = false;
                managers.EventManager.getInstance().event(core.EventType.Fork_Res, false);
            }
            selectPreviewTabHandler() {
                if (this._preview2DView)
                    this._preview2DView.visible = false;
                if (this._preview3DView) {
                    this._preview3DView.visible = false;
                    this._preview3DView.removeBabylonView();
                }
                this.sp_preview.x = this._resView.x + this._resView.width + 10;
                this.sp_preview.y = this._resView.y;
                switch (this.cbx_view.selectedLabel) {
                    case MainView.D2:
                        // 2d预览
                        if (!this._preview2DView) {
                            this._preview2DView = new view.elements.Preview2DView();
                            this.sp_preview.addChild(this._preview2DView);
                        }
                        this._preview2DView.visible = true;
                        break;
                    case MainView.D3:
                        // 3d预览
                        if (!this._preview3DView) {
                            this._preview3DView = new view.elements.Preview3DView();
                            this.sp_preview.addChild(this._preview3DView);
                            this._preview3DView.addBabylonView(Laya.stage.width - this._preview3DView.x - 10, Laya.stage.height - this._preview3DView.y - this._editorView.height - 20);
                            if (this._resView.list_items.array && this._resView.list_items.selectedIndex < this._resView.list_items.array.length) {
                                let substatnceExtra = this._resView.list_items.array[this._resView.list_items.selectedIndex];
                                this._preview3DView.iframeCB = () => {
                                    this._preview3DView.send(substatnceExtra.meshList);
                                    this._preview3DView.send(substatnceExtra.updateTexture);
                                };
                            }
                        }
                        this._preview3DView.visible = true;
                        break;
                }
            }
            setPreviewComboxList() {
                this.cbx_view.labels = MainView.PREVIEW_TABS.join(",");
            }
            selectResItemHandler(index) {
                if (index < 0)
                    return;
                this.tab.selectedIndex = -1;
                let substatnceExtra = this._resView.list_items.array[index];
                if (this.cbx_view.selectedLabel == MainView.D2 && this._preview2DView) {
                    let urls = [substatnceExtra.preview2d, substatnceExtra.preview3d];
                    this._preview2DView.data = urls;
                    this._preview2DView.size(Laya.stage.width - this.sp_preview.x - 10, Laya.stage.height - this.sp_preview.y - this._editorView.height - 20);
                }
                else if (this.cbx_view.selectedLabel == MainView.D3 && this._preview3DView) {
                    this._preview3DView.iframeCB = () => {
                        this._preview3DView.send(substatnceExtra.meshList);
                        this._preview3DView.send(substatnceExtra.updateTexture);
                    };
                    this._preview3DView.size(Laya.stage.width - this.sp_preview.x - 10, Laya.stage.height - this.sp_preview.y - this._editorView.height - 20);
                }
                this._editorView.setData(substatnceExtra);
            }
            update() {
                this.tab.selectedIndex = -1;
                this.setDomainTabs();
                this.tab.selectedIndex = 0;
                this.cbx_view.selectedIndex = 0;
            }
            upload() {
                if (!this._uploadView) {
                    this._uploadView = new view.elements.UploadView();
                    this._uploadView.btn_cancelUpload.on(Laya.Event.CLICK, this, this.cancelUpload);
                    this.addChild(this._uploadView);
                    this._resView.disableLinks(true);
                }
                else {
                    this._uploadView.destroy(true);
                    this._uploadView = null;
                    this._resView.disableLinks(false);
                }
            }
            cancelUpload(evt) {
                this._uploadView.destroy(true);
                this._uploadView = null;
            }
            onClickHandler(evt) {
                if (evt.target == this._repositoryTree.btn_delete) {
                }
                else if (evt.target == this._repositoryTree.btn_editor) {
                    this._editor = !this._editor;
                    managers.EventManager.getInstance().event(core.EventType.Editor_Res_Group, this._editor);
                }
            }
            setDirectoriesTree() {
                let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                if (project) {
                    let data = project.getRepository(project.curRepository).getDirectoriesXMLData();
                    if (data) {
                        this._repositoryTree.tree_repository.xml = Laya.Utils.parseXMLFromString(data);
                    }
                }
            }
            repositoryItemHandler(evt, index) {
                if (evt.type == Laya.Event.CLICK) {
                    this._resView.list_items.selectedIndex = -1;
                    let item = this._repositoryTree.tree_repository.array[index];
                    let lbl = item.label;
                    let level = item.level;
                    let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                    if (project) {
                        let repository = project.getRepository(project.curRepository);
                        if (repository) {
                            repository.curDirectory = lbl;
                            proxy.HttpProxy.req_repository_directory_items(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject, repository.curDirectory, item.group ? item.group : "");
                        }
                    }
                }
            }
            projectTreeSelectHandler(index) {
                if (!this._mainTree.tree_main.array || this._mainTree.tree_main.array.length <= index)
                    return;
                let item = this._mainTree.tree_main.array[index];
                managers.ProjectManager.inst.curProject = item.project;
                let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                if (project) {
                    project.curRepository = utils.TypeUtil.toRepositoryEnum(item.repository);
                    this.setDirectoriesTree();
                    proxy.ProtobuffProxy.req_get_project_repository(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject, project.curRepository);
                }
            }
            selectTabHandler() {
                let index = this.tab.selectedIndex;
                let name = this.tab.labels.split(",")[index];
                managers.ProjectManager.inst.curDomain = name;
                this.setProjectsTree(name);
            }
            setDomainTabs() {
                let names = managers.ProjectManager.inst.getDomains();
                this.tab.labels = names.join(",");
            }
            setProjectsTree(domain) {
                let data = managers.ProjectManager.inst.getProjectXMLData(domain);
                if (data) {
                    this._mainTree.tree_main.xml = Laya.Utils.parseXMLFromString(data);
                }
            }
            destroy(destroyChild) {
                this.btn_hide_editor.off(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_save_args.off(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_moveTo.off(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_fork_ok.off(Laya.Event.CLICK, this, this.btnClickHandler);
                this.btn_fork_no.off(Laya.Event.CLICK, this, this.btnClickHandler);
                this._repositoryTree.btn_editor.off(Laya.Event.CLICK, this, this.onClickHandler);
                this._repositoryTree.btn_delete.off(Laya.Event.CLICK, this, this.onClickHandler);
                events.off(core.EventType.S2C_Substance_Repository, this, this.setDirectoriesTree);
                super.destroy(destroyChild);
                managers.EventManager.getInstance().off(core.EventType.Language_Changed, this, this.changeLanguage);
                managers.EventManager.getInstance().off(core.EventType.S2C_All_Project_List, this, this.update);
                this.off(Laya.Event.RESIZE, this, this.onResize);
                this._mainTree.destroy(true);
                this._mainTree = null;
            }
            onResize() {
                this.bg_head.graphics.clear();
                this.bg_head.graphics.drawRect(0, 0, Laya.stage.width, 52, "#34363d");
                this.width = Laya.stage.width;
                this.height = Laya.stage.height;
                this.graphics.clear();
                this.graphics.drawRect(0, 0, this.width, this.height, "#232324");
                this.btn_loginout.x = Laya.stage.width - 28 - this.btn_loginout.width;
                this.txt_name.x = this.btn_loginout.x - 20 - this.txt_name.width;
                this.icon_head.x = this.txt_name.x - 15 - this.icon_head.width;
                this.sp_preview.x = this._resView.x + this._resView.width + 10;
                this.sp_preview.y = this._resView.y;
                if (this._preview2DView) {
                    this._preview2DView.size(Laya.stage.width - this.sp_preview.x - 10, Laya.stage.height - this.sp_preview.y - this._editorView.height - 10);
                }
                if (this._preview3DView) {
                    this._preview3DView.size(Laya.stage.width - this.sp_preview.x - 10, Laya.stage.height - this.sp_preview.y - this._editorView.height - 10);
                }
                this._editorView.x = this._resView.x + this._resView.width + 10;
                this._editorView.y = Laya.stage.height - this._editorView.height;
            }
            changeLanguage() {
                this.btn_loginout.label = lang.Lang.Get(lang.LangID.Lang_LoginOut);
                this.btn_upload.btn.label = lang.Lang.Get(lang.LangID.Lang_Upload);
                this.btn_manager.btn.label = "资源管理"; //lang.Lang.Get();
                this.btn_hide_editor.btn.label = "隐藏编辑区";
                this.btn_save_args.btn.label = "保存";
            }
        }
        MainView.D2 = "2D";
        MainView.D3 = "3D";
        MainView.PREVIEW_TABS = [MainView.D2, MainView.D3];
        views.MainView = MainView;
    })(views = view.views || (view.views = {}));
})(view || (view = {}));
//# sourceMappingURL=MainView.js.map