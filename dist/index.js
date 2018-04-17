(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("proto-json-view", ["react"], factory);
	else if(typeof exports === 'object')
		exports["proto-json-view"] = factory(require("react"));
	else
		root["proto-json-view"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(15)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 2 */
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
/* 3 */
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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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

var	fixUrls = __webpack_require__(22);

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var types = ['int', 'double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64', 'boolean', 'string', 'bytes', 'enum', 'null', 'message'];

var typesMap = {
  INT: 'int',
  DOUBLE: 'double',
  FLOAT: 'float',
  INT32: 'int32',
  INT64: 'int64',
  UINT32: 'uint32',
  UINT64: 'uint64',
  SINT32: 'sint32',
  SINT64: 'sint64',
  FIXED32: 'fixed32',
  FIXED64: 'fixed64',
  SFIXED32: 'sfixed32',
  SFIXED64: 'sfixed64',

  BOOLEAN: 'boolean',
  STRING: 'string',
  BYTES: 'bytes',
  ENUM: 'enum',
  NULL: 'null',

  MESSAGE: 'message'
};

function preventDefault(e) {
  if (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }
}

function isNumber(type) {
  var valid = ['int', 'double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'fixed64', 'sfixed32', 'sfixed64'];
  return valid.includes(type);
}

function isNull(type) {
  return type === typesMap.NULL;
}

function isBool(type) {
  return type === typesMap.BOOLEAN;
}

function isString(type) {
  var valid = [typesMap.STRING, typesMap.BYTES];
  return valid.includes(type);
}

exports.types = types;
exports.typesMap = typesMap;
exports.preventDefault = preventDefault;
exports.isNumber = isNumber;
exports.isBool = isBool;
exports.isString = isString;
exports.isNull = isNull;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Value = __webpack_require__(11);

var _Value2 = _interopRequireDefault(_Value);

var _Repeated = __webpack_require__(23);

var _Repeated2 = _interopRequireDefault(_Repeated);

var _Tooltip = __webpack_require__(13);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Icon = __webpack_require__(12);

var _Icon2 = _interopRequireDefault(_Icon);

__webpack_require__(30);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _ref;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        nestedDepth = _this$props.nestedDepth,
        collapsed = _this$props.collapsed;

    _this.state = {
      collapsed: typeof collapsed === 'number' ? nestedDepth >= collapsed : !!collapsed
    };
    return _this;
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var collapsed = this.state.collapsed;
      var _props = this.props,
          value = _props.value,
          length = _props.value.length,
          name = _props.name,
          nestedDepth = _props.nestedDepth,
          documentation = _props.documentation;

      var isRoot = nestedDepth === 1;
      return _react2.default.createElement(
        'div',
        {
          className: 'json-view' + (collapsed ? ' json-view-collapsed' : '') + (isRoot ? ' json-view-root' : '') + ' message',
          key: name
        },
        _react2.default.createElement(
          'div',
          {
            className: 'json-view-start',
            onClick: this.handleToggleCollapsed
          },
          _react2.default.createElement(_Icon2.default, { type: 'COLLAPSED', className: 'json-view-expand' }),
          _react2.default.createElement(
            'div',
            { className: 'json-view-name' },
            _react2.default.createElement(
              'span',
              null,
              '"' + name + '": '
            ),
            _react2.default.createElement(_Tooltip2.default, { text: documentation })
          ),
          !isRoot ? _react2.default.createElement(
            'span',
            {
              className: 'json-view-item-type'
            },
            ' message'
          ) : null,
          _react2.default.createElement(
            'span',
            { className: 'json-view-tag' },
            '{'
          ),
          _react2.default.createElement(
            'span',
            { className: collapsed ? '' : 'json-view-hide' },
            length > 0 ? _react2.default.createElement(
              'span',
              { className: 'json-view-points' },
              '...'
            ) : null,
            _react2.default.createElement(
              'span',
              { className: 'json-view-tag' },
              '}'
            )
          ),
          length === 0 ? _react2.default.createElement(
            'span',
            { className: 'json-view-count-empty' },
            'Empty'
          ) : _react2.default.createElement(
            'span',
            { className: 'json-view-count' },
            length,
            ' Items'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'json-view-items' },
          value.map(this.renderNode)
        ),
        _react2.default.createElement(
          'div',
          { className: 'json-view-end' },
          _react2.default.createElement(
            'span',
            { onClick: this.handleToggleCollapsed },
            '}'
          )
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  value: _propTypes2.default.array.isRequired,
  name: _propTypes2.default.string.isRequired,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]).isRequired,
  nestedDepth: _propTypes2.default.number.isRequired,
  documentation: _propTypes2.default.string
};
Message.defaultProps = {
  documentation: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { collapsed: false };

  this.handleToggleCollapsed = function (e, collapsed) {
    (0, _utils.preventDefault)(e);
    _this2.setState({
      collapsed: typeof collapsed === 'boolean' ? collapsed : !_this2.state.collapsed
    });
  };

  this.renderValue = function (node) {
    var name = node.name,
        type = node.type,
        value = node.value,
        documentation = node.documentation;

    return _react2.default.createElement(
      'div',
      {
        className: 'json-view-item ' + type,
        key: name
      },
      _react2.default.createElement(
        'div',
        { className: 'json-view-item-info' },
        _react2.default.createElement(
          'div',
          { className: 'json-view-item-name' },
          _react2.default.createElement(
            'span',
            null,
            '"' + name + '":'
          ),
          _react2.default.createElement(_Tooltip2.default, { text: documentation })
        ),
        _react2.default.createElement(
          'span',
          { className: 'json-view-item-type' },
          ' ',
          type
        )
      ),
      _react2.default.createElement(_Value2.default, {
        className: 'json-view-item-value',
        name: name,
        type: type,
        value: value,
        documentation: documentation
      })
    );
  };

  this.renderMessage = function (node) {
    var name = node.name,
        value = node.value,
        documentation = node.documentation;
    var _props2 = _this2.props,
        nestedDepth = _props2.nestedDepth,
        collapsed = _props2.collapsed;

    return _react2.default.createElement(Message, {
      key: name,
      value: value,
      name: name,
      nestedDepth: nestedDepth + 1,
      collapsed: collapsed,
      documentation: documentation
    });
  };

  this.renderRepeated = function (node) {
    var name = node.name,
        type = node.type,
        value = node.value,
        documentation = node.documentation;
    var _props3 = _this2.props,
        nestedDepth = _props3.nestedDepth,
        collapsed = _props3.collapsed;

    return _react2.default.createElement(_Repeated2.default, {
      key: name,
      value: value || [],
      name: name,
      type: type,
      collapsed: collapsed,
      nestedDepth: nestedDepth + 1,
      documentation: documentation
    });
  };

  this.renderNode = function (node) {
    var label = node.label,
        type = node.type;

    if (label === 'REPEATED') {
      return _this2.renderRepeated(node);
    } else if (type === _utils.typesMap.MESSAGE) {
      return _this2.renderMessage(node);
    }
    return _this2.renderValue(node);
  };
};

exports.default = Message;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(5);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Value(props) {
  var value = props.value,
      type = props.type,
      className = props.className;

  var displayValue = void 0;
  if ((0, _utils.isString)(type)) {
    displayValue = '"' + value + '"';
  } else if ((0, _utils.isNull)(type)) {
    displayValue = '';
  } else if ((0, _utils.isBool)(type)) {
    displayValue = value.toString();
    className += ' ' + displayValue;
  } else {
    displayValue = value.toString();
  }
  return _react2.default.createElement(
    'span',
    { className: 'json-view-value ' + className },
    displayValue
  );
}

Value.propTypes = {
  type: _propTypes2.default.oneOf(_utils.types),
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  className: _propTypes2.default.string
};
Value.defaultProps = {
  type: _utils.typesMap.STRING,
  value: null,
  className: ''
};

exports.default = Value;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconTypesMap = {
  COLLAPSED: 'COLLAPSED'
};

var Icon = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var iconTypes = Icon.types;

      var _props = this.props,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['type']);
      /* eslint-disable max-len */


      switch (type) {
        case iconTypes.COLLAPSED:
          return _react2.default.createElement(
            'svg',
            _extends({}, rest, { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }),
            _react2.default.createElement('path', {
              d: 'M755.552 495.36l-384-296.672a31.936 31.936 0 0 0-51.552 25.28v593.504a32 32 0 0 0 51.552 25.28l384-296.704a32 32 0 0 0 0-50.656'
            })
          );
        default:
          return null;
      }
      /* eslint-enable max-len */
    }
  }]);

  return Icon;
}(_react.PureComponent);

Icon.propTypes = {
  type: _propTypes2.default.oneOf(Object.keys(iconTypesMap)).isRequired
};
Icon.types = iconTypesMap;
exports.default = Icon;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip(props) {
  var text = props.text;

  return text.trim() ? _react2.default.createElement(
    'div',
    {
      className: 'json-view-tooltip'
    },
    _react2.default.createElement(
      'span',
      null,
      text
    ),
    _react2.default.createElement('div', { className: 'json-view-tooltip-arrow' })
  ) : null;
}

Tooltip.propTypes = {
  text: _propTypes2.default.string
};

Tooltip.defaultProps = {
  text: ''
};

exports.default = Tooltip;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bigJsonParser = __webpack_require__(19);

var _bigJsonParser2 = _interopRequireDefault(_bigJsonParser);

var _Message = __webpack_require__(10);

var _Message2 = _interopRequireDefault(_Message);

var _TextMessage = __webpack_require__(32);

var _TextMessage2 = _interopRequireDefault(_TextMessage);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProtoJsonView(props) {
  var src = props.src,
      rootName = props.rootName,
      collapsed = props.collapsed,
      mode = props.mode,
      textView = props.textView;

  var value = void 0;
  if (typeof src === 'string') {
    value = (0, _bigJsonParser2.default)(src);
  } else if (mode === 'proto') {
    value = src;
  } else {
    value = (0, _bigJsonParser2.default)(JSON.stringify(src));
  }

  var Component = textView ? _TextMessage2.default : _Message2.default;
  return _react2.default.createElement(Component, {
    value: value,
    name: rootName,
    collapsed: collapsed,
    nestedDepth: 1
  });
}

ProtoJsonView.propTypes = {
  src: _propTypes2.default.PropTypes.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.array]).isRequired,
  rootName: _propTypes2.default.string,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  mode: _propTypes2.default.oneOf(['proto', 'json']),
  textView: _propTypes2.default.bool
};

ProtoJsonView.defaultProps = {
  rootName: 'Root',
  collapsed: true,
  mode: 'proto',
  textView: false
};

exports.default = ProtoJsonView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(9);
var assign = __webpack_require__(16);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(17);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(9);
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("big-json-parser", [], factory);
	else if(typeof exports === 'object')
		exports["big-json-parser"] = factory();
	else
		root["big-json-parser"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var at = void 0; // The index of the current character
var ch = void 0; // The current character
var text = void 0;

var escapee = {
    "\"": "\"",
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
};
var typesMap = {
    STRING: 'string',
    FLOAT: 'float',
    INT: 'int',
    BOOLEAN: 'boolean',
    NULL: 'null',
    MESSAGE: 'message'
};
var labelsMap = {
    REPEATED: 'REPEATED',
    OPTIONAL: 'OPTIONAL'
};

var error = function error(m) {
    throw {
        name: "SyntaxError",
        message: m,
        at: at,
        text: text
    };
};

var next = function next(c) {
    if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
    }
    ch = text.charAt(at);
    at += 1;
    return ch;
};

var number = function number() {
    var value = void 0;
    var string = "";

    if (ch === "-") {
        string = "-";
        next("-");
    }
    while (ch >= "0" && ch <= "9") {
        string += ch;
        next();
    }
    if (ch === ".") {
        string += ".";
        while (next() && ch >= "0" && ch <= "9") {
            string += ch;
        }
    }
    if (ch === "e" || ch === "E") {
        string += ch;
        next();
        if (ch === "-" || ch === "+") {
            string += ch;
            next();
        }
        while (ch >= "0" && ch <= "9") {
            string += ch;
            next();
        }
    }
    value = string;
    if (!isFinite(+value)) {
        error("Bad number");
    } else {
        return {
            type: ("" + value).indexOf('.') > 0 ? typesMap.FLOAT : typesMap.INT,
            value: "" + value,
            label: labelsMap.OPTIONAL
        };
    }
};

var string = function string() {
    var hex = void 0;
    var i = void 0;
    var value = "";
    var uffff = void 0;

    if (ch === "\"") {
        while (next()) {
            if (ch === "\"") {
                next();
                return {
                    type: typesMap.STRING,
                    label: labelsMap.OPTIONAL,
                    value: value
                };
            }
            if (ch === "\\") {
                next();
                if (ch === "u") {
                    uffff = 0;
                    for (i = 0; i < 4; i += 1) {
                        hex = parseInt(next(), 16);
                        if (!isFinite(hex)) {
                            break;
                        }
                        uffff = uffff * 16 + hex;
                    }
                    value += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                    value += escapee[ch];
                } else {
                    break;
                }
            } else {
                value += ch;
            }
        }
    }
    error("Bad string");
};

var keyString = function keyString() {
    var hex = void 0;
    var i = void 0;
    var value = "";
    var uffff = void 0;

    if (ch === "\"") {
        while (next()) {
            if (ch === "\"") {
                next();
                return value;
            }
            if (ch === "\\") {
                next();
                if (ch === "u") {
                    uffff = 0;
                    for (i = 0; i < 4; i += 1) {
                        hex = parseInt(next(), 16);
                        if (!isFinite(hex)) {
                            break;
                        }
                        uffff = uffff * 16 + hex;
                    }
                    value += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                    value += escapee[ch];
                } else {
                    break;
                }
            } else {
                value += ch;
            }
        }
    }
    error("Bad string");
};

var white = function white() {
    while (ch && ch <= " ") {
        next();
    }
};

var word = function word() {
    switch (ch) {
        case "t":
            next("t");
            next("r");
            next("u");
            next("e");
            return {
                type: typesMap.BOOLEAN,
                label: labelsMap.OPTIONAL,
                value: true
            };
        case "f":
            next("f");
            next("a");
            next("l");
            next("s");
            next("e");
            return {
                type: typesMap.BOOLEAN,
                label: labelsMap.OPTIONAL,
                value: false
            };
        case "n":
            next("n");
            next("u");
            next("l");
            next("l");
            return {
                type: typesMap.NULL,
                label: labelsMap.OPTIONAL,
                value: null
            };
    }
    error("Unexpected '" + ch + "'");
};

var value = void 0;

var array = function array() {
    var arr = [];
    if (ch === "[") {
        next("[");
        white();
        if (ch === "]") {
            next("]");
            return {
                type: null,
                label: labelsMap.REPEATED,
                value: arr
            };
        }
        while (ch) {
            arr.push(value());
            white();
            if (ch === "]") {
                next("]");
                return {
                    type: arr[0].type,
                    label: labelsMap.REPEATED,
                    value: arr
                };
            }
            next(",");
            white();
        }
    }
    error("Bad array");
};

var object = function object() {
    var key = void 0;
    var obj = [];

    if (ch === "{") {
        next("{");
        white();
        if (ch === "}") {
            next("}");
            return {
                type: typesMap.MESSAGE,
                label: labelsMap.OPTIONAL,
                value: obj
            };
        }
        while (ch) {
            key = keyString();
            white();
            next(":");
            if (Object.hasOwnProperty.call(obj, key)) {
                error("Duplicate key '" + key + "'");
            }
            obj.push(_extends({ name: key }, value()));
            white();
            if (ch === "}") {
                next("}");
                return {
                    type: typesMap.MESSAGE,
                    label: labelsMap.OPTIONAL,
                    value: obj
                };
            }
            next(",");
            white();
        }
    }
    error("Bad object");
};

value = function value() {
    white();
    switch (ch) {
        case "{":
            return object();
        case "[":
            return array();
        case "\"":
            return string();
        case "-":
            return number();
        default:
            return ch >= "0" && ch <= "9" ? number() : word();
    }
};

function parse(source, reviver) {
    var result = void 0;

    text = source;
    at = 0;
    ch = " ";
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    var res = typeof reviver === "function" ? function walk(holder, key) {
        var k = void 0;
        var v = void 0;
        var val = holder[key];
        if (val && (typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
            for (k in val) {
                if (Object.prototype.hasOwnProperty.call(val, k)) {
                    v = walk(val, k);
                    if (v !== undefined) {
                        val[k] = v;
                    } else {
                        delete val[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, val);
    }({ "": result }, "") : result;
    return res.value || res;
}

// export default parse;
exports.default = parse;

if (module) module.exports = parse;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".json-view-value {\n  font-family: monospace;\n  font-size: 15px; }\n", ""]);

// exports


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Value = __webpack_require__(11);

var _Value2 = _interopRequireDefault(_Value);

var _Message = __webpack_require__(10);

var _Message2 = _interopRequireDefault(_Message);

var _Icon = __webpack_require__(12);

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = __webpack_require__(5);

__webpack_require__(26);

var _Tooltip = __webpack_require__(13);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repeated = function (_Component) {
  _inherits(Repeated, _Component);

  function Repeated() {
    var _ref;

    _classCallCheck(this, Repeated);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Repeated.__proto__ || Object.getPrototypeOf(Repeated)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        nestedDepth = _this$props.nestedDepth,
        collapsed = _this$props.collapsed;

    _this.state = {
      collapsed: typeof collapsed === 'number' ? nestedDepth >= collapsed : !!collapsed
    };
    return _this;
  }

  _createClass(Repeated, [{
    key: 'render',
    value: function render() {
      var collapsed = this.state.collapsed;
      var _props = this.props,
          value = _props.value,
          length = _props.value.length,
          name = _props.name,
          documentation = _props.documentation,
          type = _props.type;

      var isEmpty = length === 0;

      return _react2.default.createElement(
        'div',
        {
          className: 'json-view-repeated json-view' + (collapsed ? ' json-view-collapsed' : '') + ' ' + type,
          key: name
        },
        _react2.default.createElement(
          'div',
          {
            className: 'json-view-start',
            onClick: this.handleToggleCollapsed
          },
          _react2.default.createElement(_Icon2.default, { type: 'COLLAPSED', className: 'json-view-expand' }),
          _react2.default.createElement(
            'div',
            { className: 'json-view-name' },
            _react2.default.createElement(
              'span',
              null,
              '"' + name + '": '
            ),
            _react2.default.createElement(_Tooltip2.default, { text: documentation })
          ),
          _react2.default.createElement(
            'span',
            { className: 'json-view-item-type' },
            ' ',
            type,
            '[]'
          ),
          _react2.default.createElement(
            'span',
            { className: 'json-view-tag' },
            '['
          ),
          _react2.default.createElement(
            'span',
            { className: collapsed ? '' : 'json-view-hide' },
            _react2.default.createElement(
              'span',
              { className: 'json-view-points' + (isEmpty ? ' json-view-hide' : '') },
              '...'
            ),
            _react2.default.createElement(
              'span',
              { className: 'json-view-tag' },
              ']'
            )
          ),
          isEmpty ? _react2.default.createElement(
            'span',
            { className: 'json-view-count-empty' },
            'Empty'
          ) : _react2.default.createElement(
            'span',
            { className: 'json-view-count' },
            length,
            ' Items'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'json-view-items' },
          value.map(this.renderNode)
        ),
        _react2.default.createElement(
          'div',
          { className: 'json-view-end' },
          _react2.default.createElement(
            'span',
            { onClick: this.handleToggleCollapsed },
            ']'
          )
        )
      );
    }
  }]);

  return Repeated;
}(_react.Component);

Repeated.propTypes = {
  value: _propTypes2.default.array.isRequired,
  type: _propTypes2.default.oneOf(_utils.types).isRequired,
  collapsed: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]).isRequired,
  nestedDepth: _propTypes2.default.number.isRequired,
  documentation: _propTypes2.default.string
};
Repeated.defaultProps = {
  documentation: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { collapsed: false };

  this.handleToggleCollapsed = function (e, collapsed) {
    (0, _utils.preventDefault)(e);
    _this2.setState({
      collapsed: typeof collapsed === 'boolean' ? collapsed : !_this2.state.collapsed
    });
  };

  this.renderValue = function (node, index) {
    var name = _this2.props.name;
    var type = node.type,
        value = node.value;

    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: 'json-view-repeated-item'
      },
      _react2.default.createElement(
        'span',
        { className: 'json-view-repeated-item-index' },
        index,
        ': '
      ),
      _react2.default.createElement(_Value2.default, {
        className: 'json-view-repeated-item-value',
        key: index + '-1',
        name: name,
        type: type,
        value: value
      })
    );
  };

  this.renderMessage = function (node, index) {
    var _props2 = _this2.props,
        nestedDepth = _props2.nestedDepth,
        collapsed = _props2.collapsed;
    var value = node.value;

    return _react2.default.createElement(_Message2.default, {
      key: index,
      value: value,
      name: index.toString(),
      nestedDepth: nestedDepth + 1,
      collapsed: collapsed
    });
  };

  this.renderNode = function (node, index) {
    var type = _this2.props.type;

    if (type === _utils.typesMap.MESSAGE) {
      return _this2.renderMessage(node, index);
    }
    return _this2.renderValue(node, index);
  };
};

exports.default = Repeated;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".json-view-repeated .json-view-repeated-item {\n  display: inline-flex;\n  align-items: center;\n  margin: 10px 20px 5px 0; }\n  .json-view-repeated .json-view-repeated-item .json-view-repeated-item-index {\n    display: inline-block;\n    width: 30px;\n    font-weight: bolder; }\n  .json-view-repeated .json-view-repeated-item .json-view-repeated-item-value {\n    margin-right: 26px; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(29);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".json-view-tooltip {\n  position: absolute;\n  max-width: 200px;\n  background-color: #3e3e3e;\n  color: white;\n  font-weight: bold;\n  padding: 6px 11px;\n  border-radius: 4px;\n  transition: all ease-out 200ms;\n  box-shadow: rgba(0, 0, 0, 0.07) 3px 3px 7px 0;\n  font-size: 13px; }\n  .json-view-tooltip .json-view-tooltip-arrow {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    transform: rotate(45deg);\n    background-color: #3e3e3e;\n    top: calc(100% - 6px);\n    left: 12px; }\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(31);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".json-view {\n  margin: 4px 11px;\n  transition: all ease 300ms;\n  height: auto;\n  position: relative;\n  left: -22px;\n  color: rgba(0, 43, 54, 0.8);\n  fill: rgba(0, 43, 54, 0.8); }\n  .json-view:before {\n    content: '';\n    width: 1px;\n    height: calc(100% - 2 * 25px);\n    top: 25px;\n    background-color: rgba(0, 43, 54, 0.15);\n    position: absolute; }\n  .json-view .json-view-start, .json-view .json-view-end {\n    position: relative;\n    cursor: pointer;\n    height: 28px;\n    line-height: 28px;\n    user-select: none; }\n  .json-view .json-view-start {\n    left: -6px;\n    display: inline-flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative; }\n    .json-view .json-view-start .json-view-expand {\n      width: 18px;\n      height: 18px;\n      fill: rgba(0, 43, 54, 0.8);\n      position: relative;\n      left: -3px;\n      top: -1px;\n      transition: all ease 300ms;\n      transform: rotate(90deg); }\n    .json-view .json-view-start .json-view-count, .json-view .json-view-start .json-view-count-empty {\n      display: inline-block;\n      margin-left: 20px;\n      opacity: 0.8;\n      font-style: italic;\n      color: rgba(0, 0, 0, 0.3);\n      min-width: 60px; }\n    .json-view .json-view-start .json-view-name {\n      font-weight: bold;\n      min-width: 40px;\n      margin-right: 8px;\n      font-size: 15px; }\n    .json-view .json-view-start .json-view-tag {\n      margin: 0 8px; }\n  .json-view .json-view-end {\n    left: -3px;\n    display: inline-block; }\n  .json-view .json-view-items {\n    margin-left: 40px; }\n    .json-view .json-view-items .json-view-item {\n      height: 28px;\n      margin: 4px 0;\n      font-size: 14px;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n      .json-view .json-view-items .json-view-item > span {\n        display: inline-block; }\n      .json-view .json-view-items .json-view-item .json-view-item-info {\n        position: relative;\n        margin-right: 20px; }\n        .json-view .json-view-items .json-view-item .json-view-item-info .json-view-item-name {\n          font-size: 15px;\n          font-weight: bolder;\n          cursor: pointer;\n          display: inline-block; }\n  .json-view .json-view-item-value,\n  .json-view .json-view-repeated-item-value {\n    box-sizing: border-box; }\n\n.json-view.json-view-collapsed {\n  height: 28px;\n  border-left: none; }\n  .json-view.json-view-collapsed .json-view-start .json-view-expand {\n    color: inherit;\n    fill: inherit;\n    transform: rotate(0deg); }\n  .json-view.json-view-collapsed .json-view-items, .json-view.json-view-collapsed .json-view-end {\n    display: none; }\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(33);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextMessage = function (_Component) {
  _inherits(TextMessage, _Component);

  function TextMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextMessage.__proto__ || Object.getPrototypeOf(TextMessage)).call.apply(_ref, [this].concat(args))), _this), _this.renderValue = function (node, isRepeatedItem, index, isLast) {
      var name = node.name,
          type = node.type,
          value = node.value;

      var displayValue = void 0;
      if (type === _utils.typesMap.BYTES || type === _utils.typesMap.STRING) {
        displayValue = '"' + value + '"';
      } else if (type === 'null') {
        displayValue = 'null';
      } else {
        displayValue = value.toString();
      }
      return isRepeatedItem ? _react2.default.createElement(
        'span',
        {
          className: 'text-view-item ' + type,
          key: index
        },
        displayValue.toString(),
        isLast ? '' : ', '
      ) : _react2.default.createElement(
        'div',
        {
          className: 'text-view-item ' + type,
          key: name
        },
        '"' + name + '": ',
        displayValue.toString(),
        isLast ? '' : ','
      );
    }, _this.renderMessage = function (node, isRepeatedItem, index, isLast) {
      var name = node.name,
          value = node.value;
      var nestedDepth = _this.props.nestedDepth;

      return _react2.default.createElement(TextMessage, {
        key: isRepeatedItem ? index : name,
        value: value,
        name: name,
        nestedDepth: nestedDepth + 1,
        isRepeatedItem: isRepeatedItem,
        isLast: isLast
      });
    }, _this.renderRepeated = function (node, isLast) {
      var name = node.name,
          type = node.type,
          value = node.value;

      var renderNode = function renderNode(i, index) {
        return _this.renderNode(i, true, index, index === value.length - 1);
      };
      return _react2.default.createElement(
        'div',
        {
          className: 'text-view-repeated ' + type,
          key: name
        },
        '"' + name + '": ',
        '[ ',
        value.map(renderNode),
        ' ]',
        isLast ? '' : ','
      );
    }, _this.renderNode = function (node, isRepeatedItem, index, isLast) {
      if (typeof isRepeatedItem !== 'boolean') {
        isRepeatedItem = false;
      }
      if (typeof isLast !== 'boolean') {
        isLast = false;
      }
      var label = node.label,
          type = node.type;

      if (label === 'REPEATED') {
        return _this.renderRepeated(node, isLast);
      } else if (type === _utils.typesMap.MESSAGE) {
        return _this.renderMessage(node, isRepeatedItem, index, isLast);
      }
      return _this.renderValue(node, isRepeatedItem, index, isLast);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextMessage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          name = _props.name,
          nestedDepth = _props.nestedDepth,
          isRepeatedItem = _props.isRepeatedItem,
          isLast = _props.isLast;

      var isRoot = nestedDepth === 1;
      var renderNode = function renderNode(i, index) {
        return _this2.renderNode(i, false, index, index === value.length - 1);
      };
      return _react2.default.createElement(
        'div',
        {
          className: 'text-view' + (isRoot ? ' text-view-root' : '') + ' message',
          key: name
        },
        _react2.default.createElement(
          'div',
          { className: 'text-view-start' },
          isRepeatedItem ? '' : '"' + name + '": ',
          '{'
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-view-items' },
          value.map(renderNode)
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-view-end' },
          '}',
          isRoot || isLast ? '' : ','
        )
      );
    }
  }]);

  return TextMessage;
}(_react.Component);

TextMessage.propTypes = {
  value: _propTypes2.default.array.isRequired,
  name: _propTypes2.default.string.isRequired,
  nestedDepth: _propTypes2.default.number.isRequired,
  isRepeatedItem: _propTypes2.default.bool,
  isLast: _propTypes2.default.bool
};
TextMessage.defaultProps = {
  isRepeatedItem: false,
  isLast: false
};
exports.default = TextMessage;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(34);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".text-view p {\n  margin: 0; }\n\n.text-view .text-view-items {\n  margin-left: 40px; }\n\n.text-view .text-view-repeated > .text-view {\n  margin-left: 40px; }\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(36);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".json-view-root {\n  margin: 0 0 0 22px;\n  padding: 0;\n  font-family: monospace;\n  position: relative;\n  left: 0; }\n  .json-view-root .json-view-hide {\n    opacity: 0; }\n  .json-view-root .json-view-name .json-view-tooltip, .json-view-root .json-view-item-name .json-view-tooltip {\n    transform: scale(0.1) translateY(calc(-200% - 26px));\n    opacity: 0; }\n  .json-view-root .json-view-name:hover .json-view-tooltip, .json-view-root .json-view-item-name:hover .json-view-tooltip {\n    transform: scale(1) translateY(calc(-100% - 26px));\n    opacity: 1; }\n  .json-view-root .json-view-points {\n    font-weight: bolder;\n    font-size: 16px;\n    line-height: 5px;\n    letter-spacing: -0.1em; }\n  .json-view-root .json-view-tag {\n    font-weight: bolder; }\n  .json-view-root .json-view-item-type {\n    margin-right: 20px;\n    font-style: italic;\n    font-size: 14px; }\n  .json-view-root .message .json-view-item-type,\n  .json-view-root .message .json-view-expand,\n  .json-view-root .message .json-view-points {\n    color: #f35d6f;\n    fill: #f35d6f; }\n  .json-view-root .boolean .json-view-item-type,\n  .json-view-root .boolean .json-view-expand,\n  .json-view-root .boolean .json-view-points,\n  .json-view-root .boolean .json-view-value {\n    color: #33d391;\n    fill: #33d391; }\n    .json-view-root .boolean .json-view-item-type.true,\n    .json-view-root .boolean .json-view-expand.true,\n    .json-view-root .boolean .json-view-points.true,\n    .json-view-root .boolean .json-view-value.true {\n      color: #33d391;\n      fill: #33d391; }\n    .json-view-root .boolean .json-view-item-type.false,\n    .json-view-root .boolean .json-view-expand.false,\n    .json-view-root .boolean .json-view-points.false,\n    .json-view-root .boolean .json-view-value.false {\n      color: #f35d6f;\n      fill: #f35d6f; }\n  .json-view-root .string .json-view-item-type,\n  .json-view-root .string .json-view-expand,\n  .json-view-root .string .json-view-points,\n  .json-view-root .string .json-view-item-value,\n  .json-view-root .string .json-view-repeated-item-value, .json-view-root .bytes .json-view-item-type,\n  .json-view-root .bytes .json-view-expand,\n  .json-view-root .bytes .json-view-points,\n  .json-view-root .bytes .json-view-item-value,\n  .json-view-root .bytes .json-view-repeated-item-value {\n    color: #e9782a;\n    fill: #e9782a; }\n  .json-view-root .double .json-view-item-type,\n  .json-view-root .double .json-view-expand,\n  .json-view-root .double .json-view-points,\n  .json-view-root .double .json-view-item-value,\n  .json-view-root .double .json-view-repeated-item-value, .json-view-root .float .json-view-item-type,\n  .json-view-root .float .json-view-expand,\n  .json-view-root .float .json-view-points,\n  .json-view-root .float .json-view-item-value,\n  .json-view-root .float .json-view-repeated-item-value {\n    color: #8266de;\n    fill: #8266de; }\n  .json-view-root .int .json-view-item-type,\n  .json-view-root .int .json-view-expand,\n  .json-view-root .int .json-view-points,\n  .json-view-root .int .json-view-item-value,\n  .json-view-root .int .json-view-repeated-item-value, .json-view-root .int32 .json-view-item-type,\n  .json-view-root .int32 .json-view-expand,\n  .json-view-root .int32 .json-view-points,\n  .json-view-root .int32 .json-view-item-value,\n  .json-view-root .int32 .json-view-repeated-item-value, .json-view-root .uint32 .json-view-item-type,\n  .json-view-root .uint32 .json-view-expand,\n  .json-view-root .uint32 .json-view-points,\n  .json-view-root .uint32 .json-view-item-value,\n  .json-view-root .uint32 .json-view-repeated-item-value, .json-view-root .sint32 .json-view-item-type,\n  .json-view-root .sint32 .json-view-expand,\n  .json-view-root .sint32 .json-view-points,\n  .json-view-root .sint32 .json-view-item-value,\n  .json-view-root .sint32 .json-view-repeated-item-value, .json-view-root .fixed32 .json-view-item-type,\n  .json-view-root .fixed32 .json-view-expand,\n  .json-view-root .fixed32 .json-view-points,\n  .json-view-root .fixed32 .json-view-item-value,\n  .json-view-root .fixed32 .json-view-repeated-item-value, .json-view-root .sfixed32 .json-view-item-type,\n  .json-view-root .sfixed32 .json-view-expand,\n  .json-view-root .sfixed32 .json-view-points,\n  .json-view-root .sfixed32 .json-view-item-value,\n  .json-view-root .sfixed32 .json-view-repeated-item-value {\n    color: #23aedd;\n    fill: #23aedd; }\n  .json-view-root .int64 .json-view-item-type,\n  .json-view-root .int64 .json-view-expand,\n  .json-view-root .int64 .json-view-points,\n  .json-view-root .int64 .json-view-item-value,\n  .json-view-root .int64 .json-view-repeated-item-value, .json-view-root .uint64 .json-view-item-type,\n  .json-view-root .uint64 .json-view-expand,\n  .json-view-root .uint64 .json-view-points,\n  .json-view-root .uint64 .json-view-item-value,\n  .json-view-root .uint64 .json-view-repeated-item-value, .json-view-root .sint64 .json-view-item-type,\n  .json-view-root .sint64 .json-view-expand,\n  .json-view-root .sint64 .json-view-points,\n  .json-view-root .sint64 .json-view-item-value,\n  .json-view-root .sint64 .json-view-repeated-item-value, .json-view-root .fixed64 .json-view-item-type,\n  .json-view-root .fixed64 .json-view-expand,\n  .json-view-root .fixed64 .json-view-points,\n  .json-view-root .fixed64 .json-view-item-value,\n  .json-view-root .fixed64 .json-view-repeated-item-value, .json-view-root .sfixed64 .json-view-item-type,\n  .json-view-root .sfixed64 .json-view-expand,\n  .json-view-root .sfixed64 .json-view-points,\n  .json-view-root .sfixed64 .json-view-item-value,\n  .json-view-root .sfixed64 .json-view-repeated-item-value {\n    color: #859900;\n    fill: #859900; }\n  .json-view-root .null .json-view-item-type,\n  .json-view-root .null .json-view-expand,\n  .json-view-root .null .json-view-points,\n  .json-view-root .null .json-view-item-value,\n  .json-view-root .null .json-view-repeated-item-value {\n    color: #e632c0;\n    fill: #e632c0; }\n", ""]);

// exports


/***/ })
/******/ ]);
});