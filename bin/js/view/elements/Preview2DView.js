/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var elements;
    (function (elements) {
        class Preview2DView extends ui.elements.Preview2DViewUI {
            constructor() {
                super();
                this._index = -1;
                this._images = new Array();
                this._btns = new Array();
            }
            initialize() {
                this.btn_page_down.on(Laya.Event.CLICK, this, this.clickHandler);
                this.btn_page_up.on(Laya.Event.CLICK, this, this.clickHandler);
            }
            clickHandler(evt) {
                switch (evt.target) {
                    case this.btn_page_down:
                        ++this._index;
                        if (this._index == this._images.length) {
                            this._index = this._images.length - 1;
                        }
                        this.tweenImages(true);
                        break;
                    case this.btn_page_up:
                        --this._index;
                        if (this._index < 0)
                            this._index = 0;
                        this.tweenImages(false);
                        break;
                }
                this.checkPageBtnStatus();
            }
            tweenImages(direction) {
                let srcImage = null;
                let destImage = this._images[this._index];
                let that = this;
                if (direction) {
                    // 向后翻
                    srcImage = this._images[(this._index - 1)];
                    Laya.Tween.clearAll(srcImage);
                    Laya.Tween.to(srcImage, { x: -this.width }, 1500, Laya.Ease.strongIn, Laya.Handler.create(this, function () {
                        Laya.Tween.clearTween(srcImage);
                        that.sp_container.removeChild(srcImage);
                    }));
                    destImage.x = this.width;
                    that.sp_container.addChild(destImage);
                    Laya.Tween.clearAll(destImage);
                    Laya.Tween.to(destImage, { x: 0 }, 1500, Laya.Ease.strongIn, Laya.Handler.create(this, function () {
                        Laya.Tween.clearTween(destImage);
                    }));
                }
                else {
                    // 向前翻
                    srcImage = this._images[(this._index + 1)];
                    Laya.Tween.clearAll(srcImage);
                    Laya.Tween.to(srcImage, { x: this.width }, 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                        Laya.Tween.clearTween(srcImage);
                        that.sp_container.removeChild(srcImage);
                    }));
                    destImage.x = -this.width;
                    that.sp_container.addChild(destImage);
                    Laya.Tween.clearAll(destImage);
                    Laya.Tween.to(destImage, { x: 0 }, 1000, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                        Laya.Tween.clearTween(destImage);
                    }));
                }
            }
            checkPageBtnStatus() {
                if (this._index == this._images.length - 1)
                    this.btn_page_down.disabled = true;
                else
                    this.btn_page_down.disabled = false;
                if (this._index <= 0)
                    this.btn_page_up.disabled = true;
                else
                    this.btn_page_up.disabled = false;
                if (this._btns.length > this._index) {
                    this._btns.forEach((btn, idx) => {
                        if (idx == this._index)
                            this._btns[idx].selected = true;
                        else
                            this._btns[idx].selected = false;
                    });
                }
            }
            set data(data) {
                this._data = data;
                this.clear();
                this._index = 0;
                this.update();
                this.checkPageBtnStatus();
            }
            clear() {
                for (let i = this._images.length - 1; i >= 0; --i) {
                    this._images[i].destroy(true);
                    this._images[i].parent = null;
                    this._images.splice(i);
                }
                for (let i = this._btns.length - 1; i >= 0; --i) {
                    this._btns[i].offAll();
                    this._btns[i].destroy(true);
                    this._btns[i].parent = null;
                    this._btns.splice(i);
                }
                this._index = -1;
            }
            size(width, height) {
                super.size(width, height);
                this.sp_container.size(width, height);
                this.btn_page_down.y = (this.height - this.btn_page_down.height) >> 1;
                this.btn_page_down.x = this.width - 24 - this.btn_page_down.width;
                this.btn_page_up.y = (this.height - this.btn_page_up.height) >> 1;
                let curImage = this._images[this._index];
                if (curImage)
                    curImage.size(width, height);
                this.hbox.y = this.height - this.hbox.height - 5;
                this.hbox.x = (this.width - this.hbox.width) >> 1;
                return this;
            }
            update() {
                let image = null;
                let btn = null;
                let that = this;
                this._data.forEach((url, index) => {
                    image = new Laya.Image();
                    image.skin = url;
                    this._images.push(image);
                    btn = new Laya.Button();
                    btn.skin = "ui/main_dot.png";
                    btn.stateNum = 2;
                    this.hbox.addChild(btn);
                    btn.on(Laya.Event.CLICK, that, that.selectIndex, [index]);
                    this.hbox.space = 5;
                    this.hbox.refresh();
                    this._btns.push(btn);
                });
                image = this._images[this._index];
                image.size(this.width, this.height);
                this.sp_container.addChild(image);
            }
            selectIndex(index) {
                this.sp_container.removeChild(this._images[this._index]);
                this._index = index;
                this._images[this._index].x = 0;
                this.sp_container.addChild(this._images[this._index]);
                this.checkPageBtnStatus();
            }
            destroy(destroyChild) {
                this.btn_page_down.off(Laya.Event.CLICK, this, this.clickHandler);
                this.btn_page_up.off(Laya.Event.CLICK, this, this.clickHandler);
                super.destroy(destroyChild);
            }
        }
        elements.Preview2DView = Preview2DView;
    })(elements = view.elements || (view.elements = {}));
})(view || (view = {}));
//# sourceMappingURL=Preview2DView.js.map