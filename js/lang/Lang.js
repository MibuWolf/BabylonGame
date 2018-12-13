/**
* 语言包
* @author confiner
*/
var lang;
(function (lang) {
    let LangID;
    (function (LangID) {
        LangID[LangID["OK"] = 0] = "OK";
        LangID[LangID["Error_Account_Short"] = 1] = "Error_Account_Short";
        LangID[LangID["Error_Account_Long"] = 2] = "Error_Account_Long";
        LangID[LangID["Error_Pwd_Length"] = 3] = "Error_Pwd_Length";
        LangID[LangID["Error_Pwd_Weak"] = 4] = "Error_Pwd_Weak";
        LangID[LangID["Error_Pwd_Diff"] = 5] = "Error_Pwd_Diff";
        LangID[LangID["Error_Email_Format"] = 6] = "Error_Email_Format";
        LangID[LangID["Error_Phone_Format"] = 7] = "Error_Phone_Format";
        LangID[LangID["Error_Account_Exist"] = 8] = "Error_Account_Exist";
        LangID[LangID["Error_Law_Agree"] = 9] = "Error_Law_Agree";
        LangID[LangID["Error_Email_Repeat"] = 10] = "Error_Email_Repeat";
        LangID[LangID["Error_Account_Repeat"] = 11] = "Error_Account_Repeat";
        LangID[LangID["Error_Login_Name"] = 12] = "Error_Login_Name";
        LangID[LangID["Error_Login_Pwd"] = 13] = "Error_Login_Pwd";
        LangID[LangID["Error_Login_Name_Empty"] = 14] = "Error_Login_Name_Empty";
        LangID[LangID["Error_Login_Pwd_Empty"] = 15] = "Error_Login_Pwd_Empty";
        LangID[LangID["Error_FindPwd_Email"] = 16] = "Error_FindPwd_Email";
        LangID[LangID["Error_FindPwd_Phone"] = 17] = "Error_FindPwd_Phone";
        LangID[LangID["Error_FindPwd_Verify_Code"] = 18] = "Error_FindPwd_Verify_Code";
        LangID[LangID["Error_FindPwd_Verify_Code_Empty"] = 19] = "Error_FindPwd_Verify_Code_Empty";
        LangID[LangID["Error_FindPwd_Verify_Code_Timeout"] = 20] = "Error_FindPwd_Verify_Code_Timeout";
        LangID[LangID["Error_Verify"] = 21] = "Error_Verify";
        LangID[LangID["Error_Verify_Timeout"] = 22] = "Error_Verify_Timeout";
        LangID[LangID["Error_PhoneRegisterd"] = 23] = "Error_PhoneRegisterd";
        LangID[LangID["Lang_Elua"] = 1001] = "Lang_Elua";
        LangID[LangID["Lang_BaseRender"] = 1002] = "Lang_BaseRender";
        LangID[LangID["Lang_MaterialTool"] = 1003] = "Lang_MaterialTool";
        LangID[LangID["Lang_MemberLogin"] = 1004] = "Lang_MemberLogin";
        LangID[LangID["Lang_Register"] = 1005] = "Lang_Register";
        LangID[LangID["Lang_Retrieve"] = 1006] = "Lang_Retrieve";
        LangID[LangID["Lang_Pwd"] = 1007] = "Lang_Pwd";
        LangID[LangID["Lang_VerifyPwd"] = 1008] = "Lang_VerifyPwd";
        LangID[LangID["Lang_Account"] = 1009] = "Lang_Account";
        LangID[LangID["Lang_Rember"] = 1010] = "Lang_Rember";
        LangID[LangID["Lang_Refresh"] = 1011] = "Lang_Refresh";
        LangID[LangID["Lang_NoAccount"] = 1012] = "Lang_NoAccount";
        LangID[LangID["Lang_Signup"] = 1013] = "Lang_Signup";
        LangID[LangID["Lang_Forget"] = 1014] = "Lang_Forget";
        LangID[LangID["Lang_Login"] = 1015] = "Lang_Login";
        LangID[LangID["Lang_Email"] = 1016] = "Lang_Email";
        LangID[LangID["Lang_SendCode"] = 1017] = "Lang_SendCode";
        LangID[LangID["Lang_RelativLaw"] = 1018] = "Lang_RelativLaw";
        LangID[LangID["Lang_LawContent"] = 1019] = "Lang_LawContent";
        LangID[LangID["Lang_RegisterGo"] = 1020] = "Lang_RegisterGo";
        LangID[LangID["Lang_FindPwd"] = 1021] = "Lang_FindPwd";
        LangID[LangID["Lang_RetrievePhone"] = 1022] = "Lang_RetrievePhone";
        LangID[LangID["Lang_RetrieveEmail"] = 1023] = "Lang_RetrieveEmail";
        LangID[LangID["Lang_NextStep"] = 1024] = "Lang_NextStep";
        LangID[LangID["Lang_Authen"] = 1025] = "Lang_Authen";
        LangID[LangID["Lang_FillPhone"] = 1026] = "Lang_FillPhone";
        LangID[LangID["Lang_ResetPwd"] = 1027] = "Lang_ResetPwd";
        LangID[LangID["Lang_NewPwd"] = 1028] = "Lang_NewPwd";
        LangID[LangID["Lang_Complete"] = 1029] = "Lang_Complete";
        LangID[LangID["Lang_SetNewPwdOK"] = 1030] = "Lang_SetNewPwdOK";
        LangID[LangID["Lang_FillEmail"] = 1031] = "Lang_FillEmail";
        LangID[LangID["Lang_FillEmailOrPhone"] = 1032] = "Lang_FillEmailOrPhone";
        LangID[LangID["Lang_ResetPwdOK"] = 1033] = "Lang_ResetPwdOK";
        LangID[LangID["Lang_Congratulation"] = 1034] = "Lang_Congratulation";
        LangID[LangID["Lang_FollowInfo"] = 1035] = "Lang_FollowInfo";
        LangID[LangID["Lang_Phone"] = 1036] = "Lang_Phone";
        LangID[LangID["Lang_LoginOut"] = 1037] = "Lang_LoginOut";
        LangID[LangID["Lang_PublicAssets"] = 1038] = "Lang_PublicAssets";
        LangID[LangID["Lang_AllAssets"] = 1039] = "Lang_AllAssets";
        LangID[LangID["Lang_Dynaimc"] = 1040] = "Lang_Dynaimc";
        LangID[LangID["Lang_SubstanceLib"] = 1041] = "Lang_SubstanceLib";
        LangID[LangID["Lang_ModelLib"] = 1042] = "Lang_ModelLib";
        LangID[LangID["Lang_ActionLib"] = 1043] = "Lang_ActionLib";
        LangID[LangID["Lang_Editor"] = 1046] = "Lang_Editor";
        LangID[LangID["Lang_Delete"] = 1047] = "Lang_Delete";
        LangID[LangID["Lang_Upload"] = 1058] = "Lang_Upload";
        LangID[LangID["Lang_UploadDes"] = 1059] = "Lang_UploadDes";
        LangID[LangID["Lang_SubstanceName"] = 1060] = "Lang_SubstanceName";
        LangID[LangID["Lang_SubstanceDesc"] = 1061] = "Lang_SubstanceDesc";
        LangID[LangID["Lang_CommitLog"] = 1062] = "Lang_CommitLog";
        LangID[LangID["Lang_FilePath"] = 1063] = "Lang_FilePath";
        LangID[LangID["Lang_Open"] = 1064] = "Lang_Open";
        LangID[LangID["Lang_SubmitUpload"] = 1065] = "Lang_SubmitUpload";
        LangID[LangID["Lang_Cancel"] = 1066] = "Lang_Cancel";
        LangID[LangID["Lang_Select_Project"] = 1067] = "Lang_Select_Project";
        LangID[LangID["Lang_Select_Group"] = 1068] = "Lang_Select_Group";
        LangID[LangID["Lang_Substance_Prefab"] = 1069] = "Lang_Substance_Prefab";
        LangID[LangID["Lang_Substance_Tag"] = 1070] = "Lang_Substance_Tag";
        LangID[LangID["Lang_Upload_Progress"] = 1071] = "Lang_Upload_Progress";
        LangID[LangID["Lang_Files_Check"] = 1072] = "Lang_Files_Check";
        LangID[LangID["Lang_PBR_Check"] = 1073] = "Lang_PBR_Check";
        LangID[LangID["Lang_Profile_Check"] = 1074] = "Lang_Profile_Check";
        LangID[LangID["Lang_Textures_Output"] = 1075] = "Lang_Textures_Output";
        LangID[LangID["Lang_Create_Thumbs"] = 1076] = "Lang_Create_Thumbs";
        LangID[LangID["Lang_Import_Repository"] = 1077] = "Lang_Import_Repository";
        LangID[LangID["Lang_Pass_Over"] = 1078] = "Lang_Pass_Over";
        LangID[LangID["Lang_Return_Back"] = 1079] = "Lang_Return_Back";
    })(LangID = lang.LangID || (lang.LangID = {}));
    class Lang {
        // 切换语言
        static switch() {
            if (Lang._type == "cn")
                Lang._type = "en";
            else if (Lang._type == "en") {
                Lang._type = "cn";
            }
        }
        // 设置语言类型
        static set type(type) {
            if (type && Lang._LANGS.indexOf(type) > 0) {
                Lang._type = type;
            }
        }
        // 获取字符串
        static Get(id, type) {
            if (!Lang._lang)
                Lang._lang = Laya.loader.getRes("res/language.json");
            if (type && Lang._LANGS.indexOf(type) > 0) {
                return Lang._lang[id][type];
            }
            else {
                return Lang._lang[id][Lang._type];
            }
        }
    }
    Lang._lang = null;
    Lang._type = "en";
    Lang._LANGS = ["cn", "en"];
    lang.Lang = Lang;
})(lang || (lang = {}));
//# sourceMappingURL=Lang.js.map