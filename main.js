/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setFooter = (() => {\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n\n  const siteRights = document.createElement('p');\n  siteRights.textContent = 'La taquería. Rights Reserved 2021 ©';\n\n  const socialIcons = document.createElement('div');\n  socialIcons.classList.add('social-icons');\n\n  const fbAnchor = document.createElement('a');\n  fbAnchor.href = '#';\n  const fbIcon = document.createElement('i');\n  fbIcon.classList.add('fab');\n  fbIcon.classList.add('fa-facebook-f');\n  fbAnchor.appendChild(fbIcon);\n\n  const instaAnchor = document.createElement('a');\n  instaAnchor.href = '#';\n  const instaIcon = document.createElement('i');\n  instaIcon.classList.add('fab');\n  instaIcon.classList.add('fa-instagram');\n  instaAnchor.appendChild(instaIcon);\n\n  const twitAnchor = document.createElement('a');\n  twitAnchor.href = '#';\n  const twitIcon = document.createElement('i');\n  twitIcon.classList.add('fab');\n  twitIcon.classList.add('fa-twitter');\n  twitAnchor.appendChild(twitIcon);\n\n  socialIcons.appendChild(fbAnchor);\n  socialIcons.appendChild(instaAnchor);\n  socialIcons.appendChild(twitAnchor);\n  footer.appendChild(siteRights);\n  footer.appendChild(socialIcons);\n\n  return footer;\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setFooter);\n\n//# sourceURL=webpack://restaurant-page-js/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page-js/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\nconst setHeader = (() => {\n  const header = document.createElement('header');\n  header.classList.add('main-header');\n\n  const restTitle = document.createElement('h1');\n  restTitle.classList.add('rest-title');\n  restTitle.textContent = 'La taquería';\n\n  header.appendChild(restTitle);\n  header.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__.default)());\n\n  return header;\n})();\n\nconst setMain = (() => {\n  const main = document.createElement('main');\n  main.classList.add('main');\n\n  return main;\n})();\n\nconst startSite = (() => {\n  const content = document.getElementById('content');\n  content.appendChild(setHeader());\n  content.appendChild(setMain());\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n  _home__WEBPACK_IMPORTED_MODULE_0___default()();\n})();\n\nstartSite();\n\n//# sourceURL=webpack://restaurant-page-js/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './contact'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst setNavbar = (() => {\n  const nav = document.createElement('nav');\n\n  const homeBtn = document.createElement('button');\n  homeBtn.classList.add('nav-btn');\n  homeBtn.textContent = 'Home';\n  homeBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(homeBtn);\n      goHome();\n    }\n  });\n\n  const menuBtn = document.createElement('button');\n  menuBtn.classList.add('nav-btn');\n  menuBtn.textContent = 'Menu';\n  menuBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(menuBtn);\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    }\n  });\n\n  const contactBtn = document.createElement('button');\n  contactBtn.classList.add('nav-btn');\n  contactBtn.textContent = 'Contact';\n  contactBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(contactBtn);\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './contact'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    }\n  });\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  return nav;\n})();\n\nconst activateBtn = ((button) => {\n  const navBtns = document.querySelectorAll('.nav-btn');\n\n  navBtns.forEach((button) => {\n    if (button !== undefined) {\n      button.classList.remove('active');\n    }\n  });\n\n  button.classList.add('active');\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNavbar);\n\n//# sourceURL=webpack://restaurant-page-js/./src/navbar.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;