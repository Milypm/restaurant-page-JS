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

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|   background: lightseagreen;\\n| }\");\n\n//# sourceURL=webpack://restaurant-page-js/./dist/style.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setContact = () => {\n  const contact = document.createElement('div');\n  contact.classList.add('contact');\n\n  const contactNum = document.createElement('p');\n  contactNum.textContent = 'Phone: 52+ 818343 3070';\n\n  const contactWhats = document.createElement('p');\n  contactWhats.textContent = 'Whatsapp: 52+ 811400 2838';\n\n  const location = document.createElement('p');\n  location.textContent = 'Location: José María Morelos, 837, Centro, Monterrey, N.L.'\n\n  const locationImg = document.createElement('img');\n  locationImg.src = '../dist/images/location.png';\n  locationImg.alt = 'La taquería location';\n\n  contact.appendChild(contactNum);\n  contact.appendChild(contactWhats);\n  contact.appendChild(location);\n  contact.appendChild(locationImg);\n\n  return contact;\n};\n\nconst goContact = () => {\n  const main = document.getElementById('main');\n  main.appendChild(setContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goContact);\n\n//# sourceURL=webpack://restaurant-page-js/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setFooter = () => {\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n\n  const siteRights = document.createElement('p');\n  siteRights.textContent = 'La taquería. Rights Reserved 2021 ©';\n\n  const socialIcons = document.createElement('div');\n  socialIcons.classList.add('social-icons');\n\n  const fbAnchor = document.createElement('a');\n  fbAnchor.href = '#';\n  const fbIcon = document.createElement('i');\n  fbIcon.classList.add('fab');\n  fbIcon.classList.add('fa-facebook-f');\n  fbAnchor.appendChild(fbIcon);\n\n  const instaAnchor = document.createElement('a');\n  instaAnchor.href = '#';\n  const instaIcon = document.createElement('i');\n  instaIcon.classList.add('fab');\n  instaIcon.classList.add('fa-instagram');\n  instaAnchor.appendChild(instaIcon);\n\n  const twitAnchor = document.createElement('a');\n  twitAnchor.href = '#';\n  const twitIcon = document.createElement('i');\n  twitIcon.classList.add('fab');\n  twitIcon.classList.add('fa-twitter');\n  twitAnchor.appendChild(twitIcon);\n\n  socialIcons.appendChild(fbAnchor);\n  socialIcons.appendChild(instaAnchor);\n  socialIcons.appendChild(twitAnchor);\n  footer.appendChild(siteRights);\n  footer.appendChild(socialIcons);\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setFooter);\n\n//# sourceURL=webpack://restaurant-page-js/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst introHome = () => {\n  const home = document.createElement('div');\n  home.classList.add('home');\n\n  const tacosImg = document.createElement('img');\n  tacosImg.classList.add('tacos-main-img');\n  tacosImg.src = '../dist/images/tacos4.jpg';\n  tacosImg.alt = 'tacos';\n\n  const homeText = document.createElement('p');\n  homeText.classList.add('home-text');\n  homeText.textContent = 'The real mexican tacos!'\n};\n\nconst goHome = () => {\n  const main = document.getElementById('main');\n  main.appendChild(introHome());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goHome);\n\n//# sourceURL=webpack://restaurant-page-js/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/style.css */ \"./dist/style.css\");\n/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst setHeader = () => {\n  const header = document.createElement('header');\n  header.classList.add('main-header');\n\n  const restTitle = document.createElement('h1');\n  restTitle.classList.add('rest-title');\n  restTitle.textContent = 'La taquería';\n\n  header.appendChild(restTitle);\n  header.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_2__.setNavbar)());\n\n  return header;\n};\n\nconst setMain = () => {\n  const main = document.createElement('main');\n  main.classList.add('main');\n  main.setAttribute(\"id\", \"main\");\n  return main;\n};\n\nconst startSite = () => {\n  const content = document.getElementById('content');\n  content.appendChild(setHeader());\n  content.appendChild(setMain());\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)());\n\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.activateBtn)(document.querySelector('.nav-btn'));\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n\nstartSite();\n\n//# sourceURL=webpack://restaurant-page-js/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setMenu = () => {\n  const fullMenu = document.createElement('div');\n  fullMenu.classList.add('full-menu');\n\n  fullMenu.appendChild(addMenuItem('Pirata', 'home-made corn or wheat tortilla, sirlon fajita, asadero cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Campechana', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Gobernador', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Trompo set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Sirlon set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Papa regular', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Papa complete', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n  fullMenu.appendChild(addMenuItem('Frijoles a la charra', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));\n\n  return fullMenu;\n};\n\nconst addMenuItem = (dish, ingred) => {\n  const menuItem = document.createElement('div');\n  menuItem.classList.add('menu-item');\n\n  const dishName = document.createElement('h3');\n  dishName.textContent = dish;\n\n  const dishIngred = document.createElement('p');\n  dishIngred.textContent = ingred;\n\n  menuItem.appendChild(dishImg);\n  menuItem.appendChild(dishName);\n  menuItem.appendChild(dishIngred);\n\n  return menuItem;\n};\n\n// const getdishImg = ((num) => {\n//   const dishImg = document.createElement('img');\n//   pirataImg.src = '../dist/images/taco-pirata.jpeg';\n//   dishImg.alt = 'taco pirata';\n// })();\n\nconst goMenu = () => {\n  const main = document.getElementById('main');\n  main.appendChild(setMenu());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goMenu);\n\n//# sourceURL=webpack://restaurant-page-js/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setNavbar\": () => (/* binding */ setNavbar),\n/* harmony export */   \"activateBtn\": () => (/* binding */ activateBtn)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nconst setNavbar = () => {\n  const nav = document.createElement('nav');\n\n  const homeBtn = document.createElement('button');\n  homeBtn.classList.add('nav-btn');\n  homeBtn.textContent = 'Home';\n  homeBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(homeBtn);\n      goHome();\n    }\n  });\n\n  const menuBtn = document.createElement('button');\n  menuBtn.classList.add('nav-btn');\n  menuBtn.textContent = 'Menu';\n  menuBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(menuBtn);\n      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)();\n    }\n  });\n\n  const contactBtn = document.createElement('button');\n  contactBtn.classList.add('nav-btn');\n  contactBtn.textContent = 'Contact';\n  contactBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) {\n      activateBtn(contactBtn);\n      (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\n    }\n  });\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  return nav;\n};\n\nconst activateBtn = (button) => {\n  const navBtns = document.querySelectorAll('.nav-btn');\n\n  navBtns.forEach((button) => {\n    if (button !== undefined) {\n      button.classList.remove('active');\n    }\n  });\n\n  button.classList.add('active');\n};\n\n\n\n//# sourceURL=webpack://restaurant-page-js/./src/navbar.js?");

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