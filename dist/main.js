/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_Tacos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/Tacos.jpg */ \"./src/assets/images/Tacos.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand&family=Ultra&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_Tacos_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  max-width: 1440px;\\n  width: 100%;\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.content {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.main-header {\\n  display: flex;\\n  width: 100%;\\n  height: 170px;\\n  padding-bottom: -10px;\\n  margin-bottom: 3px;\\n  background: #b6a129;\\n  position: relative;\\n}\\n\\n.title-nav {\\n  width: 394px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.whole-header {\\n  width: 394px;\\n  height: 100px;\\n  position: relative;\\n  padding: 0;\\n  display: flex;\\n  color: #fff;\\n  margin: 0 auto;\\n}\\n\\n.fa-hat-cowboy-side {\\n  position: absolute;\\n  font-size: 40px;\\n  top: 18px;\\n  left: 6px;\\n  transform: rotate(-24deg);\\n  z-index: 2;\\n}\\n\\n.fa-pepper-hot {\\n  position: absolute;\\n  font-size: 30px;\\n  top: 27px;\\n  left: 333px;\\n  color: green;\\n  z-index: 2;\\n}\\n\\n.rest-title {\\n  font-family: 'Ultra', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  position: absolute;\\n  font-size: 50px;\\n  color: #fff;\\n  left: 20px;\\n}\\n\\n.social-icons {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 140px;\\n  position: absolute;\\n  top: 20px;\\n  right: 30px;\\n  font-size: 20px;\\n}\\n\\n.social-icons i {\\n  border-radius: 50%;\\n  background: #fff;\\n  color: #837f6c;\\n}\\n\\n.social-icons i:hover {\\n  opacity: 0.8;\\n}\\n\\n.fa-facebook-f {\\n  font-size: 19px;\\n  padding: 7px 11px;\\n}\\n\\n.fa-instagram {\\n  padding: 7px 9px;\\n}\\n\\n.fa-twitter {\\n  padding: 7px;\\n}\\n\\nnav {\\n  padding: 0;\\n  top: 250px;\\n  display: flex;\\n  justify-content: space-between;\\n  width: 270px;\\n  margin: 0;\\n  margin-top: 20px;\\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.nav-btn {\\n  font-size: 20px;\\n  color: #fff;\\n  border: none;\\n  border-radius: 15px;\\n  padding: 5px 10px;\\n  background: transparent;\\n  transition: transform 0.3s;\\n}\\n\\n.nav-btn.active {\\n  border: 1px #fff solid;\\n  border-style: dashed;\\n}\\n\\n.nav-btn:hover {\\n  transform: translateY(-10%);\\n  opacity: 0.8;\\n}\\n\\n.btn-underline {\\n  border-bottom: 2px solid;\\n}\\n\\n.view {\\n  padding: 0;\\n  width: 100%;\\n  height: 700px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.home {\\n  width: 100%;\\n  height: 700px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n  filter: brightness(80%);\\n  background-position-y: center;\\n  background-size: cover;\\n  border: 2px solid transparent;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.home-text {\\n  font-size: 60px;\\n  font-weight: 600;\\n  color: #fff;\\n  width: 300px;\\n  height: 300px;\\n  padding: 20px 40px;\\n  background: rgba(71, 70, 49, 0.6);\\n}\\n\\n.full-menu {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 65%;\\n  height: 700px;\\n  margin: 0 auto;\\n  padding: 0;\\n  overflow-y: scroll;\\n}\\n\\n.menu-group-title {\\n  width: 50%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.menu-group {\\n  display: grid;\\n  grid-template-columns: 48% 48%;\\n  column-gap: 30px;\\n  justify-items: center;\\n}\\n\\n.menu-item {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 290px;\\n  margin: 0 0 30px auto;\\n  padding: 20px 10px 0 10px;\\n  border: 1px solid #837f6c;\\n  border-style: dashed;\\n  border-radius: 15px;\\n}\\n\\n.menu-title {\\n  width: min-content;\\n  font-size: 22px;\\n}\\n\\n.menu-item img {\\n  width: 300px;\\n  height: 200px;\\n  border-radius: 15px;\\n}\\n\\n.menu-item h3 {\\n  margin-top: -50px;\\n  padding: 5px 10px;\\n  background: #b6a129;\\n  color: #fff;\\n  font-weight: 600;\\n}\\n\\n.menu-item p {\\n  width: 311px;\\n  margin-top: -20px;\\n  font-size: 14px;\\n  text-align: center;\\n  color: #837f6c;\\n  font-weight: 500;\\n}\\n\\n.drinks-group {\\n  justify-items: flex-start;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0 15px;\\n  margin-bottom: 20px;\\n  border: 1px solid #837f6c;\\n  border-style: dashed;\\n  border-radius: 15px;\\n}\\n\\n.contact {\\n  width: 60%;\\n  height: 530px;\\n  margin: 70px auto;\\n  padding-top: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border-radius: 15px;\\n  color: #837f6c;\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n\\n.contact p {\\n  margin-bottom: 0;\\n  font-weight: 500;\\n}\\n\\n.contact iframe {\\n  width: 550px;\\n  height: 350px;\\n  margin-top: 15px;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 110px;\\n  font-size: 25px;\\n  background: #b6a129;\\n  color: #fff;\\n  margin-top: 3.5px;\\n}\\n\\n.footer-sub {\\n  width: 400px;\\n  height: 70px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.footer-text {\\n  width: 190px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 17px;\\n  font-weight: 500;\\n  box-sizing: border-box;\\n}\\n\\n.fa-github-alt {\\n  font-size: 21px;\\n  margin-top: 3px;\\n  color: #fff;\\n}\\n\\n.fa-github-alt:hover {\\n  opacity: 0.8;\\n}\\n\\n.footer-year {\\n  text-align: center;\\n  width: 160px;\\n  margin-top: -10px;\\n  font-size: 15px;\\n}\\n\\n/************* Media queries: mobile/tablet *************/\\n@media (min-width: 768px) and (max-width: 1240px) {\\n  .footer-text {\\n    width: 190px;\\n  }\\n\\n  .footer-year {\\n    width: 160px;\\n  }\\n}\\n\\n@media (min-width: 100px) and (max-width: 550px) {\\n  .social-icons {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 100px) and (max-width: 440px) {\\n  .title-nav,\\n  .whole-header {\\n    width: 375px;\\n  }\\n\\n  .fa-hat-cowboy-side {\\n    font-size: 35px;\\n    top: 16px;\\n    left: 5px;\\n  }\\n\\n  .fa-pepper-hot {\\n    font-size: 27px;\\n    top: 25px;\\n    left: 302px;\\n  }\\n\\n  .rest-title {\\n    font-size: 46px;\\n    color: #fff;\\n    left: 16px;\\n    top: 0;\\n  }\\n}\\n\\n@media (min-width: 100px) and (max-width: 767px) {\\n  .main-header {\\n    width: 100%;\\n    height: 170px;\\n    margin-bottom: 3px;\\n    padding-bottom: 15px;\\n    background: #b6a129;\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n  }\\n\\n  .social-icons {\\n    flex-direction: column;\\n    justify-content: space-between;\\n    width: 50px;\\n    height: 120px;\\n    top: 15px;\\n    right: 5px;\\n    font-size: 17px;\\n  }\\n\\n  .fa-facebook-f {\\n    font-size: 15px;\\n    padding: 7px 11px;\\n  }\\n\\n  .fa-instagram {\\n    padding: 7px 9px;\\n  }\\n\\n  .fa-twitter {\\n    padding: 7px;\\n  }\\n\\n  .home {\\n    width: 100%;\\n    background-position-y: top;\\n    border: none;\\n  }\\n\\n  .home-text {\\n    font-size: 40px;\\n    width: 150px;\\n    height: 200px;\\n    padding: 20px 50px 20px 20px;\\n  }\\n\\n  .full-menu {\\n    width: 100%;\\n  }\\n\\n  .menu-group {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .drinks-group {\\n    align-items: center;\\n  }\\n\\n  .contact {\\n    width: 320px;\\n    height: 600px;\\n  }\\n\\n  .contact p {\\n    text-align: center;\\n  }\\n\\n  .contact iframe {\\n    width: 320px;\\n    height: 300px;\\n  }\\n}\\n\\n@media (min-width: 768px) and (max-width: 1050px) {\\n  .full-menu {\\n    width: 90%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-js/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-js/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page-js/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/Campechana.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Campechana.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf35e29b56a92c71f86e.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Campechana.jpg?");

/***/ }),

/***/ "./src/assets/images/Frijoles a la charra.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Frijoles a la charra.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f55df394215d27bc070b.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Frijoles_a_la_charra.jpg?");

/***/ }),

/***/ "./src/assets/images/Gobernador.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Gobernador.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2605313a655c5636f804.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Gobernador.jpg?");

/***/ }),

/***/ "./src/assets/images/Papa sirlon.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/Papa sirlon.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2863b783ec546bcec98.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Papa_sirlon.jpg?");

/***/ }),

/***/ "./src/assets/images/Papa trompo.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/Papa trompo.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41619548d1d3e4a8abcc.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Papa_trompo.jpg?");

/***/ }),

/***/ "./src/assets/images/Pirata.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/Pirata.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7def237e2244d0061ad.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Pirata.jpg?");

/***/ }),

/***/ "./src/assets/images/Sirlon set.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Sirlon set.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc65a275e93dbf02ef13.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Sirlon_set.jpg?");

/***/ }),

/***/ "./src/assets/images/Tacos.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/Tacos.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43608c15b1942e17ac11.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Tacos.jpg?");

/***/ }),

/***/ "./src/assets/images/Trompo set.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Trompo set.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88b68feb17e833a9fe87.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/Trompo_set.jpg?");

/***/ }),

/***/ "./src/assets/images/chiles rellenos.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/chiles rellenos.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edc34de331f14c514829.jpg\";\n\n//# sourceURL=webpack://restaurant-page-js/./src/assets/images/chiles_rellenos.jpg?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setContact = () => {\n  const contact = document.createElement('div');\n  contact.classList.add('contact');\n\n  const contactNum = document.createElement('p');\n  contactNum.textContent = 'Teléfono: 52+ 818343 3070';\n\n  const contactWhats = document.createElement('p');\n  contactWhats.textContent = 'Whatsapp: 52+ 811400 2838';\n\n  const location = document.createElement('p');\n  location.textContent = 'Ubicación: José María Morelos, 837, Barrio Antiguo, Centro, Monterrey, N.L.';\n\n  const locationImg = document.createElement('iframe');\n  locationImg.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.9849515912579!2d-100.30909303263797!3d25.667100214547386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa452baf98c30ece!2sMercado%20Barrio%20Antiguo!5e0!3m2!1sen!2smx!4v1618545480214!5m2!1sen!2smx';\n\n  contact.appendChild(contactNum);\n  contact.appendChild(contactWhats);\n  contact.appendChild(location);\n  contact.appendChild(locationImg);\n\n  return contact;\n};\n\nconst goContact = () => {\n  const view = document.getElementById('view');\n  view.textContent = '';\n  view.appendChild(setContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goContact);\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setFooter = () => {\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n\n  const footerSub = document.createElement('div');\n  footerSub.classList.add('footer-sub');\n\n  const myGithub = document.createElement('a');\n  myGithub.classList.add('my-github');\n  myGithub.href = 'https://github.com/Milypm';\n  myGithub.target = '_blank';\n  const mygithubIcon = document.createElement('i');\n  mygithubIcon.classList.add('fab');\n  mygithubIcon.classList.add('fa-github-alt');\n  myGithub.appendChild(mygithubIcon);\n\n  const siteRights = document.createElement('p');\n  siteRights.classList.add('footer-text');\n  siteRights.textContent = 'Built by Mily Puente ';\n  siteRights.appendChild(myGithub);\n\n  const siteYear = document.createElement('p');\n  siteYear.classList.add('footer-year');\n  siteYear.textContent = 'Microverse 2021';\n\n  footerSub.appendChild(siteRights);\n  footerSub.appendChild(siteYear);\n  footer.appendChild(footerSub);\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setFooter);\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst introHome = () => {\n  const home = document.createElement('div');\n  home.classList.add('home');\n\n  const homeText = document.createElement('p');\n  homeText.classList.add('home-text');\n  homeText.textContent = 'Los mejores tacos norteños!';\n\n  home.appendChild(homeText);\n\n  return home;\n};\n\nconst goHome = () => {\n  const view = document.getElementById('view');\n  view.textContent = '';\n  view.appendChild(introHome());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goHome);\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n\n\n\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\nconst setHeader = () => {\n  const header = document.createElement('header');\n  header.classList.add('main-header');\n\n  const socialIcons = document.createElement('div');\n  socialIcons.classList.add('social-icons');\n\n  const fbAnchor = document.createElement('a');\n  fbAnchor.href = '#';\n  const fbIcon = document.createElement('i');\n  fbIcon.classList.add('fab');\n  fbIcon.classList.add('fa-facebook-f');\n  fbAnchor.appendChild(fbIcon);\n\n  const instaAnchor = document.createElement('a');\n  instaAnchor.href = '#';\n  const instaIcon = document.createElement('i');\n  instaIcon.classList.add('fab');\n  instaIcon.classList.add('fa-instagram');\n  instaAnchor.appendChild(instaIcon);\n\n  const twitAnchor = document.createElement('a');\n  twitAnchor.href = '#';\n  const twitIcon = document.createElement('i');\n  twitIcon.classList.add('fab');\n  twitIcon.classList.add('fa-twitter');\n  twitAnchor.appendChild(twitIcon);\n\n  const wholeHeader = document.createElement('div');\n  wholeHeader.classList.add('whole-header');\n\n  const hat = document.createElement('i');\n  hat.classList.add('fas');\n  hat.classList.add('fa-hat-cowboy-side');\n\n  const chile = document.createElement('i');\n  chile.classList.add('fas');\n  chile.classList.add('fa-pepper-hot');\n\n  const restTitle = document.createElement('h1');\n  restTitle.classList.add('rest-title');\n  restTitle.textContent = 'La taquería';\n\n  const titleNav = document.createElement('div');\n  titleNav.classList.add('title-nav');\n\n  wholeHeader.appendChild(hat);\n  wholeHeader.appendChild(chile);\n  wholeHeader.appendChild(restTitle);\n  socialIcons.appendChild(fbAnchor);\n  socialIcons.appendChild(instaAnchor);\n  socialIcons.appendChild(twitAnchor);\n  titleNav.appendChild(wholeHeader);\n  titleNav.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__.setNavbar)());\n  header.appendChild(titleNav);\n  header.appendChild(socialIcons);\n\n  return header;\n};\n\nconst setView = () => {\n  const view = document.createElement('view');\n  view.classList.add('view');\n  view.setAttribute('id', 'view');\n\n  return view;\n};\n\nconst startSite = () => {\n  const content = document.getElementById('content');\n  content.appendChild(setHeader());\n  content.appendChild(setView());\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.activateBtn)(document.querySelector('.nav-btn'));\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\nstartSite();\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Pirata_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Pirata.jpg */ \"./src/assets/images/Pirata.jpg\");\n/* harmony import */ var _assets_images_Campechana_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Campechana.jpg */ \"./src/assets/images/Campechana.jpg\");\n/* harmony import */ var _assets_images_Gobernador_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/Gobernador.jpg */ \"./src/assets/images/Gobernador.jpg\");\n/* harmony import */ var _assets_images_Trompo_set_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/Trompo set.jpg */ \"./src/assets/images/Trompo set.jpg\");\n/* harmony import */ var _assets_images_Sirlon_set_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/Sirlon set.jpg */ \"./src/assets/images/Sirlon set.jpg\");\n/* harmony import */ var _assets_images_Papa_sirlon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/Papa sirlon.jpg */ \"./src/assets/images/Papa sirlon.jpg\");\n/* harmony import */ var _assets_images_Papa_trompo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/Papa trompo.jpg */ \"./src/assets/images/Papa trompo.jpg\");\n/* harmony import */ var _assets_images_Frijoles_a_la_charra_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/Frijoles a la charra.jpg */ \"./src/assets/images/Frijoles a la charra.jpg\");\n/* harmony import */ var _assets_images_chiles_rellenos_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/chiles rellenos.jpg */ \"./src/assets/images/chiles rellenos.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst addMenuItem = (dish, ingred, img, alt) => {\n  const menuItem = document.createElement('div');\n  menuItem.classList.add('menu-item');\n\n  const dishName = document.createElement('h3');\n  dishName.textContent = dish;\n\n  const dishIngred = document.createElement('p');\n  dishIngred.textContent = ingred;\n\n  const dishImg = document.createElement('img');\n  dishImg.src = img;\n  dishImg.alt = alt;\n\n  menuItem.appendChild(dishImg);\n  menuItem.appendChild(dishName);\n  menuItem.appendChild(dishIngred);\n\n  return menuItem;\n};\n\nconst setMenu = () => {\n  const fullMenu = document.createElement('div');\n  fullMenu.classList.add('full-menu');\n\n  const groupTacos = document.createElement('div');\n  groupTacos.classList.add('menu-group');\n  const groupPapas = document.createElement('div');\n  groupPapas.classList.add('menu-group');\n  const groupComp = document.createElement('div');\n  groupComp.classList.add('menu-group');\n  const groupDrinks = document.createElement('div');\n  groupDrinks.classList.add('menu-group');\n  groupDrinks.classList.add('drinks-group');\n\n  const groupTacosTitle = document.createElement('div');\n  groupTacosTitle.classList.add('menu-group-title');\n  const groupPapasTitle = document.createElement('div');\n  groupPapasTitle.classList.add('menu-group-title');\n  const groupCompTitle = document.createElement('div');\n  groupCompTitle.classList.add('menu-group-title');\n  const groupDrinksTitle = document.createElement('div');\n  groupDrinksTitle.classList.add('menu-group-title');\n\n  const menuTitle = (title) => {\n    const header = document.createElement('h3');\n    header.classList.add('menu-title');\n    header.textContent = title;\n    return header;\n  };\n\n  const menuDrink = (drink) => {\n    const bev = document.createElement('p');\n    bev.textContent = drink;\n    return bev;\n  };\n\n  groupTacos.appendChild(addMenuItem('Pirata', 'Taco grande en maíz o harina, sirlon, queso asadero, aguacate', _assets_images_Pirata_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Taco pirata imagen'));\n  groupTacos.appendChild(addMenuItem('Campechana', 'Taco grande en maíz o harina, sirlon y trompo, queso asadero, aguacate', _assets_images_Campechana_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Taco campechana imagen'));\n  groupTacos.appendChild(addMenuItem('Gobernador', 'Taco grande en maíz o harina, camarones, queso asadero, aguacate', _assets_images_Gobernador_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Taco gobernador imagen'));\n  groupTacos.appendChild(addMenuItem('Orden trompo', 'Cinco tacos de trompo en maíz. Incluyen cebolla, cilantro, salsas verde/roja', _assets_images_Trompo_set_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Orden tacos de trompo imagen'));\n  groupTacos.appendChild(addMenuItem('Orden sirlon', 'Cinco tacos de sirlon en maíz. Incluyen cebolla, cilantro, salsas verde/roja', _assets_images_Sirlon_set_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Orden tacos de sirlon imagen'));\n  groupPapas.appendChild(addMenuItem('Papa sirlon', 'Papa asada con sirlon, mantequilla, queso(asadero y americano)', _assets_images_Papa_sirlon_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Papa asada de sirlon imagen'));\n  groupPapas.appendChild(addMenuItem('Papa trompo', 'Papa asada con trompo, mantequilla, queso(asadero y americano)', _assets_images_Papa_trompo_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Papa asada de trompo imagen'));\n  groupComp.appendChild(addMenuItem('Frijoles a la charra', 'Incluyen salchichas, tomate, cebolla, cilantro, cueritos, chorizo', _assets_images_Frijoles_a_la_charra_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Frijoles a la charra imagen'));\n  groupComp.appendChild(addMenuItem('Chiles rellenos', 'Jalapeños asados rellenos de queso crema envueltos en tocino', _assets_images_chiles_rellenos_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Chiles rellenos asados'));\n  groupDrinks.appendChild(menuDrink('Coca-Cola 500ml'));\n  groupDrinks.appendChild(menuDrink('Botella de agua 600ml'));\n  groupDrinks.appendChild(menuDrink('Limonada natural 600ml'));\n  groupDrinks.appendChild(menuDrink('Jamaica natural 600ml'));\n  groupDrinks.appendChild(menuDrink('Horchata natural 600ml'));\n\n  groupTacosTitle.appendChild(menuTitle('Tacos'));\n  groupTacosTitle.appendChild(groupTacos);\n  groupPapasTitle.appendChild(menuTitle('Papas'));\n  groupPapasTitle.appendChild(groupPapas);\n  groupCompTitle.appendChild(menuTitle('Complementos'));\n  groupCompTitle.appendChild(groupComp);\n  groupDrinksTitle.appendChild(menuTitle('Bebidas'));\n  groupDrinksTitle.appendChild(groupDrinks);\n\n  fullMenu.appendChild(groupTacosTitle);\n  fullMenu.appendChild(groupPapasTitle);\n  fullMenu.appendChild(groupCompTitle);\n  fullMenu.appendChild(groupDrinksTitle);\n\n  return fullMenu;\n};\n\nconst goMenu = () => {\n  const view = document.getElementById('view');\n  view.textContent = '';\n  view.appendChild(setMenu());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goMenu);\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setNavbar\": () => (/* binding */ setNavbar),\n/* harmony export */   \"activateBtn\": () => (/* binding */ activateBtn)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/js/contact.js\");\n\n\n\n\nconst activateBtn = (button) => {\n  const navBtns = document.querySelectorAll('.nav-btn');\n\n  navBtns.forEach((button) => {\n    if (button !== undefined) {\n      button.classList.remove('active');\n    }\n  });\n\n  button.classList.add('active');\n};\n\nconst setNavbar = () => {\n  const nav = document.createElement('nav');\n  const homeBtn = document.createElement('button');\n  homeBtn.classList.add('nav-btn');\n  homeBtn.textContent = 'Home';\n  homeBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    activateBtn(homeBtn);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n\n  const menuBtn = document.createElement('button');\n  menuBtn.classList.add('nav-btn');\n  menuBtn.textContent = 'Menu';\n  menuBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    activateBtn(menuBtn);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n\n  const contactBtn = document.createElement('button');\n  contactBtn.classList.add('nav-btn');\n  contactBtn.textContent = 'Contacto';\n  contactBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    activateBtn(contactBtn);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n  });\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  return nav;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page-js/./src/js/navbar.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;