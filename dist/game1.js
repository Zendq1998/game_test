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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(window, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmeidate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/bg.js */ \"./src/template/bg.js\");\n/* harmony import */ var _template_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/utils.js */ \"./src/template/utils.js\");\n/* harmony import */ var _service_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.js */ \"./src/service/app.js\");\n/* harmony import */ var _service_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/cookie */ \"./src/service/cookie.js\");\n/* harmony import */ var _service_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! timers */ \"./node_modules/timers-browserify/main.js\");\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar beta_dom = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"beta\"),\n    gamma_dom = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"gamma\"),\n    canvas = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"canvas\"),\n    canvas1 = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"canvas1\"),\n    canvas2 = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"canvas2\"),\n    canvas3 = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"canvas3\"),\n    ctx = canvas.getContext(\"2d\"),\n    ctx1 = canvas1.getContext(\"2d\"),\n    ctx2 = canvas2.getContext(\"2d\"),\n    ctx3 = canvas3.getContext(\"2d\"),\n    postscore = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"](\"postscore\"),\n    data = {\n        id: \"\",\n        score: 60\n    },\n    token = \"\"\n\nvar orient = _template_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"captureOrient\"]()\n\n// 加载cookie\nwindow.onload = function() {\n    token = _service_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getCookie(\"token\")\n    console.log(token)\n    console.log(decodeURI(window.location.href))\n    data.id = decodeURI(window.location.search.split('=')[1])\n    console.log(data.id)\n    // 背景\n}\n\ncanvas.setAttribute(\"width\",window.innerWidth)\ncanvas.setAttribute(\"height\",window.innerHeight)\ncanvas1.setAttribute(\"width\",window.innerWidth)\ncanvas1.setAttribute(\"height\",window.innerHeight)\ncanvas2.setAttribute(\"width\",window.innerWidth)\ncanvas2.setAttribute(\"height\",window.innerHeight)\ncanvas3.setAttribute(\"width\",window.innerWidth)\ncanvas3.setAttribute(\"height\",window.innerHeight)\n\n\n\n// 陀螺仪监听器\nwindow.addEventListener('deviceorientation', function() {\n    beta_dom.innerHTML = orient.beta\n    gamma_dom.innerHTML = orient.gamma\n})\n\n\n// 键盘\nvar keyControl = 0\nfunction onKeyboardEvent (event){\n    switch (event.keyCode) {\n        case 38:{\n            keyControl = 1; // 上\n            console.log(\"上\");\n            break;\n        }\n            \n        case 40:{\n            keyControl = 2; // 下\n            console.log(\"下\")\n            break;\n        } \n        case 37:\n            keyControl = 3; // 左\n            break;\n        case 39:\n            keyControl = 4; // 右\n            break;\n        default:\n            console.log(event.keyCode);\n    }\n}\nwindow.addEventListener (\"keypress\", (event) => {\n    switch(event.key) {\n        case 'w':{\n            keyControl = 1; // 上\n            console.log(\"上\");\n            break;\n        }\n            \n        case 's':{\n            keyControl = 2; // 下\n            console.log(\"下\")\n            break;\n        } \n        case 'a':\n            keyControl = 3; // 左\n            break;\n        case 'd':\n            keyControl = 4; // 右\n            break;\n        default:\n            console.log(event.keyCode);\n    }\n}, false);\n\n// 背景图片\nvar img = new Image()\nvar Drop = new Image()\nimg.onload = function() {\n    ctx.drawImage(img, 0, 0,canvas.width,canvas.height)\n    ctx1.drawImage(Drop,0,0,20,20)\n    // 水滴\n    for(let i=0;i<Fire.location.length;i++) {\n        ctx2.drawImage(Fire,Fire.location[i].x,Fire.location[i].y,20,20)\n    }\n}\n\n// 水滴对象\n\nvar myDrop = {\n    x:0,y:0,vx:0,vy:0,g:0.1,w:20,h:20,\n}\n\n// 水滴移动\nfunction drawFrame () {\n    window.requestAnimationFrame(drawFrame, canvas);\n    ctx1.clearRect(0, 0, canvas.width, canvas.height);\n    if((orient.beta<0 || keyControl==1) && myDrop.vy>-1) {\n        myDrop.vy -= myDrop.g\n    }\n    if((orient.beta>0 || keyControl==2) && myDrop.vy<1) {\n        myDrop.vy += myDrop.g\n    }\n\n    if((orient.gamma<0 || keyControl==3) && myDrop.vx>-1) {\n        myDrop.vx -= myDrop.g\n    }\n    if((orient.gamma>0 || keyControl==4) && myDrop.vx<1) {\n        myDrop.vx += myDrop.g\n    }\n    if(myDrop.x+myDrop.vx>-2 && myDrop.x+myDrop.vx+myDrop.w<canvas.width+2) {\n        myDrop.x += myDrop.vx\n    }\n    if(myDrop.y+myDrop.vy>-2 && myDrop.y+myDrop.vy+myDrop.h<canvas.height+2) {\n        myDrop.y += myDrop.vy \n    }\n    ctx1.drawImage(Drop,myDrop.x,myDrop.y,20,20)\n}\ndrawFrame()\n// 检测水滴碰撞\nfunction isBound(cx,cy,elx,ely,elw) {\n    let elcx = elx + elw/2\n    let elxy = ely + elw/2\n    let len = Math.sqrt((cx-elx)*(cx-elx)+(cy-ely)*(cy-ely))\n    // 两物体中心距离\n    let maxLen = Math.sqrt((myDrop.w/2)*(myDrop.w/2)) + Math.sqrt((elw/2)*(elw/2))\n    // 最大容纳距离\n    if(len <= maxLen) {\n        return true\n    }\n    else {\n        return false\n    }\n}\n\n\n// 火焰对象\nvar Fire = new Image()\nvar Cw = canvas.width\nvar Ch = canvas.height\nFire.location = [{x:Cw/21.3,y:Ch/1.4},{x:Cw/9,y:Ch/3},{x:Cw/1.5,y:Ch/2}]\n//检测火焰碰撞\nObject(timers__WEBPACK_IMPORTED_MODULE_4__[\"setInterval\"])(function() {\n    let cx = myDrop.x+myDrop.w/2\n    let cy = myDrop.y+myDrop.h/2\n    for(let i=0;i<Fire.location.length;i++) {\n        if(isBound(cx,cy,Fire.location[i].x,Fire.location[i].y,20)){\n            console.log(i+\"撞啦\")\n            Fire.location.splice(i,1)\n            ctx2.clearRect(0, 0, canvas.width, canvas.height)\n            for(let i=0;i<Fire.location.length;i++) {\n                ctx2.drawImage(Fire,Fire.location[i].x,Fire.location[i].y,20,20)\n            }\n        }\n    }\n},20)\n\n// 花a对象\nvar Flower_A = new Image()\n\n\nimg.src = \"./img/bg-game.png\"\nDrop.src = \"./img/drop.png\"\nFire.src = \"./img/fire.png\"\n\n\n\n// 上传分数\npostscore.addEventListener(\"click\",function() {\n    _service_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].postscore(data,token).then(res => {\n        console.log(res)\n    })\n})\n\n\n//# sourceURL=webpack:///./src/game.js?");

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
/*! exports provided: $, captureOrient, keycode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"captureOrient\", function() { return captureOrient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keycode\", function() { return keycode; });\nfunction $(id) {\n    return document.getElementById(id)\n}\n\n\n\nfunction captureOrient(element) {\n    var orient = {\n        beta: 0,\n        gamma: 0\n    }\n    // window.addEventListener('deviceorientation', function(event) {\n    //     orient.beta = Math.round(event.beta)\n    //     orient.gamma = Math.round(event.gamma)\n    // }, false)\n    \n    window.addEventListener('deviceorientation', function(event) {\n        orient.beta = Math.round(event.beta)\n        orient.gamma = Math.round(event.gamma)\n\n    }, false);\n    return orient\n}\n\n/**\n * A list of JavaScript key codes to reference by name.\n * From 'Foundation HTML5 Animation with JavaScript': http://amzn.com/1430236655?tag=html5anim-20\n */\n\nvar keycode = {\n    BACKSPACE: 8,\n    TAB: 9,\n    ENTER: 13,\n    COMMAND: 15,\n    SHIFT: 16,\n    CONTROL: 17,\n    ALTERNATE: 18,\n    PAUSE: 19,\n    CAPS_LOCK: 20,\n    NUMPAD: 21,\n    ESCAPE: 27,\n    SPACE: 32,\n    PAGE_UP: 33,\n    PAGE_DOWN: 34,\n    END: 35,\n    HOME: 36,\n  \n    //arrows\n    LEFT: 37,\n    UP: 38,\n    RIGHT: 39,\n    DOWN: 40,\n  \n    INSERT: 45,\n    DELETE: 46,\n  \n    //numbers\n    NUMBER_0: 48,\n    NUMBER_1: 49,\n    NUMBER_2: 50,\n    NUMBER_3: 51,\n    NUMBER_4: 52,\n    NUMBER_5: 53,\n    NUMBER_6: 54,\n    NUMBER_7: 55,\n    NUMBER_8: 56,\n    NUMBER_9: 57,\n  \n    //letters\n    A: 65,\n    B: 66,\n    C: 67,\n    D: 68,\n    E: 69,\n    F: 70,\n    G: 71,\n    H: 72,\n    I: 73,\n    J: 74,\n    K: 75,\n    L: 76,\n    M: 77,\n    N: 78,\n    O: 79,\n    P: 80,\n    Q: 81,\n    R: 82,\n    S: 83,\n    T: 84,\n    U: 85,\n    V: 86,\n    W: 87,\n    X: 88,\n    Y: 89,\n    Z: 90,\n  \n    LEFT_WINDOW_KEY: 91,\n    RIGHT_WINDOW_KEY: 92,\n    SELECT_KEY: 93,\n  \n    //number pad\n    NUMPAD_0: 96,\n    NUMPAD_1: 97,\n    NUMPAD_2: 98,\n    NUMPAD_3: 99,\n    NUMPAD_4: 100,\n    NUMPAD_5: 101,\n    NUMPAD_6: 102,\n    NUMPAD_7: 103,\n    NUMPAD_8: 104,\n    NUMPAD_9: 105,\n    NUMPAD_MULTIPLY: 106,\n    NUMPAD_ADD: 107,\n    NUMPAD_ENTER: 108,\n    NUMPAD_SUBTRACT: 109,\n    NUMPAD_DECIMAL: 110,\n    NUMPAD_DIVIDE: 111,\n  \n    //function keys\n    F1: 112,\n    F2: 113,\n    F3: 114,\n    F4: 115,\n    F5: 116,\n    F6: 117,\n    F7: 118,\n    F8: 119,\n    F9: 120,\n    F10: 121,\n    F11: 122,\n    F12: 123,\n    F13: 124,\n    F14: 125,\n    F15: 126,\n  \n    NUM_LOCK: 144,\n    SCROLL_LOCK: 145,\n  \n    //punctuation\n    SEMICOLON: 186,\n    EQUAL: 187,\n    COMMA: 188,\n    MINUS: 189,\n    PERIOD: 190,\n    SLASH: 191,\n    BACKQUOTE: 192,\n    LEFTBRACKET: 219,\n    BACKSLASH: 220,\n    RIGHTBRACKET: 221,\n    QUOTE: 222\n  };\n\n//# sourceURL=webpack:///./src/template/utils.js?");

/***/ })

/******/ });