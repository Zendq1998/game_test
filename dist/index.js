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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.js */ \"./src/service/app.js\");\n/* harmony import */ var _service_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/cookie.js */ \"./src/service/cookie.js\");\n/* harmony import */ var _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_service_cookie_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _template_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/utils.js */ \"./src/template/utils.js\");\n\n\n\nfunction $(id) {\n    return document.getElementById(id)\n}\nvar signup = $(\"signup\"),\n    start = $(\"start\"),\n    id = $(\"id\"),\n    psw = $(\"psw\"),\n    rememberme = $(\"rememberme\")\nvar data = {\n    id: \"\",\n    password: \"\"\n}\nwindow.onload = function() {\n    data.id = _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.getCookie(\"id\")\n    data.password = _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.getCookie(\"psw\")\n    id.value = data.id\n    psw.value = data.password\n}\nsignup.addEventListener(\"click\",function() {\n    window.location.href = './signup.html'\n})\nstart.addEventListener(\"click\",function() {\n    data.id = id.value\n    data.password = psw.value\n    _service_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logIn(data).then(res=> {\n        if(res.status == 200) {\n            return res.json()\n        }\n        if(res.status == 400) {\n            alert(\"密码错误\")\n        }\n    }).then(json => {\n        if(json) {\n            if(rememberme.checked) {\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"id\",data.id,1)\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"psw\",data.password,1)    \n            }\n            else {\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"id\")\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"psw\")\n            }\n            _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"token\")\n            _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"token\",json.token,0.1)\n            window.location.href = \"./game.html\"+\"?id=\"+data.id\n        }\n    })\n    \n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/app.js":
/*!****************************!*\
  !*** ./src/service/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/service/fetch.js\");\n\n\nlet service = {\n    signUp(data) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/signup/\", {\n            method: \"POST\",\n            data: data\n        })\n    },\n    logIn(data) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/signin/\", {\n            method: \"POST\",\n            data: data\n        })\n    },\n    postscore(data,token) {\n        return Object(_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://119.23.79.87:1477/api/v1.0/postscore/\", {\n            method: \"POST\",\n            data: data\n        },token)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);\n\n//# sourceURL=webpack:///./src/service/app.js?");

/***/ }),

/***/ "./src/service/cookie.js":
/*!*******************************!*\
  !*** ./src/service/cookie.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//设置cookie\nfunction setCookie(cname, cvalue, exdays) {\n    var d = new Date();\n    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));\n    var expires = \"expires=\" + d.toUTCString() + \";path = /\";\n    document.cookie = cname + \"=\" + cvalue + \"; \" + expires;\n}\n//获取cookie\nfunction getCookie(cname) {\n    var name = cname + \"=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) == ' ') c = c.substring(1);\n        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);\n    }\n    return \"\";\n}\n//清除cookie  \nfunction clearCookie(name) {\n    setCookie(name, \"\", -1);\n}\n\n//删除cookie\nfunction delCookie(name) {\n    var exp = new Date();\n    exp.setTime(exp.getTime() - 1);\n    var cval=getCookie(name);\n    if(cval!=null) document.cookie= name + \"=\"+cval+\";expires=\"+exp.toGMTString() + \";path = /\";\n}\n\nfunction checkCookie(val) {\n    var key = getCookie(val);\n    if (key) {\n        return key;\n    } else {\n        return false;\n    }\n}\n\nfunction getToken() {\n    var auth = {};\n    if (cookie.getCookie(\"token\")) {\n        var token = btoa(cookie.getCookie(\"token\") + \":\");\n        //var token = cookie.getCookie(\"token\");\n        var auth = { \"Authorization\": \"Basic \" + token };\n    }\n    return auth;\n}\n\nfunction getQueryString(name) {\n    var reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\", \"i\");\n    var r = window.location.search.substr(1).match(reg);\n    if (r != null) return unescape(r[2]);\n    return null;\n}\n\nvar cookie = {\n    setCookie: setCookie,\n    getCookie: getCookie,\n    clearCookie: clearCookie,\n    checkCookie: checkCookie,\n    getToken: getToken,\n    getQueryString: getQueryString,\n    delCookie:delCookie\n}\nmodule.exports = cookie;\n\n//# sourceURL=webpack:///./src/service/cookie.js?");

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

/***/ "./src/template/utils.js":
/*!*******************************!*\
  !*** ./src/template/utils.js ***!
  \*******************************/
/*! exports provided: $, captureOrient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"captureOrient\", function() { return captureOrient; });\nfunction $(id) {\n    return document.getElementById(id)\n}\n\n\n\nfunction captureOrient(element) {\n    var orient = {\n        beta: 0,\n        gamma: 0\n    }\n    // window.addEventListener('deviceorientation', function(event) {\n    //     orient.beta = Math.round(event.beta)\n    //     orient.gamma = Math.round(event.gamma)\n    // }, false)\n    \n    window.addEventListener('deviceorientation', function(event) {\n        orient.beta = Math.round(event.beta)\n        orient.gamma = Math.round(event.gamma)\n\n    }, false);\n    return orient\n}\n\n//# sourceURL=webpack:///./src/template/utils.js?");

/***/ })

/******/ });