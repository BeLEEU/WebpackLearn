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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var obj = {a: 2} \r\nvar funct = function(b, c) { console.log(this.a,b,c); return 1; }; // 定义一个函数用来执行\r\nFunction.prototype._call = function(base, ...args) {\r\n    base = base || window;\r\n    base.fn = this;\r\n    let res = base.fn(...args);\r\n    delete base.fn;\r\n    return res;\r\n}\r\n\r\nFunction.prototype._bind = function(base) {\r\n    base = base || window;\r\n    let fn = this;\r\n    let arg = Array.prototype.slice.call(arguments,1)\r\n    return function() {\r\n        return fn._call(base, ...arg)\r\n    }\r\n}\r\nfunct._bind(obj, 1, 2);\r\nfunct();\r\n\n\n//# sourceURL=webpack://app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;