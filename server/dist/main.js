require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_session__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_connect_mongo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_connect_mongo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_connect_mongo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_history_api_fallback__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_history_api_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_connect_history_api_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chalk__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_default__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_default___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__config_default__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_index__ = __webpack_require__(10);











// connect mongodb
__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_8__config_default___default.a.mongodbUrl);
__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.Promise = global.Promise;
var db = __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connection;
db.once('open', function () {
  console.log(__WEBPACK_IMPORTED_MODULE_7_chalk___default.a.green('数据库连接成功!'));
});

db.on('error', function (err) {
  console.log(__WEBPACK_IMPORTED_MODULE_7_chalk___default.a.red('数据连接出错: ' + err));
  __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.disconnect();
});

db.on('close', function () {
  console.log(__WEBPACK_IMPORTED_MODULE_7_chalk___default.a.red('数据库断开, 重新连接数据库'));
  __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_8__config_default___default.a.mongodbUrl, { server: { auto_reconnect: true } });
});

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var MongoStore = __WEBPACK_IMPORTED_MODULE_2_connect_mongo___default()(__WEBPACK_IMPORTED_MODULE_1_express_session___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.urlencoded({ extended: false, limit: '50mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_3_cookie_parser___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_1_express_session___default()({
  name: __WEBPACK_IMPORTED_MODULE_8__config_default___default.a.session.name,
  secret: __WEBPACK_IMPORTED_MODULE_8__config_default___default.a.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: __WEBPACK_IMPORTED_MODULE_8__config_default___default.a.session.cookie,
  store: new MongoStore({
    url: __WEBPACK_IMPORTED_MODULE_8__config_default___default.a.mongodbUrl
  })
}));
// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_9__api_index__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_5_connect_history_api_fallback___default.a);
app.listen(__WEBPACK_IMPORTED_MODULE_8__config_default___default.a.port, function () {
  console.log('Server is listening on port ' + __WEBPACK_IMPORTED_MODULE_8__config_default___default.a.port);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("connect-history-api-fallback");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 9 */
/***/ (function(module, exports) {


module.exports = {
  port: 9001,
  mongodbUrl: 'mongodb://localhost:27017/shopping',
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_routes__ = __webpack_require__(11);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use('/users', __WEBPACK_IMPORTED_MODULE_1__users_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/');

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map