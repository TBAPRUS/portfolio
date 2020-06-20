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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader */ \"./src/preloader.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ \"./src/scroll.js\");\n/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language */ \"./src/language.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n\n\n\n\n\nvar preloader = new _preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar scroll = new _scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar language = new _language__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar burger = new _burger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(window, 'load', preloader.loaded);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Burger; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Burger = /*#__PURE__*/function () {\n  function Burger() {\n    _classCallCheck(this, Burger);\n\n    this.burger = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#burger');\n    this.close = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#close');\n    this.change = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('.change');\n    this.ulmenu = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('nav ul');\n    this.handleClickBurger = this.handleClickBurger.bind(this);\n    this.handleClickClose = this.handleClickClose.bind(this);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(this.burger, 'click', this.handleClickBurger);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(this.close, 'click', this.handleClickClose);\n  }\n\n  _createClass(Burger, [{\n    key: \"setDisplay\",\n    value: function setDisplay(array) {\n      array.forEach(function (_ref) {\n        var el = _ref.el,\n            val = _ref.val;\n        el.style.display = val;\n      });\n    }\n  }, {\n    key: \"handleClickBurger\",\n    value: function handleClickBurger() {\n      this.setDisplay([{\n        el: this.ulmenu,\n        val: 'block'\n      }, {\n        el: this.burger,\n        val: 'none'\n      }, {\n        el: this.close,\n        val: 'block'\n      }, {\n        el: this.change,\n        val: 'block'\n      }]);\n      this.ulmenu.className = 'true';\n      this.close.className = 'true';\n      this.change.classList.toggle('true');\n    }\n  }, {\n    key: \"handleClickClose\",\n    value: function handleClickClose() {\n      var _this = this;\n\n      this.ulmenu.className = 'false';\n      this.close.className = 'false';\n      this.change.classList.toggle('true');\n      this.change.classList.toggle('false');\n      setTimeout(function () {\n        _this.setDisplay([{\n          el: _this.ulmenu,\n          val: 'none'\n        }, {\n          el: _this.burger,\n          val: 'block'\n        }, {\n          el: _this.close,\n          val: 'none'\n        }, {\n          el: _this.change,\n          val: 'none'\n        }]);\n\n        _this.change.classList.toggle('false');\n\n        _this.burger.className = 'true';\n      }, 1000);\n    }\n  }]);\n\n  return Burger;\n}();\n\n\n\n//# sourceURL=webpack:///./src/burger.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: $qs, $qsa, $on */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$qs\", function() { return $qs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$qsa\", function() { return $qsa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$on\", function() { return $on; });\nvar $qs = function $qs(selector, scope) {\n  return (scope || document).querySelector(selector);\n};\nvar $qsa = function $qsa(selector, scope) {\n  return (scope || document).querySelectorAll(selector);\n};\nvar $on = function $on(target, type, callback) {\n  target.addEventListener(type, callback);\n};\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Language; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Language = /*#__PURE__*/function () {\n  function Language() {\n    _classCallCheck(this, Language);\n\n    this.toEng = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#toeng');\n    this.toRu = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#toru');\n    this.active;\n    this.active = localStorage.getItem('active');\n\n    if (this.active === 'toru') {\n      this.changeLanguage(ru, this.toRu, this.toEng)();\n    }\n\n    this.changeLanguage = this.changeLanguage.bind(this);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(this.toEng, 'click', this.changeLanguage(eng, this.toEng, this.toRu));\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(this.toRu, 'click', this.changeLanguage(ru, this.toRu, this.toEng));\n  }\n\n  _createClass(Language, [{\n    key: \"changeLanguage\",\n    value: function changeLanguage(lan, newLan, oldLan) {\n      return function (e) {\n        if (newLan.className !== 'active') {\n          localStorage.setItem('active', newLan.id);\n          newLan.className = 'active';\n          oldLan.className = '';\n          if (e) e.preventDefault();\n\n          var _loop = function _loop(attr) {\n            var els = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qsa\"])(\"[data-\".concat(attr, \"]\"));\n            els.forEach(function (el) {\n              return el.innerHTML = lan[attr];\n            });\n          };\n\n          for (var attr in lan) {\n            _loop(attr);\n          }\n        }\n      };\n    }\n  }]);\n\n  return Language;\n}();\n\n\nvar eng = {\n  home: 'Home',\n  aboutme: 'About me',\n  skills: 'Skills',\n  portfolio: 'Portfolio',\n  contacts: 'Contacts',\n  name: 'Denis Novik',\n  smallinf: 'UX | UI designer 24 years old, Minsk',\n  aboutme1: \"Hi, I'm Denis \\u2013 UX/UI designer from Minsk.<br />\\n    I'm interested in design and everything connected with it.<br />\",\n  aboutme2: \"I'm studying at courses \\\"Web and mobile design interfaces\\\"<br />\\n    in IT-Academy.\",\n  aboutme3: \"Ready to implement excellent projects<br />\\n    with wonderful people.\",\n  workprog: 'I work in such programs as',\n  work1: 'Online fashion store - Homepage',\n  work2: 'Reebok Store - Concept',\n  work3: 'Braun Landing Page - Concepte',\n  chat: \"Want to know more or just chat?<br />\\n    You are welcome!\",\n  send: 'Send message',\n  like: \"Like me on<br />\\n    LinkedIn, Instagram, Behance, Dribble\"\n};\nvar ru = {\n  home: 'Главная',\n  aboutme: 'О мне',\n  skills: 'Навыки',\n  portfolio: 'Портфолио',\n  contacts: 'Контакты',\n  name: 'Денис Новик',\n  smallinf: 'UX | UI дизайнер 24 года, Минск',\n  aboutme1: \"\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442, \\u041C\\u0435\\u043D\\u044F \\u0437\\u043E\\u0432\\u0443\\u0442 \\u0414\\u0435\\u043D\\u0438\\u0441, \\u044F UX/UI \\u0434\\u0438\\u0437\\u0430\\u0439\\u043D\\u0435\\u0440 \\u0438\\u0437 \\u041C\\u0438\\u043D\\u0441\\u043A\\u0430.<br />\\n    \\u041C\\u043D\\u0435 \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u0435\\u043D \\u0434\\u0438\\u0437\\u0430\\u0439\\u043D \\u0438 \\u0432\\u0441\\u0435 \\u0447\\u0442\\u043E \\u0441 \\u043D\\u0438\\u043C \\u0441\\u0432\\u044F\\u0437\\u0430\\u043D\\u043E.<br />\",\n  aboutme2: \"\\u042F \\u0443\\u0447\\u0443\\u0441\\u044C \\u043D\\u0430 \\u043A\\u0443\\u0440\\u0441\\u0430\\u0445 \\\"Web and mobile design interfaces\\\"<br />\\n    \\u0432 IT-Academy.\",\n  aboutme3: \"\\u0413\\u043E\\u0442\\u043E\\u0432 \\u0440\\u0435\\u0430\\u043B\\u0438\\u0437\\u043E\\u0432\\u0430\\u0442\\u044C \\u043E\\u0442\\u043B\\u0438\\u0447\\u043D\\u044B\\u0435 \\u043F\\u0440\\u043E\\u0435\\u043A\\u0442\\u044B<br />\\n    \\u0441 \\u0437\\u0430\\u043C\\u0435\\u0447\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u043C\\u0438 \\u043B\\u044E\\u0434\\u044C\\u043C\\u0438.\",\n  workprog: 'Я работаю в таких программах, как:',\n  work1: 'Интернет магазин модной одежды - домашняя страница',\n  work2: 'Reebok Store - Концепция',\n  work3: 'Braun Landing Page - Концепция',\n  chat: \"\\u0425\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0443\\u0437\\u043D\\u0430\\u0442\\u044C \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 \\u0438\\u043B\\u0438 \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E \\u043F\\u043E\\u043E\\u0431\\u0449\\u0430\\u0442\\u044C\\u0441\\u044F? <br /> \\u0414\\u043E\\u0431\\u0440\\u043E \\u043F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C!\",\n  send: 'Отправить сообщение',\n  like: \"\\u042F \\u0432<br />\\n    LinkedIn, Instagram, Behance, Dribble\"\n};\n\n//# sourceURL=webpack:///./src/language.js?");

/***/ }),

/***/ "./src/preloader.js":
/*!**************************!*\
  !*** ./src/preloader.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Preloader; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Preloader = /*#__PURE__*/function () {\n  function Preloader() {\n    _classCallCheck(this, Preloader);\n  }\n\n  _createClass(Preloader, [{\n    key: \"constuctor\",\n    value: function constuctor() {\n      this.preloader = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#preloader');\n    }\n  }, {\n    key: \"loaded\",\n    value: function loaded() {\n      var _this = this;\n\n      this.preloader.className = 'loaded';\n      setTimeout(function () {\n        _this.preloader.style.display = 'none';\n      }, 500);\n    }\n  }]);\n\n  return Preloader;\n}();\n\n\n\n//# sourceURL=webpack:///./src/preloader.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scroll; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Scroll = /*#__PURE__*/function () {\n  function Scroll() {\n    _classCallCheck(this, Scroll);\n\n    this.header = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('header');\n    this.shortbio = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#shortbio');\n    this.aboutme = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#aboutme');\n    this.skills = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#skills');\n    this.portfolio = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#portfolio');\n    this.contacts = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#contacts');\n    this.links = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qsa\"])('ul li a');\n    this.totop = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$qs\"])('#totop');\n    !this.totop.style.display ? this.totop.style.display = 'none' : null;\n    this.handleScroll = this.handleScroll.bind(this);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(window, 'scroll', this.handleScroll);\n  }\n\n  _createClass(Scroll, [{\n    key: \"override\",\n    value: function override(_ref) {\n      var y = _ref.y,\n          height = _ref.height;\n      return y + height > 5;\n    }\n  }, {\n    key: \"totopShowHide\",\n    value: function totopShowHide() {\n      var _this = this;\n\n      if (pageYOffset > this.header.offsetHeight * 2) {\n        if (this.totop.style.display === 'none') {\n          this.totop.classList.replace('false', 'true');\n          this.totop.style.display = 'block';\n        }\n      } else {\n        if (this.totop.className !== 'false') {\n          this.totop.classList.replace('true', 'false');\n          setTimeout(function () {\n            _this.totop.style.display = 'none';\n          }, 500);\n        }\n      }\n    }\n  }, {\n    key: \"disableAllLink\",\n    value: function disableAllLink() {\n      this.links.forEach(function (link) {\n        return link.className = '';\n      });\n    }\n  }, {\n    key: \"activeLink\",\n    value: function activeLink() {\n      if (this.override(this.shortbio.getBoundingClientRect())) {\n        this.links[0].className = 'active';\n      } else if (this.override(this.aboutme.getBoundingClientRect())) {\n        this.links[1].className = 'active';\n      } else if (this.override(this.skills.getBoundingClientRect())) {\n        this.links[2].className = 'active';\n      } else if (this.override(this.portfolio.getBoundingClientRect())) {\n        this.links[3].className = 'active';\n      } else if (this.override(this.contacts.getBoundingClientRect())) {\n        this.links[4].className = 'active';\n      }\n    }\n  }, {\n    key: \"handleScroll\",\n    value: function handleScroll() {\n      this.totopShowHide();\n      this.disableAllLink();\n      this.activeLink();\n    }\n  }]);\n\n  return Scroll;\n}();\n\n\n\n//# sourceURL=webpack:///./src/scroll.js?");

/***/ })

/******/ });