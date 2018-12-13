var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var alerts;
    (function (alerts) {
        class CreateResGroupAlertUI extends Dialog {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.alerts.CreateResGroupAlertUI.uiView);
            }
        }
        CreateResGroupAlertUI.uiView = { "type": "Dialog", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 372, "skin": "ui/findPwd_eluaBg.png", "sizeGrid": "5,5,5,5", "height": 152 } }, { "type": "Label", "props": { "y": 4, "x": 99, "text": "Confirm Alert", "fontSize": 24, "color": "#a0a0a0", "align": "left" } }, { "type": "Image", "props": { "y": 31, "x": 0, "width": 372, "skin": "ui/eula_line.png", "height": 1, "sizeGrid": "0,10,0,10" } }, { "type": "Button", "props": { "y": 0, "x": 341, "var": "btn_close", "stateNum": 3, "skin": "ui/pwdFind_closeBtn.png", "name": "close" } }, { "type": "Button", "props": { "y": 110, "x": 19, "width": 106, "var": "btn_ok", "stateNum": 3, "skin": "ui/main_secondBtn.png", "sizeGrid": "5,5,5,5", "name": "ok", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "OK" } }, { "type": "Button", "props": { "y": 110, "x": 231, "width": 106, "var": "btn_no", "stateNum": 3, "skin": "ui/main_secondBtn.png", "sizeGrid": "5,5,5,5", "name": "no", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "Cancel" } }] }] };
        alerts.CreateResGroupAlertUI = CreateResGroupAlertUI;
    })(alerts = ui.alerts || (ui.alerts = {}));
})(ui || (ui = {}));
(function (ui) {
    var alerts;
    (function (alerts) {
        class EulaAlertUI extends Dialog {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.alerts.EulaAlertUI.uiView);
            }
        }
        EulaAlertUI.uiView = { "type": "Dialog", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 672, "var": "bg", "skin": "ui/findPwd_eluaBg.png", "sizeGrid": "5,5,5,5" } }, { "type": "Label", "props": { "y": 32, "x": 259, "text": "Privacy clause", "fontSize": 24, "color": "#a0a0a0", "align": "left" } }, { "type": "TextArea", "props": { "y": 108, "x": 65, "wordWrap": true, "width": 552, "var": "txtArea_content", "type": "text", "text": "Tencent regards user information security and privacy protection as its \"lifeline\". We adhere to the \"all value-based\" concept, committed to improving information processing transparency, enhance your ease of information management, protect your information and communication security. Tencent strictly abides by laws and regulations and follows the following privacy protection principles to provide you with more secure and reliable services: 1.Safe and reliable: We do our utmost to prevent your information leakage, damage, loss through reasonable and effective information security technology and management process. 2.Autonomous Choice: We provide you with convenient information management options so that you can make the right choice to manage your personal information. 3.Protection of communication secrets: We strictly abide by laws and regulations, protect your communication secrets, provide you with safe communication services. 4Reasonable and necessary: in order to provide better services to you and other users, we only collect the necessary information. 5.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information.  users, we only collect the necessary information. 5.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information. users, we only collect the necessary information. 5.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information.", "padding": "0,0,0,0", "leading": 6, "height": 591, "fontSize": 14, "editable": false, "color": "#a0a0a0" } }, { "type": "Image", "props": { "y": 81, "x": 72, "width": 530, "skin": "ui/eula_line.png", "height": 1, "sizeGrid": "0,10,0,10" } }, { "type": "Button", "props": { "y": 12, "x": 633, "var": "btn_close", "stateNum": 3, "skin": "ui/pwdFind_closeBtn.png" } }] }] };
        alerts.EulaAlertUI = EulaAlertUI;
    })(alerts = ui.alerts || (ui.alerts = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class BackgoundViewUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.BackgoundViewUI.uiView);
            }
        }
        BackgoundViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Image", "props": { "y": 1019, "x": 1756, "var": "img_logo", "skin": "ui/logo-murphy.png" } }, { "type": "Image", "props": { "y": 53, "x": 57, "skin": "ui/logo-pbr.png" } }, { "type": "Label", "props": { "y": 62, "x": 235, "var": "txt_title0", "text": "Physically Based Rendering", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": 88, "x": 235, "var": "txt_title1", "text": "Material tools", "fontSize": 36, "color": "#a0a0a0" } }] };
        elements.BackgoundViewUI = BackgoundViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class CustomInputUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.CustomInputUI.uiView);
            }
        }
        CustomInputUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_default", "skin": "ui/input_default.png", "sizeGrid": "5,5,5,5" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_focus", "skin": "ui/input_focus.png", "sizeGrid": "5,5,5,5" } }, { "type": "TextInput", "props": { "y": 4, "var": "input", "fontSize": 16, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 7, "x": 10, "var": "txt_title", "fontSize": 18, "color": "#a0a0a0" } }] };
        elements.CustomInputUI = CustomInputUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class CustomProgressBarUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.CustomProgressBarUI.uiView);
            }
        }
        CustomProgressBarUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "ProgressBar", "props": { "y": 24, "x": 2, "width": 349, "var": "progress", "skin": "ui/progress_ok.png", "sizeGrid": "0,20,0,20,0", "height": 10 } }, { "type": "Label", "props": { "x": 2, "width": 350, "var": "progress_title", "text": "项目选择", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 36, "width": 350, "visible": false, "var": "progress_info", "text": "项目选择", "height": 18, "fontSize": 16, "color": "#AC3B2B", "align": "left" } }, { "type": "Image", "props": { "y": 24, "x": 2, "width": 349, "visible": false, "var": "img_error", "skin": "ui/perror.png", "sizeGrid": "0,20,0,20" } }] }] };
        elements.CustomProgressBarUI = CustomProgressBarUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class CustomTextAreaUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.CustomTextAreaUI.uiView);
            }
        }
        CustomTextAreaUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_default", "skin": "ui/input_default.png", "sizeGrid": "5,5,5,5" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_focus", "skin": "ui/input_focus.png", "sizeGrid": "5,5,5,5" } }, { "type": "TextArea", "props": { "y": 31, "x": 0, "var": "textarea", "fontSize": 16, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": 7, "x": 10, "var": "txt_title", "fontSize": 16, "color": "#414142" } }] };
        elements.CustomTextAreaUI = CustomTextAreaUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class DirectoryTreeUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.DirectoryTreeItem", view.elements.DirectoryTreeItem);
                super.createChildren();
                this.createView(ui.elements.DirectoryTreeUI.uiView);
            }
        }
        DirectoryTreeUI.uiView = { "type": "View", "props": { "y": 51, "width": 0, "height": 0 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Tree", "props": { "y": 0, "x": 0, "width": 258, "var": "tree_main", "spaceLeft": 0, "spaceBottom": 5, "scrollBarSkin": "ui/vscroll.png", "height": 1025 }, "child": [{ "type": "DirectoryTreeItem", "props": { "runtime": "view.elements.DirectoryTreeItem", "renderType": "render", "name": "render" } }] }] };
        elements.DirectoryTreeUI = DirectoryTreeUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class DirectoryTreeItemUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.DirectoryTreeItemUI.uiView);
            }
        }
        DirectoryTreeItemUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Clip", "props": { "x": 0, "var": "box_select", "skin": "ui/main_tree_selectBox.png", "name": "selectBox", "clipY": 2 } }, { "type": "Clip", "props": { "y": 10, "x": 21, "var": "clip_arrow", "skin": "ui/main_treeArrow.png", "name": "arrow", "clipY": 2 } }, { "type": "Label", "props": { "y": 6, "x": 71, "var": "txt_label", "valign": "middle", "text": "所有资源", "name": "label", "fontSize": 24, "color": "#a0a0a0" } }, { "type": "Image", "props": { "y": 6, "x": 40, "var": "icon_all", "skin": "ui/main_all.png" } }, { "type": "Button", "props": { "y": 5, "x": 209, "visible": false, "var": "btn_addGroup", "skin": "ui/var_add.png" } }, { "type": "TextInput", "props": { "y": 6, "x": 71, "width": 126, "visible": false, "var": "input", "text": "dfdafda", "skin": "ui/input_focus.png", "sizeGrid": "0,0,0,0", "height": 22, "fontSize": 16, "color": "#a0a0a0" } }] };
        elements.DirectoryTreeItemUI = DirectoryTreeItemUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class EditorViewUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.EditorViewUI.uiView);
            }
        }
        EditorViewUI.uiView = { "type": "View", "props": { "y": 741, "x": 1061, "width": 0, "height": 0 }, "child": [{ "type": "Sprite", "props": { "y": 42, "x": 0, "width": 845, "var": "bg", "height": 286 } }, { "type": "Tab", "props": { "var": "tab", "space": 4, "skin": "ui/main_tab.png", "labels": "信息,编辑,更新", "labelSize": 16, "labelColors": "#a0a0a0,#ffffff,#ffffff" } }, { "type": "Box", "props": { "y": 72, "x": 35, "visible": false, "var": "box_info" }, "child": [{ "type": "Label", "props": { "y": -4, "x": -6, "var": "txt_name_title", "text": "物质名称：", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": -4, "x": 85, "var": "txt_name", "text": "XX某物质", "fontSize": 18, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 29, "x": -5, "var": "txt_desc_title", "text": "物质详细描述：", "fontSize": 16, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": 55, "x": 0, "wordWrap": true, "width": 738, "var": "txt_desc", "text": "dsssdd", "height": 188, "fontSize": 16, "color": "#ffffff" } }] }, { "type": "Box", "props": { "y": 0, "x": 0, "visible": false, "var": "box_editor" }, "child": [{ "type": "Label", "props": { "text": "label" } }] }, { "type": "Box", "props": { "y": 0, "x": 0, "visible": false, "var": "box_update" }, "child": [{ "type": "Label", "props": { "text": "label" } }] }] };
        elements.EditorViewUI = EditorViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class Preview2DViewUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.Preview2DViewUI.uiView);
            }
        }
        Preview2DViewUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "var": "sp_container" } }, { "type": "Button", "props": { "y": 283, "x": 24, "var": "btn_page_up", "stateNum": 2, "skin": "ui/main_page_up.png" } }, { "type": "Button", "props": { "y": 285, "x": 823, "var": "btn_page_down", "stateNum": 2, "skin": "ui/main_page_down.png" } }, { "type": "HBox", "props": { "var": "hbox" } }] };
        elements.Preview2DViewUI = Preview2DViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class Preview3DViewUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.Preview3DViewUI.uiView);
            }
        }
        Preview3DViewUI.uiView = { "type": "View", "props": {} };
        elements.Preview3DViewUI = Preview3DViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class RegisterInputUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.RegisterInputUI.uiView);
            }
        }
        RegisterInputUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg_default", "skin": "ui/bg_default.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "bg_focus", "skin": "ui/bg_focus.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "bg_error", "skin": "ui/bg_error.png" } }, { "type": "Label", "props": { "var": "label", "top": 11, "text": "Account:", "left": 10, "fontSize": 18, "font": "Arial", "color": "#a0a0a0", "bold": false } }, { "type": "TextInput", "props": { "y": 6, "x": 118, "width": 252, "var": "input", "height": 30, "fontSize": 18, "color": "#e9e4e1" } }] }] };
        elements.RegisterInputUI = RegisterInputUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class RepositoryTreeUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.DirectoryTreeItem", view.elements.DirectoryTreeItem);
                super.createChildren();
                this.createView(ui.elements.RepositoryTreeUI.uiView);
            }
        }
        RepositoryTreeUI.uiView = { "type": "View", "props": { "y": 51, "x": 258 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Button", "props": { "y": 21, "x": 101, "width": 70, "var": "btn_editor", "stateNum": 2, "labelSize": 16, "labelPadding": "0,0,0,25", "labelColors": "#a0a0a0,#ffffff,#ffffff", "labelAlign": "left", "label": "编辑", "height": 21 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_editor", "skin": "ui/main_editor.png", "clipY": 2 } }] }, { "type": "Button", "props": { "y": 21, "x": 185, "width": 71, "var": "btn_delete", "stateNum": 2, "labelSize": 16, "labelPadding": "0,0,0,25", "labelColors": "#a0a0a0,#ffffff,#ffffff", "labelAlign": "left", "label": "删除", "height": 21 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_delete", "skin": "ui/main_delete.png", "clipY": 2 } }] }, { "type": "Tree", "props": { "y": 65, "x": 0, "width": 258, "var": "tree_repository", "spaceLeft": 0, "spaceBottom": 5, "scrollBarSkin": "ui/vscroll.png" }, "child": [{ "type": "DirectoryTreeItem", "props": { "runtime": "view.elements.DirectoryTreeItem", "renderType": "render", "name": "render" } }] }, { "type": "Button", "props": { "y": 23, "x": 13, "width": 85, "var": "btn_addDir", "skin": "ui/last_btn.png", "labelSize": 16, "labelColors": "#a0a0a0,#ffffff,#ffffff", "label": "添加目录", "height": 18 } }] };
        elements.RepositoryTreeUI = RepositoryTreeUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class ResItemUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.ResItemUI.uiView);
            }
        }
        ResItemUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 260, "skin": "ui/main_item_bg.png", "sizeGrid": "5,5,5,5", "name": "selectBox", "height": 300, "clipY": 2 } }, { "type": "Image", "props": { "y": 2, "x": 2, "var": "img_res", "skin": "ui/proxy.png" } }, { "type": "Label", "props": { "y": 271, "x": 2, "width": 256, "var": "txt_name", "text": "大理石材质", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Box", "props": { "y": 231, "x": 187, "var": "box_normal" }, "child": [{ "type": "Button", "props": { "x": 37, "var": "btn_down", "stateNum": 2, "skin": "ui/main_down.png", "mouseThrough": true } }, { "type": "Button", "props": { "var": "btn_favorite", "stateNum": 2, "skin": "ui/main_shoucang.png", "clipY": 2 } }] }, { "type": "Box", "props": { "y": 231, "x": 224, "visible": false, "var": "box_fork" }, "child": [{ "type": "CheckBox", "props": { "var": "check", "skin": "ui/check.png" } }] }] };
        elements.ResItemUI = ResItemUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class ResViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.ResItem", view.elements.ResItem);
                super.createChildren();
                this.createView(ui.elements.ResViewUI.uiView);
            }
        }
        ResViewUI.uiView = { "type": "View", "props": { "y": 129, "x": 528 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 542, "var": "list_items", "vScrollBarSkin": "ui/vscroll.png", "spaceY": 8, "spaceX": 5, "repeatX": 2, "height": 951 }, "child": [{ "type": "ResItem", "props": { "runtime": "view.elements.ResItem", "renderType": "render", "name": "render" } }] }] };
        elements.ResViewUI = ResViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class UploadButtonUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(ui.elements.UploadButtonUI.uiView);
            }
        }
        UploadButtonUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn", "stateNum": 3, "skin": "ui/main_topBtn.png", "labelSize": 16, "labelPadding": "0,0,0,45", "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "left", "label": "添加上传" }, "child": [{ "type": "Clip", "props": { "y": 6, "x": 18, "var": "clip_icon", "skin": "ui/main_upload.png", "clipY": 2 } }] }] };
        elements.UploadButtonUI = UploadButtonUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var elements;
    (function (elements) {
        class UploadViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.CustomProgressBar", view.elements.CustomProgressBar);
                super.createChildren();
                this.createView(ui.elements.UploadViewUI.uiView);
            }
        }
        UploadViewUI.uiView = { "type": "View", "props": { "y": 126, "x": 527, "width": 525, "renderType": "render", "height": 0 }, "child": [{ "type": "Box", "props": { "y": 26, "x": 49, "var": "box_uploadView" }, "child": [{ "type": "Label", "props": { "x": 16, "var": "txt_upload", "text": "添加上传", "fontSize": 34, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": 40, "x": 16, "var": "txt_desc", "text": "添加上传的文件将保存在云端，方便随时查阅", "fontSize": 16, "color": "#a0a0a0" } }, { "type": "Box", "props": { "y": 708, "x": 2, "var": "box_upload" }, "child": [{ "type": "Button", "props": { "y": 0, "x": 318, "width": 106, "var": "btn_OpenUpload", "stateNum": 3, "skin": "ui/main_secondBtn.png", "sizeGrid": "5,5,5,5", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "Open" } }, { "type": "Button", "props": { "y": 49, "x": 152, "width": 126, "var": "btn_submitUpload", "stateNum": 3, "skin": "ui/main_firstBtn.png", "sizeGrid": "5,5,5,5", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "Submit Upload", "height": 34 } }, { "type": "Button", "props": { "y": 49, "x": 317, "width": 106, "var": "btn_cancelUpload", "stateNum": 3, "skin": "ui/main_secondBtn.png", "sizeGrid": "5,5,5,5", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "Cancel" } }] }, { "type": "ComboBox", "props": { "y": 378, "x": 2, "width": 420, "var": "cbx_prefabs", "skin": "ui/main_resList.png", "sizeGrid": "6,30,7,12", "scrollBarSkin": "ui/vscroll.png", "labels": "label1,label2", "labelSize": 18, "labelPadding": "8,10,10,150", "itemSize": 18, "itemColors": "#1e5f9c,#ffffff,#a0a0a0,#333333,#333333", "height": 32 } }, { "type": "Label", "props": { "y": 385, "x": 5, "var": "txt_substance_tag", "text": "项目选择", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Box", "props": { "y": 133 }, "child": [{ "type": "Image", "props": { "width": 423, "skin": "ui/tips_bg.png", "sizeGrid": "5,5,5,5", "height": 239 } }, { "type": "Label", "props": { "y": 9, "x": 8, "var": "txt_project_slect", "text": "上传位置：", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Tree", "props": { "y": 39, "x": 11, "width": 411, "var": "tree_path", "scrollBarSkin": "ui/vscroll.png", "height": 193 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 411, "skin": "ui/main_tree_selectBox.png", "name": "selectBox", "height": 34, "clipY": 2 } }, { "type": "Clip", "props": { "y": 10, "x": 21, "skin": "ui/main_treeArrow.png", "name": "arrow", "clipY": 2 } }, { "type": "Label", "props": { "y": 8, "x": 37, "valign": "middle", "text": "所有资源", "name": "label", "fontSize": 18, "color": "#a0a0a0" } }] }] }] }] }, { "type": "Box", "props": { "y": 69, "x": 50, "visible": false, "var": "box_progressView" }, "child": [{ "type": "Box", "props": {}, "child": [{ "type": "Clip", "props": { "y": 8, "var": "clip_num01", "skin": "ui/01.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error01", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok01", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_01", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 70 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num02", "skin": "ui/02.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error02", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok02", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_02", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 142 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num03", "skin": "ui/03.png", "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error03", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok03", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_03", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 212 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num04", "skin": "ui/04.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error04", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok04", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_04", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 281 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num05", "skin": "ui/05.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error05", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok05", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_05", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 352 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num06", "skin": "ui/06.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error06", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok06", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_06", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 427 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num07", "skin": "ui/07.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error07", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok07", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_07", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Box", "props": { "y": 496, "visible": false }, "child": [{ "type": "Image", "props": { "y": -25, "x": 15, "skin": "ui/uploadView_line.png" } }, { "type": "Clip", "props": { "y": 8, "var": "clip_num08", "skin": "ui/08.png", "index": 0, "clipY": 2 } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_error08", "skin": "ui/error.png" } }, { "type": "Image", "props": { "y": 8, "visible": false, "var": "img_ok08", "skin": "ui/ok.png" } }, { "type": "CustomProgressBar", "props": { "x": 42, "var": "progress_08", "runtime": "view.elements.CustomProgressBar" } }] }, { "type": "Button", "props": { "y": 507, "x": 266, "width": 106, "var": "btn_return", "stateNum": 3, "skin": "ui/main_secondBtn.png", "sizeGrid": "5,5,5,5", "labelSize": 18, "labelColors": "#ffffff,#ffffff,#ffffff", "labelAlign": "center", "label": "Return" } }] }] };
        elements.UploadViewUI = UploadViewUI;
    })(elements = ui.elements || (ui.elements = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        class FindPwdViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.RegisterInput", view.elements.RegisterInput);
                super.createChildren();
                this.createView(ui.views.FindPwdViewUI.uiView);
            }
        }
        FindPwdViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Label", "props": { "y": 76, "x": 542, "width": 292, "var": "txt_retrieve", "text": "Retrieve the password", "height": 18, "fontSize": 24, "color": "#a0a0a0", "align": "left" } }, { "type": "Image", "props": { "y": 48, "x": 514, "width": 80, "skin": "ui/pwdFind_line.png", "rotation": 90, "height": 2 } }, { "type": "Box", "props": { "y": 236, "x": 425, "var": "box_findPwd" }, "child": [{ "type": "Box", "props": { "y": 98, "x": 203, "visible": false, "var": "box_phoneOrEmail" }, "child": [{ "type": "Image", "props": { "y": 81, "skin": "ui/pwdFind_phone.png" } }, { "type": "Button", "props": { "y": 89, "x": 37, "width": 293, "var": "btn_phone", "stateNum": 3, "skin": "ui/last_btn.png", "sizeGrid": "15,30,15,30", "labelSize": 18, "labelPadding": "0,1", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "Cell phone retrieve password", "height": 42 } }, { "type": "Image", "props": { "x": 379, "width": 230, "skin": "ui/pwdFind_line.png", "sizeGrid": "0,5,0,5", "rotation": 90, "height": 1 } }, { "type": "Image", "props": { "y": 91, "x": 426, "skin": "ui/pwdFine_email.png" } }, { "type": "Button", "props": { "y": 89, "x": 485, "width": 293, "var": "btn_email", "stateNum": 3, "skin": "ui/last_btn.png", "sizeGrid": "15,30,15,30", "labelSize": 18, "labelPadding": "0,1", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "Email retrieve password", "height": 42 } }] }, { "type": "Box", "props": { "y": 147, "x": 320, "visible": false, "var": "box_fillPhone" }, "child": [{ "type": "Box", "props": { "y": -145, "x": -321 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 161, "skin": "ui/step_line.png" } }, { "type": "Image", "props": { "x": 464, "skin": "ui/2.png" } }, { "type": "Image", "props": { "x": 815, "skin": "ui/3.png" } }, { "type": "Image", "props": { "y": 20, "x": 510, "skin": "ui/step_line.png" } }, { "type": "Label", "props": { "y": 49, "x": 81, "width": 125, "var": "txt_11", "text": "Authentication", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 1, "width": 307, "var": "txt_11d", "text": "Please fill in the correct cell phone number", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Image", "props": { "y": 2, "x": 118, "skin": "ui/11.png" } }, { "type": "Label", "props": { "y": 49, "x": 429, "width": 125, "var": "txt_12", "text": "Set new password", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 415, "width": 178, "var": "txt_12d", "text": "Set your new passworld", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Label", "props": { "y": 49, "x": 801, "width": 91, "var": "txt_13", "text": "Complete", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 746, "width": 178, "var": "txt_13d", "text": "You have already finished", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }] }, { "type": "Label", "props": { "y": 11, "x": 395, "width": 205, "visible": false, "var": "txt_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Image", "props": { "y": 0, "x": -48, "width": 88, "skin": "ui/bg_default.png", "height": 42 } }, { "type": "Image", "props": { "y": 0, "x": 52, "width": 329, "skin": "ui/bg_default.png" } }, { "type": "Image", "props": { "y": 57, "x": -48, "width": 191, "skin": "ui/bg_default.png" } }, { "type": "Button", "props": { "y": 56, "x": 154, "width": 227, "var": "btn_request_code", "skin": "ui/last_btn.png", "labelSize": 16, "labelPadding": "1,2,2,10", "labelColors": "#e9e4e1,#1890ff,#1890ff", "label": "Request verification code", "height": 42 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 9, "skin": "ui/pwdFind_phoneCopy.png" } }] }, { "type": "Label", "props": { "y": 14, "x": -44, "width": 64, "text": "+86", "height": 18, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }, { "type": "Image", "props": { "y": 20, "x": 20, "skin": "ui/triangle.png" } }, { "type": "Image", "props": { "y": 0, "x": 52, "width": 329, "visible": false, "var": "phone_bg_error", "skin": "ui/bg_error.png" } }, { "type": "Image", "props": { "y": 0, "x": 51, "width": 329, "visible": false, "var": "phone_bg_focus", "skin": "ui/bg_focus.png" } }, { "type": "TextInput", "props": { "y": 7, "x": 94, "width": 272, "var": "phone_input", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1" } }, { "type": "Image", "props": { "y": 57, "x": -48, "width": 191, "skin": "ui/bg_focus.png" } }, { "type": "TextInput", "props": { "y": 63, "x": -33, "width": 164, "var": "code_input", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }, { "type": "Button", "props": { "y": 139, "x": -49, "var": "btn_phoneStep", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Next Step" } }, { "type": "Label", "props": { "y": 111, "x": -42, "width": 205, "visible": false, "var": "txt_code_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }] }, { "type": "Box", "props": { "y": 2, "x": 114, "visible": false, "var": "box_fillEmail" }, "child": [{ "type": "Box", "props": { "y": 0, "x": -115, "var": "box_progress" }, "child": [{ "type": "Image", "props": { "y": 20, "x": 161, "skin": "ui/step_line.png" } }, { "type": "Image", "props": { "x": 815, "skin": "ui/3.png" } }, { "type": "Image", "props": { "y": 20, "x": 510, "skin": "ui/step_line.png" } }, { "type": "Label", "props": { "y": 49, "x": 81, "width": 125, "var": "txt_21", "text": "Authentication", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 51, "width": 221, "var": "txt_21d", "text": "Please fill in the correct email", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Image", "props": { "y": 2, "x": 118, "skin": "ui/11.png" } }, { "type": "Label", "props": { "y": 49, "x": 429, "width": 125, "var": "txt_22", "text": "Set new password", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 415, "width": 178, "var": "txt_22d", "text": "Set your new passworld", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Label", "props": { "y": 49, "x": 801, "width": 91, "var": "txt_23", "text": "Complete", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 746, "width": 178, "var": "txt_23d", "text": "You have already finished", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Image", "props": { "y": -2, "x": 464, "skin": "ui/2.png" } }] }, { "type": "Box", "props": { "y": 164, "x": 158 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/bg_default.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "var": "email_bg_focus", "skin": "ui/bg_focus.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "var": "email_bg_error", "skin": "ui/bg_error.png" } }, { "type": "TextInput", "props": { "y": 6, "x": 28, "width": 346, "var": "email_input", "height": 30, "fontSize": 18, "color": "#e9e4e1" } }] }, { "type": "Label", "props": { "y": 177, "x": 602, "width": 205, "visible": false, "var": "txt_email_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Button", "props": { "y": 311, "x": 158, "var": "btn_emailStep", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Next Step" } }, { "type": "Button", "props": { "y": 234, "x": 362, "width": 227, "var": "btn_email_code", "skin": "ui/last_btn.png", "labelSize": 16, "labelPadding": "1,2,2,10", "labelColors": "#e9e4e1,#1890ff,#1890ff", "label": "Request verification code", "height": 42 }, "child": [{ "type": "Image", "props": { "y": 12, "x": 5, "skin": "ui/icon_email.png" } }] }, { "type": "Image", "props": { "y": 235, "x": 160, "width": 191, "skin": "ui/bg_focus.png" } }, { "type": "TextInput", "props": { "y": 241, "x": 175, "width": 164, "var": "input_email_code", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }] }, { "type": "Box", "props": { "y": 30, "x": 429, "visible": false, "var": "box_resetPwd" }, "child": [{ "type": "RegisterInput", "props": { "y": 113, "x": -158, "var": "item_pwd", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "Label", "props": { "y": 123, "x": 285, "width": 205, "visible": false, "var": "txt_pwd_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "HBox", "props": { "y": 131, "x": 286, "width": 100, "visible": false, "var": "box_pwd", "space": 2, "height": 5 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd0", "skin": "ui/pwd_clip.png", "clipX": 2 } }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd1", "skin": "ui/pwd_clip.png", "clipX": 2 } }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd2", "skin": "ui/pwd_clip.png", "clipX": 2 } }] }, { "type": "Label", "props": { "y": 183, "x": 285, "width": 205, "visible": false, "var": "txt_pwd_conform_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "RegisterInput", "props": { "y": 174, "x": -158, "var": "item_pwd_confirm", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "Button", "props": { "y": 257, "x": -158, "var": "btn_resetPwd", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Next Step" } }, { "type": "Box", "props": { "y": -28, "x": -430 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 161, "skin": "ui/step_line.png" } }, { "type": "Image", "props": { "x": 815, "skin": "ui/3.png" } }, { "type": "Image", "props": { "y": 20, "x": 510, "skin": "ui/step_line.png" } }, { "type": "Label", "props": { "y": 49, "x": 81, "width": 125, "var": "txt_31", "text": "Authentication", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 1, "width": 307, "var": "txt_31d", "text": "Please fill in the correct email or cell phone number", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Image", "props": { "y": 2, "x": 118, "skin": "ui/11.png" } }, { "type": "Image", "props": { "y": 2, "x": 467, "skin": "ui/21.png" } }, { "type": "Label", "props": { "y": 49, "x": 429, "width": 125, "var": "txt_32", "text": "Set new password", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 415, "width": 178, "var": "txt_32d", "text": "Set your new passworld", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Label", "props": { "y": 49, "x": 801, "width": 91, "var": "txt_33", "text": "Complete", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 746, "width": 178, "var": "txt_33d", "text": "You have already finished", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }] }] }, { "type": "Box", "props": { "y": 2, "x": 50, "visible": false, "var": "box_complete" }, "child": [{ "type": "Box", "props": { "x": -51 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 161, "skin": "ui/step_line.png" } }, { "type": "Image", "props": { "y": 20, "x": 510, "skin": "ui/step_line.png" } }, { "type": "Label", "props": { "y": 49, "x": 81, "width": 125, "var": "txt_41", "text": "Authentication", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 51, "width": 221, "var": "txt_41d", "text": "Please fill in the correct email", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Image", "props": { "y": 2, "x": 118, "skin": "ui/11.png" } }, { "type": "Image", "props": { "y": 2, "x": 467, "skin": "ui/21.png" } }, { "type": "Image", "props": { "y": 2, "x": 818, "skin": "ui/31.png" } }, { "type": "Label", "props": { "y": 49, "x": 429, "width": 125, "var": "txt_42", "text": "Set new password", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 415, "width": 178, "var": "txt_42d", "text": "Set your new passworld", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }, { "type": "Label", "props": { "y": 49, "x": 801, "width": 91, "var": "txt_43", "text": "Complete", "height": 18, "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Label", "props": { "y": 75, "x": 746, "width": 178, "var": "txt_43d", "text": "You have already finished", "height": 18, "fontSize": 16, "color": "#6D6D6D", "align": "left" } }] }, { "type": "Image", "props": { "y": 123, "x": 398, "skin": "ui/pwdFind_complete.png" } }, { "type": "Label", "props": { "y": 232, "x": 299, "var": "txt_info", "text": "Your new password has been set up", "fontSize": 18, "color": "#a0a0a0", "align": "left" } }, { "type": "Button", "props": { "y": 279, "x": 226, "var": "btn_compete", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Complete" } }] }] }] };
        views.FindPwdViewUI = FindPwdViewUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        class LoginViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.RegisterInput", view.elements.RegisterInput);
                super.createChildren();
                this.createView(ui.views.LoginViewUI.uiView);
            }
        }
        LoginViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Box", "props": { "y": 271, "x": 742, "var": "box_content" }, "child": [{ "type": "RegisterInput", "props": { "y": 130, "x": 1, "var": "item_account", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "CheckBox", "props": { "y": 248, "x": 1, "var": "check_pwd", "skin": "ui/check.png" } }, { "type": "RegisterInput", "props": { "y": 188, "x": 1, "var": "item_pwd", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "Label", "props": { "y": 251, "x": 31, "var": "txt_chec_label", "text": "Member Login", "fontSize": 20, "color": "#a0a0a0" } }, { "type": "Label", "props": { "y": 96, "x": 3, "width": 205, "visible": false, "var": "txt_pwd_account_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Box", "props": { "y": 379, "x": 0, "var": "box_login" }, "child": [{ "type": "Button", "props": { "y": 61, "x": 116, "width": 76, "var": "btn_signup", "underline": true, "text": "Sign in", "labelSize": 18, "labelColors": "#1890ff", "label": "Sign Up", "height": 18, "fontSize": 18, "color": "#e9e40", "align": "left" } }, { "type": "Label", "props": { "y": 61, "var": "txt_noAccount", "text": "No Account?", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Button", "props": { "x": 1, "var": "btn_login", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Login" } }, { "type": "Button", "props": { "y": 61, "x": 276, "width": 173, "var": "btn_forget", "underline": true, "text": "Sign in", "labelSize": 18, "labelColors": "#1890ff", "label": "Forget password?", "height": 18, "fontSize": 18, "color": "#e9e40", "align": "left" } }] }, { "type": "Box", "props": { "y": 303, "x": 1, "var": "box_verify" }, "child": [{ "type": "Image", "props": { "width": 219, "var": "bg_verify_default", "skin": "ui/bg_default.png", "height": 42 } }, { "type": "Image", "props": { "width": 219, "visible": false, "var": "bg_verify_focus", "skin": "ui/bg_focus.png", "height": 42 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 219, "visible": false, "var": "bg_verify_error", "skin": "ui/bg_error.png", "height": 42 } }, { "type": "TextInput", "props": { "y": 6, "x": 18, "width": 186, "var": "input_verify", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }, { "type": "Button", "props": { "y": 11, "x": 351, "width": 77, "var": "btn_fresh", "underline": true, "text": "Sign in", "labelSize": 18, "labelColors": "#1890ff", "label": "Refresh", "height": 18, "fontSize": 18, "color": "#e9e40", "align": "left" } }, { "type": "Sprite", "props": { "y": 1, "x": 235, "width": 100, "var": "comVerify", "height": 40 } }] }, { "type": "Box", "props": { "x": 25, "var": "box_title" }, "child": [{ "type": "Image", "props": { "skin": "ui/logo-pbr.png" } }, { "type": "Label", "props": { "y": 8, "x": 180, "var": "txt_login", "text": "Member Login", "fontSize": 34, "color": "#a0a0a0" } }, { "type": "Image", "props": { "y": 53, "x": 145, "skin": "ui/line01.png" } }] }] }] };
        views.LoginViewUI = LoginViewUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        class MainViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.UploadButton", view.elements.UploadButton);
                super.createChildren();
                this.createView(ui.views.MainViewUI.uiView);
            }
        }
        MainViewUI.uiView = { "type": "View", "props": { "width": 0, "height": 0 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "bg_head", "mouseEnabled": false } }, { "type": "Image", "props": { "y": 15, "x": 28, "width": 57, "skin": "ui/logo.png", "height": 26 } }, { "type": "Image", "props": { "y": 14, "x": 99, "width": 25, "skin": "ui/pwdFind_line.png", "rotation": 90, "height": 2 } }, { "type": "Image", "props": { "y": 9, "x": 1662, "var": "icon_head", "skin": "ui/head.png" } }, { "type": "Label", "props": { "y": 12, "x": 1705, "var": "txt_name", "text": "zhang san", "fontSize": 24, "color": "#ffffff" } }, { "type": "Button", "props": { "y": 12, "x": 1832, "width": 72, "var": "btn_loginout", "skin": "ui/main_secondBtn.png", "sizeGrid": "10,10,10,10", "labelSize": 16, "labelColors": "#707a8c,#707a8c,#707a8c", "label": "login out", "height": 28 } }, { "type": "Tab", "props": { "y": 9, "x": 165, "var": "tab", "space": 3, "skin": "ui/main_tab.png", "labels": "Public Assets", "labelSize": 18, "labelColors": "#a0a0a0,#ffffff,#ffffff" } }, { "type": "UploadButton", "props": { "y": 73, "x": 793, "var": "btn_upload", "runtime": "view.elements.UploadButton" } }, { "type": "UploadButton", "props": { "y": 73, "x": 942, "var": "btn_manager", "runtime": "view.elements.UploadButton" } }, { "type": "Box", "props": { "y": 78, "x": 541 }, "child": [{ "type": "Clip", "props": { "skin": "ui/main_sort.png", "index": 1, "clipY": 2 } }, { "type": "Label", "props": { "y": 3, "x": 27, "var": "txt_sort_title", "text": "排序方式：", "fontSize": 16, "color": "#a0a0a0" } }, { "type": "ComboBox", "props": { "y": -5, "x": 105, "width": 137, "var": "cbx_sort", "skin": "ui/main_resList.png", "sizeGrid": "8,32,8,18", "selectedIndex": 0, "labels": "默认", "labelSize": 16, "labelColors": "#ffffff,#ffffff,#ffffff", "itemSize": 16, "itemColors": "#1e5f9c,#ffffff,#a0a0a0,#333333,#333333", "height": 32 } }] }, { "type": "Box", "props": { "y": 75, "x": 1383 }, "child": [{ "type": "Clip", "props": { "y": 5, "x": 39, "skin": "ui/btn_view.png", "index": 1, "clipY": 2 } }, { "type": "Label", "props": { "y": 6, "x": 66, "text": "视图:", "fontSize": 16, "color": "#a0a0a0" } }, { "type": "ComboBox", "props": { "y": -2, "x": 106, "width": 137, "var": "cbx_view", "skin": "ui/main_resList.png", "sizeGrid": "8,32,8,18", "labels": "默认", "labelSize": 16, "labelColors": "#ffffff,#ffffff,#ffffff", "itemSize": 16, "itemColors": "#1e5f9c,#ffffff,#a0a0a0,#333333,#333333", "height": 32 } }] }, { "type": "UploadButton", "props": { "y": 74, "x": 1632, "var": "btn_hide_editor", "runtime": "view.elements.UploadButton" } }, { "type": "UploadButton", "props": { "y": 74, "x": 1775, "var": "btn_save_args", "runtime": "view.elements.UploadButton" } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_preview" } }, { "type": "Box", "props": { "y": 105, "x": 1091, "visible": false, "var": "box_fork_tree" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 423, "skin": "ui/tips_bg.png", "sizeGrid": "5,5,5,5", "height": 286 } }, { "type": "Label", "props": { "y": 9, "x": 8, "text": "Fork位置：", "fontSize": 18, "color": "#a0a0a0" } }, { "type": "Tree", "props": { "y": 39, "x": 11, "width": 411, "var": "tree_fork", "scrollBarSkin": "ui/vscroll.png", "height": 193 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 411, "skin": "ui/main_tree_selectBox.png", "name": "selectBox", "height": 34, "clipY": 2 } }, { "type": "Clip", "props": { "y": 10, "x": 21, "skin": "ui/main_treeArrow.png", "name": "arrow", "clipY": 2 } }, { "type": "Label", "props": { "y": 8, "x": 37, "valign": "middle", "text": "所有资源", "name": "label", "fontSize": 18, "color": "#a0a0a0" } }] }] }, { "type": "Button", "props": { "y": 244, "x": 59, "var": "btn_fork_ok", "skin": "ui/main_secondBtn.png", "labelSize": 16, "labelColors": "#ffffff,#ffffff,#ffffff", "label": "确认" } }, { "type": "Button", "props": { "y": 245, "x": 237, "var": "btn_fork_no", "skin": "ui/main_secondBtn.png", "labelSize": 16, "labelColors": "#ffffff,#ffffff,#ffffff", "label": "取消" } }] }, { "type": "Button", "props": { "y": 73, "x": 1092, "visible": false, "var": "btn_moveTo", "skin": "ui/main_resList.png", "labelSize": 14, "labelColors": "#ffffff,#ffffff,#ffffff", "label": "移动至" } }] };
        views.MainViewUI = MainViewUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
(function (ui) {
    var views;
    (function (views) {
        class RegisterViewUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("view.elements.RegisterInput", view.elements.RegisterInput);
                super.createChildren();
                this.createView(ui.views.RegisterViewUI.uiView);
            }
        }
        RegisterViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "y": 239, "x": 743, "var": "box_registerContent" }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "sp_bg" } }, { "type": "Image", "props": { "x": 40, "skin": "ui/logo-pbr.png", "scaleY": 0.8, "scaleX": 0.7 } }, { "type": "Label", "props": { "y": 6, "x": 176, "var": "txt_register", "text": "Registration", "fontSize": 34, "color": "#a0a0a0" } }, { "type": "Image", "props": { "y": 51, "x": 169, "skin": "ui/line01.png" } }, { "type": "RegisterInput", "props": { "y": 85, "x": 0, "var": "item_account", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "RegisterInput", "props": { "y": 143, "x": 0, "var": "item_pwd", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "RegisterInput", "props": { "y": 202, "x": 0, "var": "item_pwd_confirm", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "RegisterInput", "props": { "y": 263, "x": 0, "var": "item_email", "runtime": "view.elements.RegisterInput", "renderType": "render" } }, { "type": "Image", "props": { "y": 350, "x": 0, "width": 92, "skin": "ui/bg_default.png", "height": 42 } }, { "type": "Image", "props": { "y": 350, "x": 100, "width": 329, "var": "phone_bg_default", "skin": "ui/bg_default.png", "height": 42 } }, { "type": "Image", "props": { "y": 407, "x": 0, "width": 219, "var": "code_bg_default", "skin": "ui/bg_default.png", "height": 42 } }, { "type": "Button", "props": { "y": 407, "x": 228, "var": "btn_send", "skin": "ui/last_btn.png", "labelColors": "#e9e4e1,#1890ff,#1890ff", "label": "Send verification code" } }, { "type": "Label", "props": { "y": 364, "x": 4, "width": 64, "var": "txt_perfix", "text": "+86", "height": 18, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }, { "type": "Image", "props": { "y": 370, "x": 68, "var": "btn_three", "skin": "ui/triangle.png" } }, { "type": "Image", "props": { "y": 350, "x": 100, "width": 329, "var": "phone_bg_error", "skin": "ui/bg_error.png", "height": 42 } }, { "type": "Image", "props": { "y": 350, "x": 100, "width": 329, "var": "phone_focus", "skin": "ui/bg_focus.png" } }, { "type": "TextInput", "props": { "y": 357, "x": 142, "width": 272, "var": "input_phone", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1" } }, { "type": "Image", "props": { "y": 407, "x": 0, "width": 219, "var": "code_bg_focus", "skin": "ui/bg_focus.png", "height": 42 } }, { "type": "Image", "props": { "y": 407, "x": 0, "width": 219, "var": "code_bg_error", "skin": "ui/bg_focus.png", "height": 42 } }, { "type": "TextInput", "props": { "y": 413, "x": 18, "width": 186, "var": "input_code", "type": "text", "height": 30, "fontSize": 18, "color": "#e9e4e1", "align": "center" } }, { "type": "CheckBox", "props": { "y": 470, "x": 1, "var": "check_agree", "skin": "ui/check.png" } }, { "type": "Label", "props": { "y": 467, "x": 33, "wordWrap": true, "width": 268, "var": "label2", "text": "I have read and agree to the relevant terms of", "leading": 3, "height": 36, "fontSize": 16, "color": "#959595", "align": "left" } }, { "type": "Button", "props": { "y": 486, "x": 97, "width": 184, "var": "btn_agree", "underline": true, "text": "service and privacy policy.", "labelSize": 16, "labelColors": "#1890ff", "label": "service and privacy policy", "height": 18, "fontSize": 16, "color": "#1890ff", "align": "left" } }, { "type": "Button", "props": { "y": 587, "x": 1, "width": 58, "var": "btn_signIn", "underline": true, "text": "Sign in", "labelSize": 18, "labelColors": "#1890ff", "label": "Sign In", "height": 18, "fontSize": 18, "color": "#e9e40", "align": "left" } }, { "type": "Button", "props": { "y": 528, "x": 0, "var": "btn_register", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "Register" } }, { "type": "Label", "props": { "y": 97, "x": 441, "width": 205, "visible": false, "var": "txt_account_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "HBox", "props": { "y": 161, "x": 444, "width": 100, "var": "box_pwd", "space": 2, "height": 5 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd0", "skin": "ui/pwd_clip.png", "clipX": 2 } }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd1", "skin": "ui/pwd_clip.png", "clipX": 2 } }, { "type": "Clip", "props": { "y": 0, "x": 0, "var": "clip_pwd2", "skin": "ui/pwd_clip.png", "clipX": 2 } }] }, { "type": "Image", "props": { "y": 96, "x": 441, "width": 27, "var": "icon_right", "skin": "ui/icon_ok.png", "height": 21 } }, { "type": "Label", "props": { "y": 155, "x": 441, "width": 205, "visible": false, "var": "txt_pwd_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Label", "props": { "y": 214, "x": 441, "width": 205, "visible": false, "var": "txt_pwd_conform_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Label", "props": { "y": 275, "x": 444, "width": 205, "visible": false, "var": "txt_email_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Image", "props": { "y": 215, "x": 441, "width": 27, "var": "icon_confirmPwd", "skin": "ui/icon_ok.png", "height": 21 } }, { "type": "Image", "props": { "y": 275, "x": 441, "width": 27, "var": "icon_email_right", "skin": "ui/icon_ok.png", "height": 21 } }, { "type": "Image", "props": { "y": 361, "x": 441, "width": 27, "var": "icon_phone_right", "skin": "ui/icon_ok.png", "height": 21 } }, { "type": "Label", "props": { "y": 364, "x": 441, "width": 205, "visible": false, "var": "txt_phone_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }, { "type": "Label", "props": { "y": 483, "x": 441, "width": 205, "visible": false, "var": "txt_agree_error", "text": "Account has been used", "height": 18, "fontSize": 18, "color": "#ff0000", "align": "left" } }] }, { "type": "Box", "props": { "y": 287, "x": 786, "visible": false, "var": "box_known" }, "child": [{ "type": "Image", "props": { "x": 133, "skin": "ui/pwdFind_complete.png" } }, { "type": "Label", "props": { "y": 109, "x": 31, "var": "txt_title", "text": "Congratulations on your successful registration", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 133, "x": 69, "var": "txt_importInfo", "text": "Registration information", "fontSize": 24, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 197, "x": 71, "var": "txt_okAccount", "text": "Account:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 225, "x": 71, "var": "txt_okEmail", "text": "Email:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 257, "x": 71, "var": "txt_okPhone", "text": "Phone:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 197, "x": 144, "var": "txt_okAccountValue", "text": "Account:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 225, "x": 144, "var": "txt_okEmailValue", "text": "Account:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Label", "props": { "y": 257, "x": 144, "var": "txt_okPhoneValue", "text": "Account:", "fontSize": 16, "color": "#a0a0a0", "align": "center" } }, { "type": "Button", "props": { "y": 320, "var": "btn_known", "stateNum": 3, "skin": "ui/main_btn.png", "labelSize": 24, "labelColors": "#e9e4e1,#e9e4e1,#e9e4e1", "label": "I Have Known" } }] }] };
        views.RegisterViewUI = RegisterViewUI;
    })(views = ui.views || (ui.views = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map