/**
* 物质参数结构
* @author confiner
*/
var models;
(function (models) {
    let SubstanceArgType;
    (function (SubstanceArgType) {
        SubstanceArgType[SubstanceArgType["DUMMY_TYPE"] = 0] = "DUMMY_TYPE";
        SubstanceArgType[SubstanceArgType["ENTRY_COLOR"] = 1] = "ENTRY_COLOR";
        SubstanceArgType[SubstanceArgType["ENTRY_GRAYSCALE"] = 2] = "ENTRY_GRAYSCALE";
        SubstanceArgType[SubstanceArgType["ENTRY_VARIANT"] = 3] = "ENTRY_VARIANT";
        SubstanceArgType[SubstanceArgType["BOOLEAN"] = 4] = "BOOLEAN";
        SubstanceArgType[SubstanceArgType["INTEGER1"] = 16] = "INTEGER1";
        SubstanceArgType[SubstanceArgType["INTEGER2"] = 32] = "INTEGER2";
        SubstanceArgType[SubstanceArgType["INTEGER3"] = 64] = "INTEGER3";
        SubstanceArgType[SubstanceArgType["INTEGER4"] = 128] = "INTEGER4";
        SubstanceArgType[SubstanceArgType["FLOAT1"] = 256] = "FLOAT1";
        SubstanceArgType[SubstanceArgType["FLOAT2"] = 512] = "FLOAT2";
        SubstanceArgType[SubstanceArgType["FLOAT3"] = 1024] = "FLOAT3";
        SubstanceArgType[SubstanceArgType["FLOAT4"] = 2048] = "FLOAT4";
        SubstanceArgType[SubstanceArgType["FLOAT_VARIANT"] = 2304] = "FLOAT_VARIANT";
        SubstanceArgType[SubstanceArgType["ENTRY_COLOR_OPT"] = 2049] = "ENTRY_COLOR_OPT";
        SubstanceArgType[SubstanceArgType["ENTRY_GRAYSCALE_OPT"] = 258] = "ENTRY_GRAYSCALE_OPT";
        SubstanceArgType[SubstanceArgType["ENTRY_VARIANT_OPT"] = 2307] = "ENTRY_VARIANT_OPT";
        SubstanceArgType[SubstanceArgType["ENTRY_PARAMETER"] = 4096] = "ENTRY_PARAMETER";
        SubstanceArgType[SubstanceArgType["COMPLEX"] = 8192] = "COMPLEX";
        SubstanceArgType[SubstanceArgType["STRING"] = 16384] = "STRING";
        SubstanceArgType[SubstanceArgType["PATH"] = 32768] = "PATH";
        SubstanceArgType[SubstanceArgType["VOID_TYPE"] = 65536] = "VOID_TYPE";
        SubstanceArgType[SubstanceArgType["TEMPLATE1"] = 131072] = "TEMPLATE1";
        SubstanceArgType[SubstanceArgType["TEMPLATE2"] = 262144] = "TEMPLATE2";
    })(SubstanceArgType = models.SubstanceArgType || (models.SubstanceArgType = {}));
    let WidgetType;
    (function (WidgetType) {
        WidgetType[WidgetType["BUTTON"] = 0] = "BUTTON";
        WidgetType[WidgetType["SLIDER"] = 1] = "SLIDER";
        WidgetType[WidgetType["DROP_DOWN_LIST"] = 2] = "DROP_DOWN_LIST";
        WidgetType[WidgetType["SIZE_POW_2"] = 3] = "SIZE_POW_2";
        WidgetType[WidgetType["ANGLE"] = 4] = "ANGLE";
        WidgetType[WidgetType["COLOR"] = 5] = "COLOR";
        WidgetType[WidgetType["TEXT"] = 6] = "TEXT";
        WidgetType[WidgetType["TRANSFORMATION_INVERSE"] = 7] = "TRANSFORMATION_INVERSE";
        WidgetType[WidgetType["TRANSFORMATION_FORWARD"] = 8] = "TRANSFORMATION_FORWARD";
        WidgetType[WidgetType["POSITION"] = 9] = "POSITION";
        WidgetType[WidgetType["OFFSET"] = 10] = "OFFSET";
    })(WidgetType = models.WidgetType || (models.WidgetType = {}));
    class SubstanceArg {
        valueToString() {
            let str = null;
            switch (this.type) {
                case SubstanceArgType.FLOAT3:
                    str = this.default.join(",");
                    break;
            }
            return str;
        }
    }
    models.SubstanceArg = SubstanceArg;
    class SubstanceArgs extends models.Model {
        constructor() {
            super();
            this._args = null; // 参数列表
            this._args = new Map();
        }
        parseArgs(args) {
            let arg = null;
            let obj = null;
            for (let prop in args) {
                arg = new SubstanceArg();
                arg.name = prop;
                obj = args[prop];
                if (obj) {
                    arg.default = obj["defaultValue"];
                    arg.max = obj["maxValue"];
                    arg.min = obj["minValue"];
                    arg.step = obj["step"];
                    arg.type = obj["type"];
                    arg.widgetType = obj["widgetType"];
                    arg.dropDownList = obj["dropDownList"];
                }
                this._args.set(arg.name, arg);
            }
        }
        get data() {
            this._args.forEach((value, key) => {
                let attr = this._data.childNodes[0].childNodes; // 只解析第一个节点
                for (let i = 0; i < attr.length; i++) {
                    if (attr[i].nodeName == "presetinput") {
                        if (attr[i].getAttribute("identifier") == value.name && attr[i].getAttribute("type") == value.type.toString()) {
                            value.value = attr[i].getAttribute("value");
                            attr[i].setAttribute("value", value.valueToString());
                        }
                    }
                }
            });
            return this._data;
        }
        set data(data) {
            this._data = data;
            this._args.forEach((value, key) => {
                let attr = data.childNodes[0].childNodes; // 只解析第一个节点
                for (let i = 0; i < attr.length; i++) {
                    if (attr[i].nodeName == "presetinput") {
                        if (attr[i].getAttribute("identifier") == value.name && attr[i].getAttribute("type") == value.type.toString()) {
                            value.value = attr[i].getAttribute("value");
                        }
                    }
                }
            });
        }
        serialize() {
            return null;
        }
        deserialize(data) {
        }
    }
    models.SubstanceArgs = SubstanceArgs;
})(models || (models = {}));
//# sourceMappingURL=SubstanceArgs.js.map