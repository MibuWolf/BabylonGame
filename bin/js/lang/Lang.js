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
        LangID[LangID["Lang_Elua"] = 1001] = "Lang_Elua";
    })(LangID = lang.LangID || (lang.LangID = {}));
    class Lang {
        // 获取字符串
        static Get(id) {
            let str = "kzj";
            switch (id) {
                case LangID.OK:
                    str = "OK";
                    break;
                case LangID.Error_Account_Short:
                    str = "Account Too Short!";
                    break;
                case LangID.Error_Pwd_Diff:
                    str = "Confirm Password is different!";
                    break;
                case LangID.Error_Email_Format:
                    str = "Email Format Error!";
                    break;
                case LangID.Error_Phone_Format:
                    str = "Phone Format Error!";
                    break;
                case LangID.Error_Account_Exist:
                    str = "Account Name Exist!";
                    break;
                case LangID.Error_Pwd_Length:
                    str = "Password Too Short!";
                    break;
                case LangID.Error_Law_Agree:
                    str = "Need To Agree The Law!";
                    break;
                case LangID.Error_Email_Repeat:
                    str = "The Email Has Registed!";
                    break;
                case LangID.Error_Account_Repeat:
                    str = "The Name Has Used!";
                    break;
                case LangID.Error_Login_Name:
                    str = "Incorrect login user name!";
                    break;
                case LangID.Error_Login_Pwd:
                    str = "Incorrect login password";
                    break;
                case LangID.Error_Login_Name_Empty:
                    str = "The username cannot be empty";
                    break;
                case LangID.Error_Login_Pwd_Empty:
                    str = "The password cannot be empty";
                    break;
                case LangID.Lang_Elua:
                    str = "Tencent regards user information security and privacy protection as its \"lifeline\". We adhere to the \"all value-based\" concept, committed to improving information processing transparency, enhance your ease of information management, protect your information and communication security. Tencent strictly abides by laws and regulations and follows the following privacy protection principles to provide you with more secure and reliable services: \n\n1.Safe and reliable: We do our utmost to prevent your information leakage, damage, loss through reasonable and effective information security technology and management process. \n\n 2.Autonomous Choice: We provide you with convenient information management options so that you can make the right choice to manage your personal information. \n\n 3.Protection of communication secrets: We strictly abide by laws and regulations, protect your communication secrets, provide you with safe communication services. 4Reasonable and necessary: in order to provide better services to you and other users, we only collect the necessary information. \n\n4.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information.  users, we only collect the necessary information. \n\n 5.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information. users, we only collect the necessary information. 5.Clear and transparent: We strive to use concise and understandable expressions to introduce you to privacy policies so that you can clearly understand how we process information.";
                    break;
                case LangID.Error_FindPwd_Email:
                    str = "The email address for retrieving the password does not exist";
                    break;
                case LangID.Error_FindPwd_Phone:
                    str = "The phone number to retrieve the password does not exist";
                    break;
                case LangID.Error_FindPwd_Verify_Code:
                    str = "Verification code error";
                    break;
                case LangID.Error_FindPwd_Verify_Code_Empty:
                    str = "Verification code cannot be empty";
                    break;
                case LangID.Error_FindPwd_Verify_Code_Timeout:
                    str = "Verification code time out";
                    break;
            }
            return str;
        }
    }
    lang.Lang = Lang;
})(lang || (lang = {}));
//# sourceMappingURL=Lang.js.map