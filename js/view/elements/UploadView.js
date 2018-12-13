/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class UploadView extends ui.elements.UploadViewUI {
            constructor() {
                super();
                this._changed = false;
                this.uploadStart = () => {
                    this.progress_01.img_error.visible = false;
                    this.progress_01.progress_info.visible = false;
                    this.progress_01.progress_title.color = "#ffffff";
                    this.clip_num01.index = 1;
                    this.progress_01.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Upload_Progress) + "   0%";
                };
                this.uploadComplete = (code) => {
                    if (code == svr_to_client.status_code.success) {
                        this.progress_01.progress_info.visible = false;
                        this.img_ok01.visible = true;
                        this.img_error01.visible = false;
                        this.progress_01.progress.value = 1;
                        this.progress_01.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Upload_Progress) + "  100%";
                        proxy.HttpProxy.req_substance_files_valid_check(this.filesCheckComplete);
                        this.filesCheckStart();
                    }
                    else {
                        this.progress_01.progress_info.visible = true;
                        this.img_ok01.visible = false;
                        this.img_error01.visible = true;
                        this.progress_01.img_error.visible = true;
                        this.progress_01.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.filesCheckComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.filesCheckProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_02.progress_info.visible = false;
                        this.img_ok02.visible = true;
                        this.img_error02.visible = false;
                        this.progress_02.progress.value = 1;
                        this.progress_02.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Files_Check) + "  100%";
                        proxy.HttpProxy.req_substance_pbr_check(this.pbrCheckComplete);
                        this.pbrCheckStart();
                    }
                    else {
                        this.progress_02.progress_info.visible = true;
                        this.img_ok02.visible = false;
                        this.img_error02.visible = true;
                        this.progress_02.img_error.visible = true;
                        this.progress_02.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.pbrCheckStart = () => {
                    this.progress_03.img_error.visible = false;
                    this.progress_03.progress_info.visible = false;
                    this.progress_03.progress_title.color = "#ffffff";
                    this.clip_num03.index = 1;
                    this.progress_03.progress_title.text = lang.Lang.Get(lang.LangID.Lang_PBR_Check) + "   0%";
                    Laya.timer.loop(500, this, this.pbrCheckProgress);
                };
                this.pbrCheckProgress = () => {
                    this.progress_03.progress.value = this.progress_03.progress.value > 0.8 ? this.progress_03.progress.value : this.progress_03.progress.value + 0.1;
                    this.progress_03.progress_title.text = lang.Lang.Get(lang.LangID.Lang_PBR_Check) + "  " + Math.floor(this.progress_03.progress.value * 100) + "%";
                };
                this.pbrCheckComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.pbrCheckProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_03.progress_info.visible = false;
                        this.img_ok03.visible = true;
                        this.img_error03.visible = false;
                        this.progress_03.progress.value = 1;
                        this.progress_03.progress_title.text = lang.Lang.Get(lang.LangID.Lang_PBR_Check) + "  100%";
                        proxy.HttpProxy.req_substance_profile_check(this.profileCheckComplete);
                        this.profileCheckStart();
                    }
                    else {
                        this.progress_03.progress_info.visible = true;
                        this.img_ok03.visible = false;
                        this.img_error03.visible = true;
                        this.progress_03.img_error.visible = true;
                        this.progress_03.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.profileCheckComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.profileCheckProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_04.progress_info.visible = false;
                        this.img_ok04.visible = true;
                        this.img_error04.visible = false;
                        this.progress_04.progress.value = 1;
                        this.progress_04.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Profile_Check) + "  100%";
                        proxy.HttpProxy.req_substance_images_output(this.texturesOutputComplete);
                        this.texturesOutputStart();
                    }
                    else {
                        this.progress_04.progress_info.visible = true;
                        this.img_ok04.visible = false;
                        this.img_error04.visible = true;
                        this.progress_04.img_error.visible = true;
                        this.progress_04.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.profileCheckStart = () => {
                    this.progress_04.img_error.visible = false;
                    this.progress_04.progress_info.visible = false;
                    this.progress_04.progress_title.color = "#ffffff";
                    this.clip_num04.index = 1;
                    this.progress_04.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Profile_Check) + "   0%";
                    Laya.timer.loop(500, this, this.profileCheckProgress);
                };
                this.profileCheckProgress = () => {
                    this.progress_04.progress.value = this.progress_04.progress.value > 0.8 ? this.progress_04.progress.value : this.progress_04.progress.value + 0.05;
                    this.progress_04.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Profile_Check) + "  " + Math.floor(this.progress_04.progress.value * 100) + "%";
                };
                this.texturesOutputComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.texturesOutputProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_05.progress_info.visible = false;
                        this.img_ok05.visible = true;
                        this.img_error05.visible = false;
                        this.progress_05.progress.value = 1;
                        this.progress_05.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Textures_Output) + "  100%";
                        proxy.HttpProxy.req_substance_thumbs_output(this.thumbsOutputComplete);
                        this.thumbsOutputStart();
                    }
                    else {
                        this.progress_05.progress_info.visible = true;
                        this.img_ok05.visible = false;
                        this.img_error05.visible = true;
                        this.progress_05.img_error.visible = true;
                        this.progress_05.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.texturesOutputStart = () => {
                    this.progress_05.img_error.visible = false;
                    this.progress_05.progress_info.visible = false;
                    this.progress_05.progress_title.color = "#ffffff";
                    this.clip_num05.index = 1;
                    this.progress_05.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Textures_Output) + "   0%";
                    Laya.timer.loop(1000, this, this.texturesOutputProgress);
                };
                this.texturesOutputProgress = () => {
                    this.progress_05.progress.value = this.progress_05.progress.value > 0.9 ? this.progress_05.progress.value : this.progress_05.progress.value + 0.05;
                    this.progress_05.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Textures_Output) + "  " + Math.floor(this.progress_05.progress.value * 100) + "%";
                };
                this.thumbsOutputComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.thumbsOutputProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_06.progress_info.visible = false;
                        this.img_ok06.visible = true;
                        this.img_error06.visible = false;
                        this.progress_06.progress.value = 1;
                        this.progress_06.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Create_Thumbs) + "  100%";
                        proxy.HttpProxy.req_substance_to_res(this.toResComplete);
                        this.toResStart();
                    }
                    else {
                        this.progress_06.progress_info.visible = true;
                        this.img_ok06.visible = false;
                        this.img_error06.visible = true;
                        this.progress_06.img_error.visible = true;
                        this.progress_06.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.thumbsOutputStart = () => {
                    this.progress_06.img_error.visible = false;
                    this.progress_06.progress_info.visible = false;
                    this.progress_06.progress_title.color = "#ffffff";
                    this.clip_num06.index = 1;
                    this.progress_06.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Create_Thumbs) + "   0%";
                    Laya.timer.loop(500, this, this.thumbsOutputProgress);
                };
                this.toResComplete = (code) => {
                    code = svr_to_client.status_code.success; // for test
                    Laya.timer.clear(this, this.toResProgress);
                    if (code == svr_to_client.status_code.success) {
                        this.progress_07.progress_info.visible = false;
                        this.img_ok07.visible = true;
                        this.img_error07.visible = false;
                        this.progress_07.progress.value = 1;
                        this.progress_07.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Import_Repository) + "  100%";
                    }
                    else {
                        this.progress_07.progress_info.visible = true;
                        this.img_ok07.visible = false;
                        this.img_error07.visible = true;
                        this.progress_07.img_error.visible = true;
                        this.progress_07.progress_info.text = lang.Lang.Get(code);
                    }
                };
                this.toResStart = () => {
                    this.progress_07.img_error.visible = false;
                    this.progress_07.progress_info.visible = false;
                    this.progress_07.progress_title.color = "#ffffff";
                    this.clip_num07.index = 1;
                    this.progress_07.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Import_Repository) + "   0%";
                    Laya.timer.loop(500, this, this.toResProgress);
                };
                this.uploadProgress = (evt) => {
                    if (evt.lengthComputable) {
                        let value = evt.loaded / evt.total;
                        this.progress_01.progress.value = value > 0.9 ? 0.9 : value; // 不能达到100%
                        this.progress_01.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Upload_Progress) + "  " + Math.floor(this.progress_01.progress.value * 100) + "%";
                    }
                    else {
                        console.log("不能计算的进度");
                    }
                };
            }
            initialize() {
                this.addFileUpload();
                this._input_name = new view.elements.CustomInput(420, 32, lang.Lang.Get(lang.LangID.Lang_SubstanceName));
                this._input_name.pos(0, 91);
                this.box_uploadView.addChild(this._input_name);
                this._input_file = new view.elements.CustomInput(315, 34, lang.Lang.Get(lang.LangID.Lang_FilePath));
                this.box_upload.addChild(this._input_file);
                this.tree_path.xml = Laya.Utils.parseXMLFromString(managers.ProjectManager.inst.getUploadPathXMLData());
                this._input_tag = new view.elements.CustomInput(420, 34, lang.Lang.Get(lang.LangID.Lang_Substance_Tag));
                this._input_tag.input.prompt = "tag1,tag2...";
                this._input_tag.pos(0, 421);
                this.box_uploadView.addChild(this._input_tag);
                this._desc = new view.elements.CustomTextArea(422, 108, lang.Lang.Get(lang.LangID.Lang_SubstanceDesc));
                this._desc.pos(0, 463);
                this.box_uploadView.addChild(this._desc);
                this._log = new view.elements.CustomTextArea(422, 108, lang.Lang.Get(lang.LangID.Lang_CommitLog));
                this._log.pos(0, 584);
                this.box_uploadView.addChild(this._log);
                this.changeLanguage();
                this.onResize();
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
                managers.EventManager.getInstance().on(core.EventType.Language_Changed, this, this.changeLanguage);
                this.btn_OpenUpload.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_cancelUpload.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_submitUpload.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_return.on(Laya.Event.CLICK, this, this.onClickHandler);
                this.cbx_prefabs.labels = this.prefabsLabels.join(",");
                this.progress_01.progress.value = 0;
                this.progress_02.progress.value = 0;
                this.progress_03.progress.value = 0;
                this.progress_04.progress.value = 0;
                this.progress_05.progress.value = 0;
                this.progress_06.progress.value = 0;
                this.progress_07.progress.value = 0;
                this.progress_08.progress.value = 0;
            }
            get prefabsLabels() {
                let arr = new Array();
                managers.SubstanceManager.inst.prefabs.forEach((value) => {
                    value.submeshs.forEach((submesh) => {
                        arr.push(value.file.substring(0, value.file.indexOf(".")) + UploadView._SPLIT_TAG + submesh);
                    });
                });
                return arr;
            }
            addFileUpload() {
                this._file = Laya.Browser.document.createElement("input");
                let pos = this.btn_OpenUpload.localToGlobal(new Laya.Point(0, 0));
                let styleStr = "position: absolute; display: inline-block; background: #D0EEFF; text-decoration: none;" +
                    "text-indent: 0;filter:alpha(opacity=0);opacity:0;";
                styleStr += "left:" + pos.x + "px;";
                styleStr += "top:" + pos.y + "px;";
                styleStr += "width:" + this.btn_OpenUpload.width + "px;";
                styleStr += "height:" + this.btn_OpenUpload.height + "px;";
                this._file.type = "file";
                this._file.webkitdirectory = true;
                this._file.setAttribute("style", styleStr);
                this._file.style.zIndex = 999;
                Laya.Browser.document.body.appendChild(this._file);
                let self = this;
                this._file.onchange = function (e) {
                    self._data = new FormData();
                    let fileObjs = self._file.files;
                    for (let i = 0, len = fileObjs.length; i < len; ++i) {
                        self._input_file.input.text = fileObjs[i].webkitRelativePath.substring(0, fileObjs[i].webkitRelativePath.indexOf("/"));
                        if (/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.sbs$/.test(fileObjs[i].webkitRelativePath)) {
                            self._data.append("sbs", fileObjs[i]);
                        }
                        else if (/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.sbsprs$/.test(fileObjs[i].webkitRelativePath)) {
                            self._data.append("sbsprs", fileObjs[i]);
                        }
                        else if (/^[a-zA-Z0-9_-]+\/dependencies\//.test(fileObjs[i].webkitRelativePath)) {
                            self._data.append("dependencies", fileObjs[i]);
                        }
                    }
                    self._changed = true;
                };
            }
            onClickHandler(evt) {
                switch (evt.target) {
                    case this.btn_return:
                        this.box_progressView.visible = false;
                        this.box_uploadView.visible = true;
                        break;
                    case this.btn_submitUpload:
                        let prefabArgs = this.cbx_prefabs.selectedLabel.split(UploadView._SPLIT_TAG);
                        let path = this.tree_path.array[this.tree_path.selectedIndex];
                        if (this._changed) {
                            this._data.append("token", managers.LoginManager.inst.account.token);
                            this._data.append("name", this._input_name.input.text.trim());
                            this._data.append("obj_id", managers.SubstanceManager.inst.getPrefab(prefabArgs[0]).id);
                            this._data.append("submesh", prefabArgs[1]);
                            this._data.append("project", path.domain);
                            this._data.append("sub_project", path.project);
                            this._data.append("parent", path.directory);
                            this._data.append("target", path.group);
                            this._data.append("tags", this._input_tag.input.text.trim());
                            this._data.append("describe", this._desc.textarea.text.trim());
                            this._data.append("log", this._log.textarea.text.trim());
                            proxy.HttpProxy.req_substance_preupload(this._data, this.uploadComplete, this.uploadStart, this.uploadProgress);
                            this.box_progressView.visible = true;
                            this.box_uploadView.visible = false;
                        }
                        this._changed = false;
                        break;
                }
            }
            filesCheckStart() {
                this.progress_02.img_error.visible = false;
                this.progress_02.progress_info.visible = false;
                this.progress_02.progress_title.color = "#ffffff";
                this.clip_num02.index = 1;
                this.progress_02.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Files_Check) + "   0%";
                Laya.timer.loop(1000, this, this.filesCheckProgress);
            }
            filesCheckProgress() {
                this.progress_02.progress.value = this.progress_02.progress.value > 0.9 ? this.progress_02.progress.value : this.progress_02.progress.value + 0.05;
                this.progress_02.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Files_Check) + "  " + Math.floor(this.progress_02.progress.value * 100) + "%";
            }
            toResProgress() {
                this.progress_07.progress.value = this.progress_07.progress.value > 0.8 ? this.progress_07.progress.value : this.progress_07.progress.value + 0.05;
                this.progress_07.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Import_Repository) + "  " + Math.floor(this.progress_07.progress.value * 100) + "%";
            }
            thumbsOutputProgress() {
                this.progress_06.progress.value = this.progress_06.progress.value > 0.8 ? this.progress_06.progress.value : this.progress_06.progress.value + 0.05;
                this.progress_06.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Create_Thumbs) + "  " + Math.floor(this.progress_06.progress.value * 100) + "%";
            }
            changeLanguage() {
                this.txt_upload.text = lang.Lang.Get(lang.LangID.Lang_Upload);
                this.txt_desc.text = lang.Lang.Get(lang.LangID.Lang_UploadDes);
                this._input_name.title = lang.Lang.Get(lang.LangID.Lang_SubstanceName);
                this._input_tag.title = lang.Lang.Get(lang.LangID.Lang_Substance_Tag);
                this._desc.txt_title.text = lang.Lang.Get(lang.LangID.Lang_SubstanceDesc);
                this._log.txt_title.text = lang.Lang.Get(lang.LangID.Lang_CommitLog);
                this._input_file.title = lang.Lang.Get(lang.LangID.Lang_FilePath);
                this.btn_cancelUpload.label = lang.Lang.Get(lang.LangID.Lang_Cancel);
                this.btn_OpenUpload.label = lang.Lang.Get(lang.LangID.Lang_Open);
                this.btn_submitUpload.label = lang.Lang.Get(lang.LangID.Lang_SubmitUpload);
                this.txt_project_slect.text = lang.Lang.Get(lang.LangID.Lang_Select_Project);
                this.txt_substance_tag.text = lang.Lang.Get(lang.LangID.Lang_Substance_Prefab);
                this.progress_01.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Upload_Progress);
                this.progress_02.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Files_Check);
                this.progress_03.progress_title.text = lang.Lang.Get(lang.LangID.Lang_PBR_Check);
                this.progress_04.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Profile_Check);
                this.progress_05.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Textures_Output);
                this.progress_06.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Create_Thumbs);
                this.progress_07.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Import_Repository);
                this.progress_08.progress_title.text = lang.Lang.Get(lang.LangID.Lang_Pass_Over);
                this.btn_return.label = lang.Lang.Get(lang.LangID.Lang_Return_Back);
            }
            onResize() {
                this.graphics.clear();
                this.graphics.drawRect(0, 0, this.width, Laya.stage.height - this.y, "#2B2B2B");
            }
            destroy(destroyChild) {
                super.destroy(destroyChild);
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
                managers.EventManager.getInstance().off(core.EventType.Language_Changed, this, this.changeLanguage);
                this.btn_OpenUpload.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_cancelUpload.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_submitUpload.off(Laya.Event.CLICK, this, this.onClickHandler);
                this.btn_return.off(Laya.Event.CLICK, this, this.onClickHandler);
            }
        }
        UploadView._SPLIT_TAG = ":";
        elements.UploadView = UploadView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=UploadView.js.map