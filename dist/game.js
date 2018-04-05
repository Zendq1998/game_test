/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/bg.js */ \"./src/template/bg.js\");\n/* harmony import */ var _template_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/utils.js */ \"./src/template/utils.js\");\n\n\n\n\nvar beta_dom = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"beta\"),\n    gamma_dom = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"gamma\"),\n    canvas = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"canvas\"),\n    ctx = canvas.getContext(\"2d\")\n\nvar orient = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"captureOrient\"]()\n\n\n// 背景\ncanvas.setAttribute(\"width\",window.innerWidth)\ncanvas.setAttribute(\"height\",window.innerHeight)\n\n\nwindow.addEventListener('deviceorientation', function() {\n    beta_dom.innerHTML = orient.beta\n    gamma_dom.innerHTML = orient.gamma\n})\nvar img = new Image()\nimg.onload = function() {\n    ctx.drawImage(img, 100, 0,50,50)\n}\nimg.src = \"./img/drop1.png\"\n\n\n\n// console.log(123);\n// console.log(22);\n// console.log(\"hahaha\")\n// alert(\"hah\")\n// startGame();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/template/bg.js":
/*!****************************!*\
  !*** ./src/template/bg.js ***!
  \****************************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\nfunction $(id) {\n    return document.getElementById(id)\n}\n\nvar bg = document.getElementById(\"battleground\")\nvar flightPath = 0\nvar G = 1.1\nvar v = 1\nfunction startGame() {\n    var times = setInterval(function() {\n        bg.style.backgroundPositionY = flightPath + \"px\"\n        flightPath -= v\n    },20)\n    \n    setInterval(function() {\n        console.log(v)\n        if(v<9) {\n            v += 0.005\n        }\n        \n    },100)\n}\n\n\n//# sourceURL=webpack:///./src/template/bg.js?");

/***/ }),

/***/ "./src/template/utils.js":
/*!*******************************!*\
  !*** ./src/template/utils.js ***!
  \*******************************/
/*! exports provided: $, captureOrient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"captureOrient\", function() { return captureOrient; });\nfunction $(id) {\n    return document.getElementById(id)\n}\n\nfunction captureOrient(element) {\n    var orient = {\n        beta: 0,\n        gamma: 0\n    }\n    // window.addEventListener('deviceorientation', function(event) {\n    //     orient.beta = Math.round(event.beta)\n    //     orient.gamma = Math.round(event.gamma)\n    // }, false)\n    \n    window.addEventListener('deviceorientation', function(event) {\n        orient.beta = Math.round(event.beta)\n        orient.gamma = Math.round(event.gamma)\n\n    }, false);\n    return orient\n}\n\n//# sourceURL=webpack:///./src/template/utils.js?");

/***/ })

/******/ });