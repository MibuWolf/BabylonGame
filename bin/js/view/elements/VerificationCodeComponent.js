/*
* 验证码组件
* @author confiner
*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class VerificationCodeComponent extends Laya.Sprite {
            constructor(width, height) {
                super();
                this._codes = null;
                this.size(width, height);
                this.init();
            }
            get codes() {
                return this._codes;
            }
            init() {
                this.drawBg();
                this.fresh();
            }
            createLinesSprite() {
                let sp = new Laya.Sprite();
                sp.size(this.width, this.height);
                let rsx = 0;
                let rsy = 0;
                let rex = 0;
                let rey = 0;
                for (let i = 0; i < VerificationCodeComponent.LINE_CNT; ++i) {
                    rsx = Math.random() * sp.width;
                    rsy = Math.random() * sp.height;
                    rex = Math.random() * sp.width;
                    rey = Math.random() * sp.height;
                    sp.graphics.drawLine(rsx, rsy, rex, rey, "#EFFEFC", 2);
                }
                return sp;
            }
            drawBg() {
                this.graphics.drawRect(0, 0, this.width, this.height, "#F5F7F4");
            }
            generateCodes() {
                let codes = new Array();
                let rand = null;
                let code = null;
                for (let i = 0; i < VerificationCodeComponent.SIZE; ++i) {
                    rand = Math.random() * VerificationCodeComponent.CODE_SEQUENCE.length;
                    code = VerificationCodeComponent.CODE_SEQUENCE[Math.floor(rand)];
                    codes.push(code);
                }
                this._codes = codes.join().replace(/,/g, "");
                return codes;
            }
            createCodeSprite(code) {
                let sprite = new Laya.Sprite();
                let fontSize = (4 * this.width) / 21;
                sprite.size(fontSize, fontSize * VerificationCodeComponent.RATIO);
                sprite.graphics.fillBorderText(code, 0, 0, fontSize + "px 微软雅黑", "#EEFEFF", "#162C89", 3, "center");
                return sprite;
            }
            fresh() {
                this.graphics.clear();
                this.drawBg();
                let index = 0;
                while (this.numChildren > 0) {
                    index = this.numChildren - 1;
                    this.removeChildAt(index).destroy();
                }
                let fontSize = (4 * this.width) / 21;
                let verificationCodes = this.generateCodes();
                verificationCodes.forEach((value, index, array) => {
                    let sp = this.createCodeSprite(value);
                    this.addChild(sp);
                    let degree = (Math.random() * 2 - 1) * VerificationCodeComponent.DEGREE;
                    let offsetFactor = 1 - (Math.abs(degree) / (VerificationCodeComponent.DEGREE + 1.0));
                    sp.rotation = degree;
                    let x = (index == 0 ? 5 : this.getChildAt(index - 1).width * index) + (fontSize / VerificationCodeComponent.SIZE + Math.random() * (this.width / VerificationCodeComponent.SIZE - fontSize) * offsetFactor);
                    let y = Math.random() * (this.height - fontSize) * offsetFactor;
                    sp.pos(x, y);
                });
                let lines = this.createLinesSprite();
                this.addChild(lines);
            }
        }
        VerificationCodeComponent.CODE_SEQUENCE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
            'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        VerificationCodeComponent.LINE_CNT = 6;
        VerificationCodeComponent.RATIO = 1.2;
        VerificationCodeComponent.DEGREE = 26;
        VerificationCodeComponent.SIZE = 4;
        elements.VerificationCodeComponent = VerificationCodeComponent;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=VerificationCodeComponent.js.map