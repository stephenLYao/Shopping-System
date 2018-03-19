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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  port: 9001,
  mongodbUrl: 'mongodb://localhost:27017/shopping',
  tokenSecret: 'SHOPPING'
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("time-formater");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export randId */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);


var randId = function randId() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'base64';
  return __WEBPACK_IMPORTED_MODULE_0_crypto___default.a.randomBytes(64).toString(method);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  id: Number,
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
  createAt: String
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', userSchema);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);




var types = ['user_id', 'product_id', 'pic_id'];
var idsSchema = new __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema({
  // order_id: Number,
  // address_id: Number,
  // cart_id: Number,
  // img_id: Number,
  // category_id: Number,
  // item_id: Number,
  // sku_id: Number,
  // admin_id: Number,
  user_id: Number,
  product_id: Number,
  pic_id: Number
});

var Ids = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Ids', idsSchema);
Ids.findOne(function (err, data) {
  if (err) throw Error(err);
  if (!data) {
    var newIds = new Ids({
      user_id: 0,
      product_id: 0,
      pic_id: 0
    });
    newIds.save();
  }
});
var getId = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(type) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (types.includes(type)) {
              _context.next = 3;
              break;
            }

            console.log('类型错误');
            return _context.abrupt('return');

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return Ids.findOne();

          case 6:
            id = _context.sent;

            id[type]++;
            _context.next = 10;
            return id.save();

          case 10:
            return _context.abrupt('return', id[type]);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](3);

            console.log('获取Id失败：' + _context.t0);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 13]]);
  }));

  return function getId(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* unused harmony default export */ var _unused_webpack_default_export = (Ids);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_connect_history_api_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chalk__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_default__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_index__ = __webpack_require__(16);









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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("connect-history-api-fallback");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_routes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_routes__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routes__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_routes__ = __webpack_require__(31);






var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use('/users', __WEBPACK_IMPORTED_MODULE_1__users_routes__["a" /* default */]);
router.use('/products', __WEBPACK_IMPORTED_MODULE_2__products_routes__["a" /* default */]);
router.use('/category', __WEBPACK_IMPORTED_MODULE_4__category_routes__["a" /* default */]);
router.use('/admin', __WEBPACK_IMPORTED_MODULE_3__admin_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(18);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* index */].post);
router.post('/log-in', __WEBPACK_IMPORTED_MODULE_1__controllers__["d" /* logIn */].post);
router.post('/log-out', __WEBPACK_IMPORTED_MODULE_1__controllers__["e" /* logOut */].post);
router.get('/counts', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* getUserCounts */]);
router.get('/lists', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* getUserLists */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserLists; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_formater__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_formater___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_time_formater__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ids__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_default__ = __webpack_require__(4);










var index = {
  post: function post(req, res) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _req$body, username, password1, password2, password, id, createAt, newUser, savedUser;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, username = _req$body.username, password1 = _req$body.password1, password2 = _req$body.password2;

              if (!(password1 === password2)) {
                _context.next = 18;
                break;
              }

              _context.next = 5;
              return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.hash(password1, 10);

            case 5:
              password = _context.sent;
              _context.next = 8;
              return Object(__WEBPACK_IMPORTED_MODULE_7__utils_ids__["a" /* getId */])('user_id');

            case 8:
              id = _context.sent;
              createAt = __WEBPACK_IMPORTED_MODULE_4_time_formater___default()().format('YYYY-MM-DD HH:mm');
              newUser = new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */]({ id: id, username: username, password: password, createAt: createAt });
              _context.next = 13;
              return newUser.save();

            case 13:
              savedUser = _context.sent;

              console.log('用户注册成功');
              res.status(200).json({
                message: 'Thanks for signing up, ' + savedUser.username + '!'
              });
              _context.next = 20;
              break;

            case 18:
              console.error('用户密码不匹配');
              res.status(400).json({
                message: '密码不匹配'
              });

            case 20:
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context['catch'](0);

              console.error('用户注册失败');
              res.status(400).json({
                message: '注册失败'
              });

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 22]]);
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
              return __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */].findOne({ username: username });

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

var getUserCounts = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var count;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */].count();

          case 3:
            count = _context4.sent;

            res.status(200).json({
              count: count
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            res.status(503).json({
              message: '获取用户数量失败'
            });

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function getUserCounts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();;

var getUserLists = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var _req$query, _req$query$offset, offset, _req$query$limit, limit, users;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$query = req.query, _req$query$offset = _req$query.offset, offset = _req$query$offset === undefined ? 0 : _req$query$offset, _req$query$limit = _req$query.limit, limit = _req$query$limit === undefined ? 20 : _req$query$limit;
            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */].find({}).sort({ id: -1 }).limit(Number(limit)).skip(Number(offset));

          case 4:
            users = _context5.sent;

            res.status(200).json({
              users: users
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](1);

            res.status(503).json({
              message: '获取用户列表失败'
            });

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[1, 8]]);
  }));

  return function getUserLists(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(21);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/counts', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* getProductsAllCounts */]);
router.get('/lists', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* getProductsList */]);
router.get('/:category', __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* products */].get);
router.post('/img', __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* products */].postImg);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* products */].post);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductsAllCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formidable__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_formidable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ids__ = __webpack_require__(10);




var getPicUrl = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5(req) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              var form = new __WEBPACK_IMPORTED_MODULE_4_formidable___default.a.IncomingForm();
              form.uploadDir = './server/public/imgs/';
              form.keepExtensions = true;
              form.parse(req, function () {
                var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4(err, fields, files) {
                  var id, picName, fullName, newPath;
                  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return Object(__WEBPACK_IMPORTED_MODULE_7__utils_ids__["a" /* getId */])('pic_id');

                        case 2:
                          id = _context4.sent;
                          picName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16) + id;
                          fullName = picName + __WEBPACK_IMPORTED_MODULE_5_path___default.a.extname(files.file.name);
                          newPath = './server/public/imgs/' + fullName;
                          _context4.prev = 6;
                          _context4.next = 9;
                          return __WEBPACK_IMPORTED_MODULE_6_fs___default.a.rename(files.file.path, newPath);

                        case 9:
                          // gm(newPath)
                          // .resize(200, 200, '!')
                          // .write(newPath, async (err) => {
                          //   if (err) {
                          //     console.log('裁剪图片失败');
                          //     reject(err);
                          //   }
                          //   resolve(fullName);
                          // });
                          resolve(fullName);
                          _context4.next = 17;
                          break;

                        case 12:
                          _context4.prev = 12;
                          _context4.t0 = _context4['catch'](6);

                          console.log('保存图片失败', _context4.t0);
                          __WEBPACK_IMPORTED_MODULE_6_fs___default.a.unlink(files.file.path);
                          reject(_context4.t0);

                        case 17:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, _this4, [[6, 12]]);
                }));

                return function (_x2, _x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getPicUrl(_x) {
    return _ref.apply(this, arguments);
  };
}();







var products = {
  get: function get(req, res) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var category;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                category = req.params.category;

                if (category === 'recommends') {
                  res.json({
                    lists: recommends
                  });
                }
              } catch (error) {
                console.log(error);
              }

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  post: function post(req, res) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var _req$body, name, desc, category, specs, picList, id, monthsales, newProduct, productsSpecs, product;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, name = _req$body.name, desc = _req$body.desc, category = _req$body.category, specs = _req$body.specs, picList = _req$body.picList;
              _context2.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_7__utils_ids__["a" /* getId */])('product_id');

            case 4:
              id = _context2.sent;
              monthsales = Math.ceil(Math.random() * 1000);
              newProduct = {
                id: id,
                name: name,
                desc: desc,
                category: category,
                pic_list: picList,
                month_sales: monthsales,
                specs: [],
                comments: []
              };
              productsSpecs = [];

              if (specs.length > 0) {
                specs.forEach(function (item) {
                  productsSpecs.push({
                    spec_name: item.specs,
                    pack_fee: item.packFee,
                    price: item.price
                  });
                });
              }
              newProduct.specs = productsSpecs;
              _context2.prev = 10;
              _context2.next = 13;
              return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].create(newProduct);

            case 13:
              product = _context2.sent;
              _context2.next = 16;
              return product.save();

            case 16:
              res.status(200).json({
                message: '添加商品成功'
              });
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2['catch'](10);

              console.log('添加商品失败', _context2.t0);
              res.status(400).json({
                message: '添加商品失败'
              });

            case 23:
              _context2.next = 29;
              break;

            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2['catch'](0);

              console.log('添加商品失败', _context2.t1);
              res.status(400).json({
                message: '添加商品失败'
              });

            case 29:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 25], [10, 19]]);
    }))();
  },
  postImg: function postImg(req, res) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
      var picUrl;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getPicUrl(req);

            case 3:
              picUrl = _context3.sent;

              res.status(200).json({
                status: 200,
                message: '上传成功',
                picUrl: picUrl
              });
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              console.log('上传图片失败', _context3.t0);
              res.status(1).json({
                message: '上传图片失败'
              });

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 7]]);
    }))();
  }
};

var getProductsAllCounts = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var counts;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].count();

          case 3:
            counts = _context6.sent;

            res.status(200).json({
              counts: counts,
              message: '获取商品列表数量成功'
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);

            res.status(1).json({
              message: '获取商品列表数量失败'
            });

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 7]]);
  }));

  return function getProductsAllCounts(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getProductsList = function () {
  var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var _req$query, _req$query$offset, offset, _req$query$limit, limit, products;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$query = req.query, _req$query$offset = _req$query.offset, offset = _req$query$offset === undefined ? 0 : _req$query$offset, _req$query$limit = _req$query.limit, limit = _req$query$limit === undefined ? 20 : _req$query$limit;
            products = [];
            _context7.prev = 2;

            if (!req.query.category) {
              _context7.next = 9;
              break;
            }

            _context7.next = 6;
            return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].find({ category: req.query.category }).sort({ id: -1 }).limit(Number(limit)).skip(Number(offset));

          case 6:
            products = _context7.sent;
            _context7.next = 12;
            break;

          case 9:
            _context7.next = 11;
            return __WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].find({}).sort({ id: -1 }).limit(Number(limit)).skip(Number(offset));

          case 11:
            products = _context7.sent;

          case 12:
            res.status(200).json({
              products: products,
              message: '获取用户列表成功'
            });
            _context7.next = 18;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7['catch'](2);

            res.status(1).json({
              message: '获取用户列表失败'
            });

          case 18:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[2, 15]]);
  }));

  return function getProductsList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();;

var recommends = [{
  id: 1,
  picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
  desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量'
}];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var productsSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  id: Number,
  pic_list: [String],
  name: String,
  desc: String,
  category: String,
  month_sales: Number,
  specs: [{
    spec_name: String,
    pack_fee: Number,
    price: Number,
    sold_out: false
  }],
  comments: [String]
});

var Products = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Products', productsSchema);

/* harmony default export */ __webpack_exports__["a"] = (Products);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(32);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* category */].get);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* category */].post);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return category; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(33);




var category = {
  get: function get(req, res) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var categories;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */].find({}, function (err, data) {
                if (!err) {
                  if (data && data.length < 1) {
                    for (var i = 0; i < INITCATEGORY.length; i++) {
                      __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */].create(INITCATEGORY[i]);
                    }
                  }
                }
              });

            case 3:
              categories = _context.sent;

              res.status(200).json({
                categories: categories
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              res.status(1).json({
                message: '获取种类失败'
              });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }))();
  },
  post: function post(req, res) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var name, tag, isExist, _category;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              name = req.name, tag = req.tag;
              _context2.next = 4;
              return __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */].findOne({ name: name });

            case 4:
              isExist = _context2.sent;

              if (isExist) {
                _context2.next = 12;
                break;
              }

              _category = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */]({ name: name, tag: tag });
              _context2.next = 9;
              return _category.save();

            case 9:
              res.status(200).json({
                message: '添加种类成功'
              });
              _context2.next = 13;
              break;

            case 12:
              res.status(1).json({
                message: '种类名已存在'
              });

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2['catch'](0);

              res.status(1).json({
                message: '添加种类失败'
              });

            case 18:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 15]]);
    }))();
  }
};

var INITCATEGORY = [{
  name: '服装',
  tag: 'clothes'
}, {
  name: '鞋靴',
  tag: 'shoes'
}, {
  name: '家电',
  tag: 'appliances'
}, {
  name: '运动',
  tag: 'sports'
}, {
  name: '美食',
  tag: 'foods'
}, {
  name: '家具',
  tag: 'furnitures'
}, {
  name: '汽车',
  tag: 'cars'
}];

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var categorySchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  name: String,
  tag: String
});

var Category = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Category', categorySchema);

/* harmony default export */ __webpack_exports__["a"] = (Category);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(35);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/login', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* logIn */].post);
router.post('/logout', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* logOut */].post);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_formater__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_time_formater___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_time_formater__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__(36);







// import config from '../../config/default';

var register = {
  post: function post(req, res) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _req$body, username, password, createAt, newPassword, newUser, savedUser;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, username = _req$body.username, password = _req$body.password;
              createAt = __WEBPACK_IMPORTED_MODULE_4_time_formater___default()().format('YYYY-MM-DD HH:mm');
              _context.next = 5;
              return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.hash(password, 10);

            case 5:
              newPassword = _context.sent;
              newUser = new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */]({ username: username, newPassword: newPassword, createAt: createAt });
              _context.next = 9;
              return newUser.save();

            case 9:
              savedUser = _context.sent;

              console.log('用户注册成功');
              res.status(200).json({
                message: 'Thanks for signing up, ' + savedUser.username + '!'
              });
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);

              console.error('用户注册失败');
              res.status(400).json({
                message: '注册失败'
              });

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 14]]);
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
              return __WEBPACK_IMPORTED_MODULE_6__models__["a" /* default */].findOne({ username: username });

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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var adminSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  createAt: String,
  avatar: String
});

var Admin = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Admin', adminSchema);

/* harmony default export */ __webpack_exports__["a"] = (Admin);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map