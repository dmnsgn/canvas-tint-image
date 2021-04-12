import './common/esnext.reflect.metadata-c7323113.js';

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

/* Font Face Observer v3.3.1 - © Bram Stein - Damien Seguin. License: BSD-3-Clause */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var styles = {
  maxWidth: "none",
  display: "inline-block",
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "scroll",
  fontSize: "16px"
};
var collapsibleInnerStyles = {
  display: "inline-block",
  height: "200%",
  width: "200%",
  fontSize: "16px",
  maxWidth: "none"
};
var fontStyle = {
  maxWidth: "none",
  minWidth: "20px",
  minHeight: "20px",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  width: "auto",
  margin: "0",
  padding: "0",
  top: "-999px",
  whiteSpace: "nowrap",
  fontSynthesis: "none"
};

var Ruler = /*#__PURE__*/function () {
  /**
   *
   * @param {string} text
   */
  function Ruler(text) {
    _classCallCheck(this, Ruler);

    this.element = document.createElement("div");
    this.element.setAttribute("aria-hidden", "true");
    this.element.appendChild(document.createTextNode(text));
    this.collapsible = document.createElement("span");
    this.expandable = document.createElement("span");
    this.collapsibleInner = document.createElement("span");
    this.expandableInner = document.createElement("span");
    this.lastOffsetWidth = -1;
    Object.assign(this.collapsible.style, styles);
    Object.assign(this.expandable.style, styles);
    Object.assign(this.expandableInner.style, styles);
    Object.assign(this.collapsibleInner.style, collapsibleInnerStyles);
    this.collapsible.appendChild(this.collapsibleInner);
    this.expandable.appendChild(this.expandableInner);
    this.element.appendChild(this.collapsible);
    this.element.appendChild(this.expandable);
  }
  /**
   * @return {Element}
   */


  _createClass(Ruler, [{
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
    /**
     * @param {string} font
     */

  }, {
    key: "setFont",
    value: function setFont(font) {
      Object.assign(this.element.style, _objectSpread({}, fontStyle, {
        font: font
      }));
    }
    /**
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.element.offsetWidth;
    }
    /**
     * @param {string} width
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.element.style.width = width + "px";
    }
    /**
     * @private
     *
     * @return {boolean}
     */

  }, {
    key: "reset",
    value: function reset() {
      var offsetWidth = this.getWidth();
      var width = offsetWidth + 100;
      this.expandableInner.style.width = width + "px";
      this.expandable.scrollLeft = width;
      this.collapsible.scrollLeft = this.collapsible.scrollWidth + 100;

      if (this.lastOffsetWidth !== offsetWidth) {
        this.lastOffsetWidth = offsetWidth;
        return true;
      } else {
        return false;
      }
    }
    /**
     * @private
     * @param {function(number)} callback
     */

  }, {
    key: "onScroll",
    value: function onScroll(callback) {
      if (this.reset() && this.element.parentNode !== null) {
        callback(this.lastOffsetWidth);
      }
    }
    /**
     * @param {function(number)} callback
     */

  }, {
    key: "onResize",
    value: function onResize(callback) {
      var that = this;

      function onScroll() {
        that.onScroll(callback);
      }

      this.collapsible.addEventListener("scroll", onScroll);
      this.expandable.addEventListener("scroll", onScroll);
      this.reset();
    }
  }]);

  return Ruler;
}();

function onReady(callback) {
  document.body ? callback() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
    document.removeEventListener("DOMContentLoaded", c);
    callback();
  }) : document.attachEvent("onreadystatechange", function k() {
    if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), callback();
  });
}
/** Class for FontFaceObserver. */


var FontFaceObserver = /*#__PURE__*/function () {
  _createClass(FontFaceObserver, null, [{
    key: "getUserAgent",

    /**
     * @type {null|boolean}
     */

    /**
     * @type {null|boolean}
     */

    /**
     * @type {null|boolean}
     */

    /**
     * @type {null|boolean}
     */

    /**
     * @type {number}
     */

    /**
     * @return {string}
     */
    value: function getUserAgent() {
      return window.navigator.userAgent;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getNavigatorVendor",
    value: function getNavigatorVendor() {
      return window.navigator.vendor;
    }
    /**
     * Returns true if this browser is WebKit and it has the fallback bug which is
     * present in WebKit 536.11 and earlier.
     *
     * @return {boolean}
     */

  }, {
    key: "hasWebKitFallbackBug",
    value: function hasWebKitFallbackBug() {
      if (FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG === null) {
        var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(FontFaceObserver.getUserAgent());
        FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
      }

      return FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG;
    }
    /**
     * Returns true if the browser has the Safari 10 bugs. The native font load
     * API in Safari 10 has two bugs that cause the document.fonts.load and
     * FontFace.prototype.load methods to return promises that don't reliably get
     * settled.
     *
     * The bugs are described in more detail here:
     *  - https://bugs.webkit.org/show_bug.cgi?id=165037
     *  - https://bugs.webkit.org/show_bug.cgi?id=164902
     *
     * If the browser is made by Apple, and has native font loading support, it is
     * potentially affected. But the API was fixed around AppleWebKit version 603,
     * so any newer versions that that does not contain the bug.
     *
     * @return {boolean}
     */

  }, {
    key: "hasSafari10Bug",
    value: function hasSafari10Bug() {
      if (FontFaceObserver.HAS_SAFARI_10_BUG === null) {
        if (FontFaceObserver.supportsNativeFontLoading() && /Apple/.test(FontFaceObserver.getNavigatorVendor())) {
          var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(FontFaceObserver.getUserAgent());
          FontFaceObserver.HAS_SAFARI_10_BUG = !!match && parseInt(match[1], 10) < 603;
        } else {
          FontFaceObserver.HAS_SAFARI_10_BUG = false;
        }
      }

      return FontFaceObserver.HAS_SAFARI_10_BUG;
    }
    /**
     * Returns true if the browser supports the native font loading API.
     *
     * @return {boolean}
     */

  }, {
    key: "supportsNativeFontLoading",
    value: function supportsNativeFontLoading() {
      if (FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING === null) {
        FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING = !!document["fonts"];
      }

      return FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING;
    }
    /**
     * Returns true if the browser supports font-style in the font short-hand
     * syntax.
     *
     * @return {boolean}
     */

  }, {
    key: "supportStretch",
    value: function supportStretch() {
      if (FontFaceObserver.SUPPORTS_STRETCH === null) {
        var div = document.createElement("div");

        try {
          div.style.font = "condensed 100px sans-serif";
        } catch (e) {}

        FontFaceObserver.SUPPORTS_STRETCH = div.style.font !== "";
      }

      return FontFaceObserver.SUPPORTS_STRETCH;
    }
    /**
     * @typedef {Object} Descriptors
     * @property {string|undefined} style
     * @property {string|undefined} weight
     * @property {string|undefined} stretch
     */

    /**
     *
     * @param {string} family font-family name (required)
     * @param {Descriptors} descriptors an object describing the variation
     * (optional). The object can contain `weight`, `style`, and `stretch`
     * properties. If a property is not present it will default to `normal`.
     */

  }]);

  function FontFaceObserver(family) {
    var descriptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FontFaceObserver);

    this.family = family;
    this.style = descriptors.style || "normal";
    this.weight = descriptors.weight || "normal";
    this.stretch = descriptors.stretch || "normal";
    return this;
  }
  /**
   * @param {string=} text Optional test string to use for detecting if a font
   * is available.
   * @param {number=} timeout Optional timeout for giving up on font load
   * detection and rejecting the promise (defaults to 3 seconds).
   * @return {Promise.<FontFaceObserver>}
   */


  _createClass(FontFaceObserver, [{
    key: "load",
    value: function load(text, timeout) {
      var that = this;
      var testString = text || "BESbswy";
      var timeoutId = 0;
      var timeoutValue = timeout || FontFaceObserver.DEFAULT_TIMEOUT;
      var start = that.getTime();
      return new Promise(function (resolve, reject) {
        if (FontFaceObserver.supportsNativeFontLoading() && !FontFaceObserver.hasSafari10Bug()) {
          var loader = new Promise(function (resolve, reject) {
            var check = function check() {
              var now = that.getTime();

              if (now - start >= timeoutValue) {
                reject(new Error("" + timeoutValue + "ms timeout exceeded"));
              } else {
                document.fonts.load(that.getStyle('"' + that["family"] + '"'), testString).then(function (fonts) {
                  if (fonts.length >= 1) {
                    resolve();
                  } else {
                    setTimeout(check, 25);
                  }
                }, reject);
              }
            };

            check();
          });
          var timer = new Promise(function (resolve, reject) {
            timeoutId = setTimeout(function () {
              reject(new Error("" + timeoutValue + "ms timeout exceeded"));
            }, timeoutValue);
          });
          Promise.race([timer, loader]).then(function () {
            clearTimeout(timeoutId);
            resolve(that);
          }, reject);
        } else {
          onReady(function () {
            var rulerA = new Ruler(testString);
            var rulerB = new Ruler(testString);
            var rulerC = new Ruler(testString);
            var widthA = -1;
            var widthB = -1;
            var widthC = -1;
            var fallbackWidthA = -1;
            var fallbackWidthB = -1;
            var fallbackWidthC = -1;
            var container = document.createElement("div");
            /**
             * @private
             */

            function removeContainer() {
              if (container.parentNode !== null) {
                container.parentNode.removeChild(container);
              }
            }
            /**
             * @private
             *
             * If metric compatible fonts are detected, one of the widths will be
             * -1. This is because a metric compatible font won't trigger a scroll
             * event. We work around this by considering a font loaded if at least
             * two of the widths are the same. Because we have three widths, this
             * still prevents false positives.
             *
             * Cases:
             * 1) Font loads: both a, b and c are called and have the same value.
             * 2) Font fails to load: resize callback is never called and timeout
             *    happens.
             * 3) WebKit bug: both a, b and c are called and have the same value,
             *    but the values are equal to one of the last resort fonts, we
             *    ignore this and continue waiting until we get new values (or a
             *    timeout).
             */


            function check() {
              if (widthA != -1 && widthB != -1 || widthA != -1 && widthC != -1 || widthB != -1 && widthC != -1) {
                if (widthA == widthB || widthA == widthC || widthB == widthC) {
                  // All values are the same, so the browser has most likely
                  // loaded the web font
                  if (FontFaceObserver.hasWebKitFallbackBug()) {
                    // Except if the browser has the WebKit fallback bug, in which
                    // case we check to see if all values are set to one of the
                    // last resort fonts.
                    if (widthA == fallbackWidthA && widthB == fallbackWidthA && widthC == fallbackWidthA || widthA == fallbackWidthB && widthB == fallbackWidthB && widthC == fallbackWidthB || widthA == fallbackWidthC && widthB == fallbackWidthC && widthC == fallbackWidthC) {
                      // The width we got matches some of the known last resort
                      // fonts, so let's assume we're dealing with the last resort
                      // font.
                      return;
                    }
                  }

                  removeContainer();
                  clearTimeout(timeoutId);
                  resolve(that);
                }
              }
            } // This ensures the scroll direction is correct.


            container.dir = "ltr";
            rulerA.setFont(that.getStyle("sans-serif"));
            rulerB.setFont(that.getStyle("serif"));
            rulerC.setFont(that.getStyle("monospace"));
            container.appendChild(rulerA.getElement());
            container.appendChild(rulerB.getElement());
            container.appendChild(rulerC.getElement());
            document.body.appendChild(container);
            fallbackWidthA = rulerA.getWidth();
            fallbackWidthB = rulerB.getWidth();
            fallbackWidthC = rulerC.getWidth();

            function checkForTimeout() {
              var now = that.getTime();

              if (now - start >= timeoutValue) {
                removeContainer();
                reject(new Error("" + timeoutValue + "ms timeout exceeded"));
              } else {
                var hidden = document["hidden"];

                if (hidden === true || hidden === undefined) {
                  widthA = rulerA.getWidth();
                  widthB = rulerB.getWidth();
                  widthC = rulerC.getWidth();
                  check();
                }

                timeoutId = setTimeout(checkForTimeout, 50);
              }
            }

            checkForTimeout();
            rulerA.onResize(function (width) {
              widthA = width;
              check();
            });
            rulerA.setFont(that.getStyle('"' + that["family"] + '",sans-serif'));
            rulerB.onResize(function (width) {
              widthB = width;
              check();
            });
            rulerB.setFont(that.getStyle('"' + that["family"] + '",serif'));
            rulerC.onResize(function (width) {
              widthC = width;
              check();
            });
            rulerC.setFont(that.getStyle('"' + that["family"] + '",monospace'));
          });
        }
      });
    }
    /**
     * @private
     *
     * @param {string} family
     * @return {string}
     */

  }, {
    key: "getStyle",
    value: function getStyle(family) {
      return [this.style, this.weight, FontFaceObserver.supportStretch() ? this.stretch : "", "100px", family].join(" ");
    }
    /**
     * @private
     *
     * @return {number}
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return new Date().getTime();
    }
  }]);

  return FontFaceObserver;
}();

_defineProperty(FontFaceObserver, "Ruler", Ruler);

_defineProperty(FontFaceObserver, "HAS_WEBKIT_FALLBACK_BUG", null);

_defineProperty(FontFaceObserver, "HAS_SAFARI_10_BUG", null);

_defineProperty(FontFaceObserver, "SUPPORTS_STRETCH", null);

_defineProperty(FontFaceObserver, "SUPPORTS_NATIVE_FONT_LOADING", null);

_defineProperty(FontFaceObserver, "DEFAULT_TIMEOUT", 3000);

var FontFaceObserver$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': FontFaceObserver
});

/**
 * Keys used for the [[AsyncPreloader.loaders]]
 */

var LoaderKey;

(function (LoaderKey) {
  LoaderKey["Json"] = "Json";
  LoaderKey["ArrayBuffer"] = "ArrayBuffer";
  LoaderKey["Blob"] = "Blob";
  LoaderKey["FormData"] = "FormData";
  LoaderKey["Text"] = "Text";
  LoaderKey["Image"] = "Image";
  LoaderKey["Video"] = "Video";
  LoaderKey["Audio"] = "Audio";
  LoaderKey["Xml"] = "Xml";
  LoaderKey["Font"] = "Font";
})(LoaderKey || (LoaderKey = {}));

var isSafari = navigator && navigator.userAgent.indexOf("Safari") > -1;
/**
 * AsyncPreloader: assets preloader using ES2017 async/await and fetch.
 *
 * It exports an instance of itself as default so you can:
 *
 * ```js
 * import Preloader from "async-preloader";
 *
 * await Preloader.loadItems([]);
 * ```
 *
 * to use directly as a singleton or
 *
 * ```js
 * import { AsyncPreloader as Preloader } from "async-preloader";
 *
 * const preloader = new Preloader();
 * await preloader.loadItems([]);
 * ```
 * if you need more than one instance.
 */

var AsyncPreloader =
/** @class */
function () {
  function AsyncPreloader() {
    var _this = this; // Properties

    /**
     * Object that contains the loaded items
     */


    this.items = new Map();
    /**
     * Default body method to be called on the Response from fetch if no body option is specified on the LoadItem
     */

    this.defaultBodyMethod = "blob";
    /**
     * Default loader to use if no loader key is specified in the [[LoadItem]] or if the extension doesn't match any of the [[AsyncPreloader.loaders]] extensions
     */

    this.defaultLoader = LoaderKey.Text; // API

    /**
     * Load the specified manifest (array of items)
     *
     * @param {LoadItem[]} items Items to load
     * @returns {Promise<LoadedValue[]>} Resolve when all items are loaded, reject for any error
     */

    this.loadItems = function (items) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.all(items.map(this.loadItem))];

            case 1:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load a single item
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Resolve when item is loaded, reject for any error
     */


    this.loadItem = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var extension, loaderKey, loadedItem;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              extension = AsyncPreloader.getFileExtension(item.src);
              loaderKey = item.loader || AsyncPreloader.getLoaderKey(extension);
              return [4
              /*yield*/
              , this["load" + loaderKey](item)];

            case 1:
              loadedItem = _a.sent();
              this.items.set(item.id || item.src, loadedItem);
              return [2
              /*return*/
              , loadedItem];
          }
        });
      });
    }; // Special loaders

    /**
     * Load a manifest of items
     *
     * @param {string} src Manifest src url
     * @param {string} [key="items"] Manifest key in the JSON object containing the array of LoadItem.
     * @returns {Promise<LoadedValue[]>}
     */


    this.loadManifest = function (src, key) {
      if (key === void 0) {
        key = "items";
      }

      return __awaiter(_this, void 0, void 0, function () {
        var loadedManifest, items;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.loadJson({
                src: src
              })];

            case 1:
              loadedManifest = _a.sent();
              items = AsyncPreloader.getProp(loadedManifest, key);
              return [4
              /*yield*/
              , this.loadItems(items)];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    }; // Text loaders

    /**
     * Load an item and parse the Response as text
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response
     */


    this.loadText = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.text()];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item and parse the Response as json
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response
     */


    this.loadJson = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item and parse the Response as arrayBuffer
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response
     */


    this.loadArrayBuffer = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.arrayBuffer()];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item and parse the Response as blob
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response
     */


    this.loadBlob = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.blob()];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item and parse the Response as formData
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response
     */


    this.loadFormData = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.formData()];

            case 2:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    }; // Custom loaders

    /**
     * Load an item in one of the following cases:
     * - item's "loader" option set as "Image"
     * - item's "src" option extensions matching the loaders Map
     * - direct call of the method
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response according to the "body" option. Defaults to an HTMLImageElement with a blob as srcObject or src.
     */


    this.loadImage = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response, data, image;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response[item.body || this.defaultBodyMethod]()];

            case 2:
              data = _a.sent();
              if (item.body) return [2
              /*return*/
              , data];
              image = new Image();
              return [4
              /*yield*/
              , new Promise(function (resolve, reject) {
                image.addEventListener("load", function load() {
                  image.removeEventListener("load", load);
                  resolve(image);
                });
                image.addEventListener("error", function error() {
                  image.removeEventListener("error", error);
                  reject(image);
                });
                image.src = URL.createObjectURL(data);
              })];

            case 3:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item in one of the following cases:
     * - item's "loader" option set as "Video"
     * - item's "src" option extensions matching the loaders Map
     * - direct call of the method
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response according to the "body" option. Defaults to an HTMLVideoElement with a blob as src.
     */


    this.loadVideo = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response, data, video;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response[item.body || this.defaultBodyMethod]()];

            case 2:
              data = _a.sent();
              if (item.body) return [2
              /*return*/
              , data];
              video = document.createElement("video");
              return [4
              /*yield*/
              , new Promise(function (resolve, reject) {
                video.addEventListener("canplaythrough", function canplaythrough() {
                  video.removeEventListener("canplaythrough", canplaythrough);
                  resolve(video);
                });
                video.addEventListener("error", function error() {
                  video.removeEventListener("error", error);
                  reject(video);
                });

                try {
                  if (isSafari) throw "";
                  video.srcObject = data;
                } catch (error) {
                  video.src = URL.createObjectURL(data);
                }

                video.load();
              })];

            case 3:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item in one of the following cases:
     * - item's "loader" option set as "Audio"
     * - item's "src" option extensions matching the loaders Map
     * - direct call of the method
     *
     * @param {LoadItem} item Item to load
     * @returns {Promise<LoadedValue>} Fulfilled value of parsed Response according to the "body" option. Defaults to an HTMLAudioElement with a blob as srcObject or src.
     */


    this.loadAudio = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var response, data, audio;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response[item.body || this.defaultBodyMethod]()];

            case 2:
              data = _a.sent();
              if (item.body) return [2
              /*return*/
              , data];
              audio = document.createElement("audio");
              audio.autoplay = false;
              audio.preload = "auto";
              return [4
              /*yield*/
              , new Promise(function (resolve, reject) {
                audio.addEventListener("canplaythrough", function canplaythrough() {
                  audio.removeEventListener("canplaythrough", canplaythrough);
                  resolve(audio);
                });
                audio.addEventListener("error", function error() {
                  audio.removeEventListener("error", error);
                  reject(audio);
                });

                try {
                  if (isSafari) throw "";
                  audio.srcObject = data;
                } catch (error) {
                  audio.src = URL.createObjectURL(data);
                }

                audio.load();
              })];

            case 3:
              return [2
              /*return*/
              , _a.sent()];
          }
        });
      });
    };
    /**
     * Load an item in one of the following cases:
     * - item's "loader" option set as "Xml"
     * - item's "src" option extensions matching the loaders Map
     * - direct call of the method
     *
     * @param {LoadItem} item Item to load (need a mimeType specified or default to "application/xml")
     * @returns {Promise<LoadedXMLValue>} Result of Response parsed as a document.
     */


    this.loadXml = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var extension, response, data;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!item.mimeType) {
                extension = AsyncPreloader.getFileExtension(item.src);
                item = __assign(__assign({}, item), {
                  mimeType: AsyncPreloader.getMimeType(LoaderKey.Xml, extension)
                });
              }

              return [4
              /*yield*/
              , AsyncPreloader.fetchItem(item)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.text()];

            case 2:
              data = _a.sent();
              return [2
              /*return*/
              , AsyncPreloader.domParser.parseFromString(data, item.mimeType)];
          }
        });
      });
    };
    /**
     * Load a font via a FontFaceObserver instance
     *
     * @param {LoadItem} item Item to load (id correspond to the fontName).
     * @returns {Promise<string>} Fulfilled value with fontName initial id.
     */


    this.loadFont = function (item) {
      return __awaiter(_this, void 0, void 0, function () {
        var fontName, font;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              fontName = item.id;
              font = new FontFaceObserver$1(fontName, item.options || {});
              return [4
              /*yield*/
              , font.load()];

            case 1:
              _a.sent();

              return [2
              /*return*/
              , fontName];
          }
        });
      });
    };
  } // Utils

  /**
   * Fetch wrapper for LoadItem
   *
   * @param {LoadItem} item Item to fetch
   * @returns {Promise<Response>} Fetch response
   */


  AsyncPreloader.fetchItem = function (item) {
    return fetch(item.src, item.options || {});
  };
  /**
   * Get an object property by its path in the form 'a[0].b.c' or ['a', '0', 'b', 'c'].
   * Similar to [lodash.get](https://lodash.com/docs/4.17.5#get).
   *
   * @param {any} object Object with nested properties
   * @param {(string | string[])} path Path to the desired property
   * @returns {any} The returned object property
   */


  AsyncPreloader.getProp = function (object, path) {
    var p = Array.isArray(path) ? path : path.split(".").filter(function (index) {
      return index.length;
    });
    if (!p.length) return object;
    return AsyncPreloader.getProp(object[p.shift()], p);
  };
  /**
   * Get file extension from path
   *
   * @param {(RequestInfo | string)} path
   * @returns {string}
   */


  AsyncPreloader.getFileExtension = function (path) {
    return (path.match(/[^\\/]\.([^.\\/]+)$/) || [null]).pop();
  };
  /**
   * Retrieve loader key from extension (when the loader option isn't specified in the LoadItem)
   *
   * @param {string} extension
   * @returns {LoaderKey}
   */


  AsyncPreloader.getLoaderKey = function (extension) {
    var loader = Array.from(AsyncPreloader.loaders).find(function (loader) {
      return loader[1].extensions.includes(extension);
    });
    return loader ? loader[0] : LoaderKey.Text;
  };
  /**
   * Retrieve mime type from extension
   *
   * @param {LoaderKey} loaderKey
   * @param {string} extension
   * @returns {string}
   */


  AsyncPreloader.getMimeType = function (loaderKey, extension) {
    var loader = AsyncPreloader.loaders.get(loaderKey);
    return loader.mimeType[extension] || loader.defaultMimeType;
  };
  /**
   * Loader types and the extensions they handle
   *
   * Allows the omission of the loader key in a [[LoadItem.loader]] for some generic extensions
   */


  AsyncPreloader.loaders = new Map().set(LoaderKey.Text, {
    extensions: ["txt"]
  }).set(LoaderKey.Json, {
    extensions: ["json"]
  }).set(LoaderKey.Image, {
    extensions: ["jpeg", "jpg", "gif", "png", "webp"]
  }).set(LoaderKey.Video, {
    extensions: ["webm", "ogg", "mp4"]
  }).set(LoaderKey.Audio, {
    extensions: ["webm", "ogg", "mp3", "wav", "flac"]
  }).set(LoaderKey.Xml, {
    extensions: ["xml", "svg", "html"],
    mimeType: {
      xml: "text/xml",
      svg: "image/svg+xml",
      html: "text/html"
    },
    defaultMimeType: "text/xml"
  }).set(LoaderKey.Font, {
    extensions: ["woff2", "woff", "ttf", "otf", "eot"]
  });
  /**
   * DOMParser instance for the XML loader
   */

  AsyncPreloader.domParser = new DOMParser();
  return AsyncPreloader;
}();

var AsyncPreloaderInstance = new AsyncPreloader();

export default AsyncPreloaderInstance;
export { AsyncPreloader };
