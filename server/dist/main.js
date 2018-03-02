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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  port: 9001,
  mongodbUrl: 'mongodb://localhost:27017/shopping',
  tokenSecret: 'SID'
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chalk__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_default__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_index__ = __webpack_require__(8);









// connect mongodb
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_6__config_default__["a" /* default */].mongodbUrl);
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;
var db = __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connection;
db.once('open', function () {
  console.log(__WEBPACK_IMPORTED_MODULE_5_chalk___default.a.green('数据库连接成功!'));
});

db.on('error', function (err) {
  console.log(__WEBPACK_IMPORTED_MODULE_5_chalk___default.a.red('数据连接出错: ' + err));
  __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.disconnect();
});

db.on('close', function () {
  console.log(__WEBPACK_IMPORTED_MODULE_5_chalk___default.a.red('数据库断开, 重新连接数据库'));
  __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_6__config_default__["a" /* default */].mongodbUrl, { server: { auto_reconnect: true } });
});

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true); // 可以带cookies
  res.header('X-Powered-By', '3.2.1');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  };
});

app.use(Object(__WEBPACK_IMPORTED_MODULE_2_body_parser__["json"])());
app.use(Object(__WEBPACK_IMPORTED_MODULE_2_body_parser__["urlencoded"])({ extended: false, limit: '50mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser___default()());

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_7__api_index__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback___default.a);
app.listen(__WEBPACK_IMPORTED_MODULE_6__config_default__["a" /* default */].port, function () {
  console.log('Server is listening on port ' + __WEBPACK_IMPORTED_MODULE_6__config_default__["a" /* default */].port);
});

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

module.exports = require("chalk");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_routes__ = __webpack_require__(9);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use('/users', __WEBPACK_IMPORTED_MODULE_1__users_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(10);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* index */].post);
router.post('/log-in', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* logIn */].post);
router.post('/log-out', __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* logOut */].post);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_default__ = __webpack_require__(2);








var index = {
  post: function post(req, res) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _req$body, username, password1, password2, password, newUser, savedUser;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, username = _req$body.username, password1 = _req$body.password1, password2 = _req$body.password2;

              if (!(password1 === password2)) {
                _context.next = 14;
                break;
              }

              _context.next = 5;
              return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.hash(password1, 10);

            case 5:
              password = _context.sent;
              newUser = new __WEBPACK_IMPORTED_MODULE_5__models__["a" /* default */]({ username: username, password: password });
              _context.next = 9;
              return newUser.save();

            case 9:
              savedUser = _context.sent;

              console.log('用户注册成功');
              res.status(200).json({
                message: 'Thanks for signing up, ' + savedUser.username + '!'
              });
              _context.next = 16;
              break;

            case 14:
              console.error('用户密码不匹配');
              res.status(400).json({
                message: '密码不匹配'
              });

            case 16:
              _context.next = 22;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context['catch'](0);

              console.error('用户注册失败');
              res.status(400).json({
                message: '注册失败'
              });

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 18]]);
    }))();
  }
};

var logIn = {
  post: function post(req, res) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var _req$body2, username, password, user, passwordHash, matched;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
              _context2.next = 4;
              return __WEBPACK_IMPORTED_MODULE_5__models__["a" /* default */].findOne({ username: username });

            case 4:
              user = _context2.sent;

              console.log(user);

              if (!user) {
                _context2.next = 14;
                break;
              }

              passwordHash = user.password;
              _context2.next = 10;
              return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.compare(password, passwordHash);

            case 10:
              matched = _context2.sent;

              if (matched) {
                res.status(200).json({
                  message: '登录成功',
                  user: user
                });
              } else {
                res.status(401).json({
                  message: '用户名或者密码不正确'
                });
              }
              _context2.next = 15;
              break;

            case 14:
              res.status(401).json({
                message: '用户名不存在'
              });

            case 15:
              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2['catch'](0);

              console.error('用户登录失败');
              res.status(400).json({
                message: '登录失败'
              });

            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 17]]);
    }))();
  }
};

var logOut = {
  post: function post(req, res) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                res.status(200).json({
                  message: 'Sign out successful. Good bye! :)'
                });
              } catch (error) {
                console.error(error);
              }

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export randId */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);


var randId = function randId() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'base64';
  return __WEBPACK_IMPORTED_MODULE_0_crypto___default.a.randomBytes(64).toString(method);
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    minlength: 3
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  admin: {
    type: Boolean,
    default: false,
    require: true
  }
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map