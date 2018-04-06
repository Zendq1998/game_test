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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/service/app.js":
/*!****************************!*\
  !*** ./src/service/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/service/fetch.js\");\n\n\nlet service = {\n    signUp(data) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/signup/\", {\n            method: \"POST\",\n            data: data\n        })\n    },\n    logIn(data) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/signin/\", {\n            method: \"POST\",\n            data: data\n        })\n    },\n    postscore(data,token) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/postscore/\", {\n            method: \"POST\",\n            data: data\n        },token)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);\n\n//# sourceURL=webpack:///./src/service/app.js?");

/***/ }),

/***/ "./src/service/fetch.js":
/*!******************************!*\
  !*** ./src/service/fetch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fetch; });\nfunction Fetch(url, opt = {}, token) { \n    \n    // 设置请求方法\n    opt.method = opt.method || 'GET';\n    // 处理要发送的数据\n    if (opt.data) {\n        if (/GET/i.test(opt.method)) {\n        url = `${url}&${obj2query(opt.data)}`;\n        } else {\n        opt.headers = {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin': '*',\n            'token': token\n        };\n        opt.body = JSON.stringify(opt.data);\n        }\n    }\n    \n        return fetch(url, opt)\n        .then(res => {\n            switch (res.status) {\n                case 200:\n                    return res;\n                default:\n                    return res;\n                    throw res.message;\n            }\n        })//返回一个response\n        // .then(response => {  \n        // return response.json();\n        // }).then(\n        //     json => {\n        //         switch (json.code) {\n        //             case 200:\n        //               return json;\n        //             case 502:\n        //               util.message(json.message, 'err');\n        //               throw json.message;\n        //           }\n        //     }\n        // )\n    }\n\n//# sourceURL=webpack:///./src/service/fetch.js?");

/***/ }),

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.js */ \"./src/service/app.js\");\n\nfunction $(id) {\n    return document.getElementById(id)\n}\nvar id = $(\"id\")\nvar psw = $(\"psw\")\nvar submit = $(\"submit\")\nconsole.log(_service_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\nvar data = {\n    id: \"\",\n    password: \"\"\n}\n\nsubmit.addEventListener(\"click\", function() {\n    data.id = id.value\n    data.password = psw.value\n    if(data.id.length && data.id.length) {\n        _service_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signUp(data).then(json=>{\n            if(json.status == 200) {\n                alert(\"注册成功！\")\n            }\n            if(json.status == 401) {\n                alert(\"该用户已被注册！\")\n            }\n            else {\n                alert(\"失败！\")\n            }\n        })\n    }\n })\n\n\n//# sourceURL=webpack:///./src/signup.js?");

/***/ })

/******/ });