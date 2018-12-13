/**
* http代理
*/
var proxy;
(function (proxy) {
    class HttpProxy {
        // 预上传
        static req_substance_preupload(data, completeCB, startCB, progressCB) {
            http.send(GameConfig.Substance_File_Preupload_URL, data, (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                    managers.LoginManager.inst.account.task = json["task"];
                }
                else {
                    console.error("error code:" + json["status"]);
                }
                completeCB.call(null, json["status"]);
            }, "post", null, startCB, progressCB);
        }
        // 文件检查
        static req_substance_files_valid_check(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_Valid_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // pbr检查
        static req_substance_pbr_check(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_PBR_Check_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // 性能检查
        static req_substance_profile_check(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_Profile_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // 物质贴图输出
        static req_substance_images_output(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_Render_Image_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (JSON.parse(data.responseText)["status"] == svr_to_client.status_code.success) {
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // 缩略图输出
        static req_substance_thumbs_output(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_Create_Thumbs_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // 入库
        static req_substance_to_res(completeCB) {
            let data = {};
            data["task"] = managers.LoginManager.inst.account.task;
            data["token"] = managers.LoginManager.inst.account.token;
            http.send(GameConfig.Substance_File_To_Res_URL, JSON.stringify(data), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                    // 入库成功
                }
                else {
                    console.error("error code:" + JSON.parse(data.responseText)["status"]);
                }
                completeCB.call(null, json["status"]);
            });
        }
        // 获取sd服务器地址
        static req_sd_url() {
            http.send(GameConfig.Get_SD_Service_URL, null, (data) => {
                GameConfig.SD_URL = data.responseText["url"];
            });
        }
        // 获取prefabs
        static req_prefabs() {
            http.send(GameConfig.Substance_Prefabs_URL, null, (data) => {
                let json = JSON.parse(data.responseText);
                let prefab = null;
                for (let pro in json) {
                    prefab = managers.SubstanceManager.inst.createPrefab(pro);
                    prefab.deserialize(json[pro]);
                }
            });
        }
        // 请求对应库下的资源
        static req_repository_directory_items(domain, project, directory, group) {
            let params = {};
            params["project"] = domain;
            params["sub_project"] = project;
            params["parent"] = directory;
            params["target"] = group;
            params["token"] = managers.LoginManager.inst.account.token;
            http.send(directory == "follow" ? GameConfig.Substance_Profile_URL : GameConfig.Substance_Directory_Items_URL, JSON.stringify(params), (data) => {
                managers.SubstanceManager.inst.clearSubstanceExtras();
                let items = JSON.parse(data.responseText);
                if (items) {
                    let substance = null;
                    items.forEach((value, index, array) => {
                        substance = managers.SubstanceManager.inst.createSubstanceExtra();
                        substance.deserialize(value);
                        managers.SubstanceManager.inst.addSubstanceExtra(substance);
                    });
                }
                managers.EventManager.getInstance().event(core.EventType.S2C_Substance_Items);
            });
        }
        // 请求物质参数
        static req_substance_args(substanceExtra) {
            http.send(GameConfig.Substance_Static_URL + "/" + substanceExtra.id + "/" + substanceExtra.version + "/" + substanceExtra.argsFile, null, (data) => {
                substanceExtra.substance.args.data = data.responseText;
            }, "get", ["Content-Type", "application/xml"]);
        }
        // 请求物质参数范围
        static req_substance_args_range(substanceExtra) {
            http.send(GameConfig.Substance_Static_URL + "/" + substanceExtra.id + "/" + substanceExtra.version + "/cfg.txt", null, (data) => {
                substanceExtra.substance.args.parseArgs(data.responseText);
            }, "get");
        }
        // 请求个人专用下目录的物质
        static req_substance_profile(target) {
            http.send(GameConfig.Substance_Profile_URL, JSON.stringify({ "target": target }), (data) => {
                let items = JSON.parse(data.responseText);
                if (items) {
                    let substance = null;
                    items.forEach((value, index, array) => {
                        substance = managers.SubstanceManager.inst.createSubstanceExtra();
                        substance.deserialize(value);
                        managers.SubstanceManager.inst.addSubstanceExtra(substance);
                    });
                }
            });
        }
        // 物质参数更改
        static req_substance_args_change(substanceExtra, completeCB) {
            let params = {};
            params["token"] = managers.LoginManager.inst.account.token;
            params["name"] = substanceExtra.substance.name;
            params["submesh"] = substanceExtra.meshName;
            params["v"] = substanceExtra.version;
            params["project"] = substanceExtra.domain;
            params["sub_project"] = substanceExtra.project;
            params["parent"] = substanceExtra.parent;
            params["target"] = substanceExtra.group;
            params["sbsprs"] = substanceExtra.substance.args.data;
            http.send(GameConfig.Substance_File_Args_Change_URL, JSON.stringify(params), (data) => {
                let json = data.responseText;
                managers.LoginManager.inst.account.task = json["task"];
                let updateTexture = new proxy.UpdateTexture();
                let texInfo = new proxy.TextureInfo();
                let textures = data["output_image"];
                if (textures) {
                    for (let pro in textures) {
                        texInfo.texPaths.set(pro, GameConfig.Substance_File_Cache_URL + "/" + textures[pro]);
                    }
                }
                updateTexture.texInfo = texInfo;
                let materialInfo = new proxy.MaterialID();
                materialInfo.uUid = data["obj_id"];
                materialInfo.materialName = data["submesh"];
                ;
                if (completeCB)
                    completeCB.call(null, updateTexture);
            });
        }
        // 请求保存物质参数文件
        static req_substance_args_save(substanceExtra) {
            let params = {};
            params["token"] = managers.LoginManager.inst.account.token;
            params['name'] = substanceExtra.substance.name;
            params['sbs_id'] = substanceExtra.substance.id;
            params["task"] = managers.LoginManager.inst.account.task;
            params["project"] = substanceExtra.domain;
            params["sub_project"] = substanceExtra.project;
            params["parent"] = substanceExtra.directory;
            params["target"] = substanceExtra.group;
            http.send(GameConfig.Substance_File_Save_URL, JSON.stringify(params), (data) => {
                (data) => {
                    if (JSON.parse(data.responseText)["status"] == svr_to_client.status_code.success) {
                        // 保存成功
                    }
                    else {
                        console.error("error code:" + JSON.parse(data.responseText)["status"]);
                    }
                };
            });
        }
        // 请求模型名称
        static req_obj_name() {
            let params = {};
            http.send(GameConfig.Substance_File_Save_URL, JSON.stringify(params), (data) => {
                (data) => {
                    if (JSON.parse(data.responseText)["status"] == svr_to_client.status_code.success) {
                        // 保存成功
                    }
                    else {
                        console.error("error code:" + JSON.parse(data.responseText)["status"]);
                    }
                };
            });
        }
        // fork资源
        static req_fork_res(substanceExtras, dest_domain, dest_project, dest_dir, dest_group) {
            let params = {};
            params["token"] = managers.LoginManager.inst.account.token;
            let fork_list = new Array();
            let fork_item = null;
            substanceExtras.forEach((sub) => {
                fork_item = {};
                fork_item["src_project"] = sub.domain;
                fork_item["src_sub_project"] = sub.project;
                fork_item["src_parent"] = sub.directory;
                fork_item["src_target"] = sub.group;
                fork_item["target_project"] = dest_domain;
                fork_item["target_sub_project"] = dest_project;
                fork_item["target_parent"] = dest_dir;
                fork_item["target_target"] = dest_group;
                fork_item["sbs_id"] = sub.id;
                fork_list.push(fork_item);
            });
            params["fork_list"] = fork_list;
            http.send(GameConfig.Substance_Fork_URL, JSON.stringify(params), (data) => {
                let json = JSON.parse(data.responseText);
                if (json["status"] == svr_to_client.status_code.success) {
                    // fork成功
                }
                else {
                    console.error("req_fork_res error code:" + json["status"]);
                }
            });
        }
    }
    proxy.HttpProxy = HttpProxy;
})(proxy || (proxy = {}));
//# sourceMappingURL=HttpProxy.js.map