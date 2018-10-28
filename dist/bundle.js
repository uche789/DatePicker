var Calendar =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calendar-body/index.js":
/*!************************************!*\
  !*** ./src/calendar-body/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarBody; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalendarBody =
/*#__PURE__*/
function () {
  function CalendarBody(translations) {
    _classCallCheck(this, CalendarBody);

    this.translations = translations;
    this.MONTH_TYPE = {
      LAST_MONTH: 0,
      THIS_MONTH: 1,
      NEXT_MONTH: 2
    };
  }

  _createClass(CalendarBody, [{
    key: "generate",
    value: function generate() {
      var calendarTable = document.querySelectorAll('#calendar tbody td');
      var thisMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.THIS_MONTH);
      var dateNumber = 1;
      var startDay = new Date(this.currentYear, this.currentMonth, 1).getDay() - 1;
      var lastMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.LAST_MONTH) - (startDay - 1);
      var nextMonthNumberOfDays = 1;

      if (startDay === -1) {
        startDay = 6;
        lastMonthNumberOfDays -= 6;
      }

      for (var i = 0; i < calendarTable.length; i++) {
        if (dateNumber === 1 || dateNumber === thisMonthNumberOfDays + 1) {
          if (startDay > i) {
            calendarTable[i].innerText = lastMonthNumberOfDays++;
          }

          if (dateNumber > thisMonthNumberOfDays) {
            calendarTable[i].innerText = nextMonthNumberOfDays++;
          }

          calendarTable[i].classList.add('otherMonth');
        }

        if (startDay === i || dateNumber > 1 && dateNumber <= thisMonthNumberOfDays) {
          calendarTable[i].innerText = dateNumber;
          calendarTable[i].classList.remove('otherMonth');
          dateNumber++;
        }
      }
    }
  }, {
    key: "update",
    value: function update(data) {
      this.currentDate = data.currentDate;
      this.currentYear = data.currentYear;
      this.currentMonth = data.currentMonth;
    }
  }, {
    key: "getNumberOfDays",
    value: function getNumberOfDays(type) {
      var lastMonth, nextMonth, lastYear, nextYear;

      if (this.currentMonth === 0) {
        lastMonth = 11;
        lastYear = new Date(this.currentDate.setYear(this.currentYear + 1)).getFullYear();
      } else {
        lastMonth = this.currentMonth - 1;
      }

      if (this.currentMonth >= 11) {
        nextMonth = 0;
        nextYear = new Date(this.currentDate.setYear(this.currentYear - 1)).getFullYear();
      } else {
        nextMonth = this.currentMonth + 1;
      }

      if (type === this.MONTH_TYPE.THIS_MONTH) {
        return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      }

      if (type === this.MONTH_TYPE.LAST_MONTH) {
        return new Date(lastYear || this.currentYear, lastMonth + 1, 0).getDate();
      }

      if (type === this.MONTH_TYPE.NEXT_MONTH) {
        return new Date(nextYear || this.currentYear, nextMonth + 1, 0).getDate();
      }
    }
  }]);

  return CalendarBody;
}();



/***/ }),

/***/ "./src/date-picker/index.js":
/*!**********************************!*\
  !*** ./src/date-picker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var _i18n_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n/all */ "./src/i18n/all.js");
/* harmony import */ var _calendar_body_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-body/index */ "./src/calendar-body/index.js");
/* harmony import */ var _event_observer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-observer/index */ "./src/event-observer/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DatePicker =
/*#__PURE__*/
function () {
  function DatePicker() {
    _classCallCheck(this, DatePicker);

    this.eventObserver = new _event_observer_index__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  _createClass(DatePicker, [{
    key: "initialize",
    value: function initialize(options) {
      this.translations = Object(_i18n_all__WEBPACK_IMPORTED_MODULE_0__["getTranslations"])()[options.lang];
      this.calendarBody = new _calendar_body_index__WEBPACK_IMPORTED_MODULE_1__["default"](this.translations);
      this.eventObserver.subscribe(this.calendarBody);
      this.createCalendar();
    }
  }, {
    key: "setDefaults",
    value: function setDefaults() {
      this.currentDate = new Date();
      this.currentYear = this.currentDate.getFullYear();
      this.currentMonth = this.currentDate.getMonth();
      this.updateCalendar();
    }
  }, {
    key: "updateCalendar",
    value: function updateCalendar() {
      this.setYearAndMonth();
      this.eventObserver.broadcast(this);
      this.calendarBody.generate();
    }
  }, {
    key: "createCalendar",
    value: function createCalendar() {
      var calenderElement = document.querySelector('#calendar');
      calenderElement.innerHTML = "<table>\n            <thead>\n                <tr id=\"month-switcher\">\n                    <th colspan=\"7\"><span id=\"month-prev-button\"></span> <span id=\"monthName\"></span> <span id=\"selectedYear\"></span> <span id=\"month-next-button\"></span></th>\n                </tr>\n                <tr>\n                    <td colspan=\"7\"><span id=\"calendar-reset-button\"></span></td>\n                </tr>\n                <tr>\n                    <th>".concat(this.translations.days.mon, "</th>\n                    <th>").concat(this.translations.days.tue, "</th>\n                    <th>").concat(this.translations.days.wed, "</th>\n                    <th>").concat(this.translations.days.thu, "</th>\n                    <th>").concat(this.translations.days.fri, "</th>\n                    <th>").concat(this.translations.days.sat, "</th>\n                    <th>").concat(this.translations.days.sun, "</th>\n                </tr>\n            </thead>\n            <tbody></tbody>\n        </table>");
      this.setButtons();
      this.setDefaults();
    }
  }, {
    key: "setButtons",
    value: function setButtons() {
      var monthPrev = document.querySelector('#month-prev-button');
      var monthNext = document.querySelector('#month-next-button');
      var resetButtonContainer = document.querySelector('#calendar-reset-button');
      var buttonPrevMonth = document.createElement('button');
      buttonPrevMonth.onclick = this.prevMonth.bind(this);
      buttonPrevMonth.innerText = '<';
      monthPrev.appendChild(buttonPrevMonth);
      var buttonNextMonth = document.createElement('button');
      buttonNextMonth.onclick = this.nextMonth.bind(this);
      buttonNextMonth.innerText = '>';
      monthNext.appendChild(buttonNextMonth);
      var resetButton = document.createElement('button');
      resetButton.onclick = this.setDefaults.bind(this);
      resetButton.innerHTML = this.translations.reset;
      resetButtonContainer.appendChild(resetButton);
    }
  }, {
    key: "prevMonth",
    value: function prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear = new Date(this.currentDate.setYear(this.currentYear - 1)).getFullYear();
        this.currentDate = new Date(this.currentYear, this.currentMonth, 0);
      } else {
        this.currentMonth--;
      }

      this.updateCalendar();
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      if (this.currentMonth >= 11) {
        this.currentMonth = 0;
        this.currentYear = new Date(this.currentDate.setYear(this.currentYear + 1)).getFullYear();
        this.currentDate = new Date(this.currentYear, this.currentMonth, 1);
      } else {
        this.currentMonth++;
      }

      this.setYearAndMonth();
      this.calendarBody.generate();
      this.eventObserver.broadcast(this);
    }
  }, {
    key: "setYearAndMonth",
    value: function setYearAndMonth() {
      var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      document.getElementById('monthName').innerText = months[this.currentMonth];
      document.getElementById('selectedYear').innerText = this.currentYear;
    }
  }]);

  return DatePicker;
}();



/***/ }),

/***/ "./src/event-observer/index.js":
/*!*************************************!*\
  !*** ./src/event-observer/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventObserver; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventObserver =
/*#__PURE__*/
function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.observers = [];
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      this.observers.filter(function (instance) {
        return observer != instance;
      });
    }
  }, {
    key: "broadcast",
    value: function broadcast(changes) {
      this.observers.forEach(function (observers) {
        return observers.update(changes);
      });
    }
  }]);

  return EventObserver;
}();



/***/ }),

/***/ "./src/i18n/all.js":
/*!*************************!*\
  !*** ./src/i18n/all.js ***!
  \*************************/
/*! exports provided: getTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslations", function() { return getTranslations; });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./src/i18n/en.js");
/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr */ "./src/i18n/fr.js");


function getTranslations() {
  return {
    en: _en__WEBPACK_IMPORTED_MODULE_0__["en"],
    fr: _fr__WEBPACK_IMPORTED_MODULE_1__["fr"]
  };
}

/***/ }),

/***/ "./src/i18n/en.js":
/*!************************!*\
  !*** ./src/i18n/en.js ***!
  \************************/
/*! exports provided: en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "en", function() { return en; });
var en = {
  reset: 'Reset',
  days: {
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun'
  },
  months: {
    january: 'January',
    febuary: 'Febuary',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December'
  }
};

/***/ }),

/***/ "./src/i18n/fr.js":
/*!************************!*\
  !*** ./src/i18n/fr.js ***!
  \************************/
/*! exports provided: fr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return fr; });
var fr = {
  reset: 'Reset',
  days: {
    mon: 'Lun',
    tue: 'Mar',
    wed: 'Mer',
    thu: 'Jeu',
    fri: 'Ven',
    sat: 'Sam',
    sun: 'Dim'
  },
  months: {
    january: 'Janvier',
    febuary: 'Février',
    march: 'Mars',
    april: 'April',
    may: 'Mai',
    june: 'Juin',
    july: 'Julliet',
    august: 'Août',
    september: 'Septembre',
    october: 'Octobre',
    november: 'Novembre',
    december: 'Décembre'
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker/index */ "./src/date-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _date_picker_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map