/*
* 配置类
*/
class GameConfig {
    static get Substance_File_Preupload_URL() {
        return GameConfig.SD_URL + "/sd/preupload";
    }
    static get Substance_File_Valid_URL() {
        return GameConfig.SD_URL + "/sd/sbs_valid_check";
    }
    static get Substance_File_PBR_Check_URL() {
        return GameConfig.SD_URL + "/sd/pbr_check";
    }
    static get Substance_File_Profile_URL() {
        return GameConfig.SD_URL + "/sd/prefile_check";
    }
    static get Substance_File_Render_Image_URL() {
        return GameConfig.SD_URL + "/sd/render_image";
    }
    static get Substance_File_Create_Thumbs_URL() {
        return GameConfig.SD_URL + "/sd/render_preview_image";
    }
    static get Substance_File_To_Res_URL() {
        return GameConfig.SD_URL + "/sd/upload";
    }
    static get Substance_File_Save_URL() {
        return GameConfig.SD_URL + "/sd/save";
    }
    static get Substance_File_Args_Change_URL() {
        return GameConfig.SD_URL + "/sd/change_param";
    }
    static get Substance_File_Cache_URL() {
        return GameConfig.SD_URL + "/sd/task";
    }
}
GameConfig.Login_URL = "ws://172.16.1.150:6677";
GameConfig.SD_URL = "http://172.16.1.150:81";
GameConfig.RES_URL = "http://172.16.1.150:80";
GameConfig.Substance_Prefabs_URL = GameConfig.RES_URL + "/resource/obj_list";
GameConfig.Substance_Directory_Items_URL = GameConfig.RES_URL + "/resource/browse";
GameConfig.Substance_Static_URL = GameConfig.RES_URL + "/static";
GameConfig.Substance_Static_Model_URL = GameConfig.Substance_Static_URL + "/obj";
GameConfig.Substance_Profile_URL = GameConfig.RES_URL + "/resource/browse_follow";
GameConfig.Get_SD_Service_URL = GameConfig.RES_URL + "/resource/get_sd_url";
GameConfig.Substance_Fork_URL = GameConfig.RES_URL + "/resource/fork";
//# sourceMappingURL=GameConfig.js.map