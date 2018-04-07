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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.js */ \"./src/service/app.js\");\n/* harmony import */ var _service_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/cookie.js */ \"./src/service/cookie.js\");\n/* harmony import */ var _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_service_cookie_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _template_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/utils.js */ \"./src/template/utils.js\");\n\n\n\nfunction $(id) {\n    return document.getElementById(id)\n}\nvar bgLogin = $(\"bgLogin\"),\n    signup = $(\"signup\"),\n    start = $(\"start\"),\n    id = $(\"id\"),\n    psw = $(\"psw\"),\n    rememberme = $(\"rememberme\")\nvar data = {\n    id: \"\",\n    password: \"\"\n}\n\n\nfunction judgeOrient() {\n    if(window.innerHeight > window.innerWidth) {\n        bgLogin.style.height = \"50vh\"\n        id.style.top = \"20vh\"\n        psw.style.top = \"26vh\"\n        rememberme.style.top = \"31vh\"\n        rememberme.style.left = \"40vw\"\n        start.style.height = \"4vh\"\n        start.style.top = \"35vh\"\n        start.style.left = \"55vw\"\n        signup.style.height = \"2vh\"\n        signup.style.top = \"36vh\"\n        signup.style.left = \"38vw\"\n    }\n    else {\n        bgLogin.style.height = \"100vh\"\n        id.style.top = \"39vh\"\n        psw.style.top = \"53vh\"\n        rememberme.style.top = \"63.5vh\"\n        rememberme.style.left = \"42vw\"\n        start.style.height = \"9vh\"\n        start.style.top = \"70vh\"\n        signup.style.height = \"5vh\"\n        signup.style.top = \"72vh\"\n        signup.style.left = \"38vw\"\n    }\n}\nwindow.addEventListener(\"orientationchange\",function() {\n    console.log(\"转啦\")\n    if(window.innerHeight > window.innerWidth) {\n        bgLogin.style.height = \"50vh\"\n        id.style.top = \"20vh\"\n        psw.style.top = \"26vh\"\n        rememberme.style.top = \"31vh\"\n        rememberme.style.left = \"40vw\"\n        start.style.height = \"4vh\"\n        start.style.top = \"35vh\"\n        start.style.left = \"55vw\"\n        signup.style.height = \"2vh\"\n        signup.style.top = \"36vh\"\n        signup.style.left = \"38vw\"\n    }\n    else {\n        bgLogin.style.height = \"100vh\"\n        id.style.top = \"39vh\"\n        psw.style.top = \"53vh\"\n        rememberme.style.top = \"63.5vh\"\n        rememberme.style.left = \"42vw\"\n        start.style.height = \"9vh\"\n        start.style.top = \"70vh\"\n        signup.style.height = \"5vh\"\n        signup.style.top = \"72vh\"\n        signup.style.left = \"38vw\"\n    }\n},false)\n\nwindow.onload = function() {\n    judgeOrient()\n    data.id = _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.getCookie(\"id\")\n    data.password = _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.getCookie(\"psw\")\n    id.value = data.id\n    psw.value = data.password\n}\nsignup.addEventListener(\"click\",function() {\n    window.location.href = './signup.html'\n})\nstart.addEventListener(\"click\",function() {\n    data.id = id.value\n    data.password = psw.value\n    _service_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logIn(data).then(res=> {\n        if(res.status == 200) {\n            return res.json()\n        }\n        if(res.status == 400) {\n            alert(\"密码错误\")\n        }\n    }).then(json => {\n        if(json) {\n            if(rememberme.checked) {\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"id\",data.id,1)\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"psw\",data.password,1)    \n            }\n            else {\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"id\")\n                _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"psw\")\n            }\n            _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.clearCookie(\"token\")\n            _service_cookie_js__WEBPACK_IMPORTED_MODULE_1___default.a.setCookie(\"token\",json.token,0.1)\n            window.location.href = \"./level.html\"+\"?id=\"+data.id\n        }\n    })\n    \n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/*! exports provided: $, captureOrient, keycode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"captureOrient\", function() { return captureOrient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keycode\", function() { return keycode; });\nfunction $(id) {\n    return document.getElementById(id)\n}\n\n\n\nfunction captureOrient(element) {\n    var orient = {\n        beta: 0,\n        gamma: 0\n    }\n    // window.addEventListener('deviceorientation', function(event) {\n    //     orient.beta = Math.round(event.beta)\n    //     orient.gamma = Math.round(event.gamma)\n    // }, false)\n    \n    window.addEventListener('deviceorientation', function(event) {\n        orient.beta = Math.round(event.beta)\n        orient.gamma = Math.round(event.gamma)\n\n    }, false);\n    return orient\n}\n\n/**\n * A list of JavaScript key codes to reference by name.\n * From 'Foundation HTML5 Animation with JavaScript': http://amzn.com/1430236655?tag=html5anim-20\n */\n\nvar keycode = {\n    BACKSPACE: 8,\n    TAB: 9,\n    ENTER: 13,\n    COMMAND: 15,\n    SHIFT: 16,\n    CONTROL: 17,\n    ALTERNATE: 18,\n    PAUSE: 19,\n    CAPS_LOCK: 20,\n    NUMPAD: 21,\n    ESCAPE: 27,\n    SPACE: 32,\n    PAGE_UP: 33,\n    PAGE_DOWN: 34,\n    END: 35,\n    HOME: 36,\n  \n    //arrows\n    LEFT: 37,\n    UP: 38,\n    RIGHT: 39,\n    DOWN: 40,\n  \n    INSERT: 45,\n    DELETE: 46,\n  \n    //numbers\n    NUMBER_0: 48,\n    NUMBER_1: 49,\n    NUMBER_2: 50,\n    NUMBER_3: 51,\n    NUMBER_4: 52,\n    NUMBER_5: 53,\n    NUMBER_6: 54,\n    NUMBER_7: 55,\n    NUMBER_8: 56,\n    NUMBER_9: 57,\n  \n    //letters\n    A: 65,\n    B: 66,\n    C: 67,\n    D: 68,\n    E: 69,\n    F: 70,\n    G: 71,\n    H: 72,\n    I: 73,\n    J: 74,\n    K: 75,\n    L: 76,\n    M: 77,\n    N: 78,\n    O: 79,\n    P: 80,\n    Q: 81,\n    R: 82,\n    S: 83,\n    T: 84,\n    U: 85,\n    V: 86,\n    W: 87,\n    X: 88,\n    Y: 89,\n    Z: 90,\n  \n    LEFT_WINDOW_KEY: 91,\n    RIGHT_WINDOW_KEY: 92,\n    SELECT_KEY: 93,\n  \n    //number pad\n    NUMPAD_0: 96,\n    NUMPAD_1: 97,\n    NUMPAD_2: 98,\n    NUMPAD_3: 99,\n    NUMPAD_4: 100,\n    NUMPAD_5: 101,\n    NUMPAD_6: 102,\n    NUMPAD_7: 103,\n    NUMPAD_8: 104,\n    NUMPAD_9: 105,\n    NUMPAD_MULTIPLY: 106,\n    NUMPAD_ADD: 107,\n    NUMPAD_ENTER: 108,\n    NUMPAD_SUBTRACT: 109,\n    NUMPAD_DECIMAL: 110,\n    NUMPAD_DIVIDE: 111,\n  \n    //function keys\n    F1: 112,\n    F2: 113,\n    F3: 114,\n    F4: 115,\n    F5: 116,\n    F6: 117,\n    F7: 118,\n    F8: 119,\n    F9: 120,\n    F10: 121,\n    F11: 122,\n    F12: 123,\n    F13: 124,\n    F14: 125,\n    F15: 126,\n  \n    NUM_LOCK: 144,\n    SCROLL_LOCK: 145,\n  \n    //punctuation\n    SEMICOLON: 186,\n    EQUAL: 187,\n    COMMA: 188,\n    MINUS: 189,\n    PERIOD: 190,\n    SLASH: 191,\n    BACKQUOTE: 192,\n    LEFTBRACKET: 219,\n    BACKSLASH: 220,\n    RIGHTBRACKET: 221,\n    QUOTE: 222\n  };\n\n//# sourceURL=webpack:///./src/template/utils.js?");

/***/ })

/******/ });