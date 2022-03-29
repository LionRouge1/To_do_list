/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./submit.png */ "./src/submit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #f6f6f6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\nmain {\n  /* background-color: #f6f6f6; */\n  text-align: center;\n  min-height: calc(100vh - 100px);\n  padding-top: 3%;\n}\n\nsection {\n  background-color: white;\n  width: 50%;\n  margin: 35px auto;\n  box-shadow: 0 0 5px #333;\n  border-radius: 0 0 10px 10px;\n}\n\nul > li {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n  height: 40px;\n  border-bottom: 2px solid var(--bg-color);\n  position: relative;\n}\n\nul div,\nul label {\n  width: 40px;\n  display: flex;\n  justify-content: center;\n}\n\nul div > i,\nul label > i {\n  color: #333;\n  opacity: 0.5;\n  font-size: 14px;\n}\n\n.item_form > li form {\n  width: 100%;\n  justify-content: space-between;\n  display: flex;\n}\n\nfooter > p {\n  font-weight: bold;\n  font-size: 23px;\n  color: #333;\n}\n\n.item_form > li p {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-left: 15px;\n  color: #545862;\n}\n\n.item_form div > input {\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: white;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n\n.item_form input[type=\"text\"] {\n  width: calc(100% - 40px);\n  height: 30px;\n  padding: 0 15px;\n  padding-bottom: 8px;\n  border: none;\n  font-style: italic;\n  outline: none;\n  font-size: 18px;\n}\n\n.items input[type=\"text\"] {\n  width: calc(100% - 80px);\n  height: 30px;\n  outline: none;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: default;\n  border: none;\n  background-color: transparent;\n}\n\nli[index] {\n  margin: 0;\n  height: 50px;\n  transition: 0.5s background;\n}\n\n.task {\n  background-color: white;\n}\n\n.over {\n  background-color: #c8cace;\n  opacity: 0.2;\n}\n\n.dragStart {\n  background-color: rgb(253, 251, 221);\n}\n\n.checkbox > i {\n  color: white;\n  font-size: 12px;\n  border: 2px solid rgba(51, 51, 51, 0.5);\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.ellips {\n  cursor: move;\n}\n\n.trash {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  visibility: hidden;\n  transition: 0.2s visibility;\n}\n\nul div:hover i,\nul label:hover i {\n  opacity: 1;\n}\n\n.contain_footer {\n  width: 100%;\n  height: 50px;\n  background-color: var(--bg-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 8px 8px;\n}\n\n#clear {\n  color: rgba(51, 51, 51, 0.5);\n  cursor: pointer;\n}\n\n#clear:hover {\n  color: rgba(51, 51, 51);\n  text-decoration: underline;\n}\n\nfooter {\n  background: linear-gradient(var(--bg-color), #545862);\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter a {\n  color: blue;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,cAAc;AAChB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,iBAAiB;EACjB,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,yDAAmC;EACnC,4BAA4B;EAC5B,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uCAAuC;EACvC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,qDAAqD;EACrD,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB","sourcesContent":[":root {\n  --bg-color: #f6f6f6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\nmain {\n  /* background-color: #f6f6f6; */\n  text-align: center;\n  min-height: calc(100vh - 100px);\n  padding-top: 3%;\n}\n\nsection {\n  background-color: white;\n  width: 50%;\n  margin: 35px auto;\n  box-shadow: 0 0 5px #333;\n  border-radius: 0 0 10px 10px;\n}\n\nul > li {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n  height: 40px;\n  border-bottom: 2px solid var(--bg-color);\n  position: relative;\n}\n\nul div,\nul label {\n  width: 40px;\n  display: flex;\n  justify-content: center;\n}\n\nul div > i,\nul label > i {\n  color: #333;\n  opacity: 0.5;\n  font-size: 14px;\n}\n\n.item_form > li form {\n  width: 100%;\n  justify-content: space-between;\n  display: flex;\n}\n\nfooter > p {\n  font-weight: bold;\n  font-size: 23px;\n  color: #333;\n}\n\n.item_form > li p {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-left: 15px;\n  color: #545862;\n}\n\n.item_form div > input {\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: white;\n  background-image: url(./submit.png);\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n\n.item_form input[type=\"text\"] {\n  width: calc(100% - 40px);\n  height: 30px;\n  padding: 0 15px;\n  padding-bottom: 8px;\n  border: none;\n  font-style: italic;\n  outline: none;\n  font-size: 18px;\n}\n\n.items input[type=\"text\"] {\n  width: calc(100% - 80px);\n  height: 30px;\n  outline: none;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: default;\n  border: none;\n  background-color: transparent;\n}\n\nli[index] {\n  margin: 0;\n  height: 50px;\n  transition: 0.5s background;\n}\n\n.task {\n  background-color: white;\n}\n\n.over {\n  background-color: #c8cace;\n  opacity: 0.2;\n}\n\n.dragStart {\n  background-color: rgb(253, 251, 221);\n}\n\n.checkbox > i {\n  color: white;\n  font-size: 12px;\n  border: 2px solid rgba(51, 51, 51, 0.5);\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.ellips {\n  cursor: move;\n}\n\n.trash {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  visibility: hidden;\n  transition: 0.2s visibility;\n}\n\nul div:hover i,\nul label:hover i {\n  opacity: 1;\n}\n\n.contain_footer {\n  width: 100%;\n  height: 50px;\n  background-color: var(--bg-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 8px 8px;\n}\n\n#clear {\n  color: rgba(51, 51, 51, 0.5);\n  cursor: pointer;\n}\n\n#clear:hover {\n  color: rgba(51, 51, 51);\n  text-decoration: underline;\n}\n\nfooter {\n  background: linear-gradient(var(--bg-color), #545862);\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter a {\n  color: blue;\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/TDlist.js":
/*!***********************!*\
  !*** ./src/TDlist.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TDlist)
/* harmony export */ });
class TDlist {
  constructor(completed = false, description = '') {
    this.completed = completed;
    this.description = description;
    this.list = localStorage.getItem('list') !== null
      ? JSON.parse(localStorage.getItem('list'))
      : '';
  }

  saveList(TSave = this.list) {
    const storeList = JSON.stringify(TSave);
    localStorage.setItem('list', storeList);
  }

  static displayList(TList) {
    const iterate = ({ index, Tcompleted, Tdescription }) => {
      const lItem = `
    <li index="${index}" class="task">
     <div class="checkbox" title="Check!" completed="${Tcompleted}">
     ${(Tcompleted === false) ? '<i style="width: 14.15px;" class="fas fa-ellipsis-v"></i>' : '<i style="color:blue; border: none" class="fas fa-check"></i>'}
     </div>
     <input type="text" style=" text-decoration: ${(Tcompleted === false) ? '' : 'line-through'};" class="description" id="${index}" value="${Tdescription}">
     <div class="ellips">
      <i class="fas fa-ellipsis-v"></i>
     </div>
     <label class="trash" for="${index}">
      <i class="fas fa-trash-alt"></i>
     </label>
    </li>`;
      const [ul] = document.getElementsByClassName('items');
      ul.insertAdjacentHTML('beforeend', lItem);
    };
    TList.forEach((element) => {
      iterate(element);
    });
  }

  addTask() {
    if (this.list === '' || this.list.length <= 0) {
      this.list = [
        {
          index: 1,
          Tcompleted: this.completed,
          Tdescription: this.description,
        },
      ];
      this.saveList();
    } else {
      const task = {
        index: this.list.length + 1,
        Tcompleted: this.completed,
        Tdescription: this.description,
      };
      this.list.push(task);
      this.saveList();
    }
  }

  removeTask(taskId) {
    const Remove = this.list.filter(({ index }) => index !== Number(taskId));
    const update = Remove.map((item) => {
      item.index = Remove.indexOf(item) + 1;
      return item;
    });
    this.saveList(update);
    const task = document.getElementById(taskId).parentNode;
    task.remove();
  }

  editTask(who, value) {
    if (typeof (value) === 'string') {
      this.list[who].Tdescription = value;
      this.saveList();
    } else {
      this.list[who].Tcompleted = value;
      this.saveList();
    }
  }
}

/***/ }),

/***/ "./src/drag&drop.js":
/*!**************************!*\
  !*** ./src/drag&drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragdrop)
/* harmony export */ });
/* harmony import */ var _TDlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDlist.js */ "./src/TDlist.js");


function dragdrop() {
  const lis = document.querySelectorAll('.ellips');
  const items = document.querySelectorAll('.items > li');

  let dragStartIndex;

  const dragStart = (e) => {
    dragStartIndex = e.target;
    dragStartIndex.classList.add('dragStart');
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.currentTarget.parentNode.classList.add('over');
  };

  const dragLeave = (e) => {
    e.currentTarget.parentNode.classList.remove('over');
  };

  const dragEnd = (e) => {
    items.forEach((li) => li.classList.remove('dragStart'));
    e.currentTarget.parentNode.classList.remove('over');
  };

  const itemIndex = (place, Itval, int) => {
    Itval.map((it) => {
      const n = +it.getAttribute('index') + int;
      it.setAttribute('index', n);
      it.querySelector('.description').id = n;
      return true;
    });
    dragStartIndex.setAttribute('index', place);
    dragStartIndex.querySelector('.description').id = place;
  };

  const dragDrop = (e) => {
    e.currentTarget.parentNode.classList.remove('over');
    items.forEach((li) => li.classList.remove('dragStart'));
    const dragEndIndex = e.currentTarget.parentNode;
    const ul = document.getElementById('container_items');
    const ItemStartIndex = +dragStartIndex.getAttribute('index');
    const ItemEndIndex = +dragEndIndex.getAttribute('index');

    if (ItemStartIndex < ItemEndIndex) {
      ul.insertBefore(dragStartIndex, dragEndIndex.nextSibling);

      const interval = Object.values(items).filter((element) => {
        const Index = +element.getAttribute('index');

        if (Index > ItemStartIndex && Index <= ItemEndIndex) {
          return true;
        }

        return false;
      });

      itemIndex(ItemEndIndex, interval, -1);
    } else {
      ul.insertBefore(dragStartIndex, dragEndIndex);

      const interval = Object.values(items).filter((element) => {
        const Index = +element.getAttribute('index');

        if (Index < ItemStartIndex && Index >= ItemEndIndex) {
          return true;
        }

        return false;
      });

      itemIndex(ItemEndIndex, interval, 1);
    }

    // New array for the order

    const table = document.querySelectorAll('.items > li');
    const ntable = [];
    table.forEach((ite) => {
      const task = {
        index: +ite.getAttribute('index'),
        Tcompleted: (ite.querySelector('.checkbox').getAttribute('completed') === 'true'),
        Tdescription: ite.querySelector('.description').value,
      };
      ntable.push(task);
    });
    const tdlist = new _TDlist_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    tdlist.saveList(ntable);
  };

  items.forEach((element) => {
    element.draggable = true;
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragend', dragEnd);
  });

  lis.forEach((element) => {
    element.addEventListener('dragover', dragOver);
    element.addEventListener('dragenter', dragEnter);
    element.addEventListener('drop', dragDrop);
    element.addEventListener('dragleave', dragLeave);
  });
}


/***/ }),

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkbox": () => (/* binding */ checkbox),
/* harmony export */   "clearAll": () => (/* binding */ clearAll)
/* harmony export */ });
/* harmony import */ var _TDlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDlist.js */ "./src/TDlist.js");


function checkbox(item) {
  const status = item.getAttribute('completed');
  const task = new _TDlist_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  if (status === 'false') {
    item.innerHTML = '<i style="color:blue; border: none" class="fas fa-check"></i>';
    item.nextElementSibling.style.textDecoration = 'line-through';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, true);
    item.setAttribute('completed', 'true');
  } else {
    item.innerHTML = '<i class="fas fa-stop"></i>';
    item.nextElementSibling.style.textDecoration = '';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, false);
    item.setAttribute('completed', 'false');
  }
}

const clearAll = () => {
  const checkb = document.querySelectorAll('.checkbox');
  const task = new _TDlist_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const RemoveAll = task.list.filter(({ Tcompleted }) => Tcompleted === false);
  const Nwupdate = RemoveAll.map((item) => {
    item.index = RemoveAll.indexOf(item) + 1;
    return item;
  });
  task.saveList(Nwupdate);
  checkb.forEach((element) => {
    if (element.getAttribute('completed') === 'true') {
      element.parentNode.remove();
    }
  });
};


/***/ }),

/***/ "./src/submit.png":
/*!************************!*\
  !*** ./src/submit.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa544f635765db738d2e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/To_do_list/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _TDlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TDlist.js */ "./src/TDlist.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./src/interactive.js");
/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag&drop.js */ "./src/drag&drop.js");





if (localStorage.getItem('list') !== null) {
  const list = JSON.parse(localStorage.getItem('list'));
  _TDlist_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayList(list);
}

const description = document.querySelectorAll('.description');

const getFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  event.target.style.textDecoration = 'none';

  li.style.backgroundColor = '#ffe24370';
  ellips.style.visibility = 'hidden';
  trash.style.visibility = 'visible';
};

const lostFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;
  const checks = event.target.previousElementSibling.getAttribute('completed');

  if (checks === 'false') {
    event.target.style.textDecoration = '';
  } else {
    event.target.style.textDecoration = 'line-through';
  }

  li.style.backgroundColor = '';
  ellips.style.visibility = 'visible';
  trash.style.visibility = 'hidden';
};

description.forEach((element) => {
  element.addEventListener('focus', getFocus);
  element.addEventListener('blur', lostFocus);
});

//  edit task

description.forEach((element) => {
  element.addEventListener('change', (event) => {
    const task = new _TDlist_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    task.editTask(Number(event.target.id) - 1, event.target.value);
  });
});

// add task

const form = document.getElementById('sub_form');
const Nitem = document.getElementById('new-item');
const submit = (event) => {
  if (Nitem.value === '') {
    event.preventDefault();
  } else {
    const task = new _TDlist_js__WEBPACK_IMPORTED_MODULE_1__["default"](false, Nitem.value);
    task.addTask();
  }
};
form.addEventListener('submit', submit);

// Remove task

const trash = document.querySelectorAll('.trash');
trash.forEach((element) => {
  element.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    const index = this.parentNode.getAttribute('index');
    const task = new _TDlist_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    task.removeTask(Number(index));
  });
});

// checkbox

const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((element) => {
  element.addEventListener('click', function () {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.checkbox)(this);
  });
});

// Clear all task

const All = document.getElementById('clear');

All.addEventListener('click', _interactive_js__WEBPACK_IMPORTED_MODULE_2__.clearAll);

// drag/drop and sorting function

(0,_drag_drop_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Reload page
const rld = document.querySelector('.reload-icon');
rld.addEventListener('click', () => document.location.reload());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0EsRUFBRSw4REFBa0I7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQU07QUFDM0I7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFCQUFxQixrREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFNO0FBQzNCO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQVE7QUFDWixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSw4QkFBOEIscURBQVE7O0FBRXRDOztBQUVBLHlEQUFROztBQUVSO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9URGxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9kcmFnJmRyb3AuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zdWJtaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAzNXB4IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmctY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG51bCBkaXYsXFxudWwgbGFiZWwge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnVsIGRpdiA+IGksXFxudWwgbGFiZWwgPiBpIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaXRlbV9mb3JtID4gbGkgZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLml0ZW1fZm9ybSA+IGxpIHAge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBjb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuLml0ZW1fZm9ybSBkaXYgPiBpbnB1dCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtX2Zvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaXRlbXMgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmxpW2luZGV4XSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGJhY2tncm91bmQ7XFxufVxcblxcbi50YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYWNlO1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uZHJhZ1N0YXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MSwgMjIxKTtcXG59XFxuXFxuLmNoZWNrYm94ID4gaSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbGxpcHMge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4udHJhc2gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiAwLjJzIHZpc2liaWxpdHk7XFxufVxcblxcbnVsIGRpdjpob3ZlciBpLFxcbnVsIGxhYmVsOmhvdmVyIGkge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbnRhaW5fZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4jY2xlYXIge1xcbiAgY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NsZWFyOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmctY29sb3IpLCAjNTQ1ODYyKTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5REFBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNmNmY2ZjY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgY29sb3I6ICM1NDU4NjI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgcGFkZGluZy10b3A6IDMlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMzVweCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG59XFxuXFxudWwgPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwgZGl2LFxcbnVsIGxhYmVsIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCBkaXYgPiBpLFxcbnVsIGxhYmVsID4gaSB7XFxuICBjb2xvcjogIzMzMztcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLml0ZW1fZm9ybSA+IGxpIGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5mb290ZXIgPiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5pdGVtX2Zvcm0gPiBsaSBwIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICM1NDU4NjI7XFxufVxcblxcbi5pdGVtX2Zvcm0gZGl2ID4gaW5wdXQge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N1Ym1pdC5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLml0ZW1fZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pdGVtcyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxubGlbaW5kZXhdIHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IDAuNXMgYmFja2dyb3VuZDtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGNhY2U7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbi5kcmFnU3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUxLCAyMjEpO1xcbn1cXG5cXG4uY2hlY2tib3ggPiBpIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVsbGlwcyB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi50cmFzaCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuMnMgdmlzaWJpbGl0eTtcXG59XFxuXFxudWwgZGl2OmhvdmVyIGksXFxudWwgbGFiZWw6aG92ZXIgaSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY29udGFpbl9mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcblxcbiNjbGVhciB7XFxuICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xlYXI6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoNTEsIDUxLCA1MSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvciksICM1NDU4NjIpO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVERsaXN0IHtcbiAgY29uc3RydWN0b3IoY29tcGxldGVkID0gZmFsc2UsIGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5saXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSAhPT0gbnVsbFxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpXG4gICAgICA6ICcnO1xuICB9XG5cbiAgc2F2ZUxpc3QoVFNhdmUgPSB0aGlzLmxpc3QpIHtcbiAgICBjb25zdCBzdG9yZUxpc3QgPSBKU09OLnN0cmluZ2lmeShUU2F2ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBzdG9yZUxpc3QpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlMaXN0KFRMaXN0KSB7XG4gICAgY29uc3QgaXRlcmF0ZSA9ICh7IGluZGV4LCBUY29tcGxldGVkLCBUZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgICAgY29uc3QgbEl0ZW0gPSBgXG4gICAgPGxpIGluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cInRhc2tcIj5cbiAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCIgdGl0bGU9XCJDaGVjayFcIiBjb21wbGV0ZWQ9XCIke1Rjb21wbGV0ZWR9XCI+XG4gICAgICR7KFRjb21wbGV0ZWQgPT09IGZhbHNlKSA/ICc8aSBzdHlsZT1cIndpZHRoOiAxNC4xNXB4O1wiIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+JyA6ICc8aSBzdHlsZT1cImNvbG9yOmJsdWU7IGJvcmRlcjogbm9uZVwiIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPid9XG4gICAgIDwvZGl2PlxuICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT1cIiB0ZXh0LWRlY29yYXRpb246ICR7KFRjb21wbGV0ZWQgPT09IGZhbHNlKSA/ICcnIDogJ2xpbmUtdGhyb3VnaCd9O1wiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBpZD1cIiR7aW5kZXh9XCIgdmFsdWU9XCIke1RkZXNjcmlwdGlvbn1cIj5cbiAgICAgPGRpdiBjbGFzcz1cImVsbGlwc1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdlwiPjwvaT5cbiAgICAgPC9kaXY+XG4gICAgIDxsYWJlbCBjbGFzcz1cInRyYXNoXCIgZm9yPVwiJHtpbmRleH1cIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgPC9sYWJlbD5cbiAgICA8L2xpPmA7XG4gICAgICBjb25zdCBbdWxdID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbXMnKTtcbiAgICAgIHVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbEl0ZW0pO1xuICAgIH07XG4gICAgVExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaXRlcmF0ZShlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRhc2soKSB7XG4gICAgaWYgKHRoaXMubGlzdCA9PT0gJycgfHwgdGhpcy5saXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLmxpc3QgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgICBUY29tcGxldGVkOiB0aGlzLmNvbXBsZXRlZCxcbiAgICAgICAgICBUZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgICAgdGhpcy5zYXZlTGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBpbmRleDogdGhpcy5saXN0Lmxlbmd0aCArIDEsXG4gICAgICAgIFRjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkLFxuICAgICAgICBUZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB9O1xuICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgICB0aGlzLnNhdmVMaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBSZW1vdmUgPSB0aGlzLmxpc3QuZmlsdGVyKCh7IGluZGV4IH0pID0+IGluZGV4ICE9PSBOdW1iZXIodGFza0lkKSk7XG4gICAgY29uc3QgdXBkYXRlID0gUmVtb3ZlLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5pbmRleCA9IFJlbW92ZS5pbmRleE9mKGl0ZW0pICsgMTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICAgIHRoaXMuc2F2ZUxpc3QodXBkYXRlKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza0lkKS5wYXJlbnROb2RlO1xuICAgIHRhc2sucmVtb3ZlKCk7XG4gIH1cblxuICBlZGl0VGFzayh3aG8sIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5saXN0W3dob10uVGRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICB0aGlzLnNhdmVMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdFt3aG9dLlRjb21wbGV0ZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2F2ZUxpc3QoKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVERsaXN0IGZyb20gJy4vVERsaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2Ryb3AoKSB7XG4gIGNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGxpcHMnKTtcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbXMgPiBsaScpO1xuXG4gIGxldCBkcmFnU3RhcnRJbmRleDtcblxuICBjb25zdCBkcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgIGRyYWdTdGFydEluZGV4ID0gZS50YXJnZXQ7XG4gICAgZHJhZ1N0YXJ0SW5kZXguY2xhc3NMaXN0LmFkZCgnZHJhZ1N0YXJ0Jyk7XG4gIH07XG5cbiAgY29uc3QgZHJhZ092ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBkcmFnRW50ZXIgPSAoZSkgPT4ge1xuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgfTtcblxuICBjb25zdCBkcmFnTGVhdmUgPSAoZSkgPT4ge1xuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKGUpID0+IHtcbiAgICBpdGVtcy5mb3JFYWNoKChsaSkgPT4gbGkuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ1N0YXJ0JykpO1xuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgfTtcblxuICBjb25zdCBpdGVtSW5kZXggPSAocGxhY2UsIEl0dmFsLCBpbnQpID0+IHtcbiAgICBJdHZhbC5tYXAoKGl0KSA9PiB7XG4gICAgICBjb25zdCBuID0gK2l0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSArIGludDtcbiAgICAgIGl0LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBuKTtcbiAgICAgIGl0LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlkID0gbjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGRyYWdTdGFydEluZGV4LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBwbGFjZSk7XG4gICAgZHJhZ1N0YXJ0SW5kZXgucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykuaWQgPSBwbGFjZTtcbiAgfTtcblxuICBjb25zdCBkcmFnRHJvcCA9IChlKSA9PiB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIGl0ZW1zLmZvckVhY2goKGxpKSA9PiBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnU3RhcnQnKSk7XG4gICAgY29uc3QgZHJhZ0VuZEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyX2l0ZW1zJyk7XG4gICAgY29uc3QgSXRlbVN0YXJ0SW5kZXggPSArZHJhZ1N0YXJ0SW5kZXguZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgIGNvbnN0IEl0ZW1FbmRJbmRleCA9ICtkcmFnRW5kSW5kZXguZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuXG4gICAgaWYgKEl0ZW1TdGFydEluZGV4IDwgSXRlbUVuZEluZGV4KSB7XG4gICAgICB1bC5pbnNlcnRCZWZvcmUoZHJhZ1N0YXJ0SW5kZXgsIGRyYWdFbmRJbmRleC5uZXh0U2libGluZyk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gT2JqZWN0LnZhbHVlcyhpdGVtcykuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IEluZGV4ID0gK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuXG4gICAgICAgIGlmIChJbmRleCA+IEl0ZW1TdGFydEluZGV4ICYmIEluZGV4IDw9IEl0ZW1FbmRJbmRleCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGl0ZW1JbmRleChJdGVtRW5kSW5kZXgsIGludGVydmFsLCAtMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVsLmluc2VydEJlZm9yZShkcmFnU3RhcnRJbmRleCwgZHJhZ0VuZEluZGV4KTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBPYmplY3QudmFsdWVzKGl0ZW1zKS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgSW5kZXggPSArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG5cbiAgICAgICAgaWYgKEluZGV4IDwgSXRlbVN0YXJ0SW5kZXggJiYgSW5kZXggPj0gSXRlbUVuZEluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaXRlbUluZGV4KEl0ZW1FbmRJbmRleCwgaW50ZXJ2YWwsIDEpO1xuICAgIH1cblxuICAgIC8vIE5ldyBhcnJheSBmb3IgdGhlIG9yZGVyXG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtcyA+IGxpJyk7XG4gICAgY29uc3QgbnRhYmxlID0gW107XG4gICAgdGFibGUuZm9yRWFjaCgoaXRlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBpbmRleDogK2l0ZS5nZXRBdHRyaWJ1dGUoJ2luZGV4JyksXG4gICAgICAgIFRjb21wbGV0ZWQ6IChpdGUucXVlcnlTZWxlY3RvcignLmNoZWNrYm94JykuZ2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnKSA9PT0gJ3RydWUnKSxcbiAgICAgICAgVGRlc2NyaXB0aW9uOiBpdGUucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgICB9O1xuICAgICAgbnRhYmxlLnB1c2godGFzayk7XG4gICAgfSk7XG4gICAgY29uc3QgdGRsaXN0ID0gbmV3IFREbGlzdCgpO1xuICAgIHRkbGlzdC5zYXZlTGlzdChudGFibGUpO1xuICB9O1xuXG4gIGl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICB9KTtcblxuICBsaXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFREbGlzdCBmcm9tICcuL1REbGlzdC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveChpdGVtKSB7XG4gIGNvbnN0IHN0YXR1cyA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnKTtcbiAgY29uc3QgdGFzayA9IG5ldyBURGxpc3QoKTtcbiAgaWYgKHN0YXR1cyA9PT0gJ2ZhbHNlJykge1xuICAgIGl0ZW0uaW5uZXJIVE1MID0gJzxpIHN0eWxlPVwiY29sb3I6Ymx1ZTsgYm9yZGVyOiBub25lXCIgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JztcbiAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGl0ZW0ucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpO1xuICAgIHRhc2suZWRpdFRhc2soaW5kZXggLSAxLCB0cnVlKTtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY29tcGxldGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1zdG9wXCI+PC9pPic7XG4gICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihpdGVtLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpbmRleCcpKTtcbiAgICB0YXNrLmVkaXRUYXNrKGluZGV4IC0gMSwgZmFsc2UpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnLCAnZmFsc2UnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xuICBjb25zdCB0YXNrID0gbmV3IFREbGlzdCgpO1xuICBjb25zdCBSZW1vdmVBbGwgPSB0YXNrLmxpc3QuZmlsdGVyKCh7IFRjb21wbGV0ZWQgfSkgPT4gVGNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICBjb25zdCBOd3VwZGF0ZSA9IFJlbW92ZUFsbC5tYXAoKGl0ZW0pID0+IHtcbiAgICBpdGVtLmluZGV4ID0gUmVtb3ZlQWxsLmluZGV4T2YoaXRlbSkgKyAxO1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcbiAgdGFzay5zYXZlTGlzdChOd3VwZGF0ZSk7XG4gIGNoZWNrYi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1RvX2RvX2xpc3QvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVERsaXN0IGZyb20gJy4vVERsaXN0LmpzJztcbmltcG9ydCB7IGNoZWNrYm94IGFzIGNoZWNrQm94LCBjbGVhckFsbCB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuaW1wb3J0IGRyYWdkcm9wIGZyb20gJy4vZHJhZyZkcm9wLmpzJztcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykgIT09IG51bGwpIHtcbiAgY29uc3QgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSk7XG4gIFREbGlzdC5kaXNwbGF5TGlzdChsaXN0KTtcbn1cblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24nKTtcblxuY29uc3QgZ2V0Rm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbGkgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgZWxsaXBzID0gZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgY29uc3QgdHJhc2ggPSBlbGxpcHMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBldmVudC50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG5cbiAgbGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmUyNDM3MCc7XG4gIGVsbGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHRyYXNoLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59O1xuXG5jb25zdCBsb3N0Rm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbGkgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgZWxsaXBzID0gZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgY29uc3QgdHJhc2ggPSBlbGxpcHMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBjb25zdCBjaGVja3MgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2NvbXBsZXRlZCcpO1xuXG4gIGlmIChjaGVja3MgPT09ICdmYWxzZScpIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgfSBlbHNlIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfVxuXG4gIGxpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICBlbGxpcHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgdHJhc2guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufTtcblxuZGVzY3JpcHRpb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZ2V0Rm9jdXMpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBsb3N0Rm9jdXMpO1xufSk7XG5cbi8vICBlZGl0IHRhc2tcblxuZGVzY3JpcHRpb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVERsaXN0KCk7XG4gICAgdGFzay5lZGl0VGFzayhOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSAtIDEsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH0pO1xufSk7XG5cbi8vIGFkZCB0YXNrXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViX2Zvcm0nKTtcbmNvbnN0IE5pdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG5jb25zdCBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgaWYgKE5pdGVtLnZhbHVlID09PSAnJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBURGxpc3QoZmFsc2UsIE5pdGVtLnZhbHVlKTtcbiAgICB0YXNrLmFkZFRhc2soKTtcbiAgfVxufTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0KTtcblxuLy8gUmVtb3ZlIHRhc2tcblxuY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcbnRyYXNoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFREbGlzdCgpO1xuICAgIHRhc2sucmVtb3ZlVGFzayhOdW1iZXIoaW5kZXgpKTtcbiAgfSk7XG59KTtcblxuLy8gY2hlY2tib3hcblxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcblxuY2hlY2tib3guZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNoZWNrQm94KHRoaXMpO1xuICB9KTtcbn0pO1xuXG4vLyBDbGVhciBhbGwgdGFza1xuXG5jb25zdCBBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcblxuQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJBbGwpO1xuXG4vLyBkcmFnL2Ryb3AgYW5kIHNvcnRpbmcgZnVuY3Rpb25cblxuZHJhZ2Ryb3AoKTtcblxuLy8gUmVsb2FkIHBhZ2VcbmNvbnN0IHJsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWxvYWQtaWNvbicpO1xucmxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9