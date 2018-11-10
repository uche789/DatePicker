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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main.scss":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/main.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#date-picker {\n  color: black; }\n  #date-picker table {\n    min-width: 210px; }\n  #date-picker .date-different-month {\n    color: lightgray; }\n  #date-picker input[name=\"date-input-value\"] {\n    display: none; }\n    #date-picker input[name=\"date-input-value\"] + label > div {\n      width: 100%;\n      height: auto;\n      border-radius: 50%;\n      text-align: center; }\n  #date-picker input[name=\"date-input-value\"]:checked + label > div {\n    background-color: lightgray; }\n  #date-picker #month-next-button {\n    float: right; }\n  #date-picker #month-prev-button {\n    float: left; }\n\n#calendar-reset-button a {\n  font-weight: normal;\n  cursor: pointer; }\n\n#month-switcher a {\n  font-weight: normal;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

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
    this.date = {};
    this.MONTH_TYPE = {
      LAST_MONTH: 0,
      THIS_MONTH: 1,
      NEXT_MONTH: 2
    };
  }

  _createClass(CalendarBody, [{
    key: "createBody",
    value: function createBody() {
      var calendarBody = document.querySelector('#date-picker tbody');

      for (var i = 1; i <= 6; i++) {
        var tr = document.createElement('tr');

        for (var j = 1; j <= 7; j++) {
          var td = document.createElement('td');
          td.innerText = 'x';
          tr.appendChild(td);
        }

        calendarBody.appendChild(tr);
      }
    }
  }, {
    key: "generate",
    value: function generate() {
      var calendarTable = document.querySelectorAll('#date-picker tbody td');
      var thisMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.THIS_MONTH);
      var defaultCheckedValue = this.date.current.getDate();
      var dateNumber = 1;
      var startDay = new Date(this.date.currentYear, this.date.currentMonth, 1).getDay() - 1;
      var lastMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.LAST_MONTH);
      var nextMonthNumberOfDays = 1;
      startDay = startDay > -1 ? startDay : 6;
      lastMonthNumberOfDays -= startDay - 1;

      for (var i = 0; i < calendarTable.length; i++) {
        var value = 0;
        var radioButton = document.createElement('input');
        var label = document.createElement('label');
        calendarTable[i].innerHTML = '';
        radioButton.type = 'radio';
        radioButton.name = 'date-input-value';
        radioButton.onchange = this.date.onchange; //Insert days that belong to the previous and next month

        if (dateNumber === 1 || dateNumber === thisMonthNumberOfDays + 1) {
          if (startDay > i) {
            value = lastMonthNumberOfDays;
            radioButton.value = "".concat(lastMonthNumberOfDays, "/").concat(this.date.lastMonth + 1, "/").concat(this.date.lastYear);
            label.innerText = lastMonthNumberOfDays;
            radioButton.id = 'last-month-value_' + lastMonthNumberOfDays;
            label.htmlFor = 'last-month-value_' + lastMonthNumberOfDays;
            lastMonthNumberOfDays++;
          }

          if (dateNumber > thisMonthNumberOfDays) {
            value = nextMonthNumberOfDays;
            radioButton.value = "".concat(nextMonthNumberOfDays, "/").concat(this.date.nextMonth + 1, "/").concat(this.date.nextYear);
            label.innerText = nextMonthNumberOfDays;
            radioButton.id = 'next-month-value_' + nextMonthNumberOfDays;
            label.htmlFor = 'next-month-value_' + nextMonthNumberOfDays;
            nextMonthNumberOfDays++;
          }

          calendarTable[i].classList.add('date-different-month');
        }

        if (startDay === i || dateNumber > 1 && dateNumber <= thisMonthNumberOfDays) {
          value = dateNumber;
          calendarTable[i].classList.remove('date-different-month');
          radioButton.value = "".concat(dateNumber, "/").concat(this.date.currentMonth + 1, "/").concat(this.date.currentYear);
          radioButton.id = 'current-month-value_' + dateNumber;
          label.htmlFor = 'current-month-value_' + dateNumber;
          dateNumber++;

          if (value == defaultCheckedValue && this.date.current.getMonth() === this.date.currentMonth) {
            radioButton.checked = true;
          }
        }

        label.innerHTML = "<div>".concat(value, "</div>");
        calendarTable[i].appendChild(radioButton);
        calendarTable[i].appendChild(label);
      }
    }
  }, {
    key: "update",
    value: function update(data) {
      this.date = Object.assign({}, data);
      this.generate();
    }
  }, {
    key: "getNumberOfDays",
    value: function getNumberOfDays(type) {
      if (type === this.MONTH_TYPE.THIS_MONTH) {
        return new Date(this.date.currentYear, this.date.currentMonth + 1, 0).getDate();
      }

      if (type === this.MONTH_TYPE.LAST_MONTH) {
        return new Date(this.date.lastYear || this.date.currentYear, this.date.lastMonth + 1, 0).getDate();
      }

      if (type === this.MONTH_TYPE.NEXT_MONTH) {
        return new Date(this.date.nextYear || this.date.currentYear, this.date.nextMonth + 1, 0).getDate();
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
    this.date = {};
  }

  _createClass(DatePicker, [{
    key: "initialize",
    value: function initialize() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.translations = Object(_i18n_all__WEBPACK_IMPORTED_MODULE_0__["getTranslations"])()[options.lang || 'en'];
      console.log(this.translations);

      this.date.onchange = options.onchange || function () {};

      this.calendarBody = new _calendar_body_index__WEBPACK_IMPORTED_MODULE_1__["default"](this.translations);
      this.eventObserver.subscribe(this.calendarBody);
      this.createCalendar();
    }
  }, {
    key: "setDefaults",
    value: function setDefaults() {
      this.date.current = new Date();
      this.date.currentYear = this.date.current.getFullYear();
      this.date.currentMonth = this.date.current.getMonth();
      this.updateCalendar();
    }
  }, {
    key: "setDates",
    value: function setDates() {
      if (this.date.currentMonth === 0) {
        this.date.lastMonth = 11;
        this.date.lastYear = new Date(this.date.current.setYear(this.date.currentYear - 1)).getFullYear();
      } else {
        this.date.lastYear = this.date.currentYear;
        this.date.lastMonth = this.date.currentMonth - 1;
      }

      if (this.date.currentMonth >= 11) {
        this.date.nextMonth = 0;
        this.date.nextYear = new Date(this.date.current.setYear(this.date.currentYear + 1)).getFullYear();
      } else {
        this.date.nextMonth = this.date.currentMonth + 1;
        this.date.nextYear = this.date.currentYear;
      }
    }
  }, {
    key: "updateCalendar",
    value: function updateCalendar() {
      this.setDates();
      this.setYearAndMonth();
      this.eventObserver.broadcast(this.date);
    }
  }, {
    key: "createCalendar",
    value: function createCalendar() {
      var calenderElement = document.querySelector('#date-picker');
      calenderElement.innerHTML = "<table>\n            <thead>\n                <tr id=\"month-switcher\">\n                    <th colspan=\"7\">\n                    <span id=\"month-prev-button\">\n                    <button><<</button><button><</button></span> <span id=\"monthName\"></span>\n                    <span id=\"selectedYear\"></span>\n                    <span id=\"month-next-button\"><button>></button><button>>></button></span>\n                    </th>\n                </tr>\n                <tr>\n                    <th colspan=\"7\"><span id=\"calendar-reset-button\"><a>".concat(this.translations.today, "</a></span></th>\n                </tr>\n                <tr>\n                    <th>").concat(this.translations.days.mon, "</th>\n                    <th>").concat(this.translations.days.tue, "</th>\n                    <th>").concat(this.translations.days.wed, "</th>\n                    <th>").concat(this.translations.days.thu, "</th>\n                    <th>").concat(this.translations.days.fri, "</th>\n                    <th>").concat(this.translations.days.sat, "</th>\n                    <th>").concat(this.translations.days.sun, "</th>\n                </tr>\n            </thead>\n            <tbody></tbody>\n        </table>");
      this.setButtons();
      this.calendarBody.createBody();
      this.setDefaults();
    }
  }, {
    key: "setButtons",
    value: function setButtons() {
      var buttonPrevMonth = document.querySelector('#month-prev-button button:nth-child(2)');
      var buttonNextMonth = document.querySelector('#month-next-button button:first-child');
      var buttonPrevYear = document.querySelector('#month-prev-button button:first-child');
      var buttonNextYear = document.querySelector('#month-next-button button:nth-child(2)');
      var resetToTodayButton = document.querySelector('#calendar-reset-button a');
      buttonPrevMonth.onclick = this.prevMonth.bind(this);
      buttonNextMonth.onclick = this.nextMonth.bind(this);
      buttonPrevYear.onclick = this.prevYear.bind(this);
      buttonNextYear.onclick = this.nextYear.bind(this);
      resetToTodayButton.onclick = this.setDefaults.bind(this);
    }
  }, {
    key: "prevYear",
    value: function prevYear() {
      this.date.currentYear--;
      this.updateCalendar();
    }
  }, {
    key: "nextYear",
    value: function nextYear() {
      this.date.currentYear++;
      this.updateCalendar();
    }
  }, {
    key: "prevMonth",
    value: function prevMonth() {
      if (this.date.currentMonth === 0) {
        this.date.currentMonth = 11;
        this.date.currentYear = new Date(this.date.current.setYear(this.date.currentYear - 1)).getFullYear();
      } else {
        this.date.currentMonth--;
      }

      this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);
      this.updateCalendar();
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      if (this.date.currentMonth >= 11) {
        this.date.currentMonth = 0;
        this.date.currentYear = new Date(this.date.current.setYear(this.date.currentYear + 1)).getFullYear();
      } else {
        this.date.currentMonth++;
      }

      this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);
      this.updateCalendar();
    }
  }, {
    key: "setYearAndMonth",
    value: function setYearAndMonth() {
      var months = Object.values(this.translations.months);
      document.getElementById('monthName').innerText = months[this.date.currentMonth];
      document.getElementById('selectedYear').innerText = this.date.currentYear;
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
/* harmony import */ var _ja__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ja */ "./src/i18n/ja.js");



function getTranslations() {
  return {
    en: _en__WEBPACK_IMPORTED_MODULE_0__["en"],
    fr: _fr__WEBPACK_IMPORTED_MODULE_1__["fr"],
    ja: _ja__WEBPACK_IMPORTED_MODULE_2__["ja"]
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
  today: 'Today',
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
  today: 'Au jourd\'hui',
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

/***/ "./src/i18n/ja.js":
/*!************************!*\
  !*** ./src/i18n/ja.js ***!
  \************************/
/*! exports provided: ja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ja", function() { return ja; });
var ja = {
  today: '今日',
  days: {
    mon: '月',
    tue: '火',
    wed: '水',
    thu: '木',
    fri: '金',
    sat: '土',
    sun: '日'
  },
  months: {
    january: '一月',
    febuary: '二月',
    march: '三月',
    april: '四月',
    may: '五月',
    june: '六月',
    july: '七月',
    august: '八月',
    september: '九月',
    october: '十月',
    november: '十一月',
    december: '十二月'
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



__webpack_require__(/*! ./main.scss */ "./src/main.scss");



/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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