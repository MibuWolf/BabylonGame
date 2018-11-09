(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"), require("babylonjs-gui"), require("babylonjs-loaders"), require("babylonjs-serializers"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-inspector", ["babylonjs", "babylonjs-gui", "babylonjs-loaders", "babylonjs-serializers"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-inspector"] = factory(require("babylonjs"), require("babylonjs-gui"), require("babylonjs-loaders"), require("babylonjs-serializers"));
	else
		root["INSPECTOR"] = factory(root["BABYLON"], root["BABYLON"]["GUI"], root["BABYLON"], root["BABYLON"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_babylonjs__, __WEBPACK_EXTERNAL_MODULE_babylonjs_gui__, __WEBPACK_EXTERNAL_MODULE_babylonjs_loaders__, __WEBPACK_EXTERNAL_MODULE_babylonjs_serializers__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"babylonjs-inspector": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".babylon.inspector.bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../Tools/Gulp/node_modules/webpack/buildin/global.js":
/*!************************************************************!*\
  !*** ../Tools/Gulp/node_modules/webpack/buildin/global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../dist/preview release/split.js":
/*!****************************************!*\
  !*** ../dist/preview release/split.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 (function () { var t = this, e = t.attachEvent && !t[r], i = t.document, r = "addEventListener", s = "removeEventListener", n = "getBoundingClientRect", o = function () { for (var t, e = ["", "-webkit-", "-moz-", "-o-"], r = 0; r < e.length; r++)if (t = i.createElement("div"), t.style.cssText = "width:" + e[r] + "calc(9px)", t.style.length) return e[r] + "calc" }(), a = function (t) { return "string" == typeof t || t instanceof String ? i.querySelector(t) : t }, l = function (l, c) { var u, g, h, p, d, z, S, f, v = []; c = void 0 !== c ? c : {}, void 0 === c.gutterSize && (c.gutterSize = 10), void 0 === c.minSize && (c.minSize = 100), void 0 === c.snapOffset && (c.snapOffset = 30), void 0 === c.direction && (c.direction = "horizontal"), "horizontal" == c.direction ? (u = "width", h = "clientWidth", p = "clientX", d = "left", z = "gutter gutter-horizontal", S = "paddingLeft", f = "paddingRight", c.cursor || (c.cursor = "ew-resize")) : "vertical" == c.direction && (u = "height", h = "clientHeight", p = "clientY", d = "top", z = "gutter gutter-vertical", S = "paddingTop", f = "paddingBottom", c.cursor || (c.cursor = "ns-resize")), c.blockDrag && (z += " blocked"); var y = function (e) { if (!c.blockDrag) { var i = this, s = i.a, n = i.b; !i.dragging && c.onDragStart && c.onDragStart(), e.preventDefault(), i.dragging = !0, i.move = b.bind(i), i.stop = m.bind(i), t[r]("mouseup", i.stop), t[r]("touchend", i.stop), t[r]("touchcancel", i.stop), i.parent[r]("mousemove", i.move), i.parent[r]("touchmove", i.move), s[r]("selectstart", E), s[r]("dragstart", E), n[r]("selectstart", E), n[r]("dragstart", E), s.style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.MozUserSelect = "none", s.style.pointerEvents = "none", n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.MozUserSelect = "none", n.style.pointerEvents = "none", i.gutter.style.cursor = c.cursor, i.parent.style.cursor = c.cursor, G.call(i) } }, m = function () { if (!c.blockDrag) { var e = this, i = e.a, r = e.b; e.dragging && c.onDragEnd && c.onDragEnd(), e.dragging = !1, t[s]("mouseup", e.stop), t[s]("touchend", e.stop), t[s]("touchcancel", e.stop), e.parent[s]("mousemove", e.move), e.parent[s]("touchmove", e.move), delete e.stop, delete e.move, i[s]("selectstart", E), i[s]("dragstart", E), r[s]("selectstart", E), r[s]("dragstart", E), i.style.userSelect = "", i.style.webkitUserSelect = "", i.style.MozUserSelect = "", i.style.pointerEvents = "", r.style.userSelect = "", r.style.webkitUserSelect = "", r.style.MozUserSelect = "", r.style.pointerEvents = "", e.gutter.style.cursor = "", e.parent.style.cursor = "" } }, b = function (t) { var e; this.dragging && (e = "touches" in t ? t.touches[0][p] - this.start : t[p] - this.start, e > this.aMin + c.snapOffset + this.aGutterSize ? e < this.size - (this.bMin + c.snapOffset + this.bGutterSize) || (e = this.size - (this.bMin + this.bGutterSize)) : e = this.aMin + this.aGutterSize, w.call(this, e), c.onDrag && c.onDrag()) }, G = function () { var e = t.getComputedStyle(this.parent), i = this.parent[h] - parseFloat(e[S]) - parseFloat(e[f]); this.size = this.a[n]()[u] + this.b[n]()[u] + this.aGutterSize + this.bGutterSize, this.percentage = Math.min(this.size / i * 100, 100), this.start = this.a[n]()[d] }, w = function (t) { this.a.style[u] = o + "(" + t / this.size * this.percentage + "% - " + this.aGutterSize + "px)", this.b.style[u] = o + "(" + (this.percentage - t / this.size * this.percentage) + "% - " + this.bGutterSize + "px)" }, x = function (t, i, r) { "string" == typeof i || i instanceof String || (i = e ? c.sizes[g] + "%" : o + "(" + i + "% - " + r + "px)"), t.style[u] = i }, E = function () { return !1 }, M = a(l[0]).parentNode; if (!c.sizes) { var D = 100 / l.length; for (c.sizes = [], g = 0; g < l.length; g++)c.sizes.push(D) } if (!Array.isArray(c.minSize)) { var k = []; for (g = 0; g < l.length; g++)k.push(c.minSize); c.minSize = k } for (g = 0; g < l.length; g++) { var U, L = a(l[g]), O = 1 == g, B = g == l.length - 1, C = c.sizes[g], F = c.gutterSize; if (g > 0 && (U = { a: a(l[g - 1]), b: L, aMin: c.minSize[g - 1], bMin: c.minSize[g], dragging: !1, parent: M, isFirst: O, isLast: B, direction: c.direction }, U.aGutterSize = c.gutterSize, U.bGutterSize = c.gutterSize, O && (U.aGutterSize = c.gutterSize / 2), B && (U.bGutterSize = c.gutterSize / 2)), !e) { if (g > 0) { var A = i.createElement("div"); A.className = z, A.style[u] = c.gutterSize + "px", A[r]("mousedown", y.bind(U)), A[r]("touchstart", y.bind(U)), M.insertBefore(A, L), U.gutter = A } (0 === g || g == l.length - 1) && (F = c.gutterSize / 2) } x(L, C, F), g > 0 && v.push(U) } return { setSizes: function (t) { for (var e = 0; e < t.length; e++)if (e > 0) { var i = v[e - 1]; x(i.a, t[e - 1], i.aGutterSize), x(i.b, t[e], i.bGutterSize) } }, collapse: function (t) { var e; t === v.length ? (e = v[t - 1], G.call(e), w.call(e, e.size - e.bGutterSize)) : (e = v[t], G.call(e), w.call(e, e.aGutterSize)) }, destroy: function () { for (var t = 0; t < v.length; t++)v[t].parent.removeChild(v[t].gutter), v[t].a.style[u] = "", v[t].b.style[u] = "" } } };  true ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports.Split = l) : undefined }).call(window);

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./sass/main.scss":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./sass/main.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.13/css/all.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata);", ""]);

// module
exports.push([module.i, ".insp-wrapper {\n  user-select: none;\n  display: flex;\n  font-size: 0.9em;\n  font-family: \"Inconsolata\", sans-serif;\n  background-color: #242424;\n  /**\r\n * A tool contained in the tree panel (available for each item of the tree)\r\n */\n  /**\r\n * The toolbar contains : \r\n * - a refresh tool - refresh the whole panel\r\n * - a popup tool - Open the inspector in a new panel\r\n * ...\r\n */\n  /*\r\n* 1. Set to 0 height and width, and remove border for a slider without a thumb\r\n*/ }\n  .insp-wrapper .gutter {\n    background-color: #2c2c2c; }\n    .insp-wrapper .gutter.gutter-vertical:not(.blocked) {\n      cursor: ns-resize; }\n    .insp-wrapper .gutter.gutter-horizontal:not(.blocked) {\n      cursor: ew-resize; }\n  .insp-wrapper .insp-right-panel {\n    width: 750px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0; }\n    .insp-wrapper .insp-right-panel.popupmode {\n      width: 100% !important; }\n    .insp-wrapper .insp-right-panel .top-panel {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      background-color: #242424;\n      color: #ccc;\n      font-size: 1em; }\n      .insp-wrapper .insp-right-panel .top-panel .tab-panel-content {\n        width: 100%;\n        height: calc(100% - 50px); }\n      .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel {\n        position: absolute;\n        z-index: 10;\n        top: 50px;\n        right: 0;\n        width: 100px;\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        border: 1px solid #454545;\n        background-color: #242424; }\n        .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab {\n          height: 25px;\n          width: 100%;\n          line-height: 25px;\n          text-align: center;\n          background-color: #2c2c2c;\n          cursor: pointer; }\n          .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab:hover {\n            background-color: #383838; }\n          .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab:active {\n            background-color: #454545; }\n  .insp-wrapper .tooltip {\n    position: absolute;\n    top: 50px;\n    right: 0;\n    color: #f29766;\n    display: none;\n    z-index: 4;\n    font-family: \"Inconsolata\", sans-serif;\n    padding: 2px;\n    background-color: #242424;\n    border: 1px solid #454545; }\n  .insp-wrapper .treeTool {\n    margin: 3px 8px 3px 3px;\n    cursor: pointer;\n    position: relative; }\n    .insp-wrapper .treeTool:hover {\n      color: #5db0d7; }\n    .insp-wrapper .treeTool.active {\n      color: #5db0d7; }\n  .insp-wrapper .tab-panel {\n    height: 100%; }\n    .insp-wrapper .tab-panel.searchable {\n      height: calc(100% - 30px - 10px); }\n    .insp-wrapper .tab-panel .texture-image {\n      max-height: 400px; }\n    .insp-wrapper .tab-panel .scene-actions {\n      overflow-y: auto;\n      padding-left: 5px; }\n      .insp-wrapper .tab-panel .scene-actions .actions-title {\n        font-size: 1.1em;\n        padding-bottom: 10px;\n        border-bottom: 1px solid #5db0d7;\n        margin: 10px 0 10px 0; }\n      .insp-wrapper .tab-panel .scene-actions .defaut-action, .insp-wrapper .tab-panel .scene-actions .action-radio, .insp-wrapper .tab-panel .scene-actions .action {\n        height: 20px;\n        line-height: 20px;\n        width: 100%;\n        cursor: pointer; }\n        .insp-wrapper .tab-panel .scene-actions .defaut-action:hover, .insp-wrapper .tab-panel .scene-actions .action-radio:hover, .insp-wrapper .tab-panel .scene-actions .action:hover {\n          background-color: #2c2c2c; }\n        .insp-wrapper .tab-panel .scene-actions .defaut-action:active, .insp-wrapper .tab-panel .scene-actions .action-radio:active, .insp-wrapper .tab-panel .scene-actions .action:active {\n          background-color: #383838; }\n      .insp-wrapper .tab-panel .scene-actions .action-radio:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F111\";\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action-radio.active:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F192\";\n        color: #5db0d7;\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F0C8\";\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action.active:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F14A\";\n        color: #5db0d7;\n        margin-right: 10px; }\n  .insp-wrapper .tab-panel .shader-tree-panel {\n    height: 30px; }\n    .insp-wrapper .tab-panel .shader-tree-panel select {\n      height: 30px;\n      background-color: transparent;\n      color: #ccc;\n      height: 30px;\n      width: 100%;\n      max-width: 300px;\n      padding-left: 15px;\n      border: 1px solid #2c2c2c;\n      outline: 1px solid #454545; }\n      .insp-wrapper .tab-panel .shader-tree-panel select option {\n        padding: 5px;\n        color: gray; }\n  .insp-wrapper .tab-panel .shader-panel {\n    min-height: 100px;\n    user-select: text;\n    box-sizing: border-box;\n    padding: 0 15px; }\n    .insp-wrapper .tab-panel .shader-panel pre {\n      margin: 0;\n      white-space: pre-wrap; }\n      .insp-wrapper .tab-panel .shader-panel pre code {\n        background-color: #242424 !important;\n        padding: 0;\n        margin: 0; }\n    .insp-wrapper .tab-panel .shader-panel .shader-panel-title {\n      height: 25px;\n      border-bottom: 1px solid #383838;\n      text-transform: uppercase;\n      line-height: 25px;\n      margin-bottom: 10px; }\n  .insp-wrapper .tab-panel .console-panel {\n    min-height: 100px;\n    user-select: text;\n    box-sizing: border-box;\n    padding: 0 15px; }\n    .insp-wrapper .tab-panel .console-panel .console-panel-title {\n      height: 25px;\n      border-bottom: 1px solid #383838;\n      text-transform: uppercase;\n      line-height: 25px;\n      margin-bottom: 10px; }\n    .insp-wrapper .tab-panel .console-panel .console-panel-content {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: calc(100% - 30px); }\n    .insp-wrapper .tab-panel .console-panel .defaut-line, .insp-wrapper .tab-panel .console-panel .log, .insp-wrapper .tab-panel .console-panel .warn, .insp-wrapper .tab-panel .console-panel .error, .insp-wrapper .tab-panel .console-panel .object {\n      word-wrap: break-word;\n      padding: 3px 0 3px 5px; }\n    .insp-wrapper .tab-panel .console-panel .caller {\n      padding: 3px 0 3px 0;\n      color: #349ccd; }\n    .insp-wrapper .tab-panel .console-panel .log {\n      color: white; }\n    .insp-wrapper .tab-panel .console-panel .warn {\n      color: orange; }\n    .insp-wrapper .tab-panel .console-panel .error {\n      color: orangered; }\n    .insp-wrapper .tab-panel .console-panel .object {\n      color: #5db0d7; }\n  .insp-wrapper .tab-panel.stats-panel {\n    overflow-y: auto; }\n  .insp-wrapper .tab-panel .stats-fps {\n    font-weight: 600;\n    color: #f29766; }\n  .insp-wrapper .tab-panel .stat-title1 {\n    font-size: 1.1em;\n    padding: 10px; }\n  .insp-wrapper .tab-panel .stat-title2 {\n    margin: 10px 0 10px 0;\n    font-size: 1.05em;\n    border-bottom: 1px solid #5db0d7;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-label {\n    display: inline-block;\n    width: 80%;\n    padding: 2px;\n    background-color: #2c2c2c;\n    border-bottom: 1px solid #242424;\n    border-top: 1px solid #242424;\n    height: 30px;\n    line-height: 30px;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-value {\n    display: inline-block;\n    width: 20%;\n    padding: 2px;\n    background-color: #2c2c2c;\n    border-top: 1px solid #242424;\n    border-bottom: 1px solid #242424;\n    height: 30px;\n    line-height: 30px;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-infos {\n    width: 100%;\n    padding: 4px; }\n  .insp-wrapper .tab-panel .gltf-actions {\n    overflow-y: auto;\n    padding-left: 5px; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-title {\n      font-size: 1.1em;\n      padding-bottom: 10px;\n      border-bottom: 1px solid #5db0d7;\n      margin: 10px 0 10px 0; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-action, .insp-wrapper .tab-panel .gltf-actions .gltf-checkbox {\n      height: 20px;\n      line-height: 20px;\n      width: 100%;\n      cursor: pointer;\n      white-space: nowrap; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-action:hover, .insp-wrapper .tab-panel .gltf-actions .gltf-checkbox:hover {\n        background-color: #2c2c2c; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-icon {\n      width: 1em;\n      height: 1em;\n      line-height: 1em;\n      display: inline-block;\n      font-family: \"Font Awesome 5 Free\", sans-serif;\n      margin-right: 10px; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-checkbox:before {\n      width: 1em;\n      height: 1em;\n      line-height: 1em;\n      display: inline-block;\n      font-family: \"Font Awesome 5 Free\", sans-serif;\n      content: \"\\F0C8\";\n      margin-right: 10px; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-checkbox.active:before {\n      width: 1em;\n      height: 1em;\n      line-height: 1em;\n      display: inline-block;\n      font-family: \"Font Awesome 5 Free\", sans-serif;\n      content: \"\\F14A\";\n      color: #5db0d7;\n      margin-right: 10px; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-input {\n      background-color: #2c2c2c;\n      border: none;\n      outline: none;\n      font-family: \"Inconsolata\", sans-serif;\n      color: #b3b3b3;\n      padding: 5px;\n      margin: 0px 6px 0px 0; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-input:hover {\n        background-color: #383838; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-button {\n      background-color: #2c2c2c;\n      border: none;\n      outline: none;\n      font-family: \"Inconsolata\", sans-serif;\n      color: #ccc;\n      padding: 5px 10px;\n      margin: 0px 6px 0px 0; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-button:hover {\n        background-color: #383838; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-button:active {\n        background-color: #454545; }\n  .insp-wrapper .tab-panel.tools-panel {\n    overflow-y: auto; }\n  .insp-wrapper .tab-panel .tool-title1 {\n    font-size: 1.1em;\n    padding: 10px; }\n  .insp-wrapper .tab-panel .tool-title2 {\n    margin: 10px 0 10px 0;\n    font-size: 1.05em;\n    border-bottom: 1px solid #5db0d7;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .tool-label, .insp-wrapper .tab-panel .tool-label-line, .insp-wrapper .tab-panel .tool-label-error {\n    background-color: #2c2c2c;\n    border: none;\n    outline: none;\n    font-family: \"Inconsolata\", sans-serif;\n    color: #b3b3b3;\n    padding: 5px;\n    margin: 0px 6px 0px 0; }\n  .insp-wrapper .tab-panel .tool-label-line {\n    width: 100%; }\n  .insp-wrapper .tab-panel .tool-label-error {\n    color: #fa371d;\n    width: 100%;\n    background-color: none; }\n  .insp-wrapper .tab-panel .tool-value {\n    display: inline-block;\n    width: 25%;\n    padding: 2px;\n    background-color: #2c2c2c;\n    border-top: 1px solid #242424;\n    border-bottom: 1px solid #242424;\n    height: 30px;\n    line-height: 30px;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .tool-infos {\n    width: 100%;\n    padding: 4px; }\n  .insp-wrapper .tab-panel .tool-input {\n    background-color: #2c2c2c;\n    border: none;\n    outline: none;\n    font-family: \"Inconsolata\", sans-serif;\n    color: #ccc;\n    padding: 5px 10px;\n    margin: 0px 6px 0px 0;\n    width: 100%;\n    border-top: 1px solid #242424;\n    border-bottom: 1px solid #242424;\n    text-align: left; }\n    .insp-wrapper .tab-panel .tool-input:hover {\n      background-color: #383838;\n      cursor: pointer; }\n    .insp-wrapper .tab-panel .tool-input:active {\n      background-color: #454545; }\n  .insp-wrapper .property-type {\n    color: #5db0d7; }\n  .insp-wrapper .property-name, .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name {\n    color: #f29766; }\n  .insp-wrapper .insp-tree {\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: calc(50% - 50px - 30px); }\n    .insp-wrapper .insp-tree .line {\n      padding: 3px;\n      cursor: pointer; }\n      .insp-wrapper .insp-tree .line:hover {\n        background-color: #2c2c2c; }\n      .insp-wrapper .insp-tree .line.active {\n        background-color: #454545; }\n        .insp-wrapper .insp-tree .line.active .line-content {\n          background-color: #242424; }\n      .insp-wrapper .insp-tree .line.unfolded:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F107\";\n        font-weight: 900; }\n      .insp-wrapper .insp-tree .line.folded:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \"Font Awesome 5 Free\", sans-serif;\n        content: \"\\F105\";\n        font-weight: 900; }\n      .insp-wrapper .insp-tree .line.unfolded.transformNode > span:first-of-type {\n        color: #f29766; }\n      .insp-wrapper .insp-tree .line.folded.transformNode > span:first-of-type {\n        color: #f29766; }\n      .insp-wrapper .insp-tree .line .line-content {\n        padding-left: 15px; }\n        .insp-wrapper .insp-tree .line .line-content:hover {\n          background-color: #242424; }\n        .insp-wrapper .insp-tree .line .line-content .line:hover:first-child {\n          background-color: #383838; }\n    .insp-wrapper .insp-tree .line_invisible {\n      display: none; }\n  .insp-wrapper .insp-details {\n    background-color: #242424;\n    overflow-y: auto;\n    overflow-x: auto;\n    color: #ccc;\n    font-family: \"Inconsolata\", sans-serif; }\n    .insp-wrapper .insp-details .details {\n      padding-left: 5px; }\n    .insp-wrapper .insp-details .base-row, .insp-wrapper .insp-details .row, .insp-wrapper .insp-details .header-row {\n      display: flex;\n      width: 100%; }\n      .insp-wrapper .insp-details .base-row .base-property, .insp-wrapper .insp-details .row .base-property, .insp-wrapper .insp-details .header-row .base-property, .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name, .insp-wrapper .insp-details .base-row .prop-value, .insp-wrapper .insp-details .row .prop-value, .insp-wrapper .insp-details .header-row .prop-value {\n        padding: 2px 0 2px 0;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n      .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name {\n        width: 35%; }\n      .insp-wrapper .insp-details .base-row .prop-value, .insp-wrapper .insp-details .row .prop-value, .insp-wrapper .insp-details .header-row .prop-value {\n        width: 59%;\n        padding-left: 5px; }\n        .insp-wrapper .insp-details .base-row .prop-value.clickable, .insp-wrapper .insp-details .row .prop-value.clickable, .insp-wrapper .insp-details .header-row .prop-value.clickable {\n          cursor: pointer; }\n          .insp-wrapper .insp-details .base-row .prop-value.clickable:hover, .insp-wrapper .insp-details .row .prop-value.clickable:hover, .insp-wrapper .insp-details .header-row .prop-value.clickable:hover {\n            background-color: #383838; }\n          .insp-wrapper .insp-details .base-row .prop-value.clickable:after, .insp-wrapper .insp-details .row .prop-value.clickable:after, .insp-wrapper .insp-details .header-row .prop-value.clickable:after {\n            font-family: \"Font Awesome 5 Free\", sans-serif;\n            content: \"\\A0   \\A0   \\A0   \\F105\";\n            font-weight: 900; }\n    .insp-wrapper .insp-details .row:nth-child(even) {\n      background-color: #2c2c2c; }\n    .insp-wrapper .insp-details .row.unfolded .prop-value.clickable:after {\n      font-family: \"Font Awesome 5 Free\", sans-serif;\n      content: \"\\A0   \\A0   \\A0   \\F107\";\n      font-weight: 900; }\n    .insp-wrapper .insp-details .header-row {\n      background-color: #2c2c2c;\n      color: #ccc;\n      width: 100%;\n      max-width: 100%; }\n      .insp-wrapper .insp-details .header-row > * {\n        color: #ccc !important;\n        padding: 5px 0 5px 5px !important;\n        cursor: pointer; }\n        .insp-wrapper .insp-details .header-row > *:hover {\n          background-color: #383838; }\n      .insp-wrapper .insp-details .header-row .header-col {\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n        .insp-wrapper .insp-details .header-row .header-col .sort-direction {\n          margin-right: 5px; }\n    .insp-wrapper .insp-details .element-viewer, .insp-wrapper .insp-details .color-element, .insp-wrapper .insp-details .texture-element {\n      position: relative;\n      width: 10px;\n      height: 10px;\n      display: inline-block;\n      margin-left: 5px; }\n    .insp-wrapper .insp-details .color-element {\n      width: 20px;\n      height: 15px; }\n    .insp-wrapper .insp-details .texture-element {\n      color: #f29766;\n      margin-left: 10px; }\n      .insp-wrapper .insp-details .texture-element .texture-viewer {\n        color: #ccc;\n        position: absolute;\n        z-index: 10;\n        bottom: 0;\n        right: 0;\n        display: block;\n        width: 150px;\n        height: 150px;\n        border: 1px solid #454545;\n        background-color: #242424;\n        transform: translateX(100%) translateY(100%);\n        display: none;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center; }\n        .insp-wrapper .insp-details .texture-element .texture-viewer .texture-viewer-img {\n          margin: 10px 0 10px 0;\n          max-width: 110px;\n          max-height: 110px; }\n  .insp-wrapper .tabbar {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #383838;\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    box-sizing: border-box; }\n    .insp-wrapper .tabbar .tab {\n      height: calc(50px - 2px);\n      width: auto;\n      padding: 0 10px 0 10px;\n      color: #ccc;\n      line-height: 50px;\n      text-align: center;\n      cursor: pointer;\n      margin: 0 5px 0 5px;\n      box-sizing: border-box; }\n      .insp-wrapper .tabbar .tab:hover {\n        border-bottom: 1px solid #f29766;\n        background-color: #2c2c2c; }\n      .insp-wrapper .tabbar .tab:active {\n        background-color: #383838; }\n      .insp-wrapper .tabbar .tab.active {\n        border-bottom: 1px solid #f29766; }\n    .insp-wrapper .tabbar .more-tabs {\n      width: 50px;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      position: relative;\n      border-right: 1px solid #383838; }\n      .insp-wrapper .tabbar .more-tabs:hover {\n        background-color: #383838; }\n      .insp-wrapper .tabbar .more-tabs:active {\n        color: #f29766;\n        background-color: #454545; }\n      .insp-wrapper .tabbar .more-tabs.active {\n        color: #f29766; }\n  .insp-wrapper .toolbar {\n    display: flex; }\n    .insp-wrapper .toolbar .tool {\n      width: 50px;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      position: relative;\n      border-right: 1px solid #383838; }\n      .insp-wrapper .toolbar .tool:hover {\n        background-color: #383838; }\n      .insp-wrapper .toolbar .tool:active {\n        color: #f29766;\n        background-color: #454545; }\n      .insp-wrapper .toolbar .tool.active {\n        color: #f29766; }\n  .insp-wrapper .searchbar {\n    border: 1px solid #2c2c2c;\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    color: #b3b3b3; }\n    .insp-wrapper .searchbar input {\n      background-color: #242424;\n      border: none;\n      width: 100%;\n      outline: none;\n      font-family: \"Inconsolata\", sans-serif;\n      color: #b3b3b3;\n      padding: 3px 0 3px 10px;\n      margin: 6px 0 6px 0; }\n  .insp-wrapper input[type=\"range\"] {\n    margin: auto;\n    -webkit-appearance: none;\n    position: relative;\n    overflow: hidden;\n    height: 15px;\n    width: 50%;\n    cursor: pointer;\n    border-radius: 0;\n    /* iOS */ }\n  .insp-wrapper ::-webkit-slider-runnable-track {\n    background: #ddd; }\n  .insp-wrapper ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    /* 1 */\n    height: 15px;\n    /* 1 */\n    background: #fff;\n    box-shadow: -100vw 0 0 100vw dodgerblue;\n    border: 0px solid #999;\n    /* 1 */ }\n  .insp-wrapper ::-moz-range-track {\n    height: 15px;\n    background: #ddd; }\n  .insp-wrapper ::-moz-range-thumb {\n    background: #fff;\n    height: 15px;\n    width: 20px;\n    border: 0px solid #999;\n    border-radius: 0 !important;\n    box-shadow: -100vw 0 0 100vw dodgerblue;\n    box-sizing: border-box; }\n  .insp-wrapper ::-ms-fill-lower {\n    background: dodgerblue; }\n  .insp-wrapper ::-ms-thumb {\n    background: #fff;\n    border: 0px solid #999;\n    height: 15px;\n    width: 20px;\n    box-sizing: border-box; }\n  .insp-wrapper ::-ms-ticks-after {\n    display: none; }\n  .insp-wrapper ::-ms-ticks-before {\n    display: none; }\n  .insp-wrapper ::-ms-track {\n    background: #ddd;\n    color: transparent;\n    height: 15px;\n    border: none; }\n  .insp-wrapper ::-ms-tooltip {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./sass/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/Inspector.ts":
/*!**************************!*\
  !*** ./src/Inspector.ts ***!
  \**************************/
/*! exports provided: Inspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspector", function() { return Inspector; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _properties_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties_gui */ "./src/properties_gui.ts");
/* harmony import */ var _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler/Scheduler */ "./src/scheduler/Scheduler.ts");
/* harmony import */ var _tabs_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/TabBar */ "./src/tabs/TabBar.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_6__);







var Inspector = /** @class */ (function () {
    /** The inspector is created with the given engine.
     * If the parameter 'popup' is false, the inspector is created as a right panel on the main window.
     * If the parameter 'popup' is true, the inspector is created in another popup.
     */
    function Inspector(scene, popup, initialTab, parentElement, newColors) {
        if (initialTab === void 0) { initialTab = 0; }
        if (parentElement === void 0) { parentElement = null; }
        var _this = this;
        /** True if the inspector is built as a popup tab */
        this._popupMode = false;
        this.onGUILoaded = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! babylonjs-gui */ "babylonjs-gui", 7)).then(function (GUI) {
            // Load GUI library if not already done
            if (!GUI || (typeof GUI !== "undefined" && Object.keys(GUI).indexOf("default") !== -1)) {
                babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadScript("https://preview.babylonjs.com/gui/babylon.gui.min.js", function () {
                    Inspector.GUIObject = BABYLON.GUI;
                    _this.onGUILoaded.notifyObservers(Inspector.GUIObject);
                    //Load properties of GUI objects now as GUI has to be declared before
                    Object(_properties_gui__WEBPACK_IMPORTED_MODULE_3__["loadGUIProperties"])(Inspector.GUIObject);
                }, function () {
                    console.warn('Error : loading "babylon.gui.min.js". Please add script https://preview.babylonjs.com/gui/babylon.min.gui.js to the HTML file.');
                });
            }
            else {
                Inspector.GUIObject = GUI;
                _this.onGUILoaded.notifyObservers(Inspector.GUIObject);
                //Load properties of GUI objects now as GUI has to be declared before
                Object(_properties_gui__WEBPACK_IMPORTED_MODULE_3__["loadGUIProperties"])(Inspector.GUIObject);
            }
        });
        //get Tabbar initialTab
        this._initialTab = initialTab;
        //get parentElement of our Inspector
        this._parentElement = parentElement;
        // get canvas parent only if needed.
        this._scene = scene;
        // Save HTML document and window
        Inspector.DOCUMENT = window.document;
        Inspector.WINDOW = window;
        // POPUP MODE
        if (popup) {
            // Build the inspector in the given parent
            this.openPopup(true); // set to true in order to NOT dispose the inspector (done in openPopup), as it's not existing yet
        }
        else {
            // Get canvas and its DOM parent
            var canvas = this._scene.getEngine().getRenderingCanvas();
            var canvasParent = canvas.parentElement;
            // get canvas style
            var canvasComputedStyle = Inspector.WINDOW.getComputedStyle(canvas);
            this._canvasStyle = {
                width: _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].Css(canvas, 'width'),
                height: _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].Css(canvas, 'height'),
                position: canvasComputedStyle.position,
                top: canvasComputedStyle.top,
                bottom: canvasComputedStyle.bottom,
                left: canvasComputedStyle.left,
                right: canvasComputedStyle.right,
                padding: canvasComputedStyle.padding,
                paddingBottom: canvasComputedStyle.paddingBottom,
                paddingLeft: canvasComputedStyle.paddingLeft,
                paddingTop: canvasComputedStyle.paddingTop,
                paddingRight: canvasComputedStyle.paddingRight,
                margin: canvasComputedStyle.margin,
                marginBottom: canvasComputedStyle.marginBottom,
                marginLeft: canvasComputedStyle.marginLeft,
                marginTop: canvasComputedStyle.marginTop,
                marginRight: canvasComputedStyle.marginRight
            };
            if (this._parentElement) {
                // Build the inspector wrapper
                this._c2diwrapper = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-wrapper', this._parentElement);
                this._c2diwrapper.style.width = '100%';
                this._c2diwrapper.style.height = '100%';
                this._c2diwrapper.style.paddingLeft = '5px';
                // add inspector
                var inspector = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-right-panel', this._c2diwrapper);
                inspector.style.width = '100%';
                inspector.style.height = '100%';
                // and build it in the popup
                this._buildInspector(inspector);
            }
            else {
                // Create c2di wrapper
                this._c2diwrapper = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-wrapper');
                // copy style from canvas to wrapper
                for (var prop in this._canvasStyle) {
                    this._c2diwrapper.style[prop] = this._canvasStyle[prop];
                }
                if (!canvasComputedStyle.width || !canvasComputedStyle.height || !canvasComputedStyle.left) {
                    return;
                }
                // Convert wrapper size in % (because getComputedStyle returns px only)
                var widthPx = parseFloat(canvasComputedStyle.width.substr(0, canvasComputedStyle.width.length - 2)) || 0;
                var heightPx = parseFloat(canvasComputedStyle.height.substr(0, canvasComputedStyle.height.length - 2)) || 0;
                // If the canvas position is absolute, restrain the wrapper width to the window width + left positionning
                if (canvasComputedStyle.position === "absolute" || canvasComputedStyle.position === "relative") {
                    // compute only left as it takes predominance if right is also specified (and it will be for the wrapper)
                    var leftPx = parseFloat(canvasComputedStyle.left.substr(0, canvasComputedStyle.left.length - 2)) || 0;
                    if (widthPx + leftPx >= Inspector.WINDOW.innerWidth) {
                        this._c2diwrapper.style.maxWidth = widthPx - leftPx + "px";
                    }
                }
                // Check if the parent of the canvas is the body page. If yes, the size ratio is computed
                var parent_1 = this._getRelativeParent(canvas);
                var parentWidthPx = parent_1.clientWidth;
                var parentHeightPx = parent_1.clientHeight;
                var pWidth = widthPx / parentWidthPx * 100;
                var pheight = heightPx / parentHeightPx * 100;
                this._c2diwrapper.style.width = pWidth + "%";
                this._c2diwrapper.style.height = pheight + "%";
                // reset canvas style
                canvas.style.position = "static";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.paddingBottom = "0";
                canvas.style.paddingLeft = "0";
                canvas.style.paddingTop = "0";
                canvas.style.paddingRight = "0";
                canvas.style.margin = "0";
                canvas.style.marginBottom = "0";
                canvas.style.marginLeft = "0";
                canvas.style.marginTop = "0";
                canvas.style.marginRight = "0";
                // Replace canvas with the wrapper...
                if (canvasParent) {
                    canvasParent.replaceChild(this._c2diwrapper, canvas);
                }
                // ... and add canvas to the wrapper
                this._c2diwrapper.appendChild(canvas);
                // add inspector
                var inspector = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-right-panel', this._c2diwrapper);
                // Add split bar
                if (!this._parentElement) {
                    Split__WEBPACK_IMPORTED_MODULE_6__([canvas, inspector], {
                        direction: 'horizontal',
                        sizes: [75, 25],
                        onDrag: function () {
                            _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].SEND_EVENT('resize');
                            if (_this._tabbar) {
                                _this._tabbar.updateWidth();
                            }
                        }
                    });
                }
                // Build the inspector
                this._buildInspector(inspector);
            }
            // Send resize event to the window
            _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].SEND_EVENT('resize');
            this._tabbar.updateWidth();
        }
        /*
        * Refresh the inspector if the browser is not edge
        *   Why not ?! Condition commented on 180525
        *   To be tested
        */
        // if (!Helpers.IsBrowserEdge()) {
        this.refresh();
        // }
        // Check custom css colors
        if (newColors) {
            var bColor = newColors.backgroundColor || '#242424';
            var bColorl1 = newColors.backgroundColorLighter || '#2c2c2c';
            var bColorl2 = newColors.backgroundColorLighter2 || '#383838';
            var bColorl3 = newColors.backgroundColorLighter3 || '#454545';
            var color = newColors.color || '#ccc';
            var colorTop = newColors.colorTop || '#f29766';
            var colorBot = newColors.colorBot || '#5db0d7';
            var styles = Inspector.DOCUMENT.querySelectorAll('style');
            for (var s = 0; s < styles.length; s++) {
                var style = styles[s];
                if (style.innerHTML.indexOf('insp-wrapper') != -1) {
                    styles[s].innerHTML = styles[s].innerHTML
                        .replace(/#242424/g, bColor) // background color
                        .replace(/#2c2c2c/g, bColorl1) // background-lighter
                        .replace(/#383838/g, bColorl2) // background-lighter2
                        .replace(/#454545/g, bColorl3) // background-lighter3
                        .replace(/#ccc/g, color) // color
                        .replace(/#f29766/g, colorTop) // color-top
                        .replace(/#5db0d7/g, colorBot); // color-bot
                }
            }
        }
    }
    /**
     * If the given element has a position 'asbolute' or 'relative',
     * returns the first parent of the given element that has a position 'relative' or 'absolute'.
     * If the given element has no position, returns the first parent
     *
     */
    Inspector.prototype._getRelativeParent = function (elem, lookForAbsoluteOrRelative) {
        // If the elem has no parent, returns himself
        if (!elem.parentElement) {
            return elem;
        }
        var computedStyle = Inspector.WINDOW.getComputedStyle(elem);
        // looking for the first element absolute or relative
        if (lookForAbsoluteOrRelative) {
            // if found, return this one
            if (computedStyle.position === "relative" || computedStyle.position === "absolute") {
                return elem;
            }
            else {
                // otherwise keep looking
                return this._getRelativeParent(elem.parentElement, true);
            }
        }
        // looking for the relative parent of the element
        else {
            if (computedStyle.position == "static") {
                return elem.parentElement;
            }
            else {
                // the elem has a position relative or absolute, look for the closest relative/absolute parent
                return this._getRelativeParent(elem.parentElement, true);
            }
        }
    };
    /** Build the inspector panel in the given HTML element */
    Inspector.prototype._buildInspector = function (parent) {
        // tabbar
        this._tabbar = new _tabs_TabBar__WEBPACK_IMPORTED_MODULE_5__["TabBar"](this, this._initialTab);
        // Top panel
        this._topPanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('top-panel', parent);
        // Add tabbar
        this._topPanel.appendChild(this._tabbar.toHtml());
        this._tabbar.updateWidth();
        // Tab panel
        this._tabPanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('tab-panel-content', this._topPanel);
    };
    Object.defineProperty(Inspector.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inspector.prototype, "popupMode", {
        get: function () {
            return this._popupMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Filter the list of item present in the tree.
     * All item returned should have the given filter contained in the item id.
    */
    Inspector.prototype.filterItem = function (filter) {
        var tab = this._tabbar.getActiveTab();
        if (tab) {
            tab.filter(filter);
        }
    };
    /** Display the mesh tab on the given object */
    Inspector.prototype.displayObjectDetails = function (mesh) {
        this._tabbar.switchMeshTab(mesh);
    };
    /** Clean the whole tree of item and rebuilds it */
    Inspector.prototype.refresh = function () {
        // Clean top panel
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._tabPanel);
        // Get the active tab and its items
        var activeTab = this._tabbar.getActiveTab();
        if (!activeTab) {
            return;
        }
        activeTab.update();
        this._tabPanel.appendChild(activeTab.getPanel());
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].SEND_EVENT('resize');
    };
    /** Remove the inspector panel when it's built as a right panel:
     * remove the right panel and remove the wrapper
     */
    Inspector.prototype.dispose = function () {
        if (!this._popupMode) {
            var activeTab = this._tabbar.getActiveTab();
            if (activeTab) {
                activeTab.dispose();
            }
            // Get canvas
            var canvas = this._scene.getEngine().getRenderingCanvas();
            // restore canvas style
            for (var prop in this._canvasStyle) {
                canvas.style[prop] = this._canvasStyle[prop];
            }
            // Get parent of the wrapper
            if (canvas.parentElement) {
                var canvasParent = canvas.parentElement.parentElement;
                if (canvasParent) {
                    canvasParent.insertBefore(canvas, this._c2diwrapper);
                    // Remove wrapper
                    _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._c2diwrapper);
                    this._c2diwrapper.remove();
                    // Send resize event to the window
                    _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].SEND_EVENT('resize');
                }
            }
        }
        _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_4__["Scheduler"].getInstance().dispose();
    };
    /** Open the inspector in a new popup
     * Set 'firstTime' to true if there is no inspector created beforehands
     */
    Inspector.prototype.openPopup = function (firstTime) {
        var _this = this;
        // Create popup
        var popup = window.open('', 'js INSPECTOR', 'toolbar=no,resizable=yes,menubar=no,width=750,height=1000');
        if (!popup) {
            alert("Please update your browser to open the js inspector in an external view.");
            return;
        }
        popup.document.title = "js INSPECTOR";
        // Get the inspector style
        var styles = Inspector.DOCUMENT.querySelectorAll('style');
        for (var s = 0; s < styles.length; s++) {
            popup.document.body.appendChild(styles[s].cloneNode(true));
        }
        var links = document.querySelectorAll('link');
        for (var l = 0; l < links.length; l++) {
            var link = popup.document.createElement("link");
            link.rel = "stylesheet";
            link.href = links[l].href;
            if (popup.document.head) {
                popup.document.head.appendChild(link);
            }
        }
        // Dispose the right panel if existing
        if (!firstTime) {
            this.dispose();
        }
        // set the mode as popup
        this._popupMode = true;
        // Save the HTML document
        Inspector.DOCUMENT = popup.document;
        Inspector.WINDOW = popup;
        // Build the inspector wrapper
        this._c2diwrapper = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-wrapper', popup.document.body);
        // add inspector
        var inspector = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-right-panel', this._c2diwrapper);
        inspector.classList.add('popupmode');
        // and build it in the popup
        this._buildInspector(inspector);
        // Rebuild it
        this.refresh();
        popup.addEventListener('resize', function () {
            if (_this._tabbar) {
                _this._tabbar.updateWidth();
            }
        });
    };
    Inspector.prototype.getActiveTabIndex = function () {
        return this._tabbar.getActiveTabIndex();
    };
    return Inspector;
}());



/***/ }),

/***/ "./src/adapters/Adapter.ts":
/*!*********************************!*\
  !*** ./src/adapters/Adapter.ts ***!
  \*********************************/
/*! exports provided: Adapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);

var Adapter = /** @class */ (function () {
    function Adapter(obj) {
        this._obj = obj;
    }
    /** Returns true if the given object correspond to this  */
    Adapter.prototype.correspondsTo = function (obj) {
        return obj === this._obj;
    };
    Object.defineProperty(Adapter.prototype, "name", {
        /** Returns the adapter unique name */
        get: function () {
            return Adapter._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Adapter.prototype, "object", {
        /**
         * Returns the actual object used for this adapter
         */
        get: function () {
            return this._obj;
        },
        enumerable: true,
        configurable: true
    });
    // a unique name for this adapter, to retrieve its own key in the local storage
    Adapter._name = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Geometry"].RandomId();
    return Adapter;
}());



/***/ }),

/***/ "./src/adapters/CameraAdapter.ts":
/*!***************************************!*\
  !*** ./src/adapters/CameraAdapter.ts ***!
  \***************************************/
/*! exports provided: CameraAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraAdapter", function() { return CameraAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_CameraPOV__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treetools/CameraPOV */ "./src/treetools/CameraPOV.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CameraAdapter = /** @class */ (function (_super) {
    __extends(CameraAdapter, _super);
    function CameraAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    CameraAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    CameraAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    CameraAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    CameraAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_CameraPOV__WEBPACK_IMPORTED_MODULE_1__["CameraPOV"](this));
        return tools;
    };
    // Set the point of view of the chosen camera
    CameraAdapter.prototype.setPOV = function () {
        this._obj.getScene().switchActiveCamera(this._obj);
    };
    // Return the name of the current active camera
    CameraAdapter.prototype.getCurrentActiveCamera = function () {
        var activeCamera = this._obj.getScene().activeCamera;
        if (activeCamera != null) {
            return activeCamera.name;
        }
        else {
            return "0";
        }
    };
    return CameraAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_2__["Adapter"]));



/***/ }),

/***/ "./src/adapters/GUIAdapter.ts":
/*!************************************!*\
  !*** ./src/adapters/GUIAdapter.ts ***!
  \************************************/
/*! exports provided: GUIAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIAdapter", function() { return GUIAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treetools/Checkbox */ "./src/treetools/Checkbox.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GUIAdapter = /** @class */ (function (_super) {
    __extends(GUIAdapter, _super);
    function GUIAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    GUIAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    GUIAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    GUIAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    GUIAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__["Checkbox"](this));
        return tools;
    };
    GUIAdapter.prototype.setVisible = function (b) {
        (this._obj).isVisible = b;
    };
    GUIAdapter.prototype.isVisible = function () {
        return (this._obj).isVisible;
    };
    return GUIAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_2__["Adapter"]));



/***/ }),

/***/ "./src/adapters/LightAdapter.ts":
/*!**************************************!*\
  !*** ./src/adapters/LightAdapter.ts ***!
  \**************************************/
/*! exports provided: LightAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightAdapter", function() { return LightAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treetools/Checkbox */ "./src/treetools/Checkbox.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LightAdapter = /** @class */ (function (_super) {
    __extends(LightAdapter, _super);
    function LightAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    LightAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    LightAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    LightAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    LightAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__["Checkbox"](this));
        return tools;
    };
    LightAdapter.prototype.setVisible = function (b) {
        this._obj.setEnabled(b);
    };
    LightAdapter.prototype.isVisible = function () {
        return this._obj.isEnabled();
    };
    return LightAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_2__["Adapter"]));



/***/ }),

/***/ "./src/adapters/MaterialAdapter.ts":
/*!*****************************************!*\
  !*** ./src/adapters/MaterialAdapter.ts ***!
  \*****************************************/
/*! exports provided: MaterialAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAdapter", function() { return MaterialAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MaterialAdapter = /** @class */ (function (_super) {
    __extends(MaterialAdapter, _super);
    function MaterialAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    MaterialAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    MaterialAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    MaterialAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    /** No tools for a material adapter */
    MaterialAdapter.prototype.getTools = function () {
        return [];
    };
    return MaterialAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_1__["Adapter"]));



/***/ }),

/***/ "./src/adapters/MeshAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapters/MeshAdapter.ts ***!
  \*************************************/
/*! exports provided: MeshAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshAdapter", function() { return MeshAdapter; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_BoundingBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../treetools/BoundingBox */ "./src/treetools/BoundingBox.ts");
/* harmony import */ var _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../treetools/Checkbox */ "./src/treetools/Checkbox.ts");
/* harmony import */ var _treetools_DebugArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../treetools/DebugArea */ "./src/treetools/DebugArea.ts");
/* harmony import */ var _treetools_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../treetools/Info */ "./src/treetools/Info.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var MeshAdapter = /** @class */ (function (_super) {
    __extends(MeshAdapter, _super);
    function MeshAdapter(mesh) {
        return _super.call(this, mesh) || this;
    }
    /** Returns the name displayed in the tree */
    MeshAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    MeshAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    MeshAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].GetAllLinesProperties(this._obj);
    };
    MeshAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"](this));
        tools.push(new _treetools_DebugArea__WEBPACK_IMPORTED_MODULE_4__["DebugArea"](this));
        if (this._obj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["AbstractMesh"]) {
            if (this._obj.getTotalVertices() > 0) {
                tools.push(new _treetools_BoundingBox__WEBPACK_IMPORTED_MODULE_2__["BoundingBox"](this));
            }
        }
        tools.push(new _treetools_Info__WEBPACK_IMPORTED_MODULE_5__["Info"](this));
        return tools;
    };
    MeshAdapter.prototype.setVisible = function (b) {
        this._obj.setEnabled(b);
        this._obj.isVisible = b;
    };
    MeshAdapter.prototype.isVisible = function () {
        return this._obj.isEnabled() && (this._obj.isVisible === undefined || this._obj.isVisible);
    };
    MeshAdapter.prototype.isBoxVisible = function () {
        return this._obj.showBoundingBox;
    };
    MeshAdapter.prototype.setBoxVisible = function (b) {
        return this._obj.showBoundingBox = b;
    };
    MeshAdapter.prototype.debug = function (enable) {
        // Draw axis the first time
        if (!this._axesViewer) {
            this._drawAxis();
        }
        // Display or hide axis
        if (!enable && this._axesViewer) {
            var mesh = this._obj;
            mesh.getScene().onBeforeRenderObservable.remove(this.onBeforeRenderObserver);
            this._axesViewer.dispose();
            this._axesViewer = null;
        }
    };
    /** Returns some information about this mesh */
    MeshAdapter.prototype.getInfo = function () {
        if (this._obj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["AbstractMesh"]) {
            return this._obj.getTotalVertices() + " vertices";
        }
        return '0 vertices';
    };
    /** Draw X, Y and Z axis for the actual object if this adapter.
     * Should be called only one time as it will fill this._axis
     */
    MeshAdapter.prototype._drawAxis = function () {
        var _this = this;
        this._obj.computeWorldMatrix();
        // Axis
        var x = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 0, 0);
        var y = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
        var z = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1);
        this._axesViewer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Debug"].AxesViewer(this._obj.getScene());
        var mesh = this._obj;
        this.onBeforeRenderObserver = mesh.getScene().onBeforeRenderObservable.add(function () {
            var matrix = mesh.getWorldMatrix();
            var extend = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 1, 1);
            if (mesh instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["AbstractMesh"]) {
                extend = mesh.getBoundingInfo().boundingBox.extendSizeWorld;
            }
            _this._axesViewer.scaleLines = Math.max(extend.x, extend.y, extend.z) * 2;
            _this._axesViewer.update(_this._obj.position, babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformNormal(x, matrix), babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformNormal(y, matrix), babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].TransformNormal(z, matrix));
        });
    };
    return MeshAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_6__["Adapter"]));



/***/ }),

/***/ "./src/adapters/PhysicsImpostorAdapter.ts":
/*!************************************************!*\
  !*** ./src/adapters/PhysicsImpostorAdapter.ts ***!
  \************************************************/
/*! exports provided: PhysicsImpostorAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsImpostorAdapter", function() { return PhysicsImpostorAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treetools/Checkbox */ "./src/treetools/Checkbox.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PhysicsImpostorAdapter = /** @class */ (function (_super) {
    __extends(PhysicsImpostorAdapter, _super);
    function PhysicsImpostorAdapter(obj, viewer) {
        var _this = _super.call(this, obj) || this;
        _this._isVisible = false;
        _this._viewer = viewer;
        return _this;
    }
    /** Returns the name displayed in the tree */
    PhysicsImpostorAdapter.prototype.id = function () {
        var str = '';
        var physicsImposter = this._obj;
        if (physicsImposter && physicsImposter.object) {
            str = physicsImposter.object.name || "";
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    PhysicsImpostorAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    PhysicsImpostorAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    PhysicsImpostorAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_Checkbox__WEBPACK_IMPORTED_MODULE_1__["Checkbox"](this));
        return tools;
    };
    PhysicsImpostorAdapter.prototype.setVisible = function (b) {
        this._isVisible = b;
        if (b) {
            this._viewer.showImpostor(this._obj);
        }
        else {
            this._viewer.hideImpostor(this._obj);
        }
    };
    PhysicsImpostorAdapter.prototype.isVisible = function () {
        return this._isVisible;
    };
    return PhysicsImpostorAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_2__["Adapter"]));



/***/ }),

/***/ "./src/adapters/SoundAdapter.ts":
/*!**************************************!*\
  !*** ./src/adapters/SoundAdapter.ts ***!
  \**************************************/
/*! exports provided: SoundAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundAdapter", function() { return SoundAdapter; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _treetools_SoundInteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treetools/SoundInteractions */ "./src/treetools/SoundInteractions.ts");
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SoundAdapter = /** @class */ (function (_super) {
    __extends(SoundAdapter, _super);
    function SoundAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    SoundAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    SoundAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    SoundAdapter.prototype.getProperties = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GetAllLinesProperties(this._obj);
    };
    SoundAdapter.prototype.getTools = function () {
        var tools = [];
        tools.push(new _treetools_SoundInteractions__WEBPACK_IMPORTED_MODULE_1__["SoundInteractions"](this));
        return tools;
    };
    SoundAdapter.prototype.setPlaying = function (callback) {
        if (this._obj.isPlaying) {
            this._obj.pause();
        }
        else {
            this._obj.play();
        }
        this._obj.onEndedObservable.addOnce(function () {
            callback();
        });
    };
    return SoundAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_2__["Adapter"]));



/***/ }),

/***/ "./src/adapters/TextureAdapter.ts":
/*!****************************************!*\
  !*** ./src/adapters/TextureAdapter.ts ***!
  \****************************************/
/*! exports provided: TextureAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureAdapter", function() { return TextureAdapter; });
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TextureAdapter = /** @class */ (function (_super) {
    __extends(TextureAdapter, _super);
    function TextureAdapter(obj) {
        return _super.call(this, obj) || this;
    }
    /** Returns the name displayed in the tree */
    TextureAdapter.prototype.id = function () {
        var str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    };
    /** Returns the type of this object - displayed in the tree */
    TextureAdapter.prototype.type = function () {
        return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].GET_TYPE(this._obj);
    };
    /** Returns the list of properties to be displayed for this adapter */
    TextureAdapter.prototype.getProperties = function () {
        // Not used in this tab
        return [];
    };
    TextureAdapter.prototype.getTools = function () {
        var tools = new Array();
        // tools.push(new CameraPOV(this));
        return tools;
    };
    return TextureAdapter;
}(_Adapter__WEBPACK_IMPORTED_MODULE_0__["Adapter"]));



/***/ }),

/***/ "./src/adapters/index.ts":
/*!*******************************!*\
  !*** ./src/adapters/index.ts ***!
  \*******************************/
/*! exports provided: Adapter, CameraAdapter, GUIAdapter, LightAdapter, MaterialAdapter, MeshAdapter, PhysicsImpostorAdapter, SoundAdapter, TextureAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Adapter */ "./src/adapters/Adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return _Adapter__WEBPACK_IMPORTED_MODULE_0__["Adapter"]; });

/* harmony import */ var _CameraAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CameraAdapter */ "./src/adapters/CameraAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraAdapter", function() { return _CameraAdapter__WEBPACK_IMPORTED_MODULE_1__["CameraAdapter"]; });

/* harmony import */ var _GUIAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUIAdapter */ "./src/adapters/GUIAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUIAdapter", function() { return _GUIAdapter__WEBPACK_IMPORTED_MODULE_2__["GUIAdapter"]; });

/* harmony import */ var _LightAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightAdapter */ "./src/adapters/LightAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightAdapter", function() { return _LightAdapter__WEBPACK_IMPORTED_MODULE_3__["LightAdapter"]; });

/* harmony import */ var _MaterialAdapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MaterialAdapter */ "./src/adapters/MaterialAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialAdapter", function() { return _MaterialAdapter__WEBPACK_IMPORTED_MODULE_4__["MaterialAdapter"]; });

/* harmony import */ var _MeshAdapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MeshAdapter */ "./src/adapters/MeshAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshAdapter", function() { return _MeshAdapter__WEBPACK_IMPORTED_MODULE_5__["MeshAdapter"]; });

/* harmony import */ var _PhysicsImpostorAdapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PhysicsImpostorAdapter */ "./src/adapters/PhysicsImpostorAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsImpostorAdapter", function() { return _PhysicsImpostorAdapter__WEBPACK_IMPORTED_MODULE_6__["PhysicsImpostorAdapter"]; });

/* harmony import */ var _SoundAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SoundAdapter */ "./src/adapters/SoundAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundAdapter", function() { return _SoundAdapter__WEBPACK_IMPORTED_MODULE_7__["SoundAdapter"]; });

/* harmony import */ var _TextureAdapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextureAdapter */ "./src/adapters/TextureAdapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureAdapter", function() { return _TextureAdapter__WEBPACK_IMPORTED_MODULE_8__["TextureAdapter"]; });












/***/ }),

/***/ "./src/details/DetailPanel.ts":
/*!************************************!*\
  !*** ./src/details/DetailPanel.ts ***!
  \************************************/
/*! exports provided: DetailPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPanel", function() { return DetailPanel; });
/* harmony import */ var _gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gui/BasicElement */ "./src/gui/BasicElement.ts");
/* harmony import */ var _gui_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/SearchBar */ "./src/gui/SearchBar.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var DetailPanel = /** @class */ (function (_super) {
    __extends(DetailPanel, _super);
    function DetailPanel(dr) {
        var _this = _super.call(this) || this;
        // Contains all details rows that belongs to the item above
        _this._detailRows = [];
        // Store the sort direction of each header column
        _this._sortDirection = {};
        _this._build();
        if (dr) {
            _this._detailRows = dr;
            _this.update();
        }
        return _this;
    }
    Object.defineProperty(DetailPanel.prototype, "details", {
        set: function (detailsRow) {
            this.clean();
            //add the searchBar
            this._addSearchBarDetails();
            this._details = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('details', this._div);
            this._detailRows = detailsRow;
            // Refresh HTML
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    DetailPanel.prototype._build = function () {
        this._div.className = 'insp-details';
        this._div.id = 'insp-details';
        // Create header row
        this._createHeaderRow();
        this._div.appendChild(this._headerRow);
    };
    /** Updates the HTML of the detail panel */
    DetailPanel.prototype.update = function (_items) {
        this._sortDetails('name', 1);
        // Check the searchbar
        if (_items) {
            this.cleanRow();
            this._addSearchDetails(_items);
            //console.log(_items);
        }
        else {
            this._addDetails();
            //console.log("np");
        }
    };
    /** Add the search bar for the details */
    DetailPanel.prototype._addSearchBarDetails = function () {
        var searchDetails = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('searchbar-details', this._div);
        // Create search bar
        this._searchDetails = new _gui_SearchBar__WEBPACK_IMPORTED_MODULE_1__["SearchBarDetails"](this);
        searchDetails.appendChild(this._searchDetails.toHtml());
        this._div.appendChild(searchDetails);
    };
    /** Search an element by name  */
    DetailPanel.prototype.searchByName = function (searchName) {
        var rows = [];
        for (var _i = 0, _a = this._detailRows; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.name.indexOf(searchName) >= 0) {
                rows.push(row);
            }
        }
        this.update(rows);
    };
    /** Add all lines in the html div. Does not sort them! */
    DetailPanel.prototype._addDetails = function () {
        for (var _i = 0, _a = this._detailRows; _i < _a.length; _i++) {
            var row = _a[_i];
            this._details.appendChild(row.toHtml());
        }
    };
    DetailPanel.prototype._addSearchDetails = function (_items) {
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var row = _items_1[_i];
            this._details.appendChild(row.toHtml());
        }
    };
    /**
     * Sort the details row by comparing the given property of each row
     */
    DetailPanel.prototype._sortDetails = function (property, _direction) {
        // Clean header
        var elems = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.querySelectorAll('.sort-direction');
        for (var e = 0; e < elems.length; e++) {
            elems[e].classList.remove('fa-chevron-up');
            elems[e].classList.remove('fa-chevron-down');
        }
        if (_direction || !this._sortDirection[property]) {
            this._sortDirection[property] = _direction || 1;
        }
        else {
            this._sortDirection[property] *= -1;
        }
        var direction = this._sortDirection[property];
        var query = this._headerRow.querySelector("#sort-direction-" + property);
        if (query) {
            if (direction == 1) {
                query.classList.remove('fa-chevron-down');
                query.classList.add('fa-chevron-up');
            }
            else {
                query.classList.remove('fa-chevron-up');
                query.classList.add('fa-chevron-down');
            }
        }
        var isString = function (s) {
            return typeof (s) === 'string' || s instanceof String;
        };
        this._detailRows.forEach(function (property) {
            property.closeDetails();
        });
        this._detailRows.sort(function (detail1, detail2) {
            var str1 = String(detail1[property]);
            var str2 = String(detail2[property]);
            if (!isString(str1)) {
                str1 = detail1[property].toString();
            }
            if (!isString(str2)) {
                str2 = detail2[property].toString();
            }
            // Compare numbers as numbers and string as string with 'numeric=true'
            return str1.localeCompare(str2, [], { numeric: true }) * direction;
        });
    };
    /**
     * Removes all data in the detail panel but keep the header row
     */
    DetailPanel.prototype.clean = function () {
        // Delete all details row
        for (var _i = 0, _a = this._detailRows; _i < _a.length; _i++) {
            var pline = _a[_i];
            pline.dispose();
        }
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._div);
        // Header row
        this._div.appendChild(this._headerRow);
    };
    /**
     * Clean the rows only
     */
    DetailPanel.prototype.cleanRow = function () {
        // Delete all details row
        for (var _i = 0, _a = this._detailRows; _i < _a.length; _i++) {
            var pline = _a[_i];
            pline.dispose();
        }
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._details);
    };
    /** Overrides basicelement.dispose */
    DetailPanel.prototype.dispose = function () {
        // Delete all details row
        for (var _i = 0, _a = this._detailRows; _i < _a.length; _i++) {
            var pline = _a[_i];
            pline.dispose();
        }
    };
    /**
     * Creates the header row : name, value, id
     */
    DetailPanel.prototype._createHeaderRow = function () {
        var _this = this;
        this._headerRow = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('header-row');
        var createDiv = function (name, cssClass) {
            var div = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv(cssClass + ' header-col');
            // Column title - first letter in uppercase
            var spanName = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createElement('span');
            spanName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
            // sort direction
            var spanDirection = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createElement('i');
            spanDirection.className = 'sort-direction fa';
            spanDirection.id = 'sort-direction-' + name;
            div.appendChild(spanName);
            div.appendChild(spanDirection);
            div.addEventListener('click', function (e) {
                _this._sortDetails(name);
                _this._addDetails();
            });
            return div;
        };
        this._headerRow.appendChild(createDiv('name', 'prop-name'));
        this._headerRow.appendChild(createDiv('value', 'prop-value'));
    };
    return DetailPanel;
}(_gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]));



/***/ }),

/***/ "./src/details/Property.ts":
/*!*********************************!*\
  !*** ./src/details/Property.ts ***!
  \*********************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");


/**
 * A property is a link between a data (string) and an object.
 */
var Property = /** @class */ (function () {
    function Property(prop, obj, parentObj) {
        this._property = prop;
        this._obj = obj;
        this._parentObj = parentObj || null;
    }
    Object.defineProperty(Property.prototype, "name", {
        get: function () {
            return this._property;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "value", {
        get: function () {
            return this._obj[this._property];
        },
        set: function (newValue) {
            if (newValue != undefined && this._obj[this._property] != undefined) {
                if (this._obj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"]) {
                    this._obj.debugLayer.onPropertyChangedObservable.notifyObservers({
                        object: this._obj,
                        property: this._property,
                        value: newValue,
                        initialValue: this._obj[this._property]
                    });
                }
                else {
                    if (this._parentObj != null) {
                        // Object that have "children" properties : Color, Vector, imageProcessingConfiguration
                        if (this._parentObj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"]) {
                            this._parentObj.debugLayer.onPropertyChangedObservable.notifyObservers({
                                object: this._parentObj,
                                property: this._property,
                                value: newValue,
                                initialValue: this._obj[this._property]
                            });
                        }
                        else {
                            this._parentObj.getScene().debugLayer.onPropertyChangedObservable.notifyObservers({
                                object: this._parentObj,
                                property: this._property,
                                value: newValue,
                                initialValue: this._obj[this._property]
                            });
                        }
                    }
                    else {
                        this._obj.getScene().debugLayer.onPropertyChangedObservable.notifyObservers({
                            object: this._obj,
                            property: this._property,
                            value: newValue,
                            initialValue: this._obj[this._property]
                        });
                    }
                }
            }
            this._obj[this._property] = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "type", {
        get: function () {
            return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].GET_TYPE(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "obj", {
        get: function () {
            return this._obj;
        },
        set: function (newObj) {
            this._obj = newObj;
        },
        enumerable: true,
        configurable: true
    });
    return Property;
}());



/***/ }),

/***/ "./src/details/PropertyLine.ts":
/*!*************************************!*\
  !*** ./src/details/PropertyLine.ts ***!
  \*************************************/
/*! exports provided: PropertyFormatter, PropertyLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFormatter", function() { return PropertyFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyLine", function() { return PropertyLine; });
/* harmony import */ var _gui_ColorPickerElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gui/ColorPickerElement */ "./src/gui/ColorPickerElement.ts");
/* harmony import */ var _gui_CubeTextureElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/CubeTextureElement */ "./src/gui/CubeTextureElement.ts");
/* harmony import */ var _gui_HDRCubeTextureElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gui/HDRCubeTextureElement */ "./src/gui/HDRCubeTextureElement.ts");
/* harmony import */ var _gui_TextureElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gui/TextureElement */ "./src/gui/TextureElement.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties */ "./src/properties.ts");
/* harmony import */ var _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scheduler/Scheduler */ "./src/scheduler/Scheduler.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Property */ "./src/details/Property.ts");








var PropertyFormatter = /** @class */ (function () {
    function PropertyFormatter() {
    }
    /**
     * Format the value of the given property of the given object.
     */
    PropertyFormatter.format = function (obj, prop) {
        // Get original value;
        var value = obj[prop];
        // test if type PrimitiveAlignment is available (only included in canvas2d)
        return value;
    };
    return PropertyFormatter;
}());

/**
 * A property line represents a line in the detail panel. This line is composed of :
 * - a name (the property name)
 * - a value if this property is of a type 'simple' : string, number, boolean, color, texture
 * - the type of the value if this property is of a complex type (Vector2, Size, ...)
 * - a ID if defined (otherwise an empty string is displayed)
 * The original object is sent to the value object who will update it at will.
 *
 * A property line can contain OTHER property line objects in the case of a complex type.
 * If this instance has no link to other instances, its type is ALWAYS a simple one (see above).
 *
 */
var PropertyLine = /** @class */ (function () {
    function PropertyLine(prop, parent, level) {
        if (parent === void 0) { parent = null; }
        if (level === void 0) { level = 0; }
        // If the type is complex, this property will have child to update
        this._children = [];
        /** The list of viewer element displayed at the end of the line (color, texture...) */
        this._elements = [];
        this._property = prop;
        this._level = level;
        this._parent = parent;
        this._div = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('row');
        this._div.style.marginLeft = this._level + "px";
        // Property name
        var propName = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('prop-name', this._div);
        propName.textContent = "" + this.name;
        // Value
        this._valueDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('prop-value', this._div);
        if (typeof this.value !== 'boolean' && !this._isSliderType()) {
            this._valueDiv.textContent = this._displayValueContent() || '-'; // Init value text node
        }
        this._createElements();
        for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
            var elem = _a[_i];
            this._valueDiv.appendChild(elem.toHtml());
        }
        this._updateValue();
        // If the property type is not simple, add click event to unfold its children
        if (typeof this.value === 'boolean') {
            this._checkboxInput();
        }
        else if (this._isSliderType()) {
            this._rangeInput();
        }
        else if (!this._isSimple()) {
            this._valueDiv.classList.add('clickable');
            this._valueDiv.addEventListener('click', this._addDetails.bind(this));
        }
        else {
            this._initInput();
            this._valueDiv.addEventListener('click', this._displayInputHandler);
            this._input.addEventListener('focusout', this._focusOutInputHandler);
            this._input.addEventListener('keydown', this._validateInputHandler);
            this._input.addEventListener('keydown', this._escapeInputHandler);
        }
        // Add this property to the scheduler
        _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().add(this);
    }
    /**
     * Init the input element and al its handler :
     * - a click in the window remove the input and restore the old property value
     * - enters updates the property
     */
    PropertyLine.prototype._initInput = function () {
        // Create the input element
        this._input = document.createElement('input');
        this._input.setAttribute('type', 'text');
        // if the property is 'simple', add an event listener to create an input
        this._displayInputHandler = this._displayInput.bind(this);
        this._validateInputHandler = this._validateInput.bind(this);
        this._escapeInputHandler = this._escapeInput.bind(this);
        this._focusOutInputHandler = this.update.bind(this);
        this._onMouseDownHandler = this._onMouseDown.bind(this);
        this._onMouseDragHandler = this._onMouseDrag.bind(this);
        this._onMouseUpHandler = this._onMouseUp.bind(this);
    };
    /**
     * On enter : validates the new value and removes the input
     * On escape : removes the input
     */
    PropertyLine.prototype._validateInput = function (e) {
        this._input.removeEventListener('focusout', this._focusOutInputHandler);
        if (e.keyCode == 13) { // Enter
            this.validateInput(this._input.value);
        }
        else if (e.keyCode == 9) { // Tab
            e.preventDefault();
            this.validateInput(this._input.value);
        }
        else if (e.keyCode == 27) { // Esc : remove input
            this.update();
        }
    };
    PropertyLine.prototype.validateInput = function (value, forceupdate) {
        if (forceupdate === void 0) { forceupdate = true; }
        this.updateObject();
        if (typeof this._property.value === 'number') {
            this._property.value = parseFloat(value);
        }
        else {
            this._property.value = value;
        }
        // Remove input
        if (forceupdate) {
            this.update();
            // resume scheduler
            _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().pause = false;
        }
    };
    /**
     * On escape : removes the input
     */
    PropertyLine.prototype._escapeInput = function (e) {
        // Remove focus out handler
        this._input.removeEventListener('focusout', this._focusOutInputHandler);
        if (e.keyCode == 27) {
            // Esc : remove input
            this.update();
        }
    };
    /** Removes the input without validating the new value */
    PropertyLine.prototype._removeInputWithoutValidating = function () {
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CleanDiv(this._valueDiv);
        if (typeof this.value !== 'boolean' && !this._isSliderType()) {
            this._valueDiv.textContent = "-";
        }
        // restore elements
        for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
            var elem = _a[_i];
            this._valueDiv.appendChild(elem.toHtml());
        }
        if (typeof this.value !== 'boolean' && !this._isSliderType()) {
            this._valueDiv.addEventListener('click', this._displayInputHandler);
        }
    };
    /** Replaces the default display with an input */
    PropertyLine.prototype._displayInput = function (e) {
        // Remove the displayInput event listener
        this._valueDiv.removeEventListener('click', this._displayInputHandler);
        // Set input value
        var valueTxt = this._valueDiv.textContent;
        this._valueDiv.textContent = "";
        this._input.value = valueTxt || "";
        this._valueDiv.appendChild(this._input);
        this._input.focus();
        if (typeof this.value !== 'boolean' && !this._isSliderType()) {
            this._input.addEventListener('focusout', this._focusOutInputHandler);
        }
        else if (typeof this.value === 'number') {
            this._input.addEventListener('mousedown', this._onMouseDownHandler);
        }
        // Pause the scheduler
        _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().pause = true;
    };
    /** Retrieve the correct object from its parent.
     * If no parent exists, returns the property value.
     * This method is used at each update in case the property object is removed from the original object
     * (example : mesh.position = new Vector3 ; the original vector3 object is deleted from the mesh).
    */
    PropertyLine.prototype.updateObject = function () {
        if (this._parent) {
            this._property.obj = this._parent.updateObject();
        }
        return this._property.value;
    };
    Object.defineProperty(PropertyLine.prototype, "name", {
        // Returns the property name
        get: function () {
            // let arrayName = Helpers.Capitalize(this._property.name).match(/[A-Z][a-z]+|[0-9]+/g)
            // if (arrayName) {
            //     return arrayName.join(" ");
            // }
            return this._property.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyLine.prototype, "value", {
        // Returns the value of the property
        get: function () {
            return PropertyFormatter.format(this._property.obj, this._property.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyLine.prototype, "type", {
        // Returns the type of the property
        get: function () {
            return this._property.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates elements that wil be displayed on a property line, depending on the
     * type of the property.
     */
    PropertyLine.prototype._createElements = function () {
        // Colors
        if (this.type == 'Color3' || this.type == 'Color4') {
            if (!_helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].IsBrowserIE()) {
                this._elements.push(new _gui_ColorPickerElement__WEBPACK_IMPORTED_MODULE_0__["ColorPickerElement"](this.value, this));
            }
        }
        // Texture
        if (this.type == 'Texture') {
            this._elements.push(new _gui_TextureElement__WEBPACK_IMPORTED_MODULE_3__["TextureElement"](this.value));
        }
        // HDR Texture
        if (this.type == 'HDRCubeTexture') {
            this._elements.push(new _gui_HDRCubeTextureElement__WEBPACK_IMPORTED_MODULE_2__["HDRCubeTextureElement"](this.value));
        }
        if (this.type == 'CubeTexture') {
            this._elements.push(new _gui_CubeTextureElement__WEBPACK_IMPORTED_MODULE_1__["CubeTextureElement"](this.value));
        }
    };
    // Returns the text displayed on the left of the property name :
    // - If the type is simple, display its value
    // - If the type is complex, but instance of Vector2, Size, display the type and its tostring
    // - If the type is another one, display the Type
    PropertyLine.prototype._displayValueContent = function () {
        var value = this.value;
        // If the value is a number, truncate it if needed
        if (typeof value === 'number') {
            return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].Trunc(value);
        }
        // If it's a string or a boolean, display its value
        if (typeof value === 'string' || typeof value === 'boolean') {
            return value;
        }
        return _properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"].format(value);
    };
    /** Delete properly this property line.
     * Removes itself from the scheduler.
     * Dispose all viewer element (color, texture...)
     */
    PropertyLine.prototype.dispose = function () {
        _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().remove(this);
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().remove(child);
        }
        for (var _b = 0, _c = this._elements; _b < _c.length; _b++) {
            var elem = _c[_b];
            elem.dispose();
        }
        this._elements = [];
    };
    /** Updates the content of _valueDiv with the value of the property,
     * and all HTML element correpsonding to this type.
     * Elements are updated as well
     */
    PropertyLine.prototype._updateValue = function () {
        // Update the property object first
        this.updateObject();
        // Then update its value
        // this._valueDiv.textContent = " "; // TOFIX this removes the elements after
        if (typeof this.value === 'boolean') {
            this._checkboxInput();
        }
        else if (this._isSliderType()) { // Add slider when parent have slider property
            this._rangeInput();
        }
        else {
            this._valueDiv.childNodes[0].nodeValue = this._displayValueContent();
            //Doing the Hexa convertion
            if ((this._property.type == "Color3" && this._children.length == 5 && this._children[1].value == true) || (this._property.type == "Color4" && this._children.length == 6 && this._children[1].value == true)) {
                if (this._children[0] != undefined && this._children[0].name == "hex") {
                    var hexLineString = this._children[0].value;
                    var rValue = (parseInt((hexLineString.slice(1, 3)), 16)) * (1 / 255);
                    var rValueRound = Math.round(100 * rValue) / 100;
                    this.value.r = rValueRound;
                    var gValue = (parseInt((hexLineString.slice(3, 5)), 16)) * (1 / 255);
                    var gValueRound = Math.round(100 * gValue) / 100;
                    this.value.g = gValueRound;
                    var bValue = (parseInt((hexLineString.slice(5, 7)), 16)) * (1 / 255);
                    var bValueRound = Math.round(100 * bValue) / 100;
                    this.value.b = bValueRound;
                    if (this._children[2].name == "a") {
                        var aValue = (parseInt((hexLineString.slice(7, 9)), 16)) * (1 / 255);
                        var aValueRound = Math.round(100 * aValue) / 100;
                        this.value.a = aValueRound;
                    }
                }
            }
            else if (this._property.type == "Color3" || this._property.type == "Color4") {
                if (this._property.value.hex != undefined && this._property.value.hex != null) {
                    var hexLineInfos = [];
                    var valHexR = ((this._property.value.r * 255) | 0).toString(16);
                    hexLineInfos.push(valHexR);
                    if (valHexR == "0") {
                        hexLineInfos.push("0");
                    }
                    var valHexG = ((this._property.value.g * 255) | 0).toString(16);
                    hexLineInfos.push(valHexG);
                    if (valHexG == "0") {
                        hexLineInfos.push("0");
                    }
                    var valHexB = ((this._property.value.b * 255) | 0).toString(16);
                    hexLineInfos.push(valHexB);
                    if (valHexB == "0") {
                        hexLineInfos.push("0");
                    }
                    if (this._property.value.a != undefined) {
                        var valHexA = ((this._property.value.a * 255) | 0).toString(16);
                        hexLineInfos.push(valHexA);
                        if (valHexA == "0") {
                            hexLineInfos.push("0");
                        }
                    }
                    hexLineInfos.unshift("#");
                    var hexLineString = hexLineInfos.join("");
                    this._property.value.hex = hexLineString;
                    hexLineInfos.length = 0;
                }
            }
        }
        for (var _i = 0, _a = this._elements; _i < _a.length; _i++) {
            var elem = _a[_i];
            elem.update(this.value);
        }
    };
    /**
     * Update the property division with the new property value.
     * If this property is complex, update its child, otherwise update its text content
     */
    PropertyLine.prototype.update = function () {
        this._removeInputWithoutValidating();
        this._updateValue();
    };
    /**
     * Returns true if the type of this property is simple, false otherwise.
     * Returns true if the value is null
     */
    PropertyLine.prototype._isSimple = function () {
        if (this.value != null && this.type !== 'type_not_defined') {
            if (PropertyLine._SIMPLE_TYPE.indexOf(this.type) == -1) {
                // complex type : return the type name
                return false;
            }
            else {
                // simple type : return value
                return true;
            }
        }
        else {
            return true;
        }
    };
    PropertyLine.prototype.toHtml = function () {
        return this._div;
    };
    PropertyLine.prototype.closeDetails = function () {
        if (this._div.classList.contains('unfolded')) {
            // Remove class unfolded
            this._div.classList.remove('unfolded');
            // remove html children
            if (this._div.parentNode) {
                for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    this._div.parentNode.removeChild(child.toHtml());
                }
            }
        }
    };
    /**
     * Add sub properties in case of a complex type
     */
    PropertyLine.prototype._addDetails = function () {
        if (this._div.classList.contains('unfolded')) {
            // Remove class unfolded
            this._div.classList.remove('unfolded');
            // remove html children
            if (this._div.parentNode) {
                for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    this._div.parentNode.removeChild(child.toHtml());
                }
            }
        }
        else {
            // if children does not exists, generate it
            this._div.classList.toggle('unfolded');
            if (this._children.length == 0) {
                var objToDetail = this.value;
                // Display all properties that are not functions
                var propToDisplay = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].GetAllLinesPropertiesAsString(objToDetail);
                // special case for color3
                if ((propToDisplay.indexOf('r') && propToDisplay.indexOf('g') && propToDisplay.indexOf('b')) == 0) {
                    propToDisplay.sort();
                }
                else {
                    propToDisplay.sort().reverse();
                }
                for (var _b = 0, propToDisplay_1 = propToDisplay; _b < propToDisplay_1.length; _b++) {
                    var prop = propToDisplay_1[_b];
                    var infos = new _Property__WEBPACK_IMPORTED_MODULE_7__["Property"](prop, this._property.value, this._property.obj);
                    var child = new PropertyLine(infos, this, this._level + PropertyLine._MARGIN_LEFT);
                    this._children.push(child);
                }
                //Add the Hexa converter
                if ((propToDisplay.indexOf('r') && propToDisplay.indexOf('g') && propToDisplay.indexOf('b') && propToDisplay.indexOf('a')) == 0) {
                    var hexLineInfos = [];
                    var hexLinePropCheck = new _Property__WEBPACK_IMPORTED_MODULE_7__["Property"]("hexEnable", this._property.value, this._property.obj);
                    hexLinePropCheck.value = false;
                    var hexLineCheck = new PropertyLine(hexLinePropCheck, this, this._level + PropertyLine._MARGIN_LEFT);
                    this._children.unshift(hexLineCheck);
                    for (var _c = 0, propToDisplay_2 = propToDisplay; _c < propToDisplay_2.length; _c++) {
                        var prop = propToDisplay_2[_c];
                        var infos = new _Property__WEBPACK_IMPORTED_MODULE_7__["Property"](prop, this._property.value, this._property.obj);
                        var valHex = ((infos.value * 255) | 0).toString(16);
                        hexLineInfos.push(valHex);
                        if (valHex == "0") {
                            hexLineInfos.push("0");
                        }
                    }
                    hexLineInfos.push("#");
                    hexLineInfos.reverse();
                    var hexLineString = hexLineInfos.join("");
                    var hexLineProp = new _Property__WEBPACK_IMPORTED_MODULE_7__["Property"]("hex", this._property.value, this._property.obj);
                    hexLineProp.value = hexLineString;
                    var hexLine = new PropertyLine(hexLineProp, this, this._level + PropertyLine._MARGIN_LEFT);
                    this._children.unshift(hexLine);
                }
            }
            // otherwise display it
            if (this._div.parentNode) {
                for (var _d = 0, _e = this._children; _d < _e.length; _d++) {
                    var child = _e[_d];
                    this._div.parentNode.insertBefore(child.toHtml(), this._div.nextSibling);
                }
            }
        }
    };
    /**
     * Refresh mouse position on y axis
     * @param e
     */
    PropertyLine.prototype._onMouseDrag = function (e) {
        var diff = this._prevY - e.clientY;
        this._input.value = (this._preValue + diff).toString();
    };
    /**
     * Save new value from slider
     * @param e
     */
    PropertyLine.prototype._onMouseUp = function (e) {
        window.removeEventListener('mousemove', this._onMouseDragHandler);
        window.removeEventListener('mouseup', this._onMouseUpHandler);
        this._prevY = e.clientY;
    };
    /**
     * Start record mouse position
     * @param e
     */
    PropertyLine.prototype._onMouseDown = function (e) {
        this._prevY = e.clientY;
        this._preValue = this.value;
        window.addEventListener('mousemove', this._onMouseDragHandler);
        window.addEventListener('mouseup', this._onMouseUpHandler);
    };
    /**
     * Create input entry
     */
    PropertyLine.prototype._checkboxInput = function () {
        var _this = this;
        if (this._valueDiv.childElementCount < 1) { // Prevent display two checkbox
            this._input = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateInput('checkbox-element', this._valueDiv);
            this._input.type = 'checkbox';
            this._input.checked = this.value;
            this._input.addEventListener('change', function () {
                _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().pause = true;
                _this.validateInput(!_this.value);
            });
        }
    };
    PropertyLine.prototype._rangeInput = function () {
        if (this._valueDiv.childElementCount < 1) { // Prevent display two input range
            this._input = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateInput('slider-element', this._valueDiv);
            this._input.type = 'range';
            this._input.style.display = 'inline-block';
            this._input.min = this._getSliderProperty().min;
            this._input.max = this._getSliderProperty().max;
            this._input.step = this._getSliderProperty().step;
            this._input.value = this.value;
            this._validateInputHandler = this._rangeHandler.bind(this);
            this._input.addEventListener('input', this._validateInputHandler);
            this._input.addEventListener('change', function () {
                _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().pause = false;
            });
            this._textValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('value-text', this._valueDiv);
            this._textValue.innerText = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].Trunc(this.value).toString();
            this._textValue.style.paddingLeft = '10px';
            this._textValue.style.display = 'inline-block';
        }
    };
    PropertyLine.prototype._rangeHandler = function () {
        _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_6__["Scheduler"].getInstance().pause = true;
        //this._input.style.backgroundSize = ((parseFloat(this._input.value) - parseFloat(this._input.min)) * 100 / ( parseFloat(this._input.max) - parseFloat(this._input.min))) + '% 100%'
        this._textValue.innerText = this._input.value;
        this.validateInput(this._input.value, false);
    };
    PropertyLine.prototype._isSliderType = function () {
        return this._property &&
            _properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"].hasOwnProperty(this._property.obj.constructor.name) &&
            _properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"][this._property.obj.constructor.name].hasOwnProperty('slider') &&
            _properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"][this._property.obj.constructor.name].slider.hasOwnProperty(this.name);
    };
    PropertyLine.prototype._getSliderProperty = function () {
        return _properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"][this._property.obj.constructor.name].slider[this.name];
    };
    // Array representing the simple type. All others are considered 'complex'
    PropertyLine._SIMPLE_TYPE = ['number', 'string', 'boolean'];
    // The number of pixel at each children step
    PropertyLine._MARGIN_LEFT = 15;
    return PropertyLine;
}());



/***/ }),

/***/ "./src/details/index.ts":
/*!******************************!*\
  !*** ./src/details/index.ts ***!
  \******************************/
/*! exports provided: DetailPanel, Property, PropertyFormatter, PropertyLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailPanel */ "./src/details/DetailPanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailPanel", function() { return _DetailPanel__WEBPACK_IMPORTED_MODULE_0__["DetailPanel"]; });

/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property */ "./src/details/Property.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _Property__WEBPACK_IMPORTED_MODULE_1__["Property"]; });

/* harmony import */ var _PropertyLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyLine */ "./src/details/PropertyLine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFormatter", function() { return _PropertyLine__WEBPACK_IMPORTED_MODULE_2__["PropertyFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyLine", function() { return _PropertyLine__WEBPACK_IMPORTED_MODULE_2__["PropertyLine"]; });






/***/ }),

/***/ "./src/gui/BasicElement.ts":
/*!*********************************!*\
  !*** ./src/gui/BasicElement.ts ***!
  \*********************************/
/*! exports provided: BasicElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElement", function() { return BasicElement; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");

/**
 * Represents a html div element.
 * The div is built when an instance of BasicElement is created.
 */
var BasicElement = /** @class */ (function () {
    function BasicElement() {
        this._div = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].CreateDiv();
    }
    /**
     * Returns the div element
     */
    BasicElement.prototype.toHtml = function () {
        return this._div;
    };
    /**
     * Build the html element
     */
    BasicElement.prototype._build = function () { };
    /** Default dispose method if needed */
    BasicElement.prototype.dispose = function () { };
    return BasicElement;
}());



/***/ }),

/***/ "./src/gui/ColorElement.ts":
/*!*********************************!*\
  !*** ./src/gui/ColorElement.ts ***!
  \*********************************/
/*! exports provided: ColorElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorElement", function() { return ColorElement; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
* Display a very small div corresponding to the given color
*/
var ColorElement = /** @class */ (function (_super) {
    __extends(ColorElement, _super);
    // The color as hexadecimal string
    function ColorElement(color) {
        var _this = _super.call(this) || this;
        _this._div.className = 'color-element';
        _this._div.style.backgroundColor = _this._toRgba(color);
        return _this;
    }
    ColorElement.prototype.update = function (color) {
        if (color) {
            this._div.style.backgroundColor = this._toRgba(color);
        }
    };
    ColorElement.prototype._toRgba = function (color) {
        if (color) {
            var r = (color.r * 255) | 0;
            var g = (color.g * 255) | 0;
            var b = (color.b * 255) | 0;
            var a = 1;
            if (color instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color4"]) {
                a = color.a;
            }
            return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }
        else {
            return '';
        }
    };
    return ColorElement;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_1__["BasicElement"]));



/***/ }),

/***/ "./src/gui/ColorPickerElement.ts":
/*!***************************************!*\
  !*** ./src/gui/ColorPickerElement.ts ***!
  \***************************************/
/*! exports provided: ColorPickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerElement", function() { return ColorPickerElement; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/Scheduler */ "./src/scheduler/Scheduler.ts");
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Represents a html div element.
 * The div is built when an instance of BasicElement is created.
 */
var ColorPickerElement = /** @class */ (function (_super) {
    __extends(ColorPickerElement, _super);
    function ColorPickerElement(color, propertyLine) {
        var _this = _super.call(this) || this;
        var scheduler = _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_2__["Scheduler"].getInstance();
        _this._div.className = 'color-element';
        _this._div.style.backgroundColor = _this._toRgba(color);
        _this.pline = propertyLine;
        _this._input = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateInput();
        _this._input.type = 'color';
        _this._input.style.opacity = "0";
        _this._input.style.width = '10px';
        _this._input.style.height = '15px';
        _this._input.value = color.toHexString();
        _this._input.addEventListener('input', function (e) {
            var color = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromHexString(_this._input.value);
            color.r = parseFloat(color.r.toPrecision(2));
            color.g = parseFloat(color.g.toPrecision(2));
            color.b = parseFloat(color.b.toPrecision(2));
            _this.pline.validateInput(color);
            scheduler.pause = false;
        });
        _this._div.appendChild(_this._input);
        _this._input.addEventListener('click', function (e) {
            scheduler.pause = true;
        });
        return _this;
    }
    ColorPickerElement.prototype.update = function (color) {
        if (color) {
            this._div.style.backgroundColor = this._toRgba(color);
            this._input.value = color.toHexString();
        }
    };
    ColorPickerElement.prototype._toRgba = function (color) {
        if (color) {
            var r = (color.r * 255) | 0;
            var g = (color.g * 255) | 0;
            var b = (color.b * 255) | 0;
            var a = 1;
            if (color instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color4"]) {
                a = color.a;
            }
            return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }
        else {
            return '';
        }
    };
    return ColorPickerElement;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_3__["BasicElement"]));



/***/ }),

/***/ "./src/gui/CubeTextureElement.ts":
/*!***************************************!*\
  !*** ./src/gui/CubeTextureElement.ts ***!
  \***************************************/
/*! exports provided: CubeTextureElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeTextureElement", function() { return CubeTextureElement; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
* Display a very small div. A new canvas is created, with a new js scene, containing only the
* cube texture in a cube
*/
var CubeTextureElement = /** @class */ (function (_super) {
    __extends(CubeTextureElement, _super);
    /** The texture given as a parameter should be cube. */
    function CubeTextureElement(tex) {
        var _this = _super.call(this) || this;
        // On pause the engine will not render anything
        _this._pause = false;
        _this._div.className = 'fa fa-search texture-element';
        // Create the texture viewer
        _this._textureDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('texture-viewer', _this._div);
        // canvas
        _this._canvas = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateElement('canvas', 'texture-viewer-img', _this._textureDiv);
        if (tex) {
            _this._textureUrl = tex.name;
        }
        _this._div.addEventListener('mouseover', _this._showViewer.bind(_this, 'flex'));
        _this._div.addEventListener('mouseout', _this._showViewer.bind(_this, 'none'));
        return _this;
    }
    CubeTextureElement.prototype.update = function (tex) {
        if (tex && tex.url === this._textureUrl) {
            // Nothing to do, as the old texture is the same as the old one
        }
        else {
            if (tex) {
                this._textureUrl = tex.name;
            }
            if (this._engine) {
                // Dispose old material and cube
                if (this._cube.material) {
                    this._cube.material.dispose(true, true);
                }
                this._cube.dispose();
            }
            else {
                this._initEngine();
            }
            // and create it again
            this._populateScene();
        }
    };
    /** Creates the box  */
    CubeTextureElement.prototype._populateScene = function () {
        var _this = this;
        // Create the hdr texture
        var hdrTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["CubeTexture"](this._textureUrl, this._scene);
        hdrTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"].SKYBOX_MODE;
        this._cube = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateBox("hdrSkyBox", 10.0, this._scene);
        var hdrSkyboxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("skyBox", this._scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.reflectionTexture = hdrTexture;
        hdrSkyboxMaterial.reflectionTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"].SKYBOX_MODE;
        hdrSkyboxMaterial.disableLighting = true;
        this._cube.material = hdrSkyboxMaterial;
        this._cube.registerBeforeRender(function () {
            _this._cube.rotation.y += 0.01;
        });
    };
    /** Init the babylon engine */
    CubeTextureElement.prototype._initEngine = function () {
        var _this = this;
        this._engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"](this._canvas);
        this._scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](this._engine);
        this._scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color4"](0, 0, 0, 0);
        this._engine.runRenderLoop(function () {
            if (!_this._pause) {
                _this._scene.render();
            }
        });
        this._canvas.setAttribute('width', '110');
        this._canvas.setAttribute('height', '110');
    };
    CubeTextureElement.prototype._showViewer = function (mode) {
        // If displaying...
        if (mode != 'none') {
            // ... and the canvas is not initialized
            if (!this._engine) {
                this._initEngine();
                this._populateScene();
            }
            // In every cases, unpause the engine
            this._pause = false;
        }
        else {
            // hide : pause the engine
            this._pause = true;
        }
        this._textureDiv.style.display = mode;
    };
    /** Removes properly the babylon engine */
    CubeTextureElement.prototype.dispose = function () {
        if (this._engine) {
            this._engine.dispose();
            this._engine = null;
        }
    };
    return CubeTextureElement;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_2__["BasicElement"]));



/***/ }),

/***/ "./src/gui/HDRCubeTextureElement.ts":
/*!******************************************!*\
  !*** ./src/gui/HDRCubeTextureElement.ts ***!
  \******************************************/
/*! exports provided: HDRCubeTextureElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HDRCubeTextureElement", function() { return HDRCubeTextureElement; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CubeTextureElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CubeTextureElement */ "./src/gui/CubeTextureElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
* Display a very small div. A new canvas is created, with a new js scene, containing only the
* cube texture in a cube
*/
var HDRCubeTextureElement = /** @class */ (function (_super) {
    __extends(HDRCubeTextureElement, _super);
    /** The texture given as a parameter should be cube. */
    function HDRCubeTextureElement(tex) {
        return _super.call(this, tex) || this;
    }
    /** Creates the box  */
    HDRCubeTextureElement.prototype._populateScene = function () {
        var _this = this;
        // Create the hdr texture
        var hdrTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["HDRCubeTexture"](this._textureUrl, this._scene, 512);
        hdrTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"].SKYBOX_MODE;
        this._cube = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateBox("hdrSkyBox", 10.0, this._scene);
        var hdrSkyboxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"]("skyBox", this._scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.reflectionTexture = hdrTexture;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = true;
        this._cube.material = hdrSkyboxMaterial;
        this._cube.registerBeforeRender(function () {
            _this._cube.rotation.y += 0.01;
        });
    };
    return HDRCubeTextureElement;
}(_CubeTextureElement__WEBPACK_IMPORTED_MODULE_1__["CubeTextureElement"]));



/***/ }),

/***/ "./src/gui/SearchBar.ts":
/*!******************************!*\
  !*** ./src/gui/SearchBar.ts ***!
  \******************************/
/*! exports provided: SearchBar, SearchBarDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarDetails", function() { return SearchBarDetails; });
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A search bar can be used to filter elements in the tree panel.
 * At each keypress on the input, the treepanel will be filtered.
 */
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(tab) {
        var _this = _super.call(this) || this;
        _this._propTab = tab;
        _this._div.classList.add('searchbar');
        var filter = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('i');
        filter.className = 'fa fa-search';
        _this._div.appendChild(filter);
        // Create input
        _this._inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('input');
        _this._inputElement.placeholder = 'Filter by name...';
        _this._div.appendChild(_this._inputElement);
        _this._inputElement.addEventListener('keyup', function (evt) {
            var filter = _this._inputElement.value;
            _this._propTab.filter(filter);
        });
        return _this;
    }
    /** Delete all characters typped in the input element */
    SearchBar.prototype.reset = function () {
        this._inputElement.value = '';
    };
    SearchBar.prototype.update = function () {
        // Nothing to update
    };
    return SearchBar;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_1__["BasicElement"]));

var SearchBarDetails = /** @class */ (function (_super) {
    __extends(SearchBarDetails, _super);
    function SearchBarDetails(tab) {
        var _this = _super.call(this) || this;
        _this._detailTab = tab;
        _this._div.classList.add('searchbar');
        var filter = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('i');
        filter.className = 'fa fa-search';
        _this._div.appendChild(filter);
        // Create input
        _this._inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('input');
        _this._inputElement.placeholder = 'Filter by name...';
        _this._div.appendChild(_this._inputElement);
        _this._inputElement.addEventListener('keyup', function (evt) {
            var filter = _this._inputElement.value;
            _this._detailTab.searchByName(filter);
        });
        return _this;
    }
    /** Delete all characters typped in the input element */
    SearchBarDetails.prototype.reset = function () {
        this._inputElement.value = '';
    };
    SearchBarDetails.prototype.update = function () {
        // Nothing to update
    };
    return SearchBarDetails;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_1__["BasicElement"]));



/***/ }),

/***/ "./src/gui/TextureElement.ts":
/*!***********************************!*\
  !*** ./src/gui/TextureElement.ts ***!
  \***********************************/
/*! exports provided: TextureElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureElement", function() { return TextureElement; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
* Display a very small div corresponding to the given texture. On mouse over, display the full image
*/
var TextureElement = /** @class */ (function (_super) {
    __extends(TextureElement, _super);
    function TextureElement(tex) {
        var _this = _super.call(this) || this;
        _this._div.className = 'fa fa-search texture-element';
        // Create the texture viewer
        _this._textureDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].CreateDiv('texture-viewer', _this._div);
        // Img
        var imgDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].CreateDiv('texture-viewer-img', _this._textureDiv);
        // Texture size
        var sizeDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].CreateDiv(null, _this._textureDiv);
        if (tex) {
            sizeDiv.textContent = tex.getBaseSize().width + "px x " + tex.getBaseSize().height + "px";
            imgDiv.style.backgroundImage = "url('" + tex.url + "')";
            imgDiv.style.width = tex.getBaseSize().width + "px";
            imgDiv.style.height = tex.getBaseSize().height + "px";
        }
        _this._div.addEventListener('mouseover', _this._showViewer.bind(_this, 'flex'));
        _this._div.addEventListener('mouseout', _this._showViewer.bind(_this, 'none'));
        return _this;
    }
    TextureElement.prototype.update = function (tex) {
    };
    TextureElement.prototype._showViewer = function (mode) {
        this._textureDiv.style.display = mode;
    };
    return TextureElement;
}(_BasicElement__WEBPACK_IMPORTED_MODULE_1__["BasicElement"]));



/***/ }),

/***/ "./src/gui/Tooltip.ts":
/*!****************************!*\
  !*** ./src/gui/Tooltip.ts ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");

/**
 * Creates a tooltip for the parent of the given html element
 */
var Tooltip = /** @class */ (function () {
    function Tooltip(elem, tip, attachTo) {
        if (attachTo === void 0) { attachTo = null; }
        var _this = this;
        this._elem = elem;
        if (!attachTo) {
            attachTo = this._elem.parentElement;
        }
        this._infoDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].CreateDiv('tooltip', attachTo);
        this._elem.addEventListener('mouseover', function () {
            _this._infoDiv.textContent = tip;
            _this._infoDiv.style.display = 'block';
        });
        this._elem.addEventListener('mouseout', function () { _this._infoDiv.style.display = 'none'; });
    }
    return Tooltip;
}());



/***/ }),

/***/ "./src/gui/index.ts":
/*!**************************!*\
  !*** ./src/gui/index.ts ***!
  \**************************/
/*! exports provided: BasicElement, ColorElement, ColorPickerElement, CubeTextureElement, HDRCubeTextureElement, SearchBar, SearchBarDetails, TextureElement, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasicElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicElement */ "./src/gui/BasicElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicElement", function() { return _BasicElement__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]; });

/* harmony import */ var _ColorElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorElement */ "./src/gui/ColorElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorElement", function() { return _ColorElement__WEBPACK_IMPORTED_MODULE_1__["ColorElement"]; });

/* harmony import */ var _ColorPickerElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPickerElement */ "./src/gui/ColorPickerElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerElement", function() { return _ColorPickerElement__WEBPACK_IMPORTED_MODULE_2__["ColorPickerElement"]; });

/* harmony import */ var _CubeTextureElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CubeTextureElement */ "./src/gui/CubeTextureElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeTextureElement", function() { return _CubeTextureElement__WEBPACK_IMPORTED_MODULE_3__["CubeTextureElement"]; });

/* harmony import */ var _HDRCubeTextureElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HDRCubeTextureElement */ "./src/gui/HDRCubeTextureElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HDRCubeTextureElement", function() { return _HDRCubeTextureElement__WEBPACK_IMPORTED_MODULE_4__["HDRCubeTextureElement"]; });

/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBar */ "./src/gui/SearchBar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_5__["SearchBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBarDetails", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_5__["SearchBarDetails"]; });

/* harmony import */ var _TextureElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextureElement */ "./src/gui/TextureElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureElement", function() { return _TextureElement__WEBPACK_IMPORTED_MODULE_6__["TextureElement"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/gui/Tooltip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_7__["Tooltip"]; });











/***/ }),

/***/ "./src/helpers/Helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/Helpers.ts ***!
  \********************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../details/Property */ "./src/details/Property.ts");
/* harmony import */ var _details_PropertyLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details/PropertyLine */ "./src/details/PropertyLine.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properties */ "./src/properties.ts");





var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    /**
     * Returns the type of the given object. First
     * uses getClassName. If nothing is returned, used the type of the constructor
     */
    Helpers.GET_TYPE = function (obj) {
        if (typeof obj === 'boolean') {
            return 'boolean';
        }
        if (obj != null && obj != undefined) {
            var classname = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].GetClassName(obj);
            if (!classname || classname === 'object') {
                classname = obj.constructor.name;
                // classname is undefined in IE11
                if (!classname) {
                    classname = this._GetFnName(obj.constructor);
                }
            }
            // If the class name has no matching properties, check every type
            if (!this._CheckIfTypeExists(classname)) {
                return this._GetTypeFor(obj);
            }
            return classname;
        }
        else {
            return 'type_not_defined';
        }
    };
    /**
     * Check if some properties are defined for the given type.
     */
    Helpers._CheckIfTypeExists = function (type) {
        var properties = _properties__WEBPACK_IMPORTED_MODULE_4__["PROPERTIES"][type];
        if (properties) {
            return true;
        }
        return false;
    };
    /**
     * Returns true if the user browser is edge.
     */
    Helpers.IsBrowserEdge = function () {
        var regexp = /Edge/;
        return regexp.test(navigator.userAgent);
    };
    /**
     * Returns true if the user browser is IE.
     */
    Helpers.IsBrowserIE = function () {
        var regexp = /Trident.*rv\:11\./;
        return regexp.test(navigator.userAgent);
    };
    /**
     * Returns the name of the type of the given object, where the name
     * is in PROPERTIES constant.
     * Returns 'Undefined' if no type exists for this object
     */
    Helpers._GetTypeFor = function (obj) {
        for (var type in _properties__WEBPACK_IMPORTED_MODULE_4__["PROPERTIES"]) {
            var typeBlock = _properties__WEBPACK_IMPORTED_MODULE_4__["PROPERTIES"][type];
            if (typeBlock.type) {
                if (obj instanceof typeBlock.type) {
                    return type;
                }
            }
        }
        return 'type_not_defined';
    };
    /**
     * Returns the name of a function (workaround to get object type for IE11)
     */
    Helpers._GetFnName = function (fn) {
        var f = typeof fn == 'function';
        var s = f && ((fn.name && ['', fn.name]) || fn.toString().match(/function ([^\(]+)/));
        return (!f && 'not a function') || (s && s[1] || 'anonymous');
    };
    /** Send the event which name is given in parameter to the window */
    Helpers.SEND_EVENT = function (eventName) {
        var event;
        if (_Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createEvent) {
            event = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
        }
        else {
            event = new Event(eventName);
        }
        window.dispatchEvent(event);
    };
    /** Returns the given number with 2 decimal number max if a decimal part exists */
    Helpers.Trunc = function (nb) {
        if (typeof nb !== 'number') {
            return 0;
        }
        if (Math.round(nb) !== nb) {
            return nb.toFixed(2);
        }
        return nb;
    };
    /**
     * Useful function used to create a div
     */
    Helpers.CreateDiv = function (className, parent, tooltip) {
        if (className === void 0) { className = null; }
        return Helpers.CreateElement('div', className, parent, tooltip);
    };
    /**
     * Useful function used to create a input
     */
    Helpers.CreateInput = function (className, parent, tooltip) {
        return Helpers.CreateElement('input', className, parent, tooltip);
    };
    Helpers.CreateElement = function (element, className, parent, tooltip) {
        if (className === void 0) { className = null; }
        var elem = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createElement(element);
        if (className) {
            elem.className = className;
        }
        if (tooltip && tooltip != '') {
            elem.title = tooltip;
        }
        if (parent) {
            parent.appendChild(elem);
        }
        return elem;
    };
    /**
     * Removes all children of the given div.
     */
    Helpers.CleanDiv = function (div) {
        if (div) {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }
    };
    /**
     * Returns the true value of the given CSS Attribute from the given element (in percentage or in pixel, as it was specified in the css)
     */
    Helpers.Css = function (elem, cssAttribute) {
        var clone = elem.cloneNode(true);
        var div = Helpers.CreateDiv('', _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.body, '');
        div.style.display = 'none';
        div.appendChild(clone);
        var value = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].WINDOW.getComputedStyle(clone)[cssAttribute];
        if (div.parentNode) {
            div.parentNode.removeChild(div);
        }
        return value;
    };
    Helpers.LoadScript = function () {
        babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js", function (elem) {
            var script = Helpers.CreateElement('script', '', _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.body, '');
            script.textContent = elem;
            // Load glsl detection
            babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/languages/glsl.min.js", function (elem) {
                var script = Helpers.CreateElement('script', '', _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.body, '');
                script.textContent = elem;
                // Load css style
                babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/zenburn.min.css", function (elem) {
                    var style = Helpers.CreateElement('style', '', _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.body, '');
                    style.textContent = elem;
                });
            }, undefined, undefined, undefined, function () {
                console.log('Error : LoadFile "glsl.min.js"');
            });
        }, undefined, undefined, undefined, function () {
            console.log('Error : LoadFile "highlight.min.js"');
        });
    };
    Helpers.IsSystemName = function (name) {
        if (name == null) {
            return false;
        }
        return name.indexOf("###") === 0 && name.lastIndexOf("###") === (name.length - 3);
    };
    /**
     * Return an array of PropertyLine for an obj
     * @param obj
     */
    Helpers.GetAllLinesProperties = function (obj) {
        var propertiesLines = [];
        var props = Helpers.GetAllLinesPropertiesAsString(obj);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            var infos = new _details_Property__WEBPACK_IMPORTED_MODULE_1__["Property"](prop, obj);
            propertiesLines.push(new _details_PropertyLine__WEBPACK_IMPORTED_MODULE_2__["PropertyLine"](infos));
        }
        return propertiesLines;
    };
    /**
     * Returns an array of string corresponding to tjhe list of properties of the object to be displayed
     * @param obj
     */
    Helpers.GetAllLinesPropertiesAsString = function (obj, dontTakeThis) {
        if (dontTakeThis === void 0) { dontTakeThis = []; }
        var props = [];
        for (var prop in obj) {
            //No private and no function
            if (dontTakeThis.indexOf(prop) === -1 && prop.substring(0, 1) !== '_' && typeof obj[prop] !== 'function') {
                props.push(prop);
            }
        }
        return props;
    };
    Helpers.Capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./src/helpers/Helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return _Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"]; });




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Inspector, PROPERTIES, guiLoaded, loadGUIProperties, Adapter, CameraAdapter, GUIAdapter, LightAdapter, MaterialAdapter, MeshAdapter, PhysicsImpostorAdapter, SoundAdapter, TextureAdapter, DetailPanel, Property, PropertyFormatter, PropertyLine, BasicElement, ColorElement, ColorPickerElement, CubeTextureElement, HDRCubeTextureElement, SearchBar, SearchBarDetails, TextureElement, Tooltip, Helpers, Scheduler, CameraTab, ConsoleTab, GLTFTab, GUITab, LightTab, MaterialTab, MeshTab, PhysicsTab, PropertyTab, SceneTab, SoundTab, StatsTab, Tab, TabBar, TextureTab, ToolsTab, AbstractTool, DisposeTool, FullscreenTool, LabelTool, PauseScheduleTool, PickTool, PopupTool, RefreshTool, Toolbar, TreeItem, AbstractTreeTool, BoundingBox, CameraPOV, Checkbox, DebugArea, Info, SoundInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters */ "./src/adapters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["Adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["CameraAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUIAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["GUIAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["LightAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["MaterialAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["MeshAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsImpostorAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["PhysicsImpostorAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["SoundAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureAdapter", function() { return _adapters__WEBPACK_IMPORTED_MODULE_0__["TextureAdapter"]; });

/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./src/details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailPanel", function() { return _details__WEBPACK_IMPORTED_MODULE_1__["DetailPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _details__WEBPACK_IMPORTED_MODULE_1__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFormatter", function() { return _details__WEBPACK_IMPORTED_MODULE_1__["PropertyFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyLine", function() { return _details__WEBPACK_IMPORTED_MODULE_1__["PropertyLine"]; });

/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui */ "./src/gui/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["BasicElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["ColorElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["ColorPickerElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeTextureElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["CubeTextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HDRCubeTextureElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["HDRCubeTextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["SearchBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBarDetails", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["SearchBarDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureElement", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["TextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _gui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"]; });

/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler */ "./src/scheduler/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _scheduler__WEBPACK_IMPORTED_MODULE_4__["Scheduler"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs */ "./src/tabs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["CameraTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["ConsoleTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["GLTFTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUITab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["GUITab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["LightTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["MaterialTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["MeshTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["PhysicsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["PropertyTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["SceneTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["SoundTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["StatsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["TabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["TextureTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolsTab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_5__["ToolsTab"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools */ "./src/tools/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["AbstractTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisposeTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["DisposeTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullscreenTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["FullscreenTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["LabelTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseScheduleTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["PauseScheduleTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["PickTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["PopupTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshTool", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["RefreshTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _tools__WEBPACK_IMPORTED_MODULE_6__["Toolbar"]; });

/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree */ "./src/tree/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return _tree__WEBPACK_IMPORTED_MODULE_7__["TreeItem"]; });

/* harmony import */ var _treetools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treetools */ "./src/treetools/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTreeTool", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["AbstractTreeTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["BoundingBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPOV", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["CameraPOV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DebugArea", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["DebugArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["Info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundInteractions", function() { return _treetools__WEBPACK_IMPORTED_MODULE_8__["SoundInteractions"]; });

/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Inspector */ "./src/Inspector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inspector", function() { return _Inspector__WEBPACK_IMPORTED_MODULE_9__["Inspector"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./properties */ "./src/properties.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES", function() { return _properties__WEBPACK_IMPORTED_MODULE_10__["PROPERTIES"]; });

/* harmony import */ var _properties_gui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties_gui */ "./src/properties_gui.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guiLoaded", function() { return _properties_gui__WEBPACK_IMPORTED_MODULE_11__["guiLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadGUIProperties", function() { return _properties_gui__WEBPACK_IMPORTED_MODULE_11__["loadGUIProperties"]; });















/***/ }),

/***/ "./src/legacy.ts":
/*!***********************!*\
  !*** ./src/legacy.ts ***!
  \***********************/
/*! exports provided: Inspector, PROPERTIES, guiLoaded, loadGUIProperties, Adapter, CameraAdapter, GUIAdapter, LightAdapter, MaterialAdapter, MeshAdapter, PhysicsImpostorAdapter, SoundAdapter, TextureAdapter, DetailPanel, Property, PropertyFormatter, PropertyLine, BasicElement, ColorElement, ColorPickerElement, CubeTextureElement, HDRCubeTextureElement, SearchBar, SearchBarDetails, TextureElement, Tooltip, Helpers, Scheduler, CameraTab, ConsoleTab, GLTFTab, GUITab, LightTab, MaterialTab, MeshTab, PhysicsTab, PropertyTab, SceneTab, SoundTab, StatsTab, Tab, TabBar, TextureTab, ToolsTab, AbstractTool, DisposeTool, FullscreenTool, LabelTool, PauseScheduleTool, PickTool, PopupTool, RefreshTool, Toolbar, TreeItem, AbstractTreeTool, BoundingBox, CameraPOV, Checkbox, DebugArea, Info, SoundInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inspector", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Inspector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PROPERTIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guiLoaded", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["guiLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadGUIProperties", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["loadGUIProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["CameraAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUIAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["GUIAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["LightAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["MaterialAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["MeshAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsImpostorAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PhysicsImpostorAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SoundAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureAdapter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TextureAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailPanel", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["DetailPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFormatter", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PropertyFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyLine", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PropertyLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["ColorElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["ColorPickerElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeTextureElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["CubeTextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HDRCubeTextureElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["HDRCubeTextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SearchBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBarDetails", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SearchBarDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureElement", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TextureElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Helpers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Scheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["CameraTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["ConsoleTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["GLTFTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUITab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["GUITab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["LightTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["MaterialTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["MeshTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PhysicsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PropertyTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SceneTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SoundTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["StatsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TextureTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolsTab", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["ToolsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisposeTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["DisposeTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullscreenTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["FullscreenTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["LabelTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseScheduleTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PauseScheduleTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PickTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["PopupTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["RefreshTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TreeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTreeTool", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["BoundingBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPOV", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["CameraPOV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DebugArea", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["DebugArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["Info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundInteractions", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["SoundInteractions"]; });


/**
 * Legacy support, defining window.INSPECTOR (global variable).
 *
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    globalObject.INSPECTOR = _index__WEBPACK_IMPORTED_MODULE_0__;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../Tools/Gulp/node_modules/webpack/buildin/global.js */ "../Tools/Gulp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/properties.ts":
/*!***************************!*\
  !*** ./src/properties.ts ***!
  \***************************/
/*! exports provided: PROPERTIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES", function() { return PROPERTIES; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_1__);


var PROPERTIES = {
    /** Format the given object :
     * If a format function exists, returns the result of this function.
     * If this function doesn't exists, return the object type instead
     */
    format: function (obj) {
        var type = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(obj) || 'type_not_defined';
        if (PROPERTIES[type] && PROPERTIES[type].format) {
            return PROPERTIES[type].format(obj);
        }
        else {
            return _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].GET_TYPE(obj);
        }
    },
    'type_not_defined': {
        properties: new Array(),
        format: function () { return ''; }
    },
    'Vector2': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector2"],
        format: function (vec) { return "x:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(vec.x) + ", y:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(vec.y); }
    },
    'Vector3': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"],
        format: function (vec) { return "x:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(vec.x) + ", y:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(vec.y) + ", z:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(vec.z); }
    },
    'Color3': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"],
        format: function (color) { return "R:" + color.r.toPrecision(2) + ", G:" + color.g.toPrecision(2) + ", B:" + color.b.toPrecision(2); },
        slider: {
            r: { min: 0, max: 1, step: 0.01 },
            g: { min: 0, max: 1, step: 0.01 },
            b: { min: 0, max: 1, step: 0.01 }
        }
    },
    'Color4': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color4"],
        format: function (color) { return "R:" + color.r + ", G:" + color.g + ", B:" + color.b; },
        slider: {
            r: { min: 0, max: 1, step: 0.01 },
            g: { min: 0, max: 1, step: 0.01 },
            b: { min: 0, max: 1, step: 0.01 }
        }
    },
    'Quaternion': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]
    },
    'Size': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Size"],
        format: function (size) { return "Size - w:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(size.width) + ", h:" + _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].Trunc(size.height); }
    },
    'Texture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Texture"],
        format: function (tex) { return tex.name; }
    },
    'RenderTargetTexture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["RenderTargetTexture"]
    },
    'DynamicTexture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["DynamicTexture"]
    },
    'BaseTexture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["BaseTexture"]
    },
    'CubeTexture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["CubeTexture"]
    },
    'HDRCubeTexture': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["HDRCubeTexture"]
    },
    'Sound': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Sound"]
    },
    'ArcRotateCamera': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["ArcRotateCamera"],
        slider: {
            alpha: { min: 0, max: 2 * Math.PI, step: 0.01 },
            beta: { min: -Math.PI, max: Math.PI, step: 0.01 },
            fov: { min: 0, max: 180, step: 1 }
        }
    },
    'FreeCamera': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["FreeCamera"],
        slider: {
            fov: { min: 0, max: 180, step: 1 }
        }
    },
    'Scene': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Scene"],
    },
    'TransformNode': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["TransformNode"],
        format: function (m) { return m.name; }
    },
    'AbstractMesh': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["AbstractMesh"],
        format: function (m) { return m.name; }
    },
    'Mesh': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"],
        format: function (m) { return m.name; },
        slider: {
            visibility: { min: 0, max: 1, step: 0.1 }
        }
    },
    'StandardMaterial': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"],
        format: function (mat) { return mat.name; },
        slider: {
            alpha: { min: 0, max: 1, step: 0.01 }
        }
    },
    'PBRMaterial': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["PBRMaterial"],
        slider: {
            alpha: { min: 0, max: 1, step: 0.01 }
        }
    },
    'PhysicsImpostor': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"]
    },
    'ImageProcessingConfiguration': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["ImageProcessingConfiguration"]
    },
    'ColorCurves': {
        type: babylonjs__WEBPACK_IMPORTED_MODULE_1__["ColorCurves"]
    }
};


/***/ }),

/***/ "./src/properties_gui.ts":
/*!*******************************!*\
  !*** ./src/properties_gui.ts ***!
  \*******************************/
/*! exports provided: guiLoaded, loadGUIProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiLoaded", function() { return guiLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGUIProperties", function() { return loadGUIProperties; });
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ "./src/properties.ts");

var guiLoaded = false;
/**
  * Function that add gui objects properties to the variable PROPERTIES
  */
function loadGUIProperties(GUI) {
    guiLoaded = !!GUI;
    if (guiLoaded) {
        var PROPERTIES_GUI = {
            'ValueAndUnit': {
                type: GUI.ValueAndUnit,
                properties: ['_value', 'unit'],
                format: function (valueAndUnit) { return valueAndUnit; }
            },
            'Control': {
                type: GUI.Control,
                properties: [
                    '_alpha',
                    '_fontFamily',
                    '_color',
                    '_scaleX',
                    '_scaleY',
                    '_rotation',
                    '_currentMeasure',
                    '_width',
                    '_height',
                    '_left',
                    '_top',
                    '_linkedMesh',
                    'isHitTestVisible',
                    'isPointerBlocker',
                ],
                format: function (control) { return control.name; }
            },
            'Button': {
                type: GUI.Button,
                properties: new Array(),
                format: function (button) { return button.name; }
            },
            'ColorPicker': {
                type: GUI.ColorPicker,
                properties: ['_value'],
                format: function (colorPicker) { return colorPicker.name; }
            },
            'Checkbox': {
                type: GUI.Checkbox,
                properties: ['_isChecked', '_background'],
                format: function (checkbox) { return checkbox.name; }
            },
            'Ellipse': {
                type: GUI.Ellipse,
                properties: ['_thickness'],
                format: function (ellipse) { return ellipse.name; }
            },
            'Image': {
                type: GUI.Image,
                properties: [
                    '_imageWidth',
                    '_imageHeight',
                    '_loaded',
                    '_source',
                ],
                format: function (image) { return image.name; }
            },
            'Line': {
                type: GUI.Line,
                properties: ['_lineWidth',
                    '_background',
                    '_x1',
                    '_y1',
                    '_x2',
                    '_y2',
                ],
                format: function (line) { return line.name; }
            },
            'RadioButton': {
                type: GUI.RadioButton,
                properties: ['_isChecked', '_background'],
                format: function (radioButton) { return radioButton.name; }
            },
            'Rectangle': {
                type: GUI.Rectangle,
                properties: ['_thickness', '_cornerRadius'],
                format: function (rectangle) { return rectangle.name; }
            },
            'Slider': {
                type: GUI.Slider,
                properties: [
                    '_minimum',
                    '_maximum',
                    '_value',
                    '_background',
                    '_borderColor',
                ],
                format: function (slider) { return slider.name; }
            },
            'StackPanel': {
                type: GUI.StackPanel,
                properties: ['_isVertical'],
                format: function (stackPanel) { return stackPanel.name; }
            },
            'TextBlock': {
                type: GUI.TextBlock,
                properties: ['_text', '_textWrapping'],
                format: function (textBlock) { return textBlock.name; }
            },
            'Container': {
                type: GUI.Container,
                properties: ['_background'],
                format: function (container) { return container.name; }
            },
        };
        for (var prop in PROPERTIES_GUI) {
            _properties__WEBPACK_IMPORTED_MODULE_0__["PROPERTIES"][prop] = PROPERTIES_GUI[prop];
        }
    }
}


/***/ }),

/***/ "./src/scheduler/Scheduler.ts":
/*!************************************!*\
  !*** ./src/scheduler/Scheduler.ts ***!
  \************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /** @class */ (function () {
    function Scheduler() {
        /** Is this scheduler in pause ? */
        this.pause = false;
        /** The list of data to update */
        this._updatableProperties = [];
        this.interval = window.setInterval(this._update.bind(this), Scheduler.REFRESH_TIME);
    }
    Scheduler.getInstance = function () {
        if (!Scheduler._instance) {
            Scheduler._instance = new Scheduler();
        }
        return Scheduler._instance;
    };
    /** Add a property line to be updated every X ms */
    Scheduler.prototype.add = function (prop) {
        this._updatableProperties.push(prop);
    };
    /** Removes the given property from the list of properties to update */
    Scheduler.prototype.remove = function (prop) {
        var index = this._updatableProperties.indexOf(prop);
        if (index != -1) {
            this._updatableProperties.splice(index, 1);
        }
    };
    Scheduler.prototype._update = function () {
        // If not in pause, update
        if (!this.pause) {
            for (var _i = 0, _a = this._updatableProperties; _i < _a.length; _i++) {
                var prop = _a[_i];
                prop.update();
            }
        }
    };
    Scheduler.prototype.dispose = function () {
        window.clearInterval(this.interval);
    };
    /** All properties are refreshed every 250ms */
    Scheduler.REFRESH_TIME = 250;
    return Scheduler;
}());



/***/ }),

/***/ "./src/scheduler/index.ts":
/*!********************************!*\
  !*** ./src/scheduler/index.ts ***!
  \********************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scheduler */ "./src/scheduler/Scheduler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"]; });




/***/ }),

/***/ "./src/tabs/CameraTab.ts":
/*!*******************************!*\
  !*** ./src/tabs/CameraTab.ts ***!
  \*******************************/
/*! exports provided: CameraTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraTab", function() { return CameraTab; });
/* harmony import */ var _adapters_CameraAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/CameraAdapter */ "./src/adapters/CameraAdapter.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CameraTab = /** @class */ (function (_super) {
    __extends(CameraTab, _super);
    function CameraTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Camera', inspector) || this;
    }
    /* Overrides super */
    CameraTab.prototype._getTree = function () {
        var arr = [];
        // get all cameras from the first scene
        var instances = this._inspector.scene;
        for (var _i = 0, _a = instances.cameras; _i < _a.length; _i++) {
            var camera = _a[_i];
            arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__["TreeItem"](this, new _adapters_CameraAdapter__WEBPACK_IMPORTED_MODULE_0__["CameraAdapter"](camera)));
        }
        return arr;
    };
    return CameraTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_2__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/ConsoleTab.ts":
/*!********************************!*\
  !*** ./src/tabs/ConsoleTab.ts ***!
  \********************************/
/*! exports provided: ConsoleTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleTab", function() { return ConsoleTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The console tab will have two features :
 * - hook all console.log call and display them in this panel (and in the browser console as well)
 * - display all Babylon logs (called with Tools.Log...)
 */
var ConsoleTab = /** @class */ (function (_super) {
    __extends(ConsoleTab, _super);
    function ConsoleTab(tabbar, insp) {
        var _this = _super.call(this, tabbar, 'Console') || this;
        _this._inspector = insp;
        // Build the shaders panel : a div that will contains the shaders tree and both shaders panels
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tab-panel');
        var consolePanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel');
        var bjsPanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel');
        _this._panel.appendChild(consolePanel);
        _this._panel.appendChild(bjsPanel);
        Split__WEBPACK_IMPORTED_MODULE_3__([consolePanel, bjsPanel], {
            blockDrag: _this._inspector.popupMode,
            sizes: [50, 50],
            direction: 'vertical'
        });
        // Titles
        var title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel-title', consolePanel);
        title.textContent = 'Console logs';
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel-title', bjsPanel);
        title.textContent = 'js logs';
        // Contents
        _this._consolePanelContent = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel-content', consolePanel);
        _this._bjsPanelContent = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('console-panel-content', bjsPanel);
        // Bjs logs
        _this._bjsPanelContent.innerHTML = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].LogCache;
        babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].OnNewCacheEntry = function (entry) {
            _this._bjsPanelContent.innerHTML += entry;
            _this._bjsPanelContent.scrollTop = _this._bjsPanelContent.scrollHeight;
        };
        return _this;
        // Testing
        //console.log("This is a console.log message");
        // console.log("That's right, console.log calls are hooked to be written in this window");
        // console.log("Object are also stringify-ed", {width:10, height:30, shape:'rectangular'});
        // console.warn("This is a console.warn message");
        // console.error("This is a console.error message");
        // Tools.Log("This is a message");
        // Tools.Warn("This is a warning");
        // Tools.Error("This is a error");
    }
    /** Overrides super.dispose */
    ConsoleTab.prototype.dispose = function () {
        console.log = this._oldConsoleLog;
        console.warn = this._oldConsoleWarn;
        console.error = this._oldConsoleError;
    };
    ConsoleTab.prototype.active = function (b) {
        _super.prototype.active.call(this, b);
        if (b) {
            // save old console.log
            this._oldConsoleLog = console.log;
            this._oldConsoleWarn = console.warn;
            this._oldConsoleError = console.error;
            console.log = this._addConsoleLog.bind(this);
            console.warn = this._addConsoleWarn.bind(this);
            console.error = this._addConsoleError.bind(this);
        }
    };
    ConsoleTab.prototype._message = function (type, message, caller) {
        var callerLine = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('caller', this._consolePanelContent);
        callerLine.textContent = caller.replace(' ', '\u00A0');
        var line = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv(type, this._consolePanelContent);
        line.textContent = message.replace(' ', '\u00A0');
        this._consolePanelContent.scrollTop = this._consolePanelContent.scrollHeight;
    };
    ConsoleTab.prototype._addConsoleLog = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // Get caller name if not null
        var callerFunc = this._addConsoleLog.caller;
        var caller = callerFunc == null ? "Window" : "Function " + callerFunc['name'] + ": ";
        for (var i = 0; i < params.length; i++) {
            this._message('log', params[i], caller);
            // Write again in console does not work on edge, as the console object
            // is not instantiate if debugger tools is not open
            if (!_helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].IsBrowserEdge()) {
                this._oldConsoleLog(params[i]);
            }
        }
    };
    ConsoleTab.prototype._addConsoleWarn = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // Get caller name if not null
        var callerFunc = this._addConsoleLog.caller;
        var caller = callerFunc == null ? "Window" : callerFunc['name'];
        for (var i = 0; i < params.length; i++) {
            this._message('warn', params[i], caller);
            // Write again in console does not work on edge, as the console object
            // is not instantiate if debugger tools is not open
            if (!_helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].IsBrowserEdge()) {
                this._oldConsoleWarn(params[i]);
            }
        }
    };
    ConsoleTab.prototype._addConsoleError = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // Get caller name if not null
        var callerFunc = this._addConsoleLog.caller;
        var caller = callerFunc == null ? "Window" : callerFunc['name'];
        for (var i = 0; i < params.length; i++) {
            this._message('error', params[i], caller);
            // Write again in console does not work on edge, as the console object
            // is not instantiate if debugger tools is not open
            if (!_helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].IsBrowserEdge()) {
                this._oldConsoleError(params[i]);
            }
        }
    };
    return ConsoleTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_2__["Tab"]));



/***/ }),

/***/ "./src/tabs/GLTFTab.ts":
/*!*****************************!*\
  !*** ./src/tabs/GLTFTab.ts ***!
  \*****************************/
/*! exports provided: GLTFTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFTab", function() { return GLTFTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs-loaders */ "babylonjs-loaders");
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-serializers */ "babylonjs-serializers");
/* harmony import */ var babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _details_DetailPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/DetailPanel */ "./src/details/DetailPanel.ts");
/* harmony import */ var _details_Property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../details/Property */ "./src/details/Property.ts");
/* harmony import */ var _details_PropertyLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../details/PropertyLine */ "./src/details/PropertyLine.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var GLTFTab = /** @class */ (function (_super) {
    __extends(GLTFTab, _super);
    function GLTFTab(tabbar, inspector) {
        var _this = _super.call(this, tabbar, "GLTF") || this;
        _this._detailsPanel = null;
        _this._inspector = inspector;
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("tab-panel");
        _this._actions = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-actions", _this._panel);
        _this._actions.addEventListener("click", function (event) {
            _this._closeDetailsPanel();
        });
        if (babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"] && babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__["GLTFFileLoader"] && babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__["GLTF2"].GLTFLoader) {
            _this._addImport();
        }
        if (babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2__["GLTF2Export"]) {
            _this._addExport();
        }
        return _this;
    }
    Object.defineProperty(GLTFTab, "IsSupported", {
        get: function () {
            return !!(babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"] && babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__["GLTFFileLoader"] && babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__["GLTF2"].GLTFLoader) || !!babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2__["GLTF2Export"];
        },
        enumerable: true,
        configurable: true
    });
    /** @hidden */
    GLTFTab._Initialize = function () {
        // Must register with OnPluginActivatedObservable as early as possible to override the loader defaults.
        babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].OnPluginActivatedObservable.add(function (loader) {
            if (loader.name === "gltf") {
                GLTFTab._ApplyLoaderDefaults(loader);
                loader.onValidatedObservable.add(function (results) {
                    GLTFTab._ValidationResults = results;
                    if (GLTFTab._OnValidationResultsUpdated) {
                        GLTFTab._OnValidationResultsUpdated(results);
                    }
                });
            }
        });
    };
    GLTFTab.prototype.dispose = function () {
        if (this._detailsPanel) {
            this._detailsPanel.dispose();
        }
    };
    GLTFTab.prototype._addImport = function () {
        var _this = this;
        var importTitle = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-title", this._actions);
        importTitle.textContent = "Import";
        var importActions = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-actions", this._actions);
        GLTFTab._GetLoaderDefaultsAsync().then(function (defaults) {
            var loaderAction = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-action", importActions);
            loaderAction.innerText = "Loader";
            loaderAction.addEventListener("click", function (event) {
                _this._showLoaderDefaults(defaults);
                event.stopPropagation();
            });
            var extensionsTitle = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-title", importActions);
            extensionsTitle.textContent = "Extensions";
            var _loop_1 = function (extensionName) {
                var extensionDefaults = defaults.extensions[extensionName];
                var extensionAction = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-action", importActions);
                extensionAction.addEventListener("click", function (event) {
                    if (_this._showLoaderExtensionDefaults(extensionDefaults)) {
                        event.stopPropagation();
                    }
                });
                var checkbox = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateElement("span", "gltf-checkbox", extensionAction);
                if (extensionDefaults.enabled) {
                    checkbox.classList.add("action", "active");
                }
                checkbox.addEventListener("click", function () {
                    checkbox.classList.toggle("active");
                    extensionDefaults.enabled = checkbox.classList.contains("active");
                });
                var label = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateElement("span", null, extensionAction);
                label.textContent = extensionName;
            };
            for (var extensionName in defaults.extensions) {
                _loop_1(extensionName);
            }
            var validationTitle = null;
            var validationAction = null;
            GLTFTab._OnValidationResultsUpdated = function (results) {
                if (!validationTitle) {
                    validationTitle = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-title", importActions);
                }
                if (!validationAction) {
                    validationAction = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-action", importActions);
                    validationAction.addEventListener("click", function (event) {
                        GLTFTab._ShowValidationResults();
                        event.stopPropagation();
                    });
                }
                validationTitle.textContent = results.uri === "null" ? "Validation" : "Validation - " + BABYLON.Tools.GetFilename(results.uri);
                GLTFTab._FormatValidationResultsShort(validationAction, results);
            };
            if (GLTFTab._ValidationResults) {
                GLTFTab._OnValidationResultsUpdated(GLTFTab._ValidationResults);
            }
        });
    };
    GLTFTab._FormatValidationResultsShort = function (validationAction, results) {
        validationAction.innerHTML = "";
        var message = "";
        var add = function (count, issueType) {
            if (count) {
                if (message) {
                    message += ", ";
                }
                message += count === 1 ? count + " " + issueType : count + " " + issueType + "s";
            }
        };
        var issues = results.issues;
        add(issues.numErrors, "error");
        add(issues.numWarnings, "warning");
        add(issues.numInfos, "info");
        add(issues.numHints, "hint");
        var actionDiv = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-action", validationAction);
        var iconSpan = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateElement("span", "gltf-icon", actionDiv, issues.numErrors ? "The asset contains errors." : "The asset is valid.");
        iconSpan.textContent = issues.numErrors ? "\uf057" : "\uf058";
        iconSpan.style.color = issues.numErrors ? "red" : "green";
        var messageSpan = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateElement("span", "gltf-icon", actionDiv);
        messageSpan.textContent = message || "No issues";
    };
    GLTFTab._ShowValidationResults = function () {
        if (GLTFTab._ValidationResults) {
            var win = window.open("", "_blank");
            if (win) {
                // TODO: format this better and use generator registry (https://github.com/KhronosGroup/glTF-Generator-Registry)
                win.document.title = "glTF Validation Results";
                win.document.body.innerText = JSON.stringify(GLTFTab._ValidationResults, null, 2);
                win.document.body.style.whiteSpace = "pre";
                win.document.body.style.fontFamily = "monospace";
                win.document.body.style.fontSize = "14px";
                win.focus();
            }
        }
    };
    GLTFTab._ApplyLoaderDefaults = function (loader) {
        var defaults = GLTFTab._LoaderDefaults;
        if (defaults) {
            for (var key in defaults) {
                if (key !== "extensions") {
                    loader[key] = defaults[key];
                }
            }
            loader.onExtensionLoadedObservable.add(function (extension) {
                var extensionDefaults = defaults.extensions[extension.name];
                for (var key in extensionDefaults) {
                    extension[key] = extensionDefaults[key];
                }
            });
        }
    };
    GLTFTab._GetPublic = function (obj) {
        var result = {};
        for (var key in obj) {
            if (key !== "name" && key[0] !== "_") {
                var value = obj[key];
                var type = typeof value;
                if (type !== "object" && type !== "function" && type !== "undefined") {
                    result[key] = value;
                }
            }
        }
        return result;
    };
    /** @hidden */
    GLTFTab._GetLoaderDefaultsAsync = function () {
        if (GLTFTab._LoaderDefaults) {
            return Promise.resolve(GLTFTab._LoaderDefaults);
        }
        var engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["NullEngine"]();
        var scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](engine);
        var loader = new babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__["GLTFFileLoader"]();
        GLTFTab._LoaderDefaults = GLTFTab._GetPublic(loader);
        GLTFTab._LoaderDefaults.extensions = {};
        loader.onExtensionLoadedObservable.add(function (extension) {
            GLTFTab._LoaderDefaults.extensions[extension.name] = GLTFTab._GetPublic(extension);
        });
        var data = '{ "asset": { "version": "2.0" } }';
        return loader.importMeshAsync([], scene, data, "").then(function () {
            engine.dispose();
            return GLTFTab._LoaderDefaults;
        });
    };
    GLTFTab.prototype._openDetailsPanel = function () {
        if (!this._detailsPanel) {
            this._detailsPanel = new _details_DetailPanel__WEBPACK_IMPORTED_MODULE_3__["DetailPanel"]();
            this._panel.appendChild(this._detailsPanel.toHtml());
            this._split = Split__WEBPACK_IMPORTED_MODULE_8__([this._actions, this._detailsPanel.toHtml()], {
                blockDrag: this._inspector.popupMode,
                sizes: [50, 50],
                direction: "vertical"
            });
        }
        this._detailsPanel.clean();
        return this._detailsPanel;
    };
    GLTFTab.prototype._closeDetailsPanel = function () {
        if (this._detailsPanel) {
            this._detailsPanel.toHtml().remove();
            this._detailsPanel.dispose();
            this._detailsPanel = null;
        }
        if (this._split) {
            this._split.destroy();
            delete this._split;
        }
    };
    GLTFTab.prototype._showLoaderDefaults = function (defaults) {
        var detailsPanel = this._openDetailsPanel();
        var details = new Array();
        for (var key in defaults) {
            if (key !== "extensions") {
                details.push(new _details_PropertyLine__WEBPACK_IMPORTED_MODULE_5__["PropertyLine"](new _details_Property__WEBPACK_IMPORTED_MODULE_4__["Property"](key, defaults, this._inspector.scene)));
            }
        }
        detailsPanel.details = details;
    };
    GLTFTab.prototype._showLoaderExtensionDefaults = function (defaults) {
        if (Object.keys(defaults).length === 1) {
            return false;
        }
        var detailsPanel = this._openDetailsPanel();
        var details = new Array();
        for (var key in defaults) {
            if (key !== "enabled") {
                details.push(new _details_PropertyLine__WEBPACK_IMPORTED_MODULE_5__["PropertyLine"](new _details_Property__WEBPACK_IMPORTED_MODULE_4__["Property"](key, defaults, this._inspector.scene)));
            }
        }
        detailsPanel.details = details;
        return true;
    };
    GLTFTab.prototype._addExport = function () {
        var _this = this;
        var exportTitle = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-title", this._actions);
        exportTitle.textContent = "Export";
        var exportActions = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateDiv("gltf-actions", this._actions);
        var name = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateInput("gltf-input", exportActions);
        name.placeholder = "File name...";
        var button = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_6__["Helpers"].CreateElement("button", "gltf-button", exportActions);
        button.innerText = "Export GLB";
        button.addEventListener("click", function () {
            babylonjs_serializers__WEBPACK_IMPORTED_MODULE_2__["GLTF2Export"].GLBAsync(_this._inspector.scene, name.value || "scene", {
                shouldExportTransformNode: function (transformNode) { return !GLTFTab._IsSkyBox(transformNode); }
            }).then(function (glb) {
                glb.downloadFiles();
            });
        });
    };
    GLTFTab._IsSkyBox = function (transformNode) {
        if (transformNode instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"]) {
            if (transformNode.material) {
                var material = transformNode.material;
                var reflectionTexture = material.reflectionTexture;
                if (reflectionTexture && reflectionTexture.coordinatesMode === babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"].SKYBOX_MODE) {
                    return true;
                }
            }
        }
        return false;
    };
    GLTFTab._LoaderDefaults = null;
    GLTFTab._ValidationResults = null;
    GLTFTab._OnValidationResultsUpdated = null;
    return GLTFTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_7__["Tab"]));

GLTFTab._Initialize();


/***/ }),

/***/ "./src/tabs/GUITab.ts":
/*!****************************!*\
  !*** ./src/tabs/GUITab.ts ***!
  \****************************/
/*! exports provided: GUITab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITab", function() { return GUITab; });
/* harmony import */ var _adapters_GUIAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/GUIAdapter */ "./src/adapters/GUIAdapter.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var GUITab = /** @class */ (function (_super) {
    __extends(GUITab, _super);
    function GUITab(tabbar, inspector) {
        return _super.call(this, tabbar, 'GUI', inspector) || this;
    }
    /* Overrides super */
    GUITab.prototype._getTree = function () {
        var _this = this;
        var arr = [];
        if (!_Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].GUIObject) {
            return arr;
        }
        // Recursive method building the tree panel
        var createNode = function (obj) {
            var descendants = obj.children;
            if (descendants && descendants.length > 0) {
                var node = new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_2__["TreeItem"](_this, new _adapters_GUIAdapter__WEBPACK_IMPORTED_MODULE_0__["GUIAdapter"](obj));
                for (var _i = 0, descendants_1 = descendants; _i < descendants_1.length; _i++) {
                    var child = descendants_1[_i];
                    var n = createNode(child);
                    node.add(n);
                }
                node.update();
                return node;
            }
            else {
                return new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_2__["TreeItem"](_this, new _adapters_GUIAdapter__WEBPACK_IMPORTED_MODULE_0__["GUIAdapter"](obj));
            }
        };
        // get all textures from the first scene
        var instances = this._inspector.scene;
        for (var _i = 0, _a = instances.textures; _i < _a.length; _i++) {
            var tex = _a[_i];
            //only get GUI's textures
            if (tex instanceof _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].GUIObject.AdvancedDynamicTexture) {
                var node = createNode(tex._rootContainer);
                arr.push(node);
            }
        }
        return arr;
    };
    return GUITab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_3__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/LightTab.ts":
/*!******************************!*\
  !*** ./src/tabs/LightTab.ts ***!
  \******************************/
/*! exports provided: LightTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightTab", function() { return LightTab; });
/* harmony import */ var _adapters_LightAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/LightAdapter */ "./src/adapters/LightAdapter.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LightTab = /** @class */ (function (_super) {
    __extends(LightTab, _super);
    function LightTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Light', inspector) || this;
    }
    /* Overrides super */
    LightTab.prototype._getTree = function () {
        var arr = [];
        // get all lights from the first scene
        var instances = this._inspector.scene;
        for (var _i = 0, _a = instances.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__["TreeItem"](this, new _adapters_LightAdapter__WEBPACK_IMPORTED_MODULE_0__["LightAdapter"](light)));
        }
        return arr;
    };
    return LightTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_2__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/MaterialTab.ts":
/*!*********************************!*\
  !*** ./src/tabs/MaterialTab.ts ***!
  \*********************************/
/*! exports provided: MaterialTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTab", function() { return MaterialTab; });
/* harmony import */ var _adapters_MaterialAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/MaterialAdapter */ "./src/adapters/MaterialAdapter.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MaterialTab = /** @class */ (function (_super) {
    __extends(MaterialTab, _super);
    function MaterialTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Material', inspector) || this;
    }
    /* Overrides super */
    MaterialTab.prototype._getTree = function () {
        var arr = [];
        // get all meshes from the first scene
        var instances = this._inspector.scene;
        for (var _i = 0, _a = instances.materials; _i < _a.length; _i++) {
            var mat = _a[_i];
            arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__["TreeItem"](this, new _adapters_MaterialAdapter__WEBPACK_IMPORTED_MODULE_0__["MaterialAdapter"](mat)));
        }
        return arr;
    };
    return MaterialTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_2__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/MeshTab.ts":
/*!*****************************!*\
  !*** ./src/tabs/MeshTab.ts ***!
  \*****************************/
/*! exports provided: MeshTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshTab", function() { return MeshTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adapters_MeshAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/MeshAdapter */ "./src/adapters/MeshAdapter.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var MeshTab = /** @class */ (function (_super) {
    __extends(MeshTab, _super);
    function MeshTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Mesh', inspector) || this;
    }
    /* Overrides super */
    MeshTab.prototype._getTree = function () {
        var _this = this;
        var arr = new Array();
        // Tab containing mesh already in results
        var alreadyIn = new Array();
        // Recursive method building the tree panel
        var createNode = function (obj) {
            var descendants = obj.getDescendants(true);
            var node = new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_3__["TreeItem"](_this, new _adapters_MeshAdapter__WEBPACK_IMPORTED_MODULE_1__["MeshAdapter"](obj));
            if (descendants.length > 0) {
                for (var _i = 0, descendants_1 = descendants; _i < descendants_1.length; _i++) {
                    var child = descendants_1[_i];
                    if (child instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["TransformNode"]) {
                        if (!_helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].IsSystemName(child.name)) {
                            var n = createNode(child);
                            node.add(n);
                        }
                    }
                }
                node.update();
            }
            // Retrieve the root node if the mesh is actually child of another mesh
            // This can hapen if the child mesh has been created before the parent mesh
            if (obj.parent != null && alreadyIn.indexOf(obj) != -1) {
                var i = 0;
                var notFound = true;
                // Find and delete the root node standing for this mesh
                while (i < arr.length && notFound) {
                    if (obj.name === arr[i].id) {
                        arr.splice(i, 1);
                        notFound = false;
                    }
                    i++;
                }
            }
            alreadyIn.push(obj);
            return node;
        };
        // get all meshes from the first scene
        var instances = this._inspector.scene;
        // Find top of hierarchy for meshes...
        var meshWithoutAnyParent = [];
        for (var _i = 0, _a = instances.meshes; _i < _a.length; _i++) {
            var mesh = _a[_i];
            // Not already in the array, not system name and no parent
            if (meshWithoutAnyParent.indexOf(mesh) == -1 && !_helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].IsSystemName(mesh.name) && !mesh.parent) {
                meshWithoutAnyParent.push(mesh);
            }
        }
        // ... and for transforms
        for (var _b = 0, _c = instances.transformNodes; _b < _c.length; _b++) {
            var tn = _c[_b];
            // Not already in the array, not system name and no parent
            if (meshWithoutAnyParent.indexOf(tn) == -1 && !_helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].IsSystemName(tn.name) && !tn.parent) {
                meshWithoutAnyParent.push(tn);
            }
        }
        for (var _d = 0, meshWithoutAnyParent_1 = meshWithoutAnyParent; _d < meshWithoutAnyParent_1.length; _d++) {
            var mesh = meshWithoutAnyParent_1[_d];
            if (alreadyIn.indexOf(mesh) == -1 && !_helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].IsSystemName(mesh.name)) {
                var node = createNode(mesh);
                arr.push(node);
            }
        }
        return arr;
    };
    return MeshTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_4__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/PhysicsTab.ts":
/*!********************************!*\
  !*** ./src/tabs/PhysicsTab.ts ***!
  \********************************/
/*! exports provided: PhysicsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsTab", function() { return PhysicsTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adapters_PhysicsImpostorAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/PhysicsImpostorAdapter */ "./src/adapters/PhysicsImpostorAdapter.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var PhysicsTab = /** @class */ (function (_super) {
    __extends(PhysicsTab, _super);
    function PhysicsTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Physics', inspector) || this;
    }
    /* Overrides super */
    PhysicsTab.prototype._getTree = function () {
        var arr = new Array();
        var scene = this._inspector.scene;
        if (!scene.isPhysicsEnabled()) {
            return arr;
        }
        if (!this.viewer) {
            this.viewer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Debug"].PhysicsViewer(scene);
        }
        for (var _i = 0, _a = scene.meshes; _i < _a.length; _i++) {
            var mesh = _a[_i];
            if (mesh.physicsImpostor) {
                arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_2__["TreeItem"](this, new _adapters_PhysicsImpostorAdapter__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostorAdapter"](mesh.physicsImpostor, this.viewer)));
            }
        }
        return arr;
    };
    return PhysicsTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_3__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/PropertyTab.ts":
/*!*********************************!*\
  !*** ./src/tabs/PropertyTab.ts ***!
  \*********************************/
/*! exports provided: PropertyTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTab", function() { return PropertyTab; });
/* harmony import */ var _details_DetailPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../details/DetailPanel */ "./src/details/DetailPanel.ts");
/* harmony import */ var _gui_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/SearchBar */ "./src/gui/SearchBar.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * A Property tab can creates two panels:
 * a tree panel and a detail panel,
 * in which properties will be displayed.
 * Both panels are separated by a resize bar
 */
var PropertyTab = /** @class */ (function (_super) {
    __extends(PropertyTab, _super);
    function PropertyTab(tabbar, name, insp) {
        var _this = _super.call(this, tabbar, name) || this;
        _this._treeItems = [];
        _this._inspector = insp;
        // Build the properties panel : a div that will contains the tree and the detail panel
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('tab-panel');
        _this._panel.classList.add('searchable');
        // Search bar
        _this._searchBar = new _gui_SearchBar__WEBPACK_IMPORTED_MODULE_1__["SearchBar"](_this);
        // Add searchbar
        _this._panel.appendChild(_this._searchBar.toHtml());
        // Build the treepanel
        _this._treePanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-tree', _this._panel);
        // Build the detail panel
        _this._detailsPanel = new _details_DetailPanel__WEBPACK_IMPORTED_MODULE_0__["DetailPanel"]();
        _this._panel.appendChild(_this._detailsPanel.toHtml());
        Split__WEBPACK_IMPORTED_MODULE_4__([_this._treePanel, _this._detailsPanel.toHtml()], {
            blockDrag: _this._inspector.popupMode,
            direction: 'vertical'
        });
        _this.update();
        return _this;
    }
    /** Overrides dispose */
    PropertyTab.prototype.dispose = function () {
        this._detailsPanel.dispose();
    };
    PropertyTab.prototype.update = function (_items) {
        var items;
        if (_items) {
            items = _items;
        }
        else {
            // Rebuild the tree
            this._treeItems = this._getTree();
            items = this._treeItems;
        }
        // Clean the tree
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._treePanel);
        // Clean the detail properties
        this._detailsPanel.clean();
        // Sort items alphabetically
        items.sort(function (item1, item2) {
            return item1.compareTo(item2);
        });
        // Display items
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this._treePanel.appendChild(item.toHtml());
        }
    };
    /** Display the details of the given item */
    PropertyTab.prototype.displayDetails = function (item) {
        // Remove active state on all items
        this.activateNode(item);
        // Update the detail panel
        this._detailsPanel.details = item.getDetails();
    };
    /** Select an item in the tree */
    PropertyTab.prototype.select = function (item) {
        // Active the node
        this.activateNode(item);
        // Display its details
        this.displayDetails(item);
    };
    /** Set the given item as active in the tree */
    PropertyTab.prototype.activateNode = function (item) {
        if (this._treeItems) {
            for (var _i = 0, _a = this._treeItems; _i < _a.length; _i++) {
                var node = _a[_i];
                node.active(false);
            }
        }
        //  item.getDiv().scrollIntoView();
        item.active(true);
    };
    /** Returns the treeitem corersponding to the given obj, null if not found */
    PropertyTab.prototype.getItemFor = function (_obj) {
        var obj = _obj;
        // Search recursively
        var searchObjectInTree = function (object, treeItem) {
            if (treeItem.correspondsTo(object)) {
                return treeItem;
            }
            else {
                if (treeItem.children.length > 0) {
                    for (var _i = 0, _a = treeItem.children; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var it = searchObjectInTree(obj, item);
                        if (it) {
                            return it;
                        }
                    }
                }
                else {
                    return null;
                }
            }
            return null;
        };
        for (var _i = 0, _a = this._treeItems; _i < _a.length; _i++) {
            var item = _a[_i];
            var it = searchObjectInTree(obj, item);
            if (it) {
                return it;
            }
        }
        return null;
    };
    PropertyTab.prototype.filter = function (filter) {
        var items = [];
        for (var _i = 0, _a = this._treeItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id.toLowerCase().indexOf(filter.toLowerCase()) != -1) {
                items.push(item);
            }
            for (var _b = 0, _c = item.children; _b < _c.length; _b++) {
                var child = _c[_b];
                if (child.id.toLowerCase().indexOf(filter.toLowerCase()) != -1) {
                    items.push(item);
                }
            }
        }
        this.update(items);
    };
    return PropertyTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_3__["Tab"]));



/***/ }),

/***/ "./src/tabs/SceneTab.ts":
/*!******************************!*\
  !*** ./src/tabs/SceneTab.ts ***!
  \******************************/
/*! exports provided: SceneTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneTab", function() { return SceneTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_DetailPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../details/DetailPanel */ "./src/details/DetailPanel.ts");
/* harmony import */ var _details_Property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details/Property */ "./src/details/Property.ts");
/* harmony import */ var _details_PropertyLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/PropertyLine */ "./src/details/PropertyLine.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SceneTab = /** @class */ (function (_super) {
    __extends(SceneTab, _super);
    function SceneTab(tabbar, insp) {
        var _this = _super.call(this, tabbar, 'Scene') || this;
        /** The list of skeleton viewer */
        _this._skeletonViewers = [];
        _this._inspector = insp;
        // Build the properties panel : a div that will contains the tree and the detail panel
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('tab-panel');
        _this._actions = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('scene-actions', _this._panel, '');
        _this._detailsPanel = new _details_DetailPanel__WEBPACK_IMPORTED_MODULE_1__["DetailPanel"]();
        _this._panel.appendChild(_this._detailsPanel.toHtml());
        // build propertiesline
        var details = [];
        // Remove deprecated properties generating warning in console
        var dontTakeThis = ['interFramePerfCounter', 'lastFramePerfCounter', 'evaluateActiveMeshesDurationPerfCounter', 'renderDurationPerfCounter', 'particlesDurationPerfCounter', 'spriteDuractionPerfCounter'];
        var props = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].GetAllLinesPropertiesAsString(_this._inspector.scene, dontTakeThis);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var propString = props_1[_i];
            var prop = new _details_PropertyLine__WEBPACK_IMPORTED_MODULE_3__["PropertyLine"](new _details_Property__WEBPACK_IMPORTED_MODULE_2__["Property"](propString, _this._inspector.scene));
            details.push(prop);
        }
        _this._detailsPanel.details = details;
        Split__WEBPACK_IMPORTED_MODULE_6__([_this._actions, _this._detailsPanel.toHtml()], {
            blockDrag: _this._inspector.popupMode,
            sizes: [50, 50],
            direction: 'vertical'
        });
        // Build actions
        {
            // --------------------- Rendering mode ---------------------
            var title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('actions-title', _this._actions, 'Choose the way of rendering the scene.');
            title.textContent = 'Rendering mode';
            var point = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('action-radio', _this._actions, 'Force scene rendering to points cloud : scene.forcePointsCloud');
            point.textContent = 'Point';
            var wireframe = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('action-radio', _this._actions, 'Force scene rendering to wireframe : scene.forceWireframe');
            wireframe.textContent = 'Wireframe';
            var solid = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('action-radio', _this._actions, 'Force scene rendering to solid.');
            solid.textContent = 'Solid';
            if (_this._inspector.scene.forcePointsCloud) {
                point.classList.add('active');
            }
            else if (_this._inspector.scene.forceWireframe) {
                wireframe.classList.add('active');
            }
            else {
                solid.classList.add('active');
            }
            _this._generateRadioAction([point, wireframe, solid]);
            point.addEventListener('click', function () { _this._inspector.scene.forcePointsCloud = true; _this._inspector.scene.forceWireframe = false; });
            wireframe.addEventListener('click', function () { _this._inspector.scene.forcePointsCloud = false; _this._inspector.scene.forceWireframe = true; });
            solid.addEventListener('click', function () { _this._inspector.scene.forcePointsCloud = false; _this._inspector.scene.forceWireframe = false; });
            // --------------------- Textures ---------------------
            title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('actions-title', _this._actions, 'Choose which textures channels to display or not on materials. (Check to display)');
            title.textContent = 'Textures channels';
            _this._generateActionLine('Diffuse Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].DiffuseTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].DiffuseTextureEnabled = b; }, 'StandardMaterial.DiffuseTextureEnabled');
            _this._generateActionLine('Ambient Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].AmbientTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].AmbientTextureEnabled = b; }, 'StandardMaterial.AmbientTextureEnabled');
            _this._generateActionLine('Specular Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].SpecularTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].SpecularTextureEnabled = b; }, 'StandardMaterial.SpecularTextureEnabled');
            _this._generateActionLine('Emissive Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].EmissiveTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].EmissiveTextureEnabled = b; }, 'StandardMaterial.EmissiveTextureEnabled');
            _this._generateActionLine('Bump Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].BumpTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].BumpTextureEnabled = b; }, 'StandardMaterial.BumpTextureEnabled');
            _this._generateActionLine('Opacity Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].OpacityTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].OpacityTextureEnabled = b; }, 'StandardMaterial.OpacityTextureEnabled');
            _this._generateActionLine('Reflection Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].ReflectionTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].ReflectionTextureEnabled = b; }, 'StandardMaterial.ReflectionTextureEnabled');
            _this._generateActionLine('Refraction Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].RefractionTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].RefractionTextureEnabled = b; }, 'StandardMaterial.RefractionTextureEnabled');
            _this._generateActionLine('ColorGrading', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].ColorGradingTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].ColorGradingTextureEnabled = b; }, 'StandardMaterial.ColorGradingTextureEnabled');
            _this._generateActionLine('Lightmap Texture', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].LightmapTextureEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].LightmapTextureEnabled = b; }, 'StandardMaterial.LightmapTextureEnabled');
            _this._generateActionLine('Fresnel', babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].FresnelEnabled, function (b) { babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"].FresnelEnabled = b; }, 'StandardMaterial.FresnelEnabled');
            // --------------------- Options ---------------------
            title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('actions-title', _this._actions, 'Choose which options to enable / disable on the scene. (Uncheck to disable).');
            title.textContent = 'Options';
            _this._generateActionLine('Animations', _this._inspector.scene.animationsEnabled, function (b) { _this._inspector.scene.animationsEnabled = b; }, 'scene.animationsEnabled');
            _this._generateActionLine('Collisions', _this._inspector.scene.collisionsEnabled, function (b) { _this._inspector.scene.collisionsEnabled = b; }, 'scene.collisionsEnabled');
            _this._generateActionLine('Fog', _this._inspector.scene.fogEnabled, function (b) { _this._inspector.scene.fogEnabled = b; }, 'scene.fogEnabled(boolean)');
            _this._generateActionLine('Lens flares', _this._inspector.scene.lensFlaresEnabled, function (b) { _this._inspector.scene.lensFlaresEnabled = b; }, 'scene.lensFlaresEnabled');
            _this._generateActionLine('Lights', _this._inspector.scene.lightsEnabled, function (b) { _this._inspector.scene.lightsEnabled = b; }, 'scene.lightsEnabled');
            _this._generateActionLine('Particles', _this._inspector.scene.particlesEnabled, function (b) { _this._inspector.scene.particlesEnabled = b; }, 'scene.particlesEnabled');
            _this._generateActionLine('Post-processes', _this._inspector.scene.postProcessesEnabled, function (b) { _this._inspector.scene.postProcessesEnabled = b; }, 'scene.postProcessesEnabled');
            _this._generateActionLine('Probes', _this._inspector.scene.probesEnabled, function (b) { _this._inspector.scene.probesEnabled = b; }, 'scene.probesEnabled');
            _this._generateActionLine('Procedural textures', _this._inspector.scene.proceduralTexturesEnabled, function (b) { _this._inspector.scene.proceduralTexturesEnabled = b; }, 'scene.proceduralTexturesEnabled');
            _this._generateActionLine('Render targets', _this._inspector.scene.renderTargetsEnabled, function (b) { _this._inspector.scene.renderTargetsEnabled = b; }, 'scene.renderTargetsEnabled');
            _this._generateActionLine('Shadows', _this._inspector.scene.shadowsEnabled, function (b) { _this._inspector.scene.shadowsEnabled = b; }, 'scene.shadowsEnabled');
            _this._generateActionLine('Skeletons', _this._inspector.scene.skeletonsEnabled, function (b) { _this._inspector.scene.skeletonsEnabled = b; }, 'scene.skeletonsEnabled');
            _this._generateActionLine('Sprites', _this._inspector.scene.spritesEnabled, function (b) { _this._inspector.scene.spritesEnabled = b; }, 'scene.spritesEnabled');
            _this._generateActionLine('Textures', _this._inspector.scene.texturesEnabled, function (b) { _this._inspector.scene.texturesEnabled = b; }, 'scene.texturesEnabled');
            // --------------------- Audio ---------------------
            title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('actions-title', _this._actions, 'Choose which audio rendering should be used.');
            title.textContent = 'Audio';
            var headphones = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('action-radio', _this._actions, 'Use Headphones mode.');
            headphones.textContent = 'Headphones';
            var normalSpeaker = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('action-radio', _this._actions, 'Use Normal speakers mode.');
            normalSpeaker.textContent = 'Normal speakers';
            _this._generateActionLine('Disable audio', !_this._inspector.scene.audioEnabled, function (b) { _this._inspector.scene.audioEnabled = !b; }, 'Disable audio on the scene.');
            _this._generateRadioAction([headphones, normalSpeaker]);
            if (_this._inspector.scene.headphone) {
                headphones.classList.add('active');
            }
            else {
                normalSpeaker.classList.add('active');
            }
            headphones.addEventListener('click', function () { _this._inspector.scene.headphone = true; });
            normalSpeaker.addEventListener('click', function () { _this._inspector.scene.headphone = false; });
            // --------------------- Viewer ---------------------
            title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('actions-title', _this._actions, 'Viewer');
            title.textContent = 'Viewer';
            _this._generateActionLine('Skeletons', false, function (b) {
                if (b) {
                    for (var index = 0; index < _this._inspector.scene.meshes.length; index++) {
                        var mesh = _this._inspector.scene.meshes[index];
                        if (mesh.skeleton) {
                            var found = false;
                            for (var sIndex = 0; sIndex < _this._skeletonViewers.length; sIndex++) {
                                if (_this._skeletonViewers[sIndex].skeleton === mesh.skeleton) {
                                    found = true;
                                    break;
                                }
                            }
                            if (found) {
                                continue;
                            }
                            var viewer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Debug"].SkeletonViewer(mesh.skeleton, mesh, _this._inspector.scene);
                            viewer.isEnabled = true;
                            _this._skeletonViewers.push(viewer);
                        }
                    }
                }
                else {
                    for (var index = 0; index < _this._skeletonViewers.length; index++) {
                        _this._skeletonViewers[index].dispose();
                    }
                    _this._skeletonViewers = [];
                }
            }, 'Enable to see Skeletons on the scene : Debug.SkeletonViewer');
        }
        return _this;
    }
    /** Overrides super.dispose */
    SceneTab.prototype.dispose = function () {
        this._detailsPanel.dispose();
    };
    /** generates a div which correspond to an option that can be activated/deactivated */
    SceneTab.prototype._generateActionLine = function (name, initValue, action, tooltip) {
        var div = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('scene-actions', this._actions, tooltip);
        div.textContent = name;
        div.classList.add('action');
        if (initValue) {
            div.classList.add('active');
        }
        div.addEventListener('click', function (e) {
            div.classList.toggle('active');
            var isActivated = div.classList.contains('active');
            action(isActivated);
        });
    };
    /**
     * Add a click action for all given elements :
     * the clicked element is set as active, all others elements are deactivated
     */
    SceneTab.prototype._generateRadioAction = function (arr) {
        var active = function (elem, evt) {
            for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                var e = arr_2[_i];
                e.classList.remove('active');
            }
            elem.classList.add('active');
        };
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var elem = arr_1[_i];
            elem.addEventListener('click', active.bind(this, elem));
        }
    };
    return SceneTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_5__["Tab"]));



/***/ }),

/***/ "./src/tabs/SoundTab.ts":
/*!******************************!*\
  !*** ./src/tabs/SoundTab.ts ***!
  \******************************/
/*! exports provided: SoundTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundTab", function() { return SoundTab; });
/* harmony import */ var _adapters_SoundAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/SoundAdapter */ "./src/adapters/SoundAdapter.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SoundTab = /** @class */ (function (_super) {
    __extends(SoundTab, _super);
    function SoundTab(tabbar, inspector) {
        return _super.call(this, tabbar, 'Audio', inspector) || this;
    }
    /* Overrides super */
    SoundTab.prototype._getTree = function () {
        var _this = this;
        var arr = new Array();
        // get all cameras from the first scene
        var instances = this._inspector.scene;
        if (instances.soundTracks) {
            for (var _i = 0, _a = instances.soundTracks; _i < _a.length; _i++) {
                var sounds = _a[_i];
                var sound = sounds.soundCollection;
                sound.forEach(function (element) {
                    arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_1__["TreeItem"](_this, new _adapters_SoundAdapter__WEBPACK_IMPORTED_MODULE_0__["SoundAdapter"](element)));
                });
            }
        }
        return arr;
    };
    return SoundTab;
}(_PropertyTab__WEBPACK_IMPORTED_MODULE_2__["PropertyTab"]));



/***/ }),

/***/ "./src/tabs/StatsTab.ts":
/*!******************************!*\
  !*** ./src/tabs/StatsTab.ts ***!
  \******************************/
/*! exports provided: StatsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsTab", function() { return StatsTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StatsTab = /** @class */ (function (_super) {
    __extends(StatsTab, _super);
    function StatsTab(tabbar, insp) {
        var _this = _super.call(this, tabbar, 'Stats') || this;
        /**
         * Properties in this array will be updated
         * in a render loop - Mostly stats properties
         */
        _this._updatableProperties = [];
        _this._inspector = insp;
        _this._scene = _this._inspector.scene;
        _this._engine = _this._scene.getEngine();
        _this._glInfo = _this._engine.getGlInfo();
        _this._connectToInstrumentation();
        // Build the stats panel: a div that will contains all stats
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tab-panel');
        _this._panel.classList.add("stats-panel");
        var title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title1', _this._panel);
        var fpsSpan = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateElement('span', 'stats-fps');
        _this._updatableProperties.push({
            elem: fpsSpan,
            updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._inspector.scene.getEngine().getFps(), 0) + " fps"; }
        });
        var versionSpan = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateElement('span');
        versionSpan.textContent = "js v" + babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"].Version + " - ";
        title.appendChild(versionSpan);
        title.appendChild(fpsSpan);
        _this._updateLoopHandler = _this._update.bind(_this);
        _this._refreshRateCounter = 0;
        _this.refreshRate = 4;
        // Count block
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title2', _this._panel);
        title.textContent = "Count";
        {
            _this._createStatLabel("Total meshes", _this._panel);
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.meshes.length.toString(); }
            });
            _this._createStatLabel("Draw calls", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._sceneInstrumentation.drawCallsCounter.current.toString(); }
            });
            _this._createStatLabel("Texture collisions", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._sceneInstrumentation.textureCollisionsCounter.current.toString(); }
            });
            _this._createStatLabel("Total lights", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.lights.length.toString(); }
            });
            _this._createStatLabel("Total vertices", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.getTotalVertices().toString(); }
            });
            _this._createStatLabel("Total materials", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.materials.length.toString(); }
            });
            _this._createStatLabel("Total textures", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.textures.length.toString(); }
            });
            _this._createStatLabel("Active meshes", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.getActiveMeshes().length.toString(); }
            });
            _this._createStatLabel("Active indices", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.getActiveIndices().toString(); }
            });
            _this._createStatLabel("Active bones", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.getActiveBones().toString(); }
            });
            _this._createStatLabel("Active particles", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._scene.getActiveParticles().toString(); }
            });
        }
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title2', _this._panel);
        title.textContent = "Duration";
        {
            _this._createStatLabel("Properties refresh rate (per second)", _this._panel);
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('input');
            _this._inputElement.value = _this.refreshRate;
            elemValue.appendChild(_this._inputElement);
            _this._inputElement.addEventListener('keyup', function (evt) {
                _this.refreshRate = _this._inputElement.value;
            });
            _this._createStatLabel("Meshes selection", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.activeMeshesEvaluationTimeCounter.current); }
            });
            _this._createStatLabel("Render targets", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.renderTargetsRenderTimeCounter.current); }
            });
            _this._createStatLabel("Particles", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.particlesRenderTimeCounter.current); }
            });
            _this._createStatLabel("Sprites", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.spritesRenderTimeCounter.current); }
            });
            _this._createStatLabel("Animations", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.animationsTimeCounter.current); }
            });
            _this._createStatLabel("Physics", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.physicsTimeCounter.current); }
            });
            _this._createStatLabel("Render", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.renderTimeCounter.current); }
            });
            _this._createStatLabel("Frame", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.frameTimeCounter.current); }
            });
            _this._createStatLabel("Inter-frame", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._sceneInstrumentation.interFrameTimeCounter.current); }
            });
            _this._createStatLabel("GPU Frame time", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._engineInstrumentation.gpuFrameTimeCounter.current * 0.000001); }
            });
            _this._createStatLabel("GPU Frame time (average)", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(_this._engineInstrumentation.gpuFrameTimeCounter.average * 0.000001); }
            });
            _this._createStatLabel("Potential FPS", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Format(1000.0 / _this._sceneInstrumentation.frameTimeCounter.current, 0); }
            });
            _this._createStatLabel("Resolution", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._engine.getRenderWidth() + "x" + _this._engine.getRenderHeight(); }
            });
        }
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title2', _this._panel);
        title.textContent = "Extensions";
        {
            _this._createStatLabel("Std derivatives", _this._panel);
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().standardDerivatives ? "Yes" : "No"); }
            });
            _this._createStatLabel("Compressed textures", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().s3tc ? "Yes" : "No"); }
            });
            _this._createStatLabel("Hardware instances", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().instancedArrays ? "Yes" : "No"); }
            });
            _this._createStatLabel("Texture float", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().textureFloat ? "Yes" : "No"); }
            });
            _this._createStatLabel("32bits indices", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().uintIndices ? "Yes" : "No"); }
            });
            _this._createStatLabel("Fragment depth", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().fragmentDepthSupported ? "Yes" : "No"); }
            });
            _this._createStatLabel("High precision shaders", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().highPrecisionShaderSupported ? "Yes" : "No"); }
            });
            _this._createStatLabel("Draw buffers", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().drawBuffersExtension ? "Yes" : "No"); }
            });
            _this._createStatLabel("Vertex array object", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().vertexArrayObject ? "Yes" : "No"); }
            });
            _this._createStatLabel("Timer query", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.getCaps().timerQuery ? "Yes" : "No"); }
            });
        }
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title2', _this._panel);
        title.textContent = "Caps.";
        {
            _this._createStatLabel("Stencil", _this._panel);
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return (_this._engine.isStencilEnable ? "Enabled" : "Disabled"); }
            });
            _this._createStatLabel("Max textures units", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._engine.getCaps().maxTexturesImageUnits.toString(); }
            });
            _this._createStatLabel("Max textures size", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._engine.getCaps().maxTextureSize.toString(); }
            });
            _this._createStatLabel("Max anisotropy", _this._panel);
            elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-value', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return _this._engine.getCaps().maxAnisotropy.toString(); }
            });
        }
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-title2', _this._panel);
        title.textContent = "Info";
        {
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-infos', _this._panel);
            _this._updatableProperties.push({
                elem: elemValue,
                updateFct: function () { return "WebGL v" + _this._engine.webGLVersion + " - " + _this._glInfo.version + " - " + _this._glInfo.renderer; }
            });
        }
        return _this;
    }
    StatsTab.prototype._connectToInstrumentation = function () {
        if (this._sceneInstrumentation) {
            return;
        }
        this._sceneInstrumentation = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneInstrumentation"](this._scene);
        this._sceneInstrumentation.captureActiveMeshesEvaluationTime = true;
        this._sceneInstrumentation.captureRenderTargetsRenderTime = true;
        this._sceneInstrumentation.captureFrameTime = true;
        this._sceneInstrumentation.captureRenderTime = true;
        this._sceneInstrumentation.captureInterFrameTime = true;
        this._sceneInstrumentation.captureParticlesRenderTime = true;
        this._sceneInstrumentation.captureSpritesRenderTime = true;
        this._sceneInstrumentation.capturePhysicsTime = true;
        this._sceneInstrumentation.captureAnimationsTime = true;
        this._engineInstrumentation = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["EngineInstrumentation"](this._engine);
        this._engineInstrumentation.captureGPUFrameTime = true;
    };
    StatsTab.prototype._createStatLabel = function (content, parent) {
        var elem = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('stat-label', parent);
        elem.textContent = content;
        return elem;
    };
    /** Update each properties of the stats panel */
    StatsTab.prototype._update = function () {
        if (this._refreshRateCounter > 1) {
            this._refreshRateCounter--;
        }
        else {
            for (var _i = 0, _a = this._updatableProperties; _i < _a.length; _i++) {
                var prop = _a[_i];
                prop.elem.textContent = prop.updateFct();
            }
            if (this._inspector.scene.getEngine().getFps() / this.refreshRate == Infinity) {
                this._refreshRateCounter = 1;
            }
            else {
                this._refreshRateCounter = this._inspector.scene.getEngine().getFps() / this.refreshRate;
            }
        }
    };
    StatsTab.prototype.dispose = function () {
        this._scene.unregisterAfterRender(this._updateLoopHandler);
        this._sceneInstrumentation.dispose();
        this._sceneInstrumentation = null;
        this._engineInstrumentation.dispose();
        this._engineInstrumentation = null;
    };
    StatsTab.prototype.active = function (b) {
        _super.prototype.active.call(this, b);
        if (b) {
            this._connectToInstrumentation();
            this._scene.registerAfterRender(this._updateLoopHandler);
        }
    };
    return StatsTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_3__["Tab"]));



/***/ }),

/***/ "./src/tabs/Tab.ts":
/*!*************************!*\
  !*** ./src/tabs/Tab.ts ***!
  \*************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gui/BasicElement */ "./src/gui/BasicElement.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(tabbar, name) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._tabbar = tabbar;
        _this.name = name;
        _this._build();
        return _this;
    }
    /** True if the tab is active, false otherwise */
    Tab.prototype.isActive = function () {
        return this._isActive;
    };
    Tab.prototype._build = function () {
        var _this = this;
        this._div.className = 'tab';
        this._div.textContent = this.name;
        this._div.addEventListener('click', function (evt) {
            // Set this tab as active
            _this._tabbar.switchTab(_this);
        });
    };
    /** Set this tab as active or not, depending on the current state */
    Tab.prototype.active = function (b) {
        if (b) {
            this._div.classList.add('active');
        }
        else {
            this._div.classList.remove('active');
        }
        this._isActive = b;
    };
    Tab.prototype.update = function () {
        // Nothing for the moment
    };
    /** Creates the tab panel for this tab. */
    Tab.prototype.getPanel = function () {
        return this._panel;
    };
    /** Add this in the propertytab with the searchbar */
    Tab.prototype.filter = function (str) { };
    /** Select an item in the tree */
    Tab.prototype.select = function (item) {
        // To define in subclasses if needed
    };
    /**
     * Returns the total width in pixel of this tab, 0 by default
    */
    Tab.prototype.getPixelWidth = function () {
        var style = _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].WINDOW.getComputedStyle(this._div);
        if (!style.marginLeft || !style.marginRight) {
            return 0;
        }
        var left = parseFloat(style.marginLeft.substr(0, style.marginLeft.length - 2)) || 0;
        var right = parseFloat(style.marginRight.substr(0, style.marginRight.length - 2)) || 0;
        return (this._div.clientWidth || 0) + left + right;
    };
    return Tab;
}(_gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]));



/***/ }),

/***/ "./src/tabs/TabBar.ts":
/*!****************************!*\
  !*** ./src/tabs/TabBar.ts ***!
  \****************************/
/*! exports provided: TabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return TabBar; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gui_BasicElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/BasicElement */ "./src/gui/BasicElement.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _tools_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/Toolbar */ "./src/tools/Toolbar.ts");
/* harmony import */ var _CameraTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CameraTab */ "./src/tabs/CameraTab.ts");
/* harmony import */ var _ConsoleTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConsoleTab */ "./src/tabs/ConsoleTab.ts");
/* harmony import */ var _GLTFTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GLTFTab */ "./src/tabs/GLTFTab.ts");
/* harmony import */ var _GUITab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GUITab */ "./src/tabs/GUITab.ts");
/* harmony import */ var _LightTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LightTab */ "./src/tabs/LightTab.ts");
/* harmony import */ var _MaterialTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MaterialTab */ "./src/tabs/MaterialTab.ts");
/* harmony import */ var _MeshTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MeshTab */ "./src/tabs/MeshTab.ts");
/* harmony import */ var _PhysicsTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PhysicsTab */ "./src/tabs/PhysicsTab.ts");
/* harmony import */ var _SceneTab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SceneTab */ "./src/tabs/SceneTab.ts");
/* harmony import */ var _SoundTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SoundTab */ "./src/tabs/SoundTab.ts");
/* harmony import */ var _StatsTab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StatsTab */ "./src/tabs/StatsTab.ts");
/* harmony import */ var _TextureTab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TextureTab */ "./src/tabs/TextureTab.ts");
/* harmony import */ var _ToolsTab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ToolsTab */ "./src/tabs/ToolsTab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


















/**
 * A tab bar will contains each view the inspector can have : Canvas2D, Meshes...
 * The default active tab is the first one of the list.
 */
var TabBar = /** @class */ (function (_super) {
    __extends(TabBar, _super);
    function TabBar(inspector, initialTab) {
        var _this = _super.call(this) || this;
        // The list of available tabs
        _this._tabs = [];
        /** The list of tab displayed by clicking on the remainingIcon */
        _this._invisibleTabs = [];
        /** The list of tabs visible, displayed in the tab bar */
        _this._visibleTabs = [];
        _this._inspector = inspector;
        _this._tabs.push(new _SceneTab__WEBPACK_IMPORTED_MODULE_13__["SceneTab"](_this, _this._inspector));
        _this._tabs.push(new _ConsoleTab__WEBPACK_IMPORTED_MODULE_6__["ConsoleTab"](_this, _this._inspector));
        _this._tabs.push(new _StatsTab__WEBPACK_IMPORTED_MODULE_15__["StatsTab"](_this, _this._inspector));
        _this._meshTab = new _MeshTab__WEBPACK_IMPORTED_MODULE_11__["MeshTab"](_this, _this._inspector);
        _this._tabs.push(new _TextureTab__WEBPACK_IMPORTED_MODULE_16__["TextureTab"](_this, _this._inspector));
        _this._tabs.push(_this._meshTab);
        _this._tabs.push(new _LightTab__WEBPACK_IMPORTED_MODULE_9__["LightTab"](_this, _this._inspector));
        _this._tabs.push(new _MaterialTab__WEBPACK_IMPORTED_MODULE_10__["MaterialTab"](_this, _this._inspector));
        if (_GLTFTab__WEBPACK_IMPORTED_MODULE_7__["GLTFTab"].IsSupported) {
            _this._tabs.push(new _GLTFTab__WEBPACK_IMPORTED_MODULE_7__["GLTFTab"](_this, _this._inspector));
        }
        if (_Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].GUIObject) {
            _this._tabs.push(new _GUITab__WEBPACK_IMPORTED_MODULE_8__["GUITab"](_this, _this._inspector));
        }
        _this._tabs.push(new _PhysicsTab__WEBPACK_IMPORTED_MODULE_12__["PhysicsTab"](_this, _this._inspector));
        _this._tabs.push(new _CameraTab__WEBPACK_IMPORTED_MODULE_5__["CameraTab"](_this, _this._inspector));
        // Only uses sounds if available.
        if (babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"].audioEngine) {
            _this._tabs.push(new _SoundTab__WEBPACK_IMPORTED_MODULE_14__["SoundTab"](_this, _this._inspector));
        }
        _this._tabs.push(new _ToolsTab__WEBPACK_IMPORTED_MODULE_17__["ToolsTab"](_this, _this._inspector));
        _this._toolBar = new _tools_Toolbar__WEBPACK_IMPORTED_MODULE_4__["Toolbar"](_this._inspector);
        _this._build();
        if (typeof initialTab === "string") {
            initialTab = _this.getTabIndex(initialTab);
        }
        else {
            //Check initialTab is defined and between tabs bounds
            if (!initialTab || initialTab < 0 || initialTab >= _this._tabs.length) {
                initialTab = 0;
            }
        }
        _this._tabs[initialTab].active(true);
        // set all tab as visible
        for (var _i = 0, _a = _this._tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            _this._visibleTabs.push(tab);
        }
        return _this;
    }
    // No update
    TabBar.prototype.update = function () { };
    TabBar.prototype._build = function () {
        var _this = this;
        this._div.className = 'tabbar';
        this._div.appendChild(this._toolBar.toHtml());
        for (var _i = 0, _a = this._tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            this._div.appendChild(tab.toHtml());
        }
        this._moreTabsIcon = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateElement('i', 'fa fa-angle-double-right more-tabs');
        this._moreTabsPanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('more-tabs-panel');
        this._moreTabsIcon.addEventListener('click', function () {
            // Hide the 'more-tabs-panel' if already displayed
            if (_this._moreTabsPanel.style.display == 'flex') {
                _this._moreTabsPanel.style.display = 'none';
            }
            else {
                // Attach more-tabs-panel if not attached yet
                var topPanel = _this._div.parentNode;
                if (!topPanel.contains(_this._moreTabsPanel)) {
                    topPanel.appendChild(_this._moreTabsPanel);
                }
                // Clean the 'more-tabs-panel'
                _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(_this._moreTabsPanel);
                // Add each invisible tabs to this panel
                for (var _i = 0, _a = _this._invisibleTabs; _i < _a.length; _i++) {
                    var tab = _a[_i];
                    _this._addInvisibleTabToPanel(tab);
                }
                // And display it
                _this._moreTabsPanel.style.display = 'flex';
            }
        });
    };
    /**
     * Add a tab to the 'more-tabs' panel, displayed by clicking on the
     * 'more-tabs' icon
     */
    TabBar.prototype._addInvisibleTabToPanel = function (tab) {
        var _this = this;
        var div = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('invisible-tab', this._moreTabsPanel);
        div.textContent = tab.name;
        div.addEventListener('click', function () {
            _this._moreTabsPanel.style.display = 'none';
            _this.switchTab(tab);
        });
    };
    /** Dispose the current tab, set the given tab as active, and refresh the treeview */
    TabBar.prototype.switchTab = function (tab) {
        // Dispose the active tab
        var activeTab = this.getActiveTab();
        if (activeTab) {
            activeTab.dispose();
        }
        // Deactivate all tabs
        for (var _i = 0, _a = this._tabs; _i < _a.length; _i++) {
            var t = _a[_i];
            t.active(false);
        }
        // activate the given tab
        tab.active(true);
        // Refresh the inspector
        this._inspector.refresh();
    };
    /** Display the mesh tab.
     * If a parameter is given, the given mesh details are displayed
     */
    TabBar.prototype.switchMeshTab = function (mesh) {
        this.switchTab(this._meshTab);
        if (mesh) {
            var item = this._meshTab.getItemFor(mesh);
            if (item) {
                this._meshTab.select(item);
            }
        }
    };
    /** Returns the active tab */
    TabBar.prototype.getActiveTab = function () {
        for (var _i = 0, _a = this._tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (tab.isActive()) {
                return tab;
            }
        }
        return null;
    };
    TabBar.prototype.getActiveTabIndex = function () {
        for (var i = 0; i < this._tabs.length; i++) {
            if (this._tabs[i].isActive()) {
                return i;
            }
        }
        return 0;
    };
    TabBar.prototype.getTabIndex = function (name) {
        for (var i = 0; i < this._tabs.length; i++) {
            if (this._tabs[i].name === name) {
                return i;
            }
        }
        return 0;
    };
    Object.defineProperty(TabBar.prototype, "inspector", {
        get: function () {
            return this._inspector;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the total width in pixel of the tabbar,
     * that corresponds to the sum of the width of each visible tab + toolbar width
    */
    TabBar.prototype.getPixelWidth = function () {
        var sum = 0;
        for (var _i = 0, _a = this._visibleTabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            sum += tab.getPixelWidth();
        }
        sum += this._toolBar.getPixelWidth();
        if (this._div.contains(this._moreTabsIcon)) {
            sum += 30; // $tabbarheight
        }
        return sum;
    };
    /** Display the remaining icon or not depending on the tabbar width.
     * This function should be called each time the inspector width is updated
     */
    TabBar.prototype.updateWidth = function () {
        if (!this._div.parentElement) {
            return;
        }
        var parentSize = this._div.parentElement.clientWidth;
        var lastTabWidth = 75;
        var currentSize = this.getPixelWidth();
        // Check if a tab should be removed : if the tab bar width is greater than
        // its parent width
        while (this._visibleTabs.length > 0 && currentSize > parentSize) {
            // Start by the last element
            var tab = this._visibleTabs.pop();
            if (!tab) {
                break;
            }
            // set it invisible
            this._invisibleTabs.push(tab);
            // and removes it from the DOM
            this._div.removeChild(tab.toHtml());
            currentSize = this.getPixelWidth() + lastTabWidth;
        }
        // Check if a tab can be added to the tab bar : if the tab bar width
        // + 100 (at least 100px is needed to add a tab) is less than its parent width
        if (this._invisibleTabs.length > 0) {
            if (currentSize + lastTabWidth < parentSize) {
                var lastTab = this._invisibleTabs.pop();
                if (lastTab) {
                    this._div.appendChild(lastTab.toHtml());
                    this._visibleTabs.push(lastTab);
                }
                // Update more-tab icon in last position if needed
                if (this._div.contains(this._moreTabsIcon)) {
                    this._div.removeChild(this._moreTabsIcon);
                }
            }
        }
        if (this._invisibleTabs.length > 0 && !this._div.contains(this._moreTabsIcon)) {
            this._div.appendChild(this._moreTabsIcon);
        }
    };
    return TabBar;
}(_gui_BasicElement__WEBPACK_IMPORTED_MODULE_1__["BasicElement"]));



/***/ }),

/***/ "./src/tabs/TextureTab.ts":
/*!********************************!*\
  !*** ./src/tabs/TextureTab.ts ***!
  \********************************/
/*! exports provided: TextureTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureTab", function() { return TextureTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adapters_TextureAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/TextureAdapter */ "./src/adapters/TextureAdapter.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _tree_TreeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree/TreeItem */ "./src/tree/TreeItem.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Split */ "../dist/preview release/split.js");
/* harmony import */ var Split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Split__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TextureTab = /** @class */ (function (_super) {
    __extends(TextureTab, _super);
    function TextureTab(tabbar, inspector) {
        var _this = _super.call(this, tabbar, 'Textures') || this;
        _this._treeItems = [];
        _this._inspector = inspector;
        // Build the properties panel : a div that will contains the tree and the detail panel
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('tab-panel');
        // Build the treepanel
        _this._treePanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-tree', _this._panel);
        _this._imagePanel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateDiv('insp-details', _this._panel);
        Split__WEBPACK_IMPORTED_MODULE_5__([_this._treePanel, _this._imagePanel], {
            blockDrag: _this._inspector.popupMode,
            direction: 'vertical'
        });
        _this.update();
        return _this;
    }
    TextureTab.prototype.dispose = function () {
        TextureTab.DDSPreview.dispose();
    };
    TextureTab.prototype.update = function (_items) {
        var items;
        if (_items) {
            items = _items;
        }
        else {
            // Rebuild the tree
            this._treeItems = this._getTree();
            items = this._treeItems;
        }
        // Clean the tree
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._treePanel);
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._imagePanel);
        // Sort items alphabetically
        items.sort(function (item1, item2) {
            return item1.compareTo(item2);
        });
        // Display items
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this._treePanel.appendChild(item.toHtml());
        }
    };
    /* Overrides super */
    TextureTab.prototype._getTree = function () {
        var arr = [];
        // get all cameras from the first scene
        var instances = this._inspector.scene;
        for (var _i = 0, _a = instances.textures; _i < _a.length; _i++) {
            var tex = _a[_i];
            arr.push(new _tree_TreeItem__WEBPACK_IMPORTED_MODULE_3__["TreeItem"](this, new _adapters_TextureAdapter__WEBPACK_IMPORTED_MODULE_1__["TextureAdapter"](tex)));
        }
        return arr;
    };
    /** Display the details of the given item */
    TextureTab.prototype.displayDetails = function (item) {
        // Remove active state on all items
        this.activateNode(item);
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CleanDiv(this._imagePanel);
        // Get the texture object
        var texture = item.adapter.object;
        var imageExtension = item.adapter.object.name.split('.').pop();
        //In case the texture is a standard image format
        if (imageExtension == "png" || imageExtension == "jpg" || imageExtension == "gif" || imageExtension == "svg") {
            var img = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateElement('img', 'texture-image', this._imagePanel);
            img.style.width = this._imagePanel.style.width;
            img.style.height = "auto";
            img.src = texture.name;
        }
        else if (imageExtension == "dds") {
            //In case the texture is a dds format
            if (TextureTab.DDSPreview != null && TextureTab.DDSPreview.canvas != null) {
                this._imagePanel.appendChild(TextureTab.DDSPreview.canvas);
                TextureTab.DDSPreview.insertPreview(item.adapter);
            }
            else {
                //Create a canvas to load BJS if it don't exists
                var previewCanvas = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateElement('canvas', '', this._imagePanel);
                previewCanvas.style.outline = "none";
                previewCanvas.style.webkitTapHighlightColor = "rgba(255,255,255,0)";
                previewCanvas.id = "babylonjs-inspector-textures-preview";
                TextureTab.DDSPreview = new DDSPreview(item.adapter);
            }
        }
        else {
            var imgs_1 = [];
            var img = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateElement('img', 'texture-image', this._imagePanel);
            imgs_1.push(img);
            //Create five other images elements
            for (var i = 0; i < 5; i++) {
                imgs_1.push(_helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].CreateElement('img', 'texture-image', this._imagePanel));
            }
            if (texture instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["RenderTargetTexture"]) {
                // RenderTarget textures
                var scene = this._inspector.scene;
                var engine_1 = scene.getEngine();
                var size_1 = texture.getSize();
                // Clone the texture
                var screenShotTexture = texture.clone();
                screenShotTexture.activeCamera = texture.activeCamera;
                screenShotTexture.onBeforeRender = texture.onBeforeRender;
                screenShotTexture.onAfterRender = texture.onAfterRender;
                screenShotTexture.onBeforeRenderObservable = texture.onBeforeRenderObservable;
                // To display the texture after rendering
                screenShotTexture.onAfterRenderObservable.add(function (faceIndex) {
                    babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].DumpFramebuffer(size_1.width, size_1.height, engine_1, function (data) { return imgs_1[faceIndex].src = data; });
                });
                // Render the texture
                scene.incrementRenderId();
                scene.resetCachedMaterial();
                screenShotTexture.render();
                screenShotTexture.dispose();
            }
            else if (texture instanceof babylonjs__WEBPACK_IMPORTED_MODULE_0__["CubeTexture"]) {
                // Cannot open correctly DDS File
                // Display all textures of the CubeTexture
                var pixels = texture.readPixels();
                var canvas = document.createElement('canvas');
                canvas.id = "MyCanvas";
                if (img.parentElement) {
                    img.parentElement.appendChild(canvas);
                }
                var ctx = canvas.getContext('2d');
                var size = texture.getSize();
                var tmp = pixels.buffer.slice(0, size.height * size.width * 4);
                var u = new Uint8ClampedArray(tmp);
                var colors = new ImageData(size.width * 6, size.height);
                colors.data.set(u);
                var imgData = ctx.createImageData(size.width * 6, size.height);
                imgData.data.set(u);
                // let data = imgData.data;
                // for(let i = 0, len = size.height * size.width; i < len; i++) {
                //     data[i] = pixels[i];
                // }
                ctx.putImageData(imgData, 0, 0);
                // let i: number = 0;
                // for(let filename of (texture as CubeTexture)['_files']){
                //     imgs[i].src = filename;
                //     i++;
                // }
            }
            else if (texture['_canvas']) {
                // Dynamic texture
                var base64Image = texture['_canvas'].toDataURL("image/png");
                img.src = base64Image;
            }
            else if (texture.url) {
                var pixels = texture.readPixels();
                var canvas = document.createElement('canvas');
                canvas.id = "MyCanvas";
                if (img.parentElement) {
                    img.parentElement.appendChild(canvas);
                }
                var ctx = canvas.getContext('2d');
                var size = texture.getSize();
                var imgData = ctx.createImageData(size.width, size.height);
                imgData.data.set(pixels);
                ctx.putImageData(imgData, 0, 0);
                // If an url is present, the texture is an image
                // img.src = texture.url;
            }
        }
    };
    /** Select an item in the tree */
    TextureTab.prototype.select = function (item) {
        // Active the node
        this.activateNode(item);
        // Display its details
        this.displayDetails(item);
    };
    /** Set the given item as active in the tree */
    TextureTab.prototype.activateNode = function (item) {
        if (this._treeItems) {
            for (var _i = 0, _a = this._treeItems; _i < _a.length; _i++) {
                var node = _a[_i];
                node.active(false);
            }
        }
        item.active(true);
    };
    return TextureTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_4__["Tab"]));

var DDSPreview = /** @class */ (function () {
    function DDSPreview(AdapterItem) {
        this.canvas = document.getElementById("babylonjs-inspector-textures-preview");
        this._engine = new BABYLON.Engine(this.canvas, true);
        this._run();
        this.insertPreview(AdapterItem);
    }
    DDSPreview.prototype._run = function () {
        var _this = this;
        this._scene = new BABYLON.Scene(this._engine);
        this._scene.clearColor = new BABYLON.Color4(0.1412, 0.1412, 0.1412, 1);
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 1;
        this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 1.57, 5, babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), this._scene);
        this._scene.activeCamera = this._camera;
        this._camera.attachControl(this.canvas);
        window.addEventListener("resize", function () {
            _this._engine.resize();
        });
        this._scene.executeWhenReady(function () {
            _this._engine.runRenderLoop(function () {
                _this._scene.render();
            });
        });
    };
    DDSPreview.prototype.insertPreview = function (AdapterItem) {
        if (this._tex) {
            this._tex.dispose();
        }
        if (this._mat) {
            this._mat.dispose();
        }
        if (this._mesh) {
            this._mesh.dispose();
        }
        this._mat = new BABYLON.StandardMaterial("customMat", this._scene);
        if (AdapterItem.type() == "Texture") {
            //If the dds is not a cube format render it on a plane
            var previewMeshPlane = BABYLON.Mesh.CreatePlane("previewPlane", 3, this._scene);
            previewMeshPlane.rotate(new BABYLON.Vector3(1, 0, 0), 3.14);
            previewMeshPlane.rotate(new BABYLON.Vector3(0, 1, 0), -1.57);
            this._mesh = previewMeshPlane;
            this._tex = new BABYLON.Texture(AdapterItem.object.name, this._scene);
            this._tex.invertZ = true;
            this._tex.uScale = -1;
            this._mat.diffuseTexture = this._tex;
            this._mat.emissiveTexture = this._tex;
            this._mat.specularTexture = this._tex;
            this._mat.disableLighting = true;
            previewMeshPlane.material = this._mat;
        }
        else if (AdapterItem.type() == "BaseTexture") {
            //Else if the dds is a cube format render it on a box
            var previewMeshBox = BABYLON.Mesh.CreateBox("previewBox", 3, this._scene);
            previewMeshBox.rotate(new BABYLON.Vector3(0, 1, 0), -0.5);
            this._mesh = previewMeshBox;
            this._cubeTex = new BABYLON.CubeTexture(AdapterItem.object.name, this._scene);
            this._mat.reflectionTexture = this._cubeTex;
            this._mat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            this._mat.disableLighting = true;
            previewMeshBox.material = this._mat;
        }
        this._engine.resize();
    };
    DDSPreview.prototype.dispose = function () {
        this._engine.dispose();
        this.canvas = null;
    };
    return DDSPreview;
}());


/***/ }),

/***/ "./src/tabs/ToolsTab.ts":
/*!******************************!*\
  !*** ./src/tabs/ToolsTab.ts ***!
  \******************************/
/*! exports provided: ToolsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsTab", function() { return ToolsTab; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ToolsTab = /** @class */ (function (_super) {
    __extends(ToolsTab, _super);
    function ToolsTab(tabbar, insp) {
        var _this = _super.call(this, tabbar, 'Tools') || this;
        _this._videoRecorder = null;
        _this._inspector = insp;
        _this._scene = _this._inspector.scene;
        // Build the tools panel: a div that will contains all tools
        _this._panel = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tab-panel');
        _this._panel.classList.add("tools-panel");
        var title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tool-title1', _this._panel);
        var versionSpan = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateElement('span');
        versionSpan.textContent = "js v" + babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"].Version + " - Tools";
        title.appendChild(versionSpan);
        // Environment block
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tool-title2', _this._panel);
        title.textContent = "Environment Texture (.dds, .env)";
        {
            var errorElemm_1 = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('div');
            errorElemm_1.className = "tool-label-error";
            errorElemm_1.style.display = "none";
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv(null, _this._panel);
            var inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('input');
            inputElement.className = "tool-input";
            inputElement.type = "file";
            inputElement.accept = ".dds, .env";
            inputElement.onchange = function (event) {
                var files = event.target.files;
                var file = null;
                if (files && files.length) {
                    file = files[0];
                }
                if (!file) {
                    errorElemm_1.style.display = "block";
                    errorElemm_1.textContent = "Please, select a file first.";
                    return;
                }
                var isFileDDS = file.name.toLowerCase().indexOf(".dds") > 0;
                var isFileEnv = file.name.toLowerCase().indexOf(".env") > 0;
                if (!isFileDDS && !isFileEnv) {
                    errorElemm_1.style.display = "block";
                    errorElemm_1.textContent = "Please, select a dds or env file.";
                    return;
                }
                babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].ReadFile(file, function (data) {
                    var blob = new Blob([data], { type: "octet/stream" });
                    var url = URL.createObjectURL(blob);
                    if (isFileDDS) {
                        _this._scene.environmentTexture = babylonjs__WEBPACK_IMPORTED_MODULE_0__["CubeTexture"].CreateFromPrefilteredData(url, _this._scene, ".dds");
                        errorElemm_1.style.display = "none";
                    }
                    else {
                        _this._scene.environmentTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["CubeTexture"](url, _this._scene, undefined, undefined, undefined, function () {
                            errorElemm_1.style.display = "none";
                        }, function (message) {
                            if (message) {
                                errorElemm_1.style.display = "block";
                                errorElemm_1.textContent = message;
                            }
                        }, undefined, undefined, ".env");
                    }
                }, undefined, true);
            };
            elemValue.appendChild(inputElement);
            if (!_this._scene.getEngine().premultipliedAlpha) {
                elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv(null, _this._panel);
                inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('input');
                inputElement.value = "Compress current texture to .env";
                inputElement.className = "tool-input";
                inputElement.type = "button";
                inputElement.onclick = function () {
                    if (!_this._scene.environmentTexture) {
                        errorElemm_1.style.display = "block";
                        errorElemm_1.textContent = "You must load an environment texture first.";
                        return;
                    }
                    if (_this._scene.activeCamera) {
                        babylonjs__WEBPACK_IMPORTED_MODULE_0__["EnvironmentTextureTools"].CreateEnvTextureAsync(_this._scene.environmentTexture)
                            .then(function (buffer) {
                            var blob = new Blob([buffer], { type: "octet/stream" });
                            babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].Download(blob, "environment.env");
                            errorElemm_1.style.display = "none";
                        })
                            .catch(function (error) {
                            errorElemm_1.style.display = "block";
                            errorElemm_1.textContent = error;
                        });
                    }
                    else {
                        errorElemm_1.style.display = "block";
                        errorElemm_1.textContent = "An active camera is required.";
                    }
                };
                elemValue.appendChild(inputElement);
            }
            _this._panel.appendChild(errorElemm_1);
        }
        title = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv('tool-title2', _this._panel);
        title.textContent = "Capture";
        {
            var elemValue = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].CreateDiv(null, _this._panel);
            var inputElement = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('input');
            inputElement.value = "Take Screenshot";
            inputElement.type = "button";
            inputElement.className = "tool-input";
            inputElement.onclick = function () {
                if (_this._scene.activeCamera) {
                    babylonjs__WEBPACK_IMPORTED_MODULE_0__["Tools"].CreateScreenshot(_this._scene.getEngine(), _this._scene.activeCamera, { precision: 0.5 });
                }
            };
            elemValue.appendChild(inputElement);
            if (babylonjs__WEBPACK_IMPORTED_MODULE_0__["VideoRecorder"] && babylonjs__WEBPACK_IMPORTED_MODULE_0__["VideoRecorder"].IsSupported(_this._scene.getEngine())) {
                var videoRecorderElement_1 = _Inspector__WEBPACK_IMPORTED_MODULE_2__["Inspector"].DOCUMENT.createElement('input');
                videoRecorderElement_1.value = "Start Recording Video";
                videoRecorderElement_1.type = "button";
                videoRecorderElement_1.className = "tool-input";
                videoRecorderElement_1.onclick = function () {
                    if (!_this._videoRecorder) {
                        _this._videoRecorder = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["VideoRecorder"](_this._scene.getEngine());
                    }
                    if (_this._videoRecorder.isRecording) {
                        _this._videoRecorder.stopRecording();
                    }
                    else {
                        videoRecorderElement_1.value = "Stop Recording Video";
                        _this._videoRecorder.startRecording().then(function () {
                            videoRecorderElement_1.value = "Start Recording Video";
                        });
                    }
                };
                elemValue.appendChild(videoRecorderElement_1);
            }
        }
        return _this;
    }
    ToolsTab.prototype.dispose = function () {
        // Nothing to dispose
    };
    return ToolsTab;
}(_Tab__WEBPACK_IMPORTED_MODULE_3__["Tab"]));



/***/ }),

/***/ "./src/tabs/index.ts":
/*!***************************!*\
  !*** ./src/tabs/index.ts ***!
  \***************************/
/*! exports provided: CameraTab, ConsoleTab, GLTFTab, GUITab, LightTab, MaterialTab, MeshTab, PhysicsTab, PropertyTab, SceneTab, SoundTab, StatsTab, Tab, TabBar, TextureTab, ToolsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CameraTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CameraTab */ "./src/tabs/CameraTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraTab", function() { return _CameraTab__WEBPACK_IMPORTED_MODULE_0__["CameraTab"]; });

/* harmony import */ var _ConsoleTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleTab */ "./src/tabs/ConsoleTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleTab", function() { return _ConsoleTab__WEBPACK_IMPORTED_MODULE_1__["ConsoleTab"]; });

/* harmony import */ var _GLTFTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GLTFTab */ "./src/tabs/GLTFTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFTab", function() { return _GLTFTab__WEBPACK_IMPORTED_MODULE_2__["GLTFTab"]; });

/* harmony import */ var _GUITab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GUITab */ "./src/tabs/GUITab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUITab", function() { return _GUITab__WEBPACK_IMPORTED_MODULE_3__["GUITab"]; });

/* harmony import */ var _LightTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LightTab */ "./src/tabs/LightTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightTab", function() { return _LightTab__WEBPACK_IMPORTED_MODULE_4__["LightTab"]; });

/* harmony import */ var _MaterialTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaterialTab */ "./src/tabs/MaterialTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTab", function() { return _MaterialTab__WEBPACK_IMPORTED_MODULE_5__["MaterialTab"]; });

/* harmony import */ var _MeshTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MeshTab */ "./src/tabs/MeshTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshTab", function() { return _MeshTab__WEBPACK_IMPORTED_MODULE_6__["MeshTab"]; });

/* harmony import */ var _PhysicsTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhysicsTab */ "./src/tabs/PhysicsTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsTab", function() { return _PhysicsTab__WEBPACK_IMPORTED_MODULE_7__["PhysicsTab"]; });

/* harmony import */ var _PropertyTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PropertyTab */ "./src/tabs/PropertyTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyTab", function() { return _PropertyTab__WEBPACK_IMPORTED_MODULE_8__["PropertyTab"]; });

/* harmony import */ var _SceneTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SceneTab */ "./src/tabs/SceneTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneTab", function() { return _SceneTab__WEBPACK_IMPORTED_MODULE_9__["SceneTab"]; });

/* harmony import */ var _SoundTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SoundTab */ "./src/tabs/SoundTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundTab", function() { return _SoundTab__WEBPACK_IMPORTED_MODULE_10__["SoundTab"]; });

/* harmony import */ var _StatsTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StatsTab */ "./src/tabs/StatsTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsTab", function() { return _StatsTab__WEBPACK_IMPORTED_MODULE_11__["StatsTab"]; });

/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tab */ "./src/tabs/Tab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _Tab__WEBPACK_IMPORTED_MODULE_12__["Tab"]; });

/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabBar */ "./src/tabs/TabBar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _TabBar__WEBPACK_IMPORTED_MODULE_13__["TabBar"]; });

/* harmony import */ var _TextureTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TextureTab */ "./src/tabs/TextureTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureTab", function() { return _TextureTab__WEBPACK_IMPORTED_MODULE_14__["TextureTab"]; });

/* harmony import */ var _ToolsTab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ToolsTab */ "./src/tabs/ToolsTab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolsTab", function() { return _ToolsTab__WEBPACK_IMPORTED_MODULE_15__["ToolsTab"]; });



















/***/ }),

/***/ "./src/tools/AbstractTool.ts":
/*!***********************************!*\
  !*** ./src/tools/AbstractTool.ts ***!
  \***********************************/
/*! exports provided: AbstractTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTool", function() { return AbstractTool; });
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _gui_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/Tooltip */ "./src/gui/Tooltip.ts");


var AbstractTool = /** @class */ (function () {
    function AbstractTool(iconSet, icon, parent, inspector, tooltip) {
        var _this = this;
        this._inspector = inspector;
        this._elem = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('i');
        this._elem.className = "tool " + iconSet + " " + icon;
        parent.appendChild(this._elem);
        this._elem.addEventListener('click', function (e) {
            _this.action();
        });
        new _gui_Tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"](this._elem, tooltip);
    }
    AbstractTool.prototype.toHtml = function () {
        return this._elem;
    };
    /**
     * Returns the total width in pixel of this tool, 0 by default
    */
    AbstractTool.prototype.getPixelWidth = function () {
        var style = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].WINDOW.getComputedStyle(this._elem);
        if (!style.marginLeft || !style.marginRight) {
            return 0;
        }
        var left = parseFloat(style.marginLeft.substr(0, style.marginLeft.length - 2)) || 0;
        var right = parseFloat(style.marginRight.substr(0, style.marginRight.length - 2)) || 0;
        return (this._elem.clientWidth || 0) + left + right;
    };
    /**
     * Updates the icon of this tool with the given string
     */
    AbstractTool.prototype._updateIcon = function (icon) {
        this._elem.className = "tool fa " + icon;
    };
    return AbstractTool;
}());



/***/ }),

/***/ "./src/tools/DisposeTool.ts":
/*!**********************************!*\
  !*** ./src/tools/DisposeTool.ts ***!
  \**********************************/
/*! exports provided: DisposeTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposeTool", function() { return DisposeTool; });
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Removes the inspector panel
 */
var DisposeTool = /** @class */ (function (_super) {
    __extends(DisposeTool, _super);
    function DisposeTool(parent, inspector) {
        return _super.call(this, 'fa', 'fa-times', parent, inspector, 'Close the inspector panel') || this;
    }
    // Action : refresh the whole panel
    DisposeTool.prototype.action = function () {
        this._inspector.dispose();
    };
    return DisposeTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/FullscreenTool.ts":
/*!*************************************!*\
  !*** ./src/tools/FullscreenTool.ts ***!
  \*************************************/
/*! exports provided: FullscreenTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenTool", function() { return FullscreenTool; });
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FullscreenTool = /** @class */ (function (_super) {
    __extends(FullscreenTool, _super);
    function FullscreenTool(parent, inspector) {
        return _super.call(this, 'fa', 'fa-expand', parent, inspector, 'Open the scene in fullscreen, press Esc to exit') || this;
    }
    // Action : refresh the whole panel
    FullscreenTool.prototype.action = function () {
        var elem = document.body;
        function requestFullScreen(element) {
            // Supports most browsers and their versions.
            var requestMethod = element.requestFullscreen || element.webkitRequestFullScreen;
            requestMethod.call(element);
        }
        requestFullScreen(elem);
    };
    return FullscreenTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/LabelTool.ts":
/*!********************************!*\
  !*** ./src/tools/LabelTool.ts ***!
  \********************************/
/*! exports provided: LabelTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelTool", function() { return LabelTool; });
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
/* harmony import */ var _properties_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties_gui */ "./src/properties_gui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var LabelTool = /** @class */ (function (_super) {
    __extends(LabelTool, _super);
    function LabelTool(parent, inspector) {
        var _this = _super.call(this, 'fa', 'fa-tags', parent, inspector, 'Display mesh names on the canvas') || this;
        /** True if label are displayed, false otherwise */
        _this._isDisplayed = false;
        _this._advancedTexture = null;
        _this._labelInitialized = false;
        _this._scene = null;
        _this._scene = inspector.scene;
        return _this;
    }
    LabelTool.prototype.dispose = function () {
        if (this._advancedTexture) {
            this._advancedTexture.dispose();
        }
    };
    LabelTool.prototype._checkGUILoaded = function () {
        return _properties_gui__WEBPACK_IMPORTED_MODULE_3__["guiLoaded"];
    };
    LabelTool.prototype._initializeLabels = function () {
        var _this = this;
        // Can't initialize them if the GUI lib is not loaded yet
        if (!this._checkGUILoaded()) {
            return;
        }
        // Check if the label are already initialized and quit if it's the case
        if (this._labelInitialized || !this._scene) {
            return false;
        }
        // Create the canvas that will be used to display the labels
        this._advancedTexture = _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].GUIObject.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        // Create label for all the Meshes, Lights and Cameras
        // Those that will be created/removed after this method is called will be taken care by the event handlers added below
        for (var _i = 0, _a = this._scene.meshes; _i < _a.length; _i++) {
            var m = _a[_i];
            this._createLabel(m, _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].GUIObject);
        }
        this._scene.onNewMeshAddedObservable.add(function (m) {
            _this._createLabel(m, _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].GUIObject);
        });
        this._scene.onMeshRemovedObservable.add(function (m) {
            _this._removeLabel(m);
        });
        this._labelInitialized = true;
        return true;
    };
    LabelTool.prototype._createLabel = function (mesh, GUI) {
        // Don't create label for "system nodes" (starting and ending with ###)
        var name = mesh.name;
        if (_helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__["Helpers"].IsSystemName(name)) {
            return;
        }
        if (mesh && this._advancedTexture) {
            var rect1 = new GUI.Rectangle();
            rect1.width = 4 + 10 * name.length + "px";
            rect1.height = "22px";
            rect1.background = "rgba(0,0,0,0.6)";
            rect1.color = "black";
            this._advancedTexture.addControl(rect1);
            var label = new GUI.TextBlock();
            label.text = name;
            label.fontSize = 12;
            rect1.addControl(label);
            rect1.linkWithMesh(mesh);
        }
    };
    LabelTool.prototype._removeLabel = function (mesh) {
        if (!this._advancedTexture) {
            return;
        }
        for (var _i = 0, _a = this._advancedTexture._rootContainer.children; _i < _a.length; _i++) {
            var g = _a[_i];
            var ed = g._linkedMesh;
            if (ed === mesh) {
                this._advancedTexture.removeControl(g);
                break;
            }
        }
    };
    // Action : Display/hide mesh names on the canvas
    LabelTool.prototype.action = function () {
        // Don't toggle if the script is not loaded
        if (!this._checkGUILoaded()) {
            return;
        }
        // Toggle the label display state
        this._isDisplayed = !this._isDisplayed;
        // Check if we have to display the labels
        if (this._isDisplayed) {
            this._initializeLabels();
            if (this._advancedTexture) {
                this._advancedTexture._rootContainer.isVisible = true;
            }
        }
        // Or to hide them
        else {
            if (this._advancedTexture) {
                this._advancedTexture._rootContainer.isVisible = false;
            }
        }
    };
    return LabelTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_2__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/PauseScheduleTool.ts":
/*!****************************************!*\
  !*** ./src/tools/PauseScheduleTool.ts ***!
  \****************************************/
/*! exports provided: PauseScheduleTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseScheduleTool", function() { return PauseScheduleTool; });
/* harmony import */ var _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/Scheduler */ "./src/scheduler/Scheduler.ts");
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PauseScheduleTool = /** @class */ (function (_super) {
    __extends(PauseScheduleTool, _super);
    function PauseScheduleTool(parent, inspector) {
        var _this = _super.call(this, 'fa', 'fa-pause', parent, inspector, 'Pause the automatic update of properties') || this;
        _this._isPause = false;
        return _this;
    }
    // Action : refresh the whole panel
    PauseScheduleTool.prototype.action = function () {
        if (this._isPause) {
            _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].getInstance().pause = false;
            this._updateIcon('fa-pause');
        }
        else {
            _scheduler_Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].getInstance().pause = true;
            this._updateIcon('fa-play');
        }
        this._isPause = !this._isPause;
    };
    return PauseScheduleTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_1__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/PickTool.ts":
/*!*******************************!*\
  !*** ./src/tools/PickTool.ts ***!
  \*******************************/
/*! exports provided: PickTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickTool", function() { return PickTool; });
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PickTool = /** @class */ (function (_super) {
    __extends(PickTool, _super);
    function PickTool(parent, inspector) {
        var _this = _super.call(this, 'fa', 'fa-mouse-pointer', parent, inspector, 'Select a mesh in the scene') || this;
        _this._isActive = false;
        // Create handler
        _this._pickHandler = _this._pickMesh.bind(_this);
        return _this;
    }
    // Action : find the corresponding tree item in the correct tab and display it
    PickTool.prototype.action = function () {
        if (this._isActive) {
            this._deactivate();
        }
        else {
            this.toHtml().classList.add('active');
            // Add event handler : pick on a mesh in the scene
            var canvas = this._inspector.scene.getEngine().getRenderingCanvas();
            canvas.addEventListener('click', this._pickHandler);
            this._isActive = true;
        }
    };
    /** Deactivate this tool */
    PickTool.prototype._deactivate = function () {
        this.toHtml().classList.remove('active');
        // Remove event handler
        var canvas = this._inspector.scene.getEngine().getRenderingCanvas();
        canvas.removeEventListener('click', this._pickHandler);
        this._isActive = false;
    };
    /** Pick a mesh in the scene */
    PickTool.prototype._pickMesh = function (evt) {
        var pos = this._updatePointerPosition(evt);
        var pi = this._inspector.scene.pick(pos.x, pos.y, function (mesh) { return true; });
        if (pi && pi.pickedMesh) {
            this._inspector.displayObjectDetails(pi.pickedMesh);
        }
        this._deactivate();
    };
    PickTool.prototype._updatePointerPosition = function (evt) {
        var canvasRect = this._inspector.scene.getEngine().getRenderingCanvasClientRect();
        var pointerX = evt.clientX - canvasRect.left;
        var pointerY = evt.clientY - canvasRect.top;
        return { x: pointerX, y: pointerY };
    };
    return PickTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/PopupTool.ts":
/*!********************************!*\
  !*** ./src/tools/PopupTool.ts ***!
  \********************************/
/*! exports provided: PopupTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupTool", function() { return PopupTool; });
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PopupTool = /** @class */ (function (_super) {
    __extends(PopupTool, _super);
    function PopupTool(parent, inspector) {
        return _super.call(this, 'fas', 'fa-external-link-alt', parent, inspector, 'Open the inspector in a popup') || this;
    }
    // Action : refresh the whole panel
    PopupTool.prototype.action = function () {
        this._inspector.openPopup();
    };
    return PopupTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/RefreshTool.ts":
/*!**********************************!*\
  !*** ./src/tools/RefreshTool.ts ***!
  \**********************************/
/*! exports provided: RefreshTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTool", function() { return RefreshTool; });
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RefreshTool = /** @class */ (function (_super) {
    __extends(RefreshTool, _super);
    function RefreshTool(parent, inspector) {
        return _super.call(this, 'fa', 'fa-sync', parent, inspector, 'Refresh the current tab') || this;
    }
    // Action : refresh the whole panel
    RefreshTool.prototype.action = function () {
        this._inspector.refresh();
    };
    return RefreshTool;
}(_AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]));



/***/ }),

/***/ "./src/tools/Toolbar.ts":
/*!******************************!*\
  !*** ./src/tools/Toolbar.ts ***!
  \******************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var _gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gui/BasicElement */ "./src/gui/BasicElement.ts");
/* harmony import */ var _RefreshTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefreshTool */ "./src/tools/RefreshTool.ts");
/* harmony import */ var _LabelTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabelTool */ "./src/tools/LabelTool.ts");
/* harmony import */ var _PickTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PickTool */ "./src/tools/PickTool.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
/* harmony import */ var _PopupTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PopupTool */ "./src/tools/PopupTool.ts");
/* harmony import */ var _FullscreenTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FullscreenTool */ "./src/tools/FullscreenTool.ts");
/* harmony import */ var _PauseScheduleTool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PauseScheduleTool */ "./src/tools/PauseScheduleTool.ts");
/* harmony import */ var _DisposeTool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DisposeTool */ "./src/tools/DisposeTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(inspector) {
        var _this = _super.call(this) || this;
        _this._tools = [];
        _this._inspector = inspector;
        _this._build();
        _this._addTools();
        return _this;
    }
    // A toolbar cannot be updated
    Toolbar.prototype.update = function () { };
    Toolbar.prototype._build = function () {
        this._div.className = 'toolbar';
    };
    Toolbar.prototype._addTools = function () {
        // Refresh
        this._tools.push(new _RefreshTool__WEBPACK_IMPORTED_MODULE_1__["RefreshTool"](this._div, this._inspector));
        // Display labels
        this._tools.push(new _LabelTool__WEBPACK_IMPORTED_MODULE_2__["LabelTool"](this._div, this._inspector));
        // Pick object
        this._tools.push(new _PickTool__WEBPACK_IMPORTED_MODULE_3__["PickTool"](this._div, this._inspector));
        // Add the popup mode only if the inspector is not in popup mode and if the brower is not edge
        // Edge is
        if (!this._inspector.popupMode && !_helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].IsBrowserEdge()) {
            this._tools.push(new _PopupTool__WEBPACK_IMPORTED_MODULE_5__["PopupTool"](this._div, this._inspector));
        }
        // FullScreen
        this._tools.push(new _FullscreenTool__WEBPACK_IMPORTED_MODULE_6__["FullscreenTool"](this._div, this._inspector));
        // Pause schedule
        this._tools.push(new _PauseScheduleTool__WEBPACK_IMPORTED_MODULE_7__["PauseScheduleTool"](this._div, this._inspector));
        // Pause schedule
        this._tools.push(new _DisposeTool__WEBPACK_IMPORTED_MODULE_8__["DisposeTool"](this._div, this._inspector));
    };
    /**
     * Returns the total width in pixel of the tabbar,
     * that corresponds to the sum of the width of each tab + toolbar width
    */
    Toolbar.prototype.getPixelWidth = function () {
        var sum = 0;
        for (var _i = 0, _a = this._tools; _i < _a.length; _i++) {
            var tool = _a[_i];
            sum += tool.getPixelWidth();
        }
        return sum;
    };
    return Toolbar;
}(_gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]));



/***/ }),

/***/ "./src/tools/index.ts":
/*!****************************!*\
  !*** ./src/tools/index.ts ***!
  \****************************/
/*! exports provided: AbstractTool, DisposeTool, FullscreenTool, LabelTool, PauseScheduleTool, PickTool, PopupTool, RefreshTool, Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTool */ "./src/tools/AbstractTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTool", function() { return _AbstractTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTool"]; });

/* harmony import */ var _DisposeTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisposeTool */ "./src/tools/DisposeTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisposeTool", function() { return _DisposeTool__WEBPACK_IMPORTED_MODULE_1__["DisposeTool"]; });

/* harmony import */ var _FullscreenTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullscreenTool */ "./src/tools/FullscreenTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullscreenTool", function() { return _FullscreenTool__WEBPACK_IMPORTED_MODULE_2__["FullscreenTool"]; });

/* harmony import */ var _LabelTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LabelTool */ "./src/tools/LabelTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelTool", function() { return _LabelTool__WEBPACK_IMPORTED_MODULE_3__["LabelTool"]; });

/* harmony import */ var _PauseScheduleTool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PauseScheduleTool */ "./src/tools/PauseScheduleTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseScheduleTool", function() { return _PauseScheduleTool__WEBPACK_IMPORTED_MODULE_4__["PauseScheduleTool"]; });

/* harmony import */ var _PickTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PickTool */ "./src/tools/PickTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickTool", function() { return _PickTool__WEBPACK_IMPORTED_MODULE_5__["PickTool"]; });

/* harmony import */ var _PopupTool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PopupTool */ "./src/tools/PopupTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupTool", function() { return _PopupTool__WEBPACK_IMPORTED_MODULE_6__["PopupTool"]; });

/* harmony import */ var _RefreshTool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RefreshTool */ "./src/tools/RefreshTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshTool", function() { return _RefreshTool__WEBPACK_IMPORTED_MODULE_7__["RefreshTool"]; });

/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toolbar */ "./src/tools/Toolbar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_8__["Toolbar"]; });












/***/ }),

/***/ "./src/tree/TreeItem.ts":
/*!******************************!*\
  !*** ./src/tree/TreeItem.ts ***!
  \******************************/
/*! exports provided: TreeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return TreeItem; });
/* harmony import */ var _gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gui/BasicElement */ "./src/gui/BasicElement.ts");
/* harmony import */ var _adapters_MeshAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapters/MeshAdapter */ "./src/adapters/MeshAdapter.ts");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
/* harmony import */ var _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Helpers */ "./src/helpers/Helpers.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TreeItem = /** @class */ (function (_super) {
    __extends(TreeItem, _super);
    function TreeItem(tab, obj) {
        var _this = _super.call(this) || this;
        _this.children = [];
        _this._tab = tab;
        _this._adapter = obj;
        _this._tools = _this._adapter.getTools();
        _this._build();
        return _this;
    }
    Object.defineProperty(TreeItem.prototype, "id", {
        /** Returns the item ID == its adapter ID */
        get: function () {
            return this._adapter.id();
        },
        enumerable: true,
        configurable: true
    });
    /** Add the given item as a child of this one */
    TreeItem.prototype.add = function (child) {
        this.children.push(child);
        this.update();
    };
    Object.defineProperty(TreeItem.prototype, "adapter", {
        /**
         * Returns the original adapter
         */
        get: function () {
            return this._adapter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Function used to compare this item to another tree item.
     * Returns the alphabetical sort of the adapter ID
     */
    TreeItem.prototype.compareTo = function (item) {
        var str1 = this.id;
        var str2 = item.id;
        return str1.localeCompare(str2, [], { numeric: true });
    };
    /** Returns true if the given obj correspond to the adapter linked to this tree item */
    TreeItem.prototype.correspondsTo = function (obj) {
        return this._adapter.correspondsTo(obj);
    };
    /** hide all children of this item */
    TreeItem.prototype.fold = function () {
        // Do nothing id no children
        if (this.children.length > 0) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.toHtml().style.display = 'none';
            }
            this._div.classList.add('folded');
            this._div.classList.remove('unfolded');
        }
    };
    /** Show all children of this item */
    TreeItem.prototype.unfold = function () {
        // Do nothing id no children
        if (this.children.length > 0) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.toHtml().style.display = 'block';
            }
            this._div.classList.add('unfolded');
            this._div.classList.remove('folded');
        }
    };
    /** Build the HTML of this item */
    TreeItem.prototype._build = function () {
        /**
         *  Hide the debug objects :
         * - Axis : xline, yline, zline
         * */
        var adapterId = this._adapter.id();
        if (adapterId == "xline"
            || adapterId == "yline"
            || adapterId == "zline") {
            this._div.className = "line_invisible";
        }
        else {
            this._div.className = 'line';
        }
        // special class for transform node ONLY
        if (this.adapter instanceof _adapters_MeshAdapter__WEBPACK_IMPORTED_MODULE_1__["MeshAdapter"]) {
            var obj = this.adapter.object;
            if (obj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_2__["TransformNode"] && !(obj instanceof babylonjs__WEBPACK_IMPORTED_MODULE_2__["AbstractMesh"])) {
                this._div.className += ' transformNode';
            }
        }
        for (var _i = 0, _a = this._tools; _i < _a.length; _i++) {
            var tool = _a[_i];
            this._div.appendChild(tool.toHtml());
        }
        // Id
        var text = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createElement('span');
        text.textContent = this._adapter.id();
        this._div.appendChild(text);
        // Type
        var type = _Inspector__WEBPACK_IMPORTED_MODULE_3__["Inspector"].DOCUMENT.createElement('span');
        type.className = 'property-type';
        if (this._adapter.type() !== 'type_not_defined') {
            type.textContent = ' - ' + this._adapter.type();
        }
        this._div.appendChild(type);
        this._lineContent = _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CreateDiv('line-content', this._div);
        this._addEvent();
    };
    /**
     * Returns one HTML element (.details) containing all  details of this primitive
     */
    TreeItem.prototype.getDetails = function () {
        return this._adapter.getProperties();
    };
    TreeItem.prototype.update = function () {
        // Clean division holding all children
        _helpers_Helpers__WEBPACK_IMPORTED_MODULE_4__["Helpers"].CleanDiv(this._lineContent);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var elem = child.toHtml();
            this._lineContent.appendChild(elem);
        }
        if (this.children.length > 0) {
            // Check if folded or not
            if (!this._div.classList.contains('folded') && !this._div.classList.contains('unfolded')) {
                this._div.classList.add('folded');
            }
        }
        this.fold();
    };
    /**
     * Add an event listener on the item :
     * - one click display details
     */
    TreeItem.prototype._addEvent = function () {
        var _this = this;
        this._div.addEventListener('click', function (e) {
            _this._tab.select(_this);
            // Fold/unfold the tree
            if (_this._isFolded()) {
                _this.unfold();
            }
            else {
                _this.fold();
            }
            e.stopPropagation();
        });
    };
    /** Returns true if the node is folded, false otherwise */
    TreeItem.prototype._isFolded = function () {
        return !this._div.classList.contains('unfolded');
    };
    /** Set this item as active (background lighter) in the tree panel */
    TreeItem.prototype.active = function (b) {
        this._div.classList.remove('active');
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active(false);
        }
        if (b) {
            this._div.classList.add('active');
        }
    };
    TreeItem.prototype.getDiv = function () {
        return this._div;
    };
    return TreeItem;
}(_gui_BasicElement__WEBPACK_IMPORTED_MODULE_0__["BasicElement"]));



/***/ }),

/***/ "./src/tree/index.ts":
/*!***************************!*\
  !*** ./src/tree/index.ts ***!
  \***************************/
/*! exports provided: TreeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeItem */ "./src/tree/TreeItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return _TreeItem__WEBPACK_IMPORTED_MODULE_0__["TreeItem"]; });




/***/ }),

/***/ "./src/treetools/AbstractTreeTool.ts":
/*!*******************************************!*\
  !*** ./src/treetools/AbstractTreeTool.ts ***!
  \*******************************************/
/*! exports provided: AbstractTreeTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTreeTool", function() { return AbstractTreeTool; });
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");

var AbstractTreeTool = /** @class */ (function () {
    function AbstractTreeTool() {
        /** Is the tool enabled ? */
        this._on = false;
        this._elem = _Inspector__WEBPACK_IMPORTED_MODULE_0__["Inspector"].DOCUMENT.createElement('i');
        this._elem.className = 'treeTool fa';
        this._addEvents();
    }
    AbstractTreeTool.prototype.toHtml = function () {
        return this._elem;
    };
    AbstractTreeTool.prototype._addEvents = function () {
        var _this = this;
        this._elem.addEventListener('click', function (e) {
            _this.action();
            e.stopPropagation();
        });
    };
    /**
     * Action launched when clicked on this element
     * Should be overrided
     */
    AbstractTreeTool.prototype.action = function () {
        this._on = !this._on;
    };
    return AbstractTreeTool;
}());



/***/ }),

/***/ "./src/treetools/BoundingBox.ts":
/*!**************************************!*\
  !*** ./src/treetools/BoundingBox.ts ***!
  \**************************************/
/*! exports provided: BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Checkbox to display/hide the primitive
 */
var BoundingBox = /** @class */ (function (_super) {
    __extends(BoundingBox, _super);
    function BoundingBox(obj) {
        var _this = _super.call(this) || this;
        _this._obj = obj;
        _this._elem.classList.add('fa-cube');
        _this._on = _this._obj.isBoxVisible();
        _this._check();
        return _this;
    }
    // For a checkbox, set visible/invisible the corresponding prim
    BoundingBox.prototype.action = function () {
        _super.prototype.action.call(this);
        // update object and gui according to the new status
        this._check();
    };
    BoundingBox.prototype._check = function () {
        if (this._on) {
            // set icon eye
            this._elem.classList.add('active');
        }
        else {
            // set icon eye-slash
            this._elem.classList.remove('active');
        }
        this._obj.setBoxVisible(this._on);
    };
    return BoundingBox;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/CameraPOV.ts":
/*!************************************!*\
  !*** ./src/treetools/CameraPOV.ts ***!
  \************************************/
/*! exports provided: CameraPOV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPOV", function() { return CameraPOV; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inspector */ "./src/Inspector.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *
 */
var CameraPOV = /** @class */ (function (_super) {
    __extends(CameraPOV, _super);
    function CameraPOV(camera) {
        var _this = _super.call(this) || this;
        _this.cameraPOV = camera;
        // Setting the id of the line with the name of the camera
        _this._elem.id = _this.cameraPOV.id();
        // Put the right icon
        if (_this._elem.id == _this.cameraPOV.getCurrentActiveCamera()) {
            _this._elem.classList.add('fa-check-circle');
        }
        else {
            _this._elem.classList.add('fa-circle');
        }
        return _this;
    }
    CameraPOV.prototype.action = function () {
        _super.prototype.action.call(this);
        this._gotoPOV();
    };
    CameraPOV.prototype._gotoPOV = function () {
        // Uncheck all the radio buttons
        var actives = _Inspector__WEBPACK_IMPORTED_MODULE_1__["Inspector"].DOCUMENT.querySelectorAll(".fa-check-circle");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove('fa-check-circle');
            actives[i].classList.add('fa-circle');
        }
        // setting the point off view to the right camera
        this.cameraPOV.setPOV();
        // Check the right radio button
        if (this._elem.id == this.cameraPOV.getCurrentActiveCamera()) {
            this._elem.classList.remove('fa-circle');
            this._elem.classList.add('fa-check-circle');
        }
    };
    return CameraPOV;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/Checkbox.ts":
/*!***********************************!*\
  !*** ./src/treetools/Checkbox.ts ***!
  \***********************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Checkbox to display/hide the primitive
 */
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(obj) {
        var _this = _super.call(this) || this;
        _this._obj = obj;
        _this._elem.classList.add('fa-eye');
        _this._on = _this._obj.isVisible();
        _this._check(true);
        return _this;
    }
    // For a checkbox, set visible/invisible the corresponding prim
    Checkbox.prototype.action = function () {
        _super.prototype.action.call(this);
        // update object and gui according to the new status
        this._check();
    };
    Checkbox.prototype._check = function (dontEnable) {
        if (this._on) {
            // set icon eye
            this._elem.classList.add('fa-eye');
            this._elem.classList.add('active');
            this._elem.classList.remove('fa-eye-slash');
        }
        else {
            // set icon eye-slash
            this._elem.classList.remove('fa-eye');
            this._elem.classList.remove('active');
            this._elem.classList.add('fa-eye-slash');
        }
        if (!dontEnable) {
            this._obj.setVisible(this._on);
        }
    };
    return Checkbox;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/DebugArea.ts":
/*!************************************!*\
  !*** ./src/treetools/DebugArea.ts ***!
  \************************************/
/*! exports provided: DebugArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugArea", function() { return DebugArea; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DebugArea = /** @class */ (function (_super) {
    __extends(DebugArea, _super);
    function DebugArea(obj) {
        var _this = _super.call(this) || this;
        _this._obj = obj;
        _this._elem.classList.add('fa-wrench');
        return _this;
    }
    DebugArea.prototype.action = function () {
        _super.prototype.action.call(this);
        if (this._on) {
            // set icon activated
            this._elem.classList.add('active');
        }
        else {
            // set icon deactivated
            this._elem.classList.remove('active');
        }
        this._obj.debug(this._on);
    };
    return DebugArea;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/Info.ts":
/*!*******************************!*\
  !*** ./src/treetools/Info.ts ***!
  \*******************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
/* harmony import */ var _gui_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/Tooltip */ "./src/gui/Tooltip.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Checkbox to display/hide the primitive
 */
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info(obj) {
        var _this = _super.call(this) || this;
        _this._obj = obj;
        _this._elem.classList.add('fa-info-circle');
        new _gui_Tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"](_this._elem, _this._obj.getInfo(), _this._elem);
        return _this;
    }
    // Nothing to do on click
    Info.prototype.action = function () {
        _super.prototype.action.call(this);
    };
    return Info;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/SoundInteractions.ts":
/*!********************************************!*\
  !*** ./src/treetools/SoundInteractions.ts ***!
  \********************************************/
/*! exports provided: SoundInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundInteractions", function() { return SoundInteractions; });
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *
 */
var SoundInteractions = /** @class */ (function (_super) {
    __extends(SoundInteractions, _super);
    function SoundInteractions(playSound) {
        var _this = _super.call(this) || this;
        _this.playSound = playSound;
        _this._elem.classList.add('fa-play');
        return _this;
    }
    SoundInteractions.prototype.action = function () {
        _super.prototype.action.call(this);
        this._playSound();
    };
    SoundInteractions.prototype._playSound = function () {
        var _this = this;
        if (this._elem.classList.contains('fa-play')) {
            this._elem.classList.remove('fa-play');
            this._elem.classList.add('fa-pause');
        }
        else {
            this._elem.classList.remove('fa-pause');
            this._elem.classList.add('fa-play');
        }
        this.playSound.setPlaying(function () {
            _this._elem.classList.remove('fa-pause');
            _this._elem.classList.add('fa-play');
        });
    };
    return SoundInteractions;
}(_AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]));



/***/ }),

/***/ "./src/treetools/index.ts":
/*!********************************!*\
  !*** ./src/treetools/index.ts ***!
  \********************************/
/*! exports provided: AbstractTreeTool, BoundingBox, CameraPOV, Checkbox, DebugArea, Info, SoundInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTreeTool */ "./src/treetools/AbstractTreeTool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractTreeTool", function() { return _AbstractTreeTool__WEBPACK_IMPORTED_MODULE_0__["AbstractTreeTool"]; });

/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./src/treetools/BoundingBox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"]; });

/* harmony import */ var _CameraPOV__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CameraPOV */ "./src/treetools/CameraPOV.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPOV", function() { return _CameraPOV__WEBPACK_IMPORTED_MODULE_2__["CameraPOV"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./src/treetools/Checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]; });

/* harmony import */ var _DebugArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DebugArea */ "./src/treetools/DebugArea.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DebugArea", function() { return _DebugArea__WEBPACK_IMPORTED_MODULE_4__["DebugArea"]; });

/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Info */ "./src/treetools/Info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _Info__WEBPACK_IMPORTED_MODULE_5__["Info"]; });

/* harmony import */ var _SoundInteractions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SoundInteractions */ "./src/treetools/SoundInteractions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundInteractions", function() { return _SoundInteractions__WEBPACK_IMPORTED_MODULE_6__["SoundInteractions"]; });










/***/ }),

/***/ "babylonjs":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs__;

/***/ }),

/***/ "babylonjs-gui":
/*!************************************************************************************************************************!*\
  !*** external {"root":["BABYLON","GUI"],"commonjs":"babylonjs-gui","commonjs2":"babylonjs-gui","amd":"babylonjs-gui"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_gui__;

/***/ }),

/***/ "babylonjs-loaders":
/*!****************************************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs-loaders","commonjs2":"babylonjs-loaders","amd":"babylonjs-loaders"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_loaders__;

/***/ }),

/***/ "babylonjs-serializers":
/*!****************************************************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs-serializers","commonjs2":"babylonjs-serializers","amd":"babylonjs-serializers"} ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_serializers__;

/***/ })

/******/ });
});
//# sourceMappingURL=babylon.inspector.bundle.js.map