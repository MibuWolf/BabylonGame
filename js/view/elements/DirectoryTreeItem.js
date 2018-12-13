/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class DirectoryTreeItem extends ui.elements.DirectoryTreeItemUI {
            constructor() {
                super();
                this.init();
            }
            init() {
                this.box_select.on(Laya.Event.MOUSE_OVER, this, this.onMouseHandler);
                this.box_select.on(Laya.Event.MOUSE_OUT, this, this.onMouseHandler);
                this.btn_addGroup.on(Laya.Event.MOUSE_OUT, this, this.onClickHandler);
            }
            onClickHandler() {
                let project = managers.ProjectManager.inst.getProject(this.dataSource.domain, this.dataSource.project);
                if (project) {
                    let repository = project.getRepository(utils.TypeUtil.toRepositoryEnum(this.dataSource.repository_type));
                    if (repository) {
                        let directory = repository.getDirectory(this.dataSource.label);
                        if (directory) {
                            let group = directory.createDefaultResGroup();
                            directory.addResGroup(group);
                            managers.EventManager.getInstance().event(core.EventType.S2C_Substance_Repository);
                        }
                    }
                }
            }
            destroy(destroyChild) {
                this.box_select.off(Laya.Event.MOUSE_OVER, this, this.onMouseHandler);
                this.box_select.off(Laya.Event.MOUSE_OUT, this, this.onMouseHandler);
                this.btn_addGroup.off(Laya.Event.MOUSE_OUT, this, this.onClickHandler);
                this.input.off(Laya.Event.BLUR, this, this.groupBlurHandler);
                this.input.off(Laya.Event.BLUR, this, this.directorBlurHandler);
                managers.EventManager.getInstance().off(core.EventType.Editor_Res_Group, this, this.changeEditorModel);
                super.destroy(destroyChild);
            }
            groupBlurHandler() {
                this.input.visible = false;
                this.icon_all.visible = false;
                this.txt_label.fontSize = 16;
                this.txt_label.x = this.icon_all.x;
                this.txt_label.text = this.input.text.trim();
                this.txt_label.visible = true;
                let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                if (project) {
                    let repository = project.getRepository(project.curRepository);
                    if (repository) {
                        let directory = repository.getDirectory(repository.curDirectory);
                        if (directory) {
                            if (directory.changeResGroupName(this.dataSource.label, this.txt_label.text))
                                proxy.ProtobuffProxy.req_add_repository_group(this.dataSource.domain, this.dataSource.project, this.dataSource.repository_type, this.dataSource.directory, this.txt_label.text);
                        }
                    }
                }
            }
            directorBlurHandler() {
                this.input.visible = false;
                this.icon_all.visible = false;
                this.txt_label.fontSize = 16;
                this.txt_label.x = this.icon_all.x;
                this.txt_label.text = this.input.text.trim();
                this.txt_label.visible = true;
                let project = managers.ProjectManager.inst.getProject(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject);
                if (project) {
                    let repository = project.getRepository(project.curRepository);
                    if (repository) {
                        if (repository.changeDirectoryName(this.dataSource.label, this.txt_label.text))
                            proxy.ProtobuffProxy.req_add_repository_group(managers.ProjectManager.inst.curDomain, managers.ProjectManager.inst.curProject, project.curRepository, "", this.txt_label.text);
                    }
                }
            }
            onMouseHandler(evt) {
                this.txt_label.color = evt.type == Laya.Event.MOUSE_OVER ? "#ffffff" : "#a0a0a0";
            }
            setData(data) {
                this.btn_addGroup.visible = false;
                if (data.level == "0") {
                    this.icon_all.visible = true;
                    this.txt_label.fontSize = 24;
                }
                else if (data.level == "1") {
                    this.icon_all.visible = false;
                    this.txt_label.fontSize = 20;
                    this.txt_label.x = this.icon_all.x;
                }
                else if (data.level == "2") {
                    if (data.repository_type && data.tmp && data.tmp.toString() == "true") {
                        this.input.visible = true;
                        this.input.fontSize = 16;
                        this.icon_all.visible = this.txt_label.visible = false;
                        this.input.x = this.icon_all.x;
                        this.input.focus = true;
                        this.input.text = this.dataSource.label;
                        this.input.on(Laya.Event.BLUR, this, this.directorBlurHandler);
                    }
                    else {
                        this.icon_all.visible = false;
                        this.txt_label.fontSize = 16;
                        this.txt_label.x = this.icon_all.x;
                    }
                }
                else if (data.level == "3") {
                    if (data.tmp && data.tmp.toString() == "true") {
                        this.input.visible = true;
                        this.input.fontSize = 16;
                        this.icon_all.visible = this.txt_label.visible = false;
                        this.input.x = this.icon_all.x;
                        this.input.focus = true;
                        this.input.text = this.dataSource.label;
                        this.input.on(Laya.Event.BLUR, this, this.groupBlurHandler);
                    }
                    else {
                        this.icon_all.visible = false;
                        this.txt_label.fontSize = 16;
                        this.txt_label.x = this.icon_all.x;
                    }
                }
                else if (data.level == "4") {
                    this.icon_all.visible = false;
                    this.txt_label.fontSize = 14;
                    this.txt_label.x = this.icon_all.x;
                }
                if (data.editor && data.editor.toString() == "true") {
                    managers.EventManager.getInstance().on(core.EventType.Editor_Res_Group, this, this.changeEditorModel);
                }
                else {
                    managers.EventManager.getInstance().off(core.EventType.Editor_Res_Group, this, this.changeEditorModel);
                }
            }
            changeEditorModel(enable) {
                this.btn_addGroup.visible = enable;
            }
        }
        elements.DirectoryTreeItem = DirectoryTreeItem;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=DirectoryTreeItem.js.map