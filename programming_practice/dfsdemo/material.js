/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
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
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
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
function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
;// CONCATENATED MODULE: ./node_modules/@material/base/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const foundation = ((/* unused pure expression or super */ null && (MDCFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/base/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root = root;
    this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const component = ((/* unused pure expression or super */ null && (MDCComponent)));
;// CONCATENATED MODULE: ./node_modules/@material/dom/announce.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Priorities for the announce function
 */
var AnnouncerPriority;

(function (AnnouncerPriority) {
  AnnouncerPriority["POLITE"] = "polite";
  AnnouncerPriority["ASSERTIVE"] = "assertive";
})(AnnouncerPriority || (AnnouncerPriority = {}));
/**
 * Data attribute added to live region element.
 */


var DATA_MDC_DOM_ANNOUNCE = 'data-mdc-dom-announce';
/**
 * Announces the given message with optional priority, defaulting to "polite"
 */

function announce(message, priority) {
  Announcer.getInstance().say(message, priority);
}

var Announcer =
/** @class */
function () {
  // Constructor made private to ensure only the singleton is used
  function Announcer() {
    this.liveRegions = new Map();
  }

  Announcer.getInstance = function () {
    if (!Announcer.instance) {
      Announcer.instance = new Announcer();
    }

    return Announcer.instance;
  };

  Announcer.prototype.say = function (message, priority) {
    if (priority === void 0) {
      priority = AnnouncerPriority.POLITE;
    }

    var liveRegion = this.getLiveRegion(priority); // Reset the region to pick up the message, even if the message is the
    // exact same as before.

    liveRegion.textContent = ''; // Timeout is necessary for screen readers like NVDA and VoiceOver.

    setTimeout(function () {
      liveRegion.textContent = message;
      document.addEventListener('click', clearLiveRegion);
    }, 1);

    function clearLiveRegion() {
      liveRegion.textContent = '';
      document.removeEventListener('click', clearLiveRegion);
    }
  };

  Announcer.prototype.getLiveRegion = function (priority) {
    var existingLiveRegion = this.liveRegions.get(priority);

    if (existingLiveRegion && document.body.contains(existingLiveRegion)) {
      return existingLiveRegion;
    }

    var liveRegion = this.createLiveRegion(priority);
    this.liveRegions.set(priority, liveRegion);
    return liveRegion;
  };

  Announcer.prototype.createLiveRegion = function (priority) {
    var el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = '-9999px';
    el.style.left = '-9999px';
    el.style.height = '1px';
    el.style.overflow = 'hidden';
    el.setAttribute('aria-atomic', 'true');
    el.setAttribute('aria-live', priority);
    el.setAttribute(DATA_MDC_DOM_ANNOUNCE, 'true');
    document.body.appendChild(el);
    return el;
  };

  return Announcer;
}();
;// CONCATENATED MODULE: ./node_modules/@material/dom/events.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}

function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  } // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


  var passiveSupported = false;

  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }

    };

    var handler = function () {};

    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}
;// CONCATENATED MODULE: ./node_modules/@material/dom/ponyfill.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */

function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;

  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }

  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
;// CONCATENATED MODULE: ./node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
;// CONCATENATED MODULE: ./node_modules/@material/ripple/util.js
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}
;// CONCATENATED MODULE: ./node_modules/@material/ripple/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



 // Activation events registered on the root element of each instance for activation

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.addClass(ROOT_1);

        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.removeClass(ROOT_2);

        _this.adapter.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = __assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const ripple_foundation = ((/* unused pure expression or super */ null && (MDCRippleFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/ripple/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  __extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function () {
        return instance.root.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return matches(instance.root, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root.addEventListener(evtType, handler, applyPassive());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/chips/trailingaction/constants.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var InteractionTrigger;

(function (InteractionTrigger) {
  InteractionTrigger[InteractionTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InteractionTrigger[InteractionTrigger["CLICK"] = 1] = "CLICK";
  InteractionTrigger[InteractionTrigger["BACKSPACE_KEY"] = 2] = "BACKSPACE_KEY";
  InteractionTrigger[InteractionTrigger["DELETE_KEY"] = 3] = "DELETE_KEY";
  InteractionTrigger[InteractionTrigger["SPACEBAR_KEY"] = 4] = "SPACEBAR_KEY";
  InteractionTrigger[InteractionTrigger["ENTER_KEY"] = 5] = "ENTER_KEY";
})(InteractionTrigger || (InteractionTrigger = {}));

var constants_strings = {
  ARIA_HIDDEN: 'aria-hidden',
  INTERACTION_EVENT: 'MDCChipTrailingAction:interaction',
  NAVIGATION_EVENT: 'MDCChipTrailingAction:navigation',
  TAB_INDEX: 'tabindex'
};
;// CONCATENATED MODULE: ./node_modules/@material/dom/keyboard.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
  UNKNOWN: 'Unknown',
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  SPACEBAR: 'Spacebar',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  DELETE: 'Delete',
  ESCAPE: 'Escape'
};
var normalizedKeys = new Set(); // IE11 has no support for new Map with iterable so we need to initialize this
// by hand.

normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27
};
var mappedKeyCodes = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this
// by hand.

mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
var navigationKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this
// by hand.

navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */

function normalizeKey(evt) {
  var key = evt.key; // If the event already has a normalized key, return it

  if (normalizedKeys.has(key)) {
    return key;
  } // tslint:disable-next-line:deprecation


  var mappedKey = mappedKeyCodes.get(evt.keyCode);

  if (mappedKey) {
    return mappedKey;
  }

  return KEY.UNKNOWN;
}
/**
 * isNavigationEvent returns whether the event is a navigation event
 */

function isNavigationEvent(evt) {
  return navigationKeys.has(normalizeKey(evt));
}
;// CONCATENATED MODULE: ./node_modules/@material/chips/trailingaction/foundation.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCChipTrailingActionFoundation =
/** @class */
function (_super) {
  __extends(MDCChipTrailingActionFoundation, _super);

  function MDCChipTrailingActionFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCChipTrailingActionFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCChipTrailingActionFoundation, "strings", {
    get: function () {
      return constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipTrailingActionFoundation, "defaultAdapter", {
    get: function () {
      return {
        focus: function () {
          return undefined;
        },
        getAttribute: function () {
          return null;
        },
        setAttribute: function () {
          return undefined;
        },
        notifyInteraction: function () {
          return undefined;
        },
        notifyNavigation: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCChipTrailingActionFoundation.prototype.handleClick = function (evt) {
    evt.stopPropagation();
    this.adapter.notifyInteraction(InteractionTrigger.CLICK);
  };

  MDCChipTrailingActionFoundation.prototype.handleKeydown = function (evt) {
    evt.stopPropagation();
    var key = normalizeKey(evt);

    if (this.shouldNotifyInteractionFromKey_(key)) {
      var trigger = this.getTriggerFromKey_(key);
      this.adapter.notifyInteraction(trigger);
      return;
    }

    if (isNavigationEvent(evt)) {
      this.adapter.notifyNavigation(key);
      return;
    }
  };

  MDCChipTrailingActionFoundation.prototype.removeFocus = function () {
    this.adapter.setAttribute(constants_strings.TAB_INDEX, '-1');
  };

  MDCChipTrailingActionFoundation.prototype.focus = function () {
    this.adapter.setAttribute(constants_strings.TAB_INDEX, '0');
    this.adapter.focus();
  };

  MDCChipTrailingActionFoundation.prototype.isNavigable = function () {
    return this.adapter.getAttribute(constants_strings.ARIA_HIDDEN) !== 'true';
  };

  MDCChipTrailingActionFoundation.prototype.shouldNotifyInteractionFromKey_ = function (key) {
    var isFromActionKey = key === KEY.ENTER || key === KEY.SPACEBAR;
    var isFromDeleteKey = key === KEY.BACKSPACE || key === KEY.DELETE;
    return isFromActionKey || isFromDeleteKey;
  };

  MDCChipTrailingActionFoundation.prototype.getTriggerFromKey_ = function (key) {
    if (key === KEY.SPACEBAR) {
      return InteractionTrigger.SPACEBAR_KEY;
    }

    if (key === KEY.ENTER) {
      return InteractionTrigger.ENTER_KEY;
    }

    if (key === KEY.DELETE) {
      return InteractionTrigger.DELETE_KEY;
    }

    if (key === KEY.BACKSPACE) {
      return InteractionTrigger.BACKSPACE_KEY;
    } // Default case, should never be returned


    return InteractionTrigger.UNSPECIFIED;
  };

  return MDCChipTrailingActionFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const trailingaction_foundation = ((/* unused pure expression or super */ null && (MDCChipTrailingActionFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/chips/trailingaction/component.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCChipTrailingAction =
/** @class */
function (_super) {
  __extends(MDCChipTrailingAction, _super);

  function MDCChipTrailingAction() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCChipTrailingAction.prototype, "ripple", {
    get: function () {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });

  MDCChipTrailingAction.attachTo = function (root) {
    return new MDCChipTrailingAction(root);
  };

  MDCChipTrailingAction.prototype.initialize = function (rippleFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el, foundation) {
        return new MDCRipple(el, foundation);
      };
    } // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.


    var rippleAdapter = MDCRipple.createAdapter(this);
    this.ripple_ = rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
  };

  MDCChipTrailingAction.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleClick_ = function (evt) {
      _this.foundation.handleClick(evt);
    };

    this.handleKeydown_ = function (evt) {
      _this.foundation.handleKeydown(evt);
    };

    this.listen('click', this.handleClick_);
    this.listen('keydown', this.handleKeydown_);
  };

  MDCChipTrailingAction.prototype.destroy = function () {
    this.ripple_.destroy();
    this.unlisten('click', this.handleClick_);
    this.unlisten('keydown', this.handleKeydown_);

    _super.prototype.destroy.call(this);
  };

  MDCChipTrailingAction.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      focus: function () {
        // TODO(b/157231863): Migate MDCComponent#root to HTMLElement
        _this.root.focus();
      },
      getAttribute: function (attr) {
        return _this.root.getAttribute(attr);
      },
      notifyInteraction: function (trigger) {
        return _this.emit(constants_strings.INTERACTION_EVENT, {
          trigger: trigger
        }, true
        /* shouldBubble */
        );
      },
      notifyNavigation: function (key) {
        _this.emit(constants_strings.NAVIGATION_EVENT, {
          key: key
        }, true
        /* shouldBubble */
        );
      },
      setAttribute: function (attr, value) {
        _this.root.setAttribute(attr, value);
      }
    };
    return new MDCChipTrailingActionFoundation(adapter);
  };

  MDCChipTrailingAction.prototype.isNavigable = function () {
    return this.foundation.isNavigable();
  };

  MDCChipTrailingAction.prototype.focus = function () {
    this.foundation.focus();
  };

  MDCChipTrailingAction.prototype.removeFocus = function () {
    this.foundation.removeFocus();
  };

  return MDCChipTrailingAction;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/chips/chip/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Direction;

(function (Direction) {
  Direction["LEFT"] = "left";
  Direction["RIGHT"] = "right";
})(Direction || (Direction = {}));

var EventSource;

(function (EventSource) {
  EventSource["PRIMARY"] = "primary";
  EventSource["TRAILING"] = "trailing";
  EventSource["NONE"] = "none";
})(EventSource || (EventSource = {}));

var chip_constants_strings = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-added-announcement',
  ARIA_CHECKED: 'aria-checked',
  ARROW_DOWN_KEY: 'ArrowDown',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  ARROW_UP_KEY: 'ArrowUp',
  BACKSPACE_KEY: 'Backspace',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  DELETE_KEY: 'Delete',
  END_KEY: 'End',
  ENTER_KEY: 'Enter',
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  HOME_KEY: 'Home',
  IE_ARROW_DOWN_KEY: 'Down',
  IE_ARROW_LEFT_KEY: 'Left',
  IE_ARROW_RIGHT_KEY: 'Right',
  IE_ARROW_UP_KEY: 'Up',
  IE_DELETE_KEY: 'Del',
  INTERACTION_EVENT: 'MDCChip:interaction',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  NAVIGATION_EVENT: 'MDCChip:navigation',
  PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-removed-announcement',
  REMOVAL_EVENT: 'MDCChip:removal',
  SELECTION_EVENT: 'MDCChip:selection',
  SPACEBAR_KEY: ' ',
  TAB_INDEX: 'tabindex',
  TRAILING_ACTION_SELECTOR: '.mdc-chip-trailing-action',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};
var constants_cssClasses = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  DELETABLE: 'mdc-chip--deletable',
  EDITABLE: 'mdc-chip--editable',
  EDITING: 'mdc-chip--editing',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  PRIMARY_ACTION: 'mdc-chip__primary-action',
  PRIMARY_ACTION_FOCUSED: 'mdc-chip--primary-action-focused',
  SELECTED: 'mdc-chip--selected',
  TEXT: 'mdc-chip__text',
  TRAILING_ACTION: 'mdc-chip__trailing-action',
  TRAILING_ICON: 'mdc-chip__icon--trailing'
};
var constants_navigationKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

constants_navigationKeys.add(chip_constants_strings.ARROW_LEFT_KEY);
constants_navigationKeys.add(chip_constants_strings.ARROW_RIGHT_KEY);
constants_navigationKeys.add(chip_constants_strings.ARROW_DOWN_KEY);
constants_navigationKeys.add(chip_constants_strings.ARROW_UP_KEY);
constants_navigationKeys.add(chip_constants_strings.END_KEY);
constants_navigationKeys.add(chip_constants_strings.HOME_KEY);
constants_navigationKeys.add(chip_constants_strings.IE_ARROW_LEFT_KEY);
constants_navigationKeys.add(chip_constants_strings.IE_ARROW_RIGHT_KEY);
constants_navigationKeys.add(chip_constants_strings.IE_ARROW_DOWN_KEY);
constants_navigationKeys.add(chip_constants_strings.IE_ARROW_UP_KEY);
var jumpChipKeys = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

jumpChipKeys.add(chip_constants_strings.ARROW_UP_KEY);
jumpChipKeys.add(chip_constants_strings.ARROW_DOWN_KEY);
jumpChipKeys.add(chip_constants_strings.HOME_KEY);
jumpChipKeys.add(chip_constants_strings.END_KEY);
jumpChipKeys.add(chip_constants_strings.IE_ARROW_UP_KEY);
jumpChipKeys.add(chip_constants_strings.IE_ARROW_DOWN_KEY);
;// CONCATENATED MODULE: ./node_modules/@material/chips/chip/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var emptyClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};
var FocusBehavior;

(function (FocusBehavior) {
  FocusBehavior[FocusBehavior["SHOULD_FOCUS"] = 0] = "SHOULD_FOCUS";
  FocusBehavior[FocusBehavior["SHOULD_NOT_FOCUS"] = 1] = "SHOULD_NOT_FOCUS";
})(FocusBehavior || (FocusBehavior = {}));

var MDCChipFoundation =
/** @class */
function (_super) {
  __extends(MDCChipFoundation, _super);

  function MDCChipFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCChipFoundation.defaultAdapter), adapter)) || this;
    /** Whether a trailing icon click should immediately trigger exit/removal of the chip. */


    _this.shouldRemoveOnTrailingIconClick_ = true;
    /**
     * Whether the primary action should receive focus on click. Should only be
     * set to true for clients who programmatically give focus to a different
     * element on the page when a chip is clicked (like a menu).
     */

    _this.shouldFocusPrimaryActionOnClick_ = true;
    return _this;
  }

  Object.defineProperty(MDCChipFoundation, "strings", {
    get: function () {
      return chip_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "cssClasses", {
    get: function () {
      return constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        addClassToLeadingIcon: function () {
          return undefined;
        },
        eventTargetHasClass: function () {
          return false;
        },
        focusPrimaryAction: function () {
          return undefined;
        },
        focusTrailingAction: function () {
          return undefined;
        },
        getAttribute: function () {
          return null;
        },
        getCheckmarkBoundingClientRect: function () {
          return emptyClientRect;
        },
        getComputedStyleValue: function () {
          return '';
        },
        getRootBoundingClientRect: function () {
          return emptyClientRect;
        },
        hasClass: function () {
          return false;
        },
        hasLeadingIcon: function () {
          return false;
        },
        isRTL: function () {
          return false;
        },
        isTrailingActionNavigable: function () {
          return false;
        },
        notifyEditFinish: function () {
          return undefined;
        },
        notifyEditStart: function () {
          return undefined;
        },
        notifyInteraction: function () {
          return undefined;
        },
        notifyNavigation: function () {
          return undefined;
        },
        notifyRemoval: function () {
          return undefined;
        },
        notifySelection: function () {
          return undefined;
        },
        notifyTrailingIconInteraction: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        removeClassFromLeadingIcon: function () {
          return undefined;
        },
        removeTrailingActionFocus: function () {
          return undefined;
        },
        setPrimaryActionAttr: function () {
          return undefined;
        },
        setStyleProperty: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCChipFoundation.prototype.isSelected = function () {
    return this.adapter.hasClass(constants_cssClasses.SELECTED);
  };

  MDCChipFoundation.prototype.isEditable = function () {
    return this.adapter.hasClass(constants_cssClasses.EDITABLE);
  };

  MDCChipFoundation.prototype.isEditing = function () {
    return this.adapter.hasClass(constants_cssClasses.EDITING);
  };

  MDCChipFoundation.prototype.setSelected = function (selected) {
    this.setSelected_(selected);
    this.notifySelection_(selected);
  };

  MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.setSelected_(selected);

    if (shouldNotifyClients) {
      this.notifyIgnoredSelection_(selected);
    }
  };

  MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
    return this.shouldRemoveOnTrailingIconClick_;
  };

  MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  };

  MDCChipFoundation.prototype.setShouldFocusPrimaryActionOnClick = function (shouldFocus) {
    this.shouldFocusPrimaryActionOnClick_ = shouldFocus;
  };

  MDCChipFoundation.prototype.getDimensions = function () {
    var _this = this;

    var getRootRect = function () {
      return _this.adapter.getRootBoundingClientRect();
    };

    var getCheckmarkRect = function () {
      return _this.adapter.getCheckmarkBoundingClientRect();
    }; // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
    // size of the checkmark.


    if (!this.adapter.hasLeadingIcon()) {
      var checkmarkRect = getCheckmarkRect();

      if (checkmarkRect) {
        var rootRect = getRootRect(); // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
        // However, the checkbox is initially hidden by setting the width to 0.
        // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
        // when adding it to the root client rect's width.

        return {
          bottom: rootRect.bottom,
          height: rootRect.height,
          left: rootRect.left,
          right: rootRect.right,
          top: rootRect.top,
          width: rootRect.width + checkmarkRect.height
        };
      }
    }

    return getRootRect();
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChipFoundation.prototype.beginExit = function () {
    this.adapter.addClass(constants_cssClasses.CHIP_EXIT);
  };

  MDCChipFoundation.prototype.handleClick = function () {
    this.adapter.notifyInteraction();
    this.setPrimaryActionFocusable_(this.getFocusBehavior_());
  };

  MDCChipFoundation.prototype.handleDoubleClick = function () {
    if (this.isEditable()) {
      this.startEditing();
    }
  };
  /**
   * Handles a transition end event on the root element.
   */


  MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
    var _this = this; // Handle transition end event on the chip when it is about to be removed.


    var shouldHandle = this.adapter.eventTargetHasClass(evt.target, constants_cssClasses.CHIP_EXIT);
    var widthIsAnimating = evt.propertyName === 'width';
    var opacityIsAnimating = evt.propertyName === 'opacity';

    if (shouldHandle && opacityIsAnimating) {
      // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
      var chipWidth_1 = this.adapter.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
      // to its current pixel width, so we aren't transitioning out of 'auto'.

      requestAnimationFrame(function () {
        _this.adapter.setStyleProperty('width', chipWidth_1); // To mitigate jitter, start transitioning padding and margin before width.


        _this.adapter.setStyleProperty('padding', '0');

        _this.adapter.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


        requestAnimationFrame(function () {
          _this.adapter.setStyleProperty('width', '0');
        });
      });
      return;
    }

    if (shouldHandle && widthIsAnimating) {
      this.removeFocus();
      var removedAnnouncement = this.adapter.getAttribute(chip_constants_strings.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
      this.adapter.notifyRemoval(removedAnnouncement);
    } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


    if (!opacityIsAnimating) {
      return;
    }

    var shouldHideLeadingIcon = this.adapter.eventTargetHasClass(evt.target, constants_cssClasses.LEADING_ICON) && this.adapter.hasClass(constants_cssClasses.SELECTED);
    var shouldShowLeadingIcon = this.adapter.eventTargetHasClass(evt.target, constants_cssClasses.CHECKMARK) && !this.adapter.hasClass(constants_cssClasses.SELECTED);

    if (shouldHideLeadingIcon) {
      this.adapter.addClassToLeadingIcon(constants_cssClasses.HIDDEN_LEADING_ICON);
      return;
    }

    if (shouldShowLeadingIcon) {
      this.adapter.removeClassFromLeadingIcon(constants_cssClasses.HIDDEN_LEADING_ICON);
      return;
    }
  };

  MDCChipFoundation.prototype.handleFocusIn = function (evt) {
    // Early exit if the event doesn't come from the primary action
    if (!this.eventFromPrimaryAction_(evt)) {
      return;
    }

    this.adapter.addClass(constants_cssClasses.PRIMARY_ACTION_FOCUSED);
  };

  MDCChipFoundation.prototype.handleFocusOut = function (evt) {
    // Early exit if the event doesn't come from the primary action
    if (!this.eventFromPrimaryAction_(evt)) {
      return;
    }

    if (this.isEditing()) {
      this.finishEditing();
    }

    this.adapter.removeClass(constants_cssClasses.PRIMARY_ACTION_FOCUSED);
  };
  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   */


  MDCChipFoundation.prototype.handleTrailingActionInteraction = function () {
    this.adapter.notifyTrailingIconInteraction();
    this.removeChip_();
  };
  /**
   * Handles a keydown event from the root element.
   */


  MDCChipFoundation.prototype.handleKeydown = function (evt) {
    if (this.isEditing()) {
      if (this.shouldFinishEditing(evt)) {
        evt.preventDefault();
        this.finishEditing();
      } // When editing, the foundation should only handle key events that finish
      // the editing process.


      return;
    }

    if (this.isEditable()) {
      if (this.shouldStartEditing(evt)) {
        evt.preventDefault();
        this.startEditing();
      }
    }

    if (this.shouldNotifyInteraction_(evt)) {
      this.adapter.notifyInteraction();
      this.setPrimaryActionFocusable_(this.getFocusBehavior_());
      return;
    }

    if (this.isDeleteAction_(evt)) {
      evt.preventDefault();
      this.removeChip_();
      return;
    } // Early exit if the key is not usable


    if (!constants_navigationKeys.has(evt.key)) {
      return;
    } // Prevent default behavior for movement keys which could include scrolling


    evt.preventDefault();
    this.focusNextAction_(evt.key, EventSource.PRIMARY);
  };

  MDCChipFoundation.prototype.handleTrailingActionNavigation = function (evt) {
    return this.focusNextAction_(evt.detail.key, EventSource.TRAILING);
  };
  /**
   * Called by the chip set to remove focus from the chip actions.
   */


  MDCChipFoundation.prototype.removeFocus = function () {
    this.adapter.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '-1');
    this.adapter.removeTrailingActionFocus();
  };
  /**
   * Called by the chip set to focus the primary action.
   *
   */


  MDCChipFoundation.prototype.focusPrimaryAction = function () {
    this.setPrimaryActionFocusable_(FocusBehavior.SHOULD_FOCUS);
  };
  /**
   * Called by the chip set to focus the trailing action (if present), otherwise
   * gives focus to the trailing action.
   */


  MDCChipFoundation.prototype.focusTrailingAction = function () {
    var trailingActionIsNavigable = this.adapter.isTrailingActionNavigable();

    if (trailingActionIsNavigable) {
      this.adapter.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '-1');
      this.adapter.focusTrailingAction();
      return;
    }

    this.focusPrimaryAction();
  };

  MDCChipFoundation.prototype.setPrimaryActionFocusable_ = function (focusBehavior) {
    this.adapter.setPrimaryActionAttr(chip_constants_strings.TAB_INDEX, '0');

    if (focusBehavior === FocusBehavior.SHOULD_FOCUS) {
      this.adapter.focusPrimaryAction();
    }

    this.adapter.removeTrailingActionFocus();
  };

  MDCChipFoundation.prototype.getFocusBehavior_ = function () {
    if (this.shouldFocusPrimaryActionOnClick_) {
      return FocusBehavior.SHOULD_FOCUS;
    }

    return FocusBehavior.SHOULD_NOT_FOCUS;
  };

  MDCChipFoundation.prototype.focusNextAction_ = function (key, source) {
    var isTrailingActionNavigable = this.adapter.isTrailingActionNavigable();
    var dir = this.getDirection_(key); // Early exit if the key should jump chips

    if (jumpChipKeys.has(key) || !isTrailingActionNavigable) {
      return this.adapter.notifyNavigation(key, source);
    }

    if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
      return this.focusTrailingAction();
    }

    if (source === EventSource.TRAILING && dir === Direction.LEFT) {
      return this.focusPrimaryAction();
    }

    this.adapter.notifyNavigation(key, EventSource.NONE);
  };

  MDCChipFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter.isRTL();
    var isLeftKey = key === chip_constants_strings.ARROW_LEFT_KEY || key === chip_constants_strings.IE_ARROW_LEFT_KEY;
    var isRightKey = key === chip_constants_strings.ARROW_RIGHT_KEY || key === chip_constants_strings.IE_ARROW_RIGHT_KEY;

    if (!isRTL && isLeftKey || isRTL && isRightKey) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };

  MDCChipFoundation.prototype.removeChip_ = function () {
    if (this.shouldRemoveOnTrailingIconClick_) {
      this.beginExit();
    }
  };

  MDCChipFoundation.prototype.shouldStartEditing = function (evt) {
    return this.eventFromPrimaryAction_(evt) && evt.key === chip_constants_strings.ENTER_KEY;
  };

  MDCChipFoundation.prototype.shouldFinishEditing = function (evt) {
    return evt.key === chip_constants_strings.ENTER_KEY;
  };

  MDCChipFoundation.prototype.shouldNotifyInteraction_ = function (evt) {
    return evt.key === chip_constants_strings.ENTER_KEY || evt.key === chip_constants_strings.SPACEBAR_KEY;
  };

  MDCChipFoundation.prototype.isDeleteAction_ = function (evt) {
    var isDeletable = this.adapter.hasClass(constants_cssClasses.DELETABLE);
    return isDeletable && (evt.key === chip_constants_strings.BACKSPACE_KEY || evt.key === chip_constants_strings.DELETE_KEY || evt.key === chip_constants_strings.IE_DELETE_KEY);
  };

  MDCChipFoundation.prototype.setSelected_ = function (selected) {
    if (selected) {
      this.adapter.addClass(constants_cssClasses.SELECTED);
      this.adapter.setPrimaryActionAttr(chip_constants_strings.ARIA_CHECKED, 'true');
    } else {
      this.adapter.removeClass(constants_cssClasses.SELECTED);
      this.adapter.setPrimaryActionAttr(chip_constants_strings.ARIA_CHECKED, 'false');
    }
  };

  MDCChipFoundation.prototype.notifySelection_ = function (selected) {
    this.adapter.notifySelection(selected, false);
  };

  MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
    this.adapter.notifySelection(selected, true);
  };

  MDCChipFoundation.prototype.eventFromPrimaryAction_ = function (evt) {
    return this.adapter.eventTargetHasClass(evt.target, constants_cssClasses.PRIMARY_ACTION);
  };

  MDCChipFoundation.prototype.startEditing = function () {
    this.adapter.addClass(constants_cssClasses.EDITING);
    this.adapter.notifyEditStart();
  };

  MDCChipFoundation.prototype.finishEditing = function () {
    this.adapter.removeClass(constants_cssClasses.EDITING);
    this.adapter.notifyEditFinish();
  };

  return MDCChipFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const chip_foundation = ((/* unused pure expression or super */ null && (MDCChipFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/chips/chip/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */









var MDCChip =
/** @class */
function (_super) {
  __extends(MDCChip, _super);

  function MDCChip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCChip.prototype, "selected", {
    /**
     * @return Whether the chip is selected.
     */
    get: function () {
      return this.foundation.isSelected();
    },

    /**
     * Sets selected state on the chip.
     */
    set: function (selected) {
      this.foundation.setSelected(selected);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
    /**
     * @return Whether a trailing icon click should trigger exit/removal of the chip.
     */
    get: function () {
      return this.foundation.getShouldRemoveOnTrailingIconClick();
    },

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     */
    set: function (shouldRemove) {
      this.foundation.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "setShouldFocusPrimaryActionOnClick", {
    /**
     * Sets whether a clicking on the chip should focus the primary action.
     */
    set: function (shouldFocus) {
      this.foundation.setShouldFocusPrimaryActionOnClick(shouldFocus);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "ripple", {
    get: function () {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "id", {
    get: function () {
      return this.root.id;
    },
    enumerable: true,
    configurable: true
  });

  MDCChip.attachTo = function (root) {
    return new MDCChip(root);
  };

  MDCChip.prototype.initialize = function (rippleFactory, trailingActionFactory) {
    var _this = this;

    if (rippleFactory === void 0) {
      rippleFactory = function (el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    if (trailingActionFactory === void 0) {
      trailingActionFactory = function (el) {
        return new MDCChipTrailingAction(el);
      };
    }

    this.leadingIcon_ = this.root.querySelector(chip_constants_strings.LEADING_ICON_SELECTOR);
    this.checkmark_ = this.root.querySelector(chip_constants_strings.CHECKMARK_SELECTOR);
    this.primaryAction_ = this.root.querySelector(chip_constants_strings.PRIMARY_ACTION_SELECTOR);
    var trailingActionEl = this.root.querySelector(chip_constants_strings.TRAILING_ACTION_SELECTOR);

    if (trailingActionEl) {
      this.trailingAction_ = trailingActionFactory(trailingActionEl);
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), {
      computeBoundingRect: function () {
        return _this.foundation.getDimensions();
      }
    });

    this.ripple_ = rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
  };

  MDCChip.prototype.initialSyncWithDOM = function () {
    var _this = this; // Custom events


    this.handleTrailingActionInteraction_ = function () {
      _this.foundation.handleTrailingActionInteraction();
    };

    this.handleTrailingActionNavigation_ = function (evt) {
      _this.foundation.handleTrailingActionNavigation(evt);
    }; // Native events


    this.handleClick_ = function () {
      _this.foundation.handleClick();
    };

    this.handleKeydown_ = function (evt) {
      _this.foundation.handleKeydown(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      _this.foundation.handleTransitionEnd(evt);
    };

    this.handleFocusIn_ = function (evt) {
      _this.foundation.handleFocusIn(evt);
    };

    this.handleFocusOut_ = function (evt) {
      _this.foundation.handleFocusOut(evt);
    };

    this.listen('transitionend', this.handleTransitionEnd_);
    this.listen('click', this.handleClick_);
    this.listen('keydown', this.handleKeydown_);
    this.listen('focusin', this.handleFocusIn_);
    this.listen('focusout', this.handleFocusOut_);

    if (this.trailingAction_) {
      this.listen(constants_strings.INTERACTION_EVENT, this.handleTrailingActionInteraction_);
      this.listen(constants_strings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_);
    }
  };

  MDCChip.prototype.destroy = function () {
    this.ripple_.destroy();
    this.unlisten('transitionend', this.handleTransitionEnd_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.handleFocusIn_);
    this.unlisten('focusout', this.handleFocusOut_);

    if (this.trailingAction_) {
      this.unlisten(constants_strings.INTERACTION_EVENT, this.handleTrailingActionInteraction_);
      this.unlisten(constants_strings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_);
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChip.prototype.beginExit = function () {
    this.foundation.beginExit();
  };

  MDCChip.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      addClassToLeadingIcon: function (className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: function (target, className) {
        return target ? target.classList.contains(className) : false;
      },
      focusPrimaryAction: function () {
        if (_this.primaryAction_) {
          _this.primaryAction_.focus();
        }
      },
      focusTrailingAction: function () {
        if (_this.trailingAction_) {
          _this.trailingAction_.focus();
        }
      },
      getAttribute: function (attr) {
        return _this.root.getAttribute(attr);
      },
      getCheckmarkBoundingClientRect: function () {
        return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
      },
      getComputedStyleValue: function (propertyName) {
        return window.getComputedStyle(_this.root).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function () {
        return _this.root.getBoundingClientRect();
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      hasLeadingIcon: function () {
        return !!_this.leadingIcon_;
      },
      isRTL: function () {
        return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl';
      },
      isTrailingActionNavigable: function () {
        if (_this.trailingAction_) {
          return _this.trailingAction_.isNavigable();
        }

        return false;
      },
      notifyInteraction: function () {
        return _this.emit(chip_constants_strings.INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      notifyNavigation: function (key, source) {
        return _this.emit(chip_constants_strings.NAVIGATION_EVENT, {
          chipId: _this.id,
          key: key,
          source: source
        }, true
        /* shouldBubble */
        );
      },
      notifyRemoval: function (removedAnnouncement) {
        _this.emit(chip_constants_strings.REMOVAL_EVENT, {
          chipId: _this.id,
          removedAnnouncement: removedAnnouncement
        }, true
        /* shouldBubble */
        );
      },
      notifySelection: function (selected, shouldIgnore) {
        return _this.emit(chip_constants_strings.SELECTION_EVENT, {
          chipId: _this.id,
          selected: selected,
          shouldIgnore: shouldIgnore
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function () {
        return _this.emit(chip_constants_strings.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      notifyEditStart: function () {},
      notifyEditFinish: function () {},
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      removeClassFromLeadingIcon: function (className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.remove(className);
        }
      },
      removeTrailingActionFocus: function () {
        if (_this.trailingAction_) {
          _this.trailingAction_.removeFocus();
        }
      },
      setPrimaryActionAttr: function (attr, value) {
        if (_this.primaryAction_) {
          _this.primaryAction_.setAttribute(attr, value);
        }
      },
      setStyleProperty: function (propertyName, value) {
        return _this.root.style.setProperty(propertyName, value);
      }
    };
    return new MDCChipFoundation(adapter);
  };

  MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
    this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
  };

  MDCChip.prototype.focusPrimaryAction = function () {
    this.foundation.focusPrimaryAction();
  };

  MDCChip.prototype.focusTrailingAction = function () {
    this.foundation.focusTrailingAction();
  };

  MDCChip.prototype.removeFocus = function () {
    this.foundation.removeFocus();
  };

  MDCChip.prototype.remove = function () {
    var parent = this.root.parentNode;

    if (parent !== null) {
      parent.removeChild(this.root);
    }
  };

  return MDCChip;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/chips/chip-set/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var chip_set_constants_strings = {
  CHIP_SELECTOR: '.mdc-chip'
};
var chip_set_constants_cssClasses = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};
;// CONCATENATED MODULE: ./node_modules/@material/chips/chip-set/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCChipSetFoundation =
/** @class */
function (_super) {
  __extends(MDCChipSetFoundation, _super);

  function MDCChipSetFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     */


    _this.selectedChipIds_ = [];
    return _this;
  }

  Object.defineProperty(MDCChipSetFoundation, "strings", {
    get: function () {
      return chip_set_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
    get: function () {
      return chip_set_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
    get: function () {
      return {
        announceMessage: function () {
          return undefined;
        },
        focusChipPrimaryActionAtIndex: function () {
          return undefined;
        },
        focusChipTrailingActionAtIndex: function () {
          return undefined;
        },
        getChipListCount: function () {
          return -1;
        },
        getIndexOfChipById: function () {
          return -1;
        },
        hasClass: function () {
          return false;
        },
        isRTL: function () {
          return false;
        },
        removeChipAtIndex: function () {
          return undefined;
        },
        removeFocusFromChipAtIndex: function () {
          return undefined;
        },
        selectChipAtIndex: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns an array of the IDs of all selected chips.
   */

  MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
    return this.selectedChipIds_.slice();
  };
  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   * Does not notify clients of the updated selection state.
   */


  MDCChipSetFoundation.prototype.select = function (chipId) {
    this.select_(chipId, false);
  };
  /**
   * Handles a chip interaction event
   */


  MDCChipSetFoundation.prototype.handleChipInteraction = function (_a) {
    var chipId = _a.chipId;
    var index = this.adapter.getIndexOfChipById(chipId);
    this.removeFocusFromChipsExcept_(index);

    if (this.adapter.hasClass(chip_set_constants_cssClasses.CHOICE) || this.adapter.hasClass(chip_set_constants_cssClasses.FILTER)) {
      this.toggleSelect_(chipId);
    }
  };
  /**
   * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
   */


  MDCChipSetFoundation.prototype.handleChipSelection = function (_a) {
    var chipId = _a.chipId,
        selected = _a.selected,
        shouldIgnore = _a.shouldIgnore; // Early exit if we should ignore the event

    if (shouldIgnore) {
      return;
    }

    var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

    if (selected && !chipIsSelected) {
      this.select(chipId);
    } else if (!selected && chipIsSelected) {
      this.deselect_(chipId);
    }
  };
  /**
   * Handles the event when a chip is removed.
   */


  MDCChipSetFoundation.prototype.handleChipRemoval = function (_a) {
    var chipId = _a.chipId,
        removedAnnouncement = _a.removedAnnouncement;

    if (removedAnnouncement) {
      this.adapter.announceMessage(removedAnnouncement);
    }

    var index = this.adapter.getIndexOfChipById(chipId);
    this.deselectAndNotifyClients_(chipId);
    this.adapter.removeChipAtIndex(index);
    var maxIndex = this.adapter.getChipListCount() - 1;

    if (maxIndex < 0) {
      return;
    }

    var nextIndex = Math.min(index, maxIndex);
    this.removeFocusFromChipsExcept_(nextIndex); // After removing a chip, we should focus the trailing action for the next chip.

    this.adapter.focusChipTrailingActionAtIndex(nextIndex);
  };
  /**
   * Handles a chip navigation event.
   */


  MDCChipSetFoundation.prototype.handleChipNavigation = function (_a) {
    var chipId = _a.chipId,
        key = _a.key,
        source = _a.source;
    var maxIndex = this.adapter.getChipListCount() - 1;
    var index = this.adapter.getIndexOfChipById(chipId); // Early exit if the index is out of range or the key is unusable

    if (index === -1 || !constants_navigationKeys.has(key)) {
      return;
    }

    var isRTL = this.adapter.isRTL();
    var isLeftKey = key === chip_constants_strings.ARROW_LEFT_KEY || key === chip_constants_strings.IE_ARROW_LEFT_KEY;
    var isRightKey = key === chip_constants_strings.ARROW_RIGHT_KEY || key === chip_constants_strings.IE_ARROW_RIGHT_KEY;
    var isDownKey = key === chip_constants_strings.ARROW_DOWN_KEY || key === chip_constants_strings.IE_ARROW_DOWN_KEY;
    var shouldIncrement = !isRTL && isRightKey || isRTL && isLeftKey || isDownKey;
    var isHome = key === chip_constants_strings.HOME_KEY;
    var isEnd = key === chip_constants_strings.END_KEY;

    if (shouldIncrement) {
      index++;
    } else if (isHome) {
      index = 0;
    } else if (isEnd) {
      index = maxIndex;
    } else {
      index--;
    } // Early exit if the index is out of bounds


    if (index < 0 || index > maxIndex) {
      return;
    }

    this.removeFocusFromChipsExcept_(index);
    this.focusChipAction_(index, key, source);
  };

  MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
    var shouldJumpChips = jumpChipKeys.has(key);

    if (shouldJumpChips && source === EventSource.PRIMARY) {
      return this.adapter.focusChipPrimaryActionAtIndex(index);
    }

    if (shouldJumpChips && source === EventSource.TRAILING) {
      return this.adapter.focusChipTrailingActionAtIndex(index);
    }

    var dir = this.getDirection_(key);

    if (dir === Direction.LEFT) {
      return this.adapter.focusChipTrailingActionAtIndex(index);
    }

    if (dir === Direction.RIGHT) {
      return this.adapter.focusChipPrimaryActionAtIndex(index);
    }
  };

  MDCChipSetFoundation.prototype.getDirection_ = function (key) {
    var isRTL = this.adapter.isRTL();
    var isLeftKey = key === chip_constants_strings.ARROW_LEFT_KEY || key === chip_constants_strings.IE_ARROW_LEFT_KEY;
    var isRightKey = key === chip_constants_strings.ARROW_RIGHT_KEY || key === chip_constants_strings.IE_ARROW_RIGHT_KEY;

    if (!isRTL && isLeftKey || isRTL && isRightKey) {
      return Direction.LEFT;
    }

    return Direction.RIGHT;
  };
  /**
   * Deselects the chip with the given id and optionally notifies clients.
   */


  MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
    if (shouldNotifyClients === void 0) {
      shouldNotifyClients = false;
    }

    var index = this.selectedChipIds_.indexOf(chipId);

    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      var chipIndex = this.adapter.getIndexOfChipById(chipId);
      this.adapter.selectChipAtIndex(chipIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }
  };
  /**
   * Deselects the chip with the given id and notifies clients.
   */


  MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
    this.deselect_(chipId, true);
  };
  /**
   * Toggles selection of the chip with the given id.
   */


  MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      this.deselectAndNotifyClients_(chipId);
    } else {
      this.selectAndNotifyClients_(chipId);
    }
  };

  MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
    var chipCount = this.adapter.getChipListCount();

    for (var i = 0; i < chipCount; i++) {
      if (i !== index) {
        this.adapter.removeFocusFromChipAtIndex(i);
      }
    }
  };

  MDCChipSetFoundation.prototype.selectAndNotifyClients_ = function (chipId) {
    this.select_(chipId, true);
  };

  MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter.hasClass(chip_set_constants_cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
      var previouslySelectedChip = this.selectedChipIds_[0];
      var previouslySelectedIndex = this.adapter.getIndexOfChipById(previouslySelectedChip);
      this.selectedChipIds_ = [];
      this.adapter.selectChipAtIndex(previouslySelectedIndex,
      /** isSelected */
      false, shouldNotifyClients);
    }

    this.selectedChipIds_.push(chipId);
    var index = this.adapter.getIndexOfChipById(chipId);
    this.adapter.selectChipAtIndex(index,
    /** isSelected */
    true, shouldNotifyClients);
  };

  return MDCChipSetFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const chip_set_foundation = ((/* unused pure expression or super */ null && (MDCChipSetFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/chips/chip-set/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var _a = MDCChipFoundation.strings,
    INTERACTION_EVENT = _a.INTERACTION_EVENT,
    SELECTION_EVENT = _a.SELECTION_EVENT,
    REMOVAL_EVENT = _a.REMOVAL_EVENT,
    NAVIGATION_EVENT = _a.NAVIGATION_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;

var MDCChipSet =
/** @class */
function (_super) {
  __extends(MDCChipSet, _super);

  function MDCChipSet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCChipSet.attachTo = function (root) {
    return new MDCChipSet(root);
  };

  Object.defineProperty(MDCChipSet.prototype, "chips", {
    get: function () {
      return this.chips_.slice();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
    /**
     * @return An array of the IDs of all selected chips.
     */
    get: function () {
      return this.foundation.getSelectedChipIds();
    },
    enumerable: true,
    configurable: true
  });
  /**
   * @param chipFactory A function which creates a new MDCChip.
   */

  MDCChipSet.prototype.initialize = function (chipFactory) {
    if (chipFactory === void 0) {
      chipFactory = function (el) {
        return new MDCChip(el);
      };
    }

    this.chipFactory_ = chipFactory;
    this.chips_ = this.instantiateChips_(this.chipFactory_);
  };

  MDCChipSet.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.chips_.forEach(function (chip) {
      if (chip.id && chip.selected) {
        _this.foundation.select(chip.id);
      }
    });

    this.handleChipInteraction_ = function (evt) {
      return _this.foundation.handleChipInteraction(evt.detail);
    };

    this.handleChipSelection_ = function (evt) {
      return _this.foundation.handleChipSelection(evt.detail);
    };

    this.handleChipRemoval_ = function (evt) {
      return _this.foundation.handleChipRemoval(evt.detail);
    };

    this.handleChipNavigation_ = function (evt) {
      return _this.foundation.handleChipNavigation(evt.detail);
    };

    this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
    this.listen(SELECTION_EVENT, this.handleChipSelection_);
    this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
    this.listen(NAVIGATION_EVENT, this.handleChipNavigation_);
  };

  MDCChipSet.prototype.destroy = function () {
    this.chips_.forEach(function (chip) {
      chip.destroy();
    });
    this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
    this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
    this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
    this.unlisten(NAVIGATION_EVENT, this.handleChipNavigation_);

    _super.prototype.destroy.call(this);
  };
  /**
   * Adds a new chip object to the chip set from the given chip element.
   */


  MDCChipSet.prototype.addChip = function (chipEl) {
    chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
    this.chips_.push(this.chipFactory_(chipEl));
  };

  MDCChipSet.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      announceMessage: function (message) {
        announce(message);
      },
      focusChipPrimaryActionAtIndex: function (index) {
        _this.chips_[index].focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: function (index) {
        _this.chips_[index].focusTrailingAction();
      },
      getChipListCount: function () {
        return _this.chips_.length;
      },
      getIndexOfChipById: function (chipId) {
        return _this.findChipIndex_(chipId);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      isRTL: function () {
        return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl';
      },
      removeChipAtIndex: function (index) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].destroy();

          _this.chips_[index].remove();

          _this.chips_.splice(index, 1);
        }
      },
      removeFocusFromChipAtIndex: function (index) {
        _this.chips_[index].removeFocus();
      },
      selectChipAtIndex: function (index, selected, shouldNotifyClients) {
        if (index >= 0 && index < _this.chips_.length) {
          _this.chips_[index].setSelectedFromChipSet(selected, shouldNotifyClients);
        }
      }
    };
    return new MDCChipSetFoundation(adapter);
  };
  /**
   * Instantiates chip components on all of the chip set's child chip elements.
   */


  MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
    var chipElements = [].slice.call(this.root.querySelectorAll(CHIP_SELECTOR));
    return chipElements.map(function (el) {
      el.id = el.id || "mdc-chip-" + ++idCounter;
      return chipFactory(el);
    });
  };
  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   */


  MDCChipSet.prototype.findChipIndex_ = function (chipId) {
    for (var i = 0; i < this.chips_.length; i++) {
      if (this.chips_[i].id === chipId) {
        return i;
      }
    }

    return -1;
  };

  return MDCChipSet;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/dom/focus-trap.js
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */

var FocusTrap =
/** @class */
function () {
  function FocusTrap(root, options) {
    if (options === void 0) {
      options = {};
    }

    this.root = root;
    this.options = options; // Previously focused element before trapping focus.

    this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */


  FocusTrap.prototype.trapFocus = function () {
    var focusableEls = this.getFocusableElements(this.root);

    if (focusableEls.length === 0) {
      throw new Error('FocusTrap: Element must have at least one focusable child.');
    }

    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.wrapTabFocus(this.root, focusableEls);

    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  };
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */


  FocusTrap.prototype.releaseFocus = function () {
    [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
      sentinelEl.parentElement.removeChild(sentinelEl);
    });

    if (this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  };
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */


  FocusTrap.prototype.wrapTabFocus = function (el, focusableEls) {
    var sentinelStart = this.createSentinel();
    var sentinelEnd = this.createSentinel();
    sentinelStart.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });
    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  };
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */


  FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
    var focusIndex = 0;

    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }

    focusableEls[focusIndex].focus();
  };

  FocusTrap.prototype.getFocusableElements = function (root) {
    var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
    return focusableEls.filter(function (el) {
      var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
      var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
      var isProgrammaticallyHidden = false;

      if (isTabbableAndVisible) {
        var style = getComputedStyle(el);
        isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
      }

      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  };

  FocusTrap.prototype.createSentinel = function () {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('tabindex', '0'); // Don't announce in screen readers.

    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  };

  return FocusTrap;
}();


;// CONCATENATED MODULE: ./node_modules/@material/dialog/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dialog_constants_cssClasses = {
  CLOSING: 'mdc-dialog--closing',
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  SCROLLABLE: 'mdc-dialog--scrollable',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  STACKED: 'mdc-dialog--stacked'
};
var dialog_constants_strings = {
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  CLOSED_EVENT: 'MDCDialog:closed',
  CLOSE_ACTION: 'close',
  CLOSING_EVENT: 'MDCDialog:closing',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  DESTROY_ACTION: 'destroy',
  INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
  OPENED_EVENT: 'MDCDialog:opened',
  OPENING_EVENT: 'MDCDialog:opening',
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var constants_numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
;// CONCATENATED MODULE: ./node_modules/@material/dialog/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDialogFoundation =
/** @class */
function (_super) {
  __extends(MDCDialogFoundation, _super);

  function MDCDialogFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.layoutFrame_ = 0;
    _this.escapeKeyAction_ = dialog_constants_strings.CLOSE_ACTION;
    _this.scrimClickAction_ = dialog_constants_strings.CLOSE_ACTION;
    _this.autoStackButtons_ = true;
    _this.areButtonsStacked_ = false;
    _this.suppressDefaultPressSelector = dialog_constants_strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
    return _this;
  }

  Object.defineProperty(MDCDialogFoundation, "cssClasses", {
    get: function () {
      return dialog_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "strings", {
    get: function () {
      return dialog_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "numbers", {
    get: function () {
      return constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
    get: function () {
      return {
        addBodyClass: function () {
          return undefined;
        },
        addClass: function () {
          return undefined;
        },
        areButtonsStacked: function () {
          return false;
        },
        clickDefaultButton: function () {
          return undefined;
        },
        eventTargetMatches: function () {
          return false;
        },
        getActionFromEvent: function () {
          return '';
        },
        getInitialFocusEl: function () {
          return null;
        },
        hasClass: function () {
          return false;
        },
        isContentScrollable: function () {
          return false;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        },
        removeBodyClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        reverseButtons: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCDialogFoundation.prototype.init = function () {
    if (this.adapter.hasClass(dialog_constants_cssClasses.STACKED)) {
      this.setAutoStackButtons(false);
    }
  };

  MDCDialogFoundation.prototype.destroy = function () {
    if (this.isOpen_) {
      this.close(dialog_constants_strings.DESTROY_ACTION);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
      this.handleAnimationTimerEnd_();
    }

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
      this.layoutFrame_ = 0;
    }
  };

  MDCDialogFoundation.prototype.open = function () {
    var _this = this;

    this.isOpen_ = true;
    this.adapter.notifyOpening();
    this.adapter.addClass(dialog_constants_cssClasses.OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter.addClass(dialog_constants_cssClasses.OPEN);

      _this.adapter.addBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);

      _this.layout();

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());

        _this.adapter.notifyOpened();
      }, constants_numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };

  MDCDialogFoundation.prototype.close = function (action) {
    var _this = this;

    if (action === void 0) {
      action = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
      return;
    }

    this.isOpen_ = false;
    this.adapter.notifyClosing(action);
    this.adapter.addClass(dialog_constants_cssClasses.CLOSING);
    this.adapter.removeClass(dialog_constants_cssClasses.OPEN);
    this.adapter.removeBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.adapter.releaseFocus();

      _this.handleAnimationTimerEnd_();

      _this.adapter.notifyClosed(action);
    }, constants_numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
  };

  MDCDialogFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  };

  MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
    this.escapeKeyAction_ = action;
  };

  MDCDialogFoundation.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  };

  MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
    this.scrimClickAction_ = action;
  };

  MDCDialogFoundation.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  };

  MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
    this.autoStackButtons_ = autoStack;
  };

  MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
    return this.suppressDefaultPressSelector;
  };

  MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
    this.suppressDefaultPressSelector = selector;
  };

  MDCDialogFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };
  /** Handles click on the dialog root element. */


  MDCDialogFoundation.prototype.handleClick = function (evt) {
    var isScrim = this.adapter.eventTargetMatches(evt.target, dialog_constants_strings.SCRIM_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors.

    if (isScrim && this.scrimClickAction_ !== '') {
      this.close(this.scrimClickAction_);
    } else {
      var action = this.adapter.getActionFromEvent(evt);

      if (action) {
        this.close(action);
      }
    }
  };
  /** Handles keydown on the dialog root element. */


  MDCDialogFoundation.prototype.handleKeydown = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (!isEnter) {
      return;
    }

    var action = this.adapter.getActionFromEvent(evt);

    if (action) {
      // Action button callback is handled in `handleClick`,
      // since space/enter keydowns on buttons trigger click events.
      return;
    } // `composedPath` is used here, when available, to account for use cases
    // where a target meant to suppress the default press behaviour
    // may exist in a shadow root.
    // For example, a textarea inside a web component:
    // <mwc-dialog>
    //   <horizontal-layout>
    //     #shadow-root (open)
    //       <mwc-textarea>
    //         #shadow-root (open)
    //           <textarea></textarea>
    //       </mwc-textarea>
    //   </horizontal-layout>
    // </mwc-dialog>


    var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
    var isDefault = !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector);

    if (isEnter && isDefault) {
      this.adapter.clickDefaultButton();
    }
  };
  /** Handles keydown on the document. */


  MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape && this.escapeKeyAction_ !== '') {
      this.close(this.escapeKeyAction_);
    }
  };

  MDCDialogFoundation.prototype.layoutInternal_ = function () {
    if (this.autoStackButtons_) {
      this.detectStackedButtons_();
    }

    this.detectScrollableContent_();
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter.removeClass(dialog_constants_cssClasses.OPENING);
    this.adapter.removeClass(dialog_constants_cssClasses.CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
    // Remove the class first to let us measure the buttons' natural positions.
    this.adapter.removeClass(dialog_constants_cssClasses.STACKED);
    var areButtonsStacked = this.adapter.areButtonsStacked();

    if (areButtonsStacked) {
      this.adapter.addClass(dialog_constants_cssClasses.STACKED);
    }

    if (areButtonsStacked !== this.areButtonsStacked_) {
      this.adapter.reverseButtons();
      this.areButtonsStacked_ = areButtonsStacked;
    }
  };

  MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
    // Remove the class first to let us measure the natural height of the content.
    this.adapter.removeClass(dialog_constants_cssClasses.SCROLLABLE);

    if (this.adapter.isContentScrollable()) {
      this.adapter.addClass(dialog_constants_cssClasses.SCROLLABLE);
    }
  };

  return MDCDialogFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const dialog_foundation = ((/* unused pure expression or super */ null && (MDCDialogFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/dialog/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
  return focusTrapFactory(surfaceEl, {
    initialFocusEl: initialFocusEl
  });
}
function isScrollable(el) {
  return el ? el.scrollHeight > el.offsetHeight : false;
}
function areTopsMisaligned(els) {
  var tops = new Set();
  [].forEach.call(els, function (el) {
    return tops.add(el.offsetTop);
  });
  return tops.size > 1;
}
;// CONCATENATED MODULE: ./node_modules/@material/dialog/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var component_strings = MDCDialogFoundation.strings;

var MDCDialog =
/** @class */
function (_super) {
  __extends(MDCDialog, _super);

  function MDCDialog() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCDialog.prototype, "isOpen", {
    get: function () {
      return this.foundation.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
    get: function () {
      return this.foundation.getEscapeKeyAction();
    },
    set: function (action) {
      this.foundation.setEscapeKeyAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
    get: function () {
      return this.foundation.getScrimClickAction();
    },
    set: function (action) {
      this.foundation.setScrimClickAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
    get: function () {
      return this.foundation.getAutoStackButtons();
    },
    set: function (autoStack) {
      this.foundation.setAutoStackButtons(autoStack);
    },
    enumerable: true,
    configurable: true
  });

  MDCDialog.attachTo = function (root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function (focusTrapFactory) {
    var e_1, _a;

    if (focusTrapFactory === void 0) {
      focusTrapFactory = function (el, focusOptions) {
        return new FocusTrap(el, focusOptions);
      };
    }

    var container = this.root.querySelector(component_strings.CONTAINER_SELECTOR);

    if (!container) {
      throw new Error("Dialog component requires a " + component_strings.CONTAINER_SELECTOR + " container element");
    }

    this.container_ = container;
    this.content_ = this.root.querySelector(component_strings.CONTENT_SELECTOR);
    this.buttons_ = [].slice.call(this.root.querySelectorAll(component_strings.BUTTON_SELECTOR));
    this.defaultButton_ = this.root.querySelector("[" + component_strings.BUTTON_DEFAULT_ATTRIBUTE + "]");
    this.focusTrapFactory_ = focusTrapFactory;
    this.buttonRipples_ = [];

    try {
      for (var _b = __values(this.buttons_), _c = _b.next(); !_c.done; _c = _b.next()) {
        var buttonEl = _c.value;
        this.buttonRipples_.push(new MDCRipple(buttonEl));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  MDCDialog.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.focusTrap_ = createFocusTrapInstance(this.container_, this.focusTrapFactory_, this.getInitialFocusEl_() || undefined);
    this.handleClick_ = this.foundation.handleClick.bind(this.foundation);
    this.handleKeydown_ = this.foundation.handleKeydown.bind(this.foundation);
    this.handleDocumentKeydown_ = this.foundation.handleDocumentKeydown.bind(this.foundation);
    this.handleLayout_ = this.layout.bind(this);
    var LAYOUT_EVENTS = ['resize', 'orientationchange'];

    this.handleOpening_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.addEventListener(evtType, _this.handleLayout_);
      });
      document.addEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.handleClosing_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.removeEventListener(evtType, _this.handleLayout_);
      });
      document.removeEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.listen('click', this.handleClick_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(component_strings.OPENING_EVENT, this.handleOpening_);
    this.listen(component_strings.CLOSING_EVENT, this.handleClosing_);
  };

  MDCDialog.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(component_strings.OPENING_EVENT, this.handleOpening_);
    this.unlisten(component_strings.CLOSING_EVENT, this.handleClosing_);
    this.handleClosing_();
    this.buttonRipples_.forEach(function (ripple) {
      return ripple.destroy();
    });

    _super.prototype.destroy.call(this);
  };

  MDCDialog.prototype.layout = function () {
    this.foundation.layout();
  };

  MDCDialog.prototype.open = function () {
    this.foundation.open();
  };

  MDCDialog.prototype.close = function (action) {
    if (action === void 0) {
      action = '';
    }

    this.foundation.close(action);
  };

  MDCDialog.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addBodyClass: function (className) {
        return document.body.classList.add(className);
      },
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      areButtonsStacked: function () {
        return areTopsMisaligned(_this.buttons_);
      },
      clickDefaultButton: function () {
        return _this.defaultButton_ && _this.defaultButton_.click();
      },
      eventTargetMatches: function (target, selector) {
        return target ? matches(target, selector) : false;
      },
      getActionFromEvent: function (evt) {
        if (!evt.target) {
          return '';
        }

        var element = closest(evt.target, "[" + component_strings.ACTION_ATTRIBUTE + "]");
        return element && element.getAttribute(component_strings.ACTION_ATTRIBUTE);
      },
      getInitialFocusEl: function () {
        return _this.getInitialFocusEl_();
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      isContentScrollable: function () {
        return isScrollable(_this.content_);
      },
      notifyClosed: function (action) {
        return _this.emit(component_strings.CLOSED_EVENT, action ? {
          action: action
        } : {});
      },
      notifyClosing: function (action) {
        return _this.emit(component_strings.CLOSING_EVENT, action ? {
          action: action
        } : {});
      },
      notifyOpened: function () {
        return _this.emit(component_strings.OPENED_EVENT, {});
      },
      notifyOpening: function () {
        return _this.emit(component_strings.OPENING_EVENT, {});
      },
      releaseFocus: function () {
        return _this.focusTrap_.releaseFocus();
      },
      removeBodyClass: function (className) {
        return document.body.classList.remove(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      reverseButtons: function () {
        _this.buttons_.reverse();

        _this.buttons_.forEach(function (button) {
          button.parentElement.appendChild(button);
        });
      },
      trapFocus: function () {
        return _this.focusTrap_.trapFocus();
      }
    };
    return new MDCDialogFoundation(adapter);
  };

  MDCDialog.prototype.getInitialFocusEl_ = function () {
    return this.root.querySelector("[" + component_strings.INITIAL_FOCUS_ATTRIBUTE + "]");
  };

  return MDCDialog;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/icon-button/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var icon_button_constants_cssClasses = {
  ICON_BUTTON_ON: 'mdc-icon-button--on',
  ROOT: 'mdc-icon-button'
};
var icon_button_constants_strings = {
  ARIA_LABEL: 'aria-label',
  ARIA_PRESSED: 'aria-pressed',
  DATA_ARIA_LABEL_OFF: 'data-aria-label-off',
  DATA_ARIA_LABEL_ON: 'data-aria-label-on',
  CHANGE_EVENT: 'MDCIconButtonToggle:change'
};
;// CONCATENATED MODULE: ./node_modules/@material/icon-button/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCIconButtonToggleFoundation =
/** @class */
function (_super) {
  __extends(MDCIconButtonToggleFoundation, _super);

  function MDCIconButtonToggleFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation.defaultAdapter), adapter)) || this;
    /**
     * Whether the icon button has an aria label that changes depending on
     * toggled state.
     */


    _this.hasToggledAriaLabel = false;
    return _this;
  }

  Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
    get: function () {
      return icon_button_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
    get: function () {
      return icon_button_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        notifyChange: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        getAttr: function () {
          return null;
        },
        setAttr: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCIconButtonToggleFoundation.prototype.init = function () {
    var ariaLabelOn = this.adapter.getAttr(icon_button_constants_strings.DATA_ARIA_LABEL_ON);
    var ariaLabelOff = this.adapter.getAttr(icon_button_constants_strings.DATA_ARIA_LABEL_OFF);

    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(icon_button_constants_strings.ARIA_PRESSED) !== null) {
        throw new Error('MDCIconButtonToggleFoundation: Button should not set ' + '`aria-pressed` if it has a toggled aria label.');
      }

      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(icon_button_constants_strings.ARIA_PRESSED, String(this.isOn()));
    }
  };

  MDCIconButtonToggleFoundation.prototype.handleClick = function () {
    this.toggle();
    this.adapter.notifyChange({
      isOn: this.isOn()
    });
  };

  MDCIconButtonToggleFoundation.prototype.isOn = function () {
    return this.adapter.hasClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
  };

  MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
    if (isOn === void 0) {
      isOn = !this.isOn();
    } // Toggle UI based on state.


    if (isOn) {
      this.adapter.addClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(icon_button_constants_cssClasses.ICON_BUTTON_ON);
    } // Toggle aria attributes based on state.


    if (this.hasToggledAriaLabel) {
      var ariaLabel = isOn ? this.adapter.getAttr(icon_button_constants_strings.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(icon_button_constants_strings.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(icon_button_constants_strings.ARIA_LABEL, ariaLabel || '');
    } else {
      this.adapter.setAttr(icon_button_constants_strings.ARIA_PRESSED, "" + isOn);
    }
  };

  return MDCIconButtonToggleFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const icon_button_foundation = ((/* unused pure expression or super */ null && (MDCIconButtonToggleFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/icon-button/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var icon_button_component_strings = MDCIconButtonToggleFoundation.strings;

var MDCIconButtonToggle =
/** @class */
function (_super) {
  __extends(MDCIconButtonToggle, _super);

  function MDCIconButtonToggle() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rippleComponent = _this.createRipple();
    return _this;
  }

  MDCIconButtonToggle.attachTo = function (root) {
    return new MDCIconButtonToggle(root);
  };

  MDCIconButtonToggle.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleClick = function () {
      _this.foundation.handleClick();
    };

    this.listen('click', this.handleClick);
  };

  MDCIconButtonToggle.prototype.destroy = function () {
    this.unlisten('click', this.handleClick);
    this.ripple.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCIconButtonToggle.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      notifyChange: function (evtData) {
        _this.emit(icon_button_component_strings.CHANGE_EVENT, evtData);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      getAttr: function (attrName) {
        return _this.root.getAttribute(attrName);
      },
      setAttr: function (attrName, attrValue) {
        return _this.root.setAttribute(attrName, attrValue);
      }
    };
    return new MDCIconButtonToggleFoundation(adapter);
  };

  Object.defineProperty(MDCIconButtonToggle.prototype, "ripple", {
    get: function () {
      return this.rippleComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggle.prototype, "on", {
    get: function () {
      return this.foundation.isOn();
    },
    set: function (isOn) {
      this.foundation.toggle(isOn);
    },
    enumerable: true,
    configurable: true
  });

  MDCIconButtonToggle.prototype.createRipple = function () {
    var ripple = new MDCRipple(this.root);
    ripple.unbounded = true;
    return ripple;
  };

  return MDCIconButtonToggle;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/floating-label/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var floating_label_constants_cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_REQUIRED: 'mdc-floating-label--required',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};
;// CONCATENATED MODULE: ./node_modules/@material/floating-label/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  __extends(MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function () {
      return floating_label_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        getWidth: function () {
          return 0;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter.addClass(LABEL_SHAKE);
    } else {
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */


  MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
    var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;

    if (isRequired) {
      this.adapter.addClass(LABEL_REQUIRED);
    } else {
      this.adapter.removeClass(LABEL_REQUIRED);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const floating_label_foundation = ((/* unused pure expression or super */ null && (MDCFloatingLabelFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/floating-label/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCFloatingLabel =
/** @class */
function (_super) {
  __extends(MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype.float = function (shouldFloat) {
    this.foundation.float(shouldFloat);
  };
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */


  MDCFloatingLabel.prototype.setRequired = function (isRequired) {
    this.foundation.setRequired(isRequired);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      getWidth: function () {
        return estimateScrollWidth(_this.root);
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCFloatingLabelFoundation(adapter);
  };

  return MDCFloatingLabel;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/line-ripple/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var line_ripple_constants_cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

;// CONCATENATED MODULE: ./node_modules/@material/line-ripple/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCLineRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function () {
      return line_ripple_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        registerEventHandler: function () {
          return undefined;
        },
        deregisterEventHandler: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
    this.adapter.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter.hasClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
        this.adapter.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const line_ripple_foundation = ((/* unused pure expression or super */ null && (MDCLineRippleFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/line-ripple/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCLineRipple =
/** @class */
function (_super) {
  __extends(MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      setStyle: function (propertyName, value) {
        return _this.root.style.setProperty(propertyName, value);
      },
      registerEventHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCLineRippleFoundation(adapter);
  };

  return MDCLineRipple;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/notched-outline/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var notched_outline_constants_strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var notched_outline_constants_numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var notched_outline_constants_cssClasses = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};

;// CONCATENATED MODULE: ./node_modules/@material/notched-outline/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  __extends(MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function () {
      return notched_outline_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function () {
      return notched_outline_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function () {
      return notched_outline_constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNotchWidthProperty: function () {
          return undefined;
        },
        removeNotchWidthProperty: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += notched_outline_constants_numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter.setNotchWidthProperty(notchWidth);
    this.adapter.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter.removeClass(OUTLINE_NOTCHED);
    this.adapter.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const notched_outline_foundation = ((/* unused pure expression or super */ null && (MDCNotchedOutlineFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/notched-outline/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCNotchedOutline =
/** @class */
function (_super) {
  __extends(MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root.querySelector(notched_outline_constants_strings.NOTCH_ELEMENT_SELECTOR);
    var label = this.root.querySelector('.' + MDCFloatingLabelFoundation.cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root.classList.add(notched_outline_constants_cssClasses.OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root.classList.add(notched_outline_constants_cssClasses.NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      setNotchWidthProperty: function (width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function () {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCNotchedOutlineFoundation(adapter);
  };

  return MDCNotchedOutline;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/constants.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var character_counter_constants_cssClasses = {
  ROOT: 'mdc-text-field-character-counter'
};
var character_counter_constants_strings = {
  ROOT_SELECTOR: "." + character_counter_constants_cssClasses.ROOT
};

;// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/foundation.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldCharacterCounterFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldCharacterCounterFoundation, _super);

  function MDCTextFieldCharacterCounterFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
    get: function () {
      return character_counter_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
    get: function () {
      return character_counter_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
     */
    get: function () {
      return {
        setContent: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter.setContent(currentLength + " / " + maxLength);
  };

  return MDCTextFieldCharacterCounterFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const character_counter_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldCharacterCounterFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/textfield/character-counter/component.js
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldCharacterCounter =
/** @class */
function (_super) {
  __extends(MDCTextFieldCharacterCounter, _super);

  function MDCTextFieldCharacterCounter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldCharacterCounter.attachTo = function (root) {
    return new MDCTextFieldCharacterCounter(root);
  };

  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundationForTextField", {
    // Provided for access by MDCTextField component
    get: function () {
      return this.foundation;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      setContent: function (content) {
        _this.root.textContent = content;
      }
    };
    return new MDCTextFieldCharacterCounterFoundation(adapter);
  };

  return MDCTextFieldCharacterCounter;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/textfield/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var textfield_constants_strings = {
  ARIA_CONTROLS: 'aria-controls',
  ARIA_DESCRIBEDBY: 'aria-describedby',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
  SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
  TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var textfield_constants_cssClasses = {
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  HELPER_LINE: 'mdc-text-field-helper-line',
  INVALID: 'mdc-text-field--invalid',
  LABEL_FLOATING: 'mdc-text-field--label-floating',
  NO_LABEL: 'mdc-text-field--no-label',
  OUTLINED: 'mdc-text-field--outlined',
  ROOT: 'mdc-text-field',
  TEXTAREA: 'mdc-text-field--textarea',
  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
};
var textfield_constants_numbers = {
  LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */

var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */

var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

;// CONCATENATED MODULE: ./node_modules/@material/textfield/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldFoundation, _super);
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCTextFieldFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;

    _this.isFocused_ = false;
    _this.receivedUserInput_ = false;
    _this.isValid_ = true;
    _this.useNativeValidation_ = true;
    _this.validateOnValueChange_ = true;
    _this.helperText_ = foundationMap.helperText;
    _this.characterCounter_ = foundationMap.characterCounter;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.trailingIcon_ = foundationMap.trailingIcon;

    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };

    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };

    _this.inputInputHandler_ = function () {
      return _this.handleInput();
    };

    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };

    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };

    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
    get: function () {
      return textfield_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "strings", {
    get: function () {
      return textfield_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "numbers", {
    get: function () {
      return textfield_constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
    get: function () {
      var type = this.getNativeInput_().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
    get: function () {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
    get: function () {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldAdapter} for typing information on parameters and
     * return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return true;
        },
        setInputAttr: function () {
          return undefined;
        },
        removeInputAttr: function () {
          return undefined;
        },
        registerTextFieldInteractionHandler: function () {
          return undefined;
        },
        deregisterTextFieldInteractionHandler: function () {
          return undefined;
        },
        registerInputInteractionHandler: function () {
          return undefined;
        },
        deregisterInputInteractionHandler: function () {
          return undefined;
        },
        registerValidationAttributeChangeHandler: function () {
          return new MutationObserver(function () {
            return undefined;
          });
        },
        deregisterValidationAttributeChangeHandler: function () {
          return undefined;
        },
        getNativeInput: function () {
          return null;
        },
        isFocused: function () {
          return false;
        },
        activateLineRipple: function () {
          return undefined;
        },
        deactivateLineRipple: function () {
          return undefined;
        },
        setLineRippleTransformOrigin: function () {
          return undefined;
        },
        shakeLabel: function () {
          return undefined;
        },
        floatLabel: function () {
          return undefined;
        },
        setLabelRequired: function () {
          return undefined;
        },
        hasLabel: function () {
          return false;
        },
        getLabelWidth: function () {
          return 0;
        },
        hasOutline: function () {
          return false;
        },
        notchOutline: function () {
          return undefined;
        },
        closeOutline: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldFoundation.prototype.init = function () {
    var _this = this;

    if (this.adapter.hasLabel() && this.getNativeInput_().required) {
      this.adapter.setLabelRequired(true);
    }

    if (this.adapter.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter.floatLabel(true);
      this.styleFloating_(true);
    }

    this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter.registerInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    this.setCharacterCounter_(this.getValue().length);
  };

  MDCTextFieldFoundation.prototype.destroy = function () {
    var _this = this;

    this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };
  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
    var nativeInput = this.adapter.getNativeInput();

    if (nativeInput && nativeInput.disabled) {
      return;
    }

    this.receivedUserInput_ = true;
  };
  /**
   * Handles validation attribute changes
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
    var _this = this;

    attributesList.some(function (attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this.styleValidity_(true);

        _this.adapter.setLabelRequired(_this.getNativeInput_().required);

        return true;
      }

      return false;
    });

    if (attributesList.indexOf('maxlength') > -1) {
      this.setCharacterCounter_(this.getValue().length);
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
      return;
    }

    if (openNotch) {
      var labelWidth = this.adapter.getLabelWidth() * textfield_constants_numbers.LABEL_SCALE;
      this.adapter.notchOutline(labelWidth);
    } else {
      this.adapter.closeOutline();
    }
  };
  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function () {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter.activateLineRipple();

    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating_(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }

    if (this.helperText_ && (this.helperText_.isPersistent() || !this.helperText_.isValidation() || !this.isValid_)) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
    if (this.isDisabled() || this.adapter.hasOutline()) {
      return;
    }

    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter.setLineRippleTransformOrigin(normalizedX);
  };
  /**
   * Handles input change of text input and text area.
   */


  MDCTextFieldFoundation.prototype.handleInput = function () {
    this.autoCompleteFocus();
    this.setCharacterCounter_(this.getValue().length);
  };
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };
  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function () {
    this.isFocused_ = false;
    this.adapter.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);

    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating_(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }

    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  MDCTextFieldFoundation.prototype.getValue = function () {
    return this.getNativeInput_().value;
  };
  /**
   * @param value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function (value) {
    // Prevent Safari from moving the caret to the end of the input when the
    // value has not changed.
    if (this.getValue() !== value) {
      this.getNativeInput_().value = value;
    }

    this.setCharacterCounter_(value.length);

    if (this.validateOnValueChange_) {
      var isValid = this.isValid();
      this.styleValidity_(isValid);
    }

    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating_(this.shouldFloat);

      if (this.validateOnValueChange_) {
        this.adapter.shakeLabel(this.shouldShake);
      }
    }
  };
  /**
   * @return The custom validity state, if set; otherwise, the result of a
   *     native validity check.
   */


  MDCTextFieldFoundation.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function (isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);
    var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();

    if (this.adapter.hasLabel()) {
      this.adapter.shakeLabel(shouldShake);
    }
  };
  /**
   * @param shouldValidate Whether or not validity should be updated on
   *     value change.
   */


  MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
    this.validateOnValueChange_ = shouldValidate;
  };
  /**
   * @return Whether or not validity should be updated on value change. `true`
   *     by default.
   */


  MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
    return this.validateOnValueChange_;
  };
  /**
   * Enables or disables the use of native validation. Use this for custom
   * validation.
   * @param useNativeValidation Set this to false to ignore native input
   *     validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  MDCTextFieldFoundation.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  };
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setContent(content);
    }
  };
  /**
   * Sets character counter values that shows characters used and the total
   * character limit.
   */


  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
    if (!this.characterCounter_) {
      return;
    }

    var maxLength = this.getNativeInput_().maxLength;

    if (maxLength === -1) {
      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
    }

    this.characterCounter_.setCounterValue(currentLength, maxLength);
  };
  /**
   * @return True if the Text Field input fails in converting the user-supplied
   *     value.
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function () {
    // The badInput property is not supported in IE 11 💩.
    return this.getNativeInput_().validity.badInput || false;
  };
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  };
  /**
   * Styles the component based on the validity state.
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.addClass(INVALID);
    }

    if (this.helperText_) {
      this.helperText_.setValidity(isValid); // We dynamically set or unset aria-describedby for validation helper text
      // only, based on whether the field is valid

      var helperTextValidation = this.helperText_.isValidation();

      if (!helperTextValidation) {
        return;
      }

      var helperTextVisible = this.helperText_.isVisible();
      var helperTextId = this.helperText_.getId();

      if (helperTextVisible && helperTextId) {
        this.adapter.setInputAttr(textfield_constants_strings.ARIA_DESCRIBEDBY, helperTextId);
      } else {
        this.adapter.removeInputAttr(textfield_constants_strings.ARIA_DESCRIBEDBY);
      }
    }
  };
  /**
   * Styles the component based on the focused state.
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter.addClass(FOCUSED);
    } else {
      this.adapter.removeClass(FOCUSED);
    }
  };
  /**
   * Styles the component based on the disabled state.
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
    var _a = MDCTextFieldFoundation.cssClasses,
        DISABLED = _a.DISABLED,
        INVALID = _a.INVALID;

    if (isDisabled) {
      this.adapter.addClass(DISABLED);
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.removeClass(DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * Styles the component based on the label floating state.
   */


  MDCTextFieldFoundation.prototype.styleFloating_ = function (isFloating) {
    var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;

    if (isFloating) {
      this.adapter.addClass(LABEL_FLOATING);
    } else {
      this.adapter.removeClass(LABEL_FLOATING);
    }
  };
  /**
   * @return The native text input element from the host environment, or an
   *     object with the same shape for unit tests.
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
    // this.adapter may be undefined in foundation unit tests. This happens when
    // testdouble is creating a mock object and invokes the
    // shouldShake/shouldFloat getters (which in turn call getValue(), which
    // calls this method) before init() has been called from the MDCTextField
    // constructor. To work around that issue, we return a dummy object.
    var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      required: false,
      type: 'input',
      validity: {
        badInput: false,
        valid: true
      },
      value: ''
    };
  };

  return MDCTextFieldFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const textfield_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var helper_text_constants_cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
  ROOT: 'mdc-text-field-helper-text'
};
var helper_text_constants_strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  ROOT_SELECTOR: "." + helper_text_constants_cssClasses.ROOT
};

;// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldHelperTextFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldHelperTextFoundation, _super);

  function MDCTextFieldHelperTextFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTextFieldHelperTextFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
    get: function () {
      return helper_text_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
    get: function () {
      return helper_text_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        getAttr: function () {
          return null;
        },
        setAttr: function () {
          return undefined;
        },
        removeAttr: function () {
          return undefined;
        },
        setContent: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperTextFoundation.prototype.getId = function () {
    return this.adapter.getAttr('id');
  };

  MDCTextFieldHelperTextFoundation.prototype.isVisible = function () {
    return this.adapter.getAttr(helper_text_constants_strings.ARIA_HIDDEN) !== 'true';
  };
  /**
   * Sets the content of the helper text field.
   */


  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter.setContent(content);
  };

  MDCTextFieldHelperTextFoundation.prototype.isPersistent = function () {
    return this.adapter.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
  };
  /**
   * @param isPersistent Sets the persistency of the helper text.
   */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter.addClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @return whether the helper text acts as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.isValidation = function () {
    return this.adapter.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter.addClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to the screen reader.
   */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter.removeAttr(helper_text_constants_strings.ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the input validity.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
    var helperTextIsPersistent = this.adapter.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.showToScreenReader();
      this.adapter.setAttr(helper_text_constants_strings.ROLE, 'alert');
    } else {
      this.adapter.removeAttr(helper_text_constants_strings.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
    this.adapter.setAttr(helper_text_constants_strings.ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const helper_text_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldHelperTextFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/textfield/helper-text/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldHelperText =
/** @class */
function (_super) {
  __extends(MDCTextFieldHelperText, _super);

  function MDCTextFieldHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldHelperText.attachTo = function (root) {
    return new MDCTextFieldHelperText(root);
  };

  Object.defineProperty(MDCTextFieldHelperText.prototype, "foundationForTextField", {
    // Provided for access by MDCTextField component
    get: function () {
      return this.foundation;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      getAttr: function (attr) {
        return _this.root.getAttribute(attr);
      },
      setAttr: function (attr, value) {
        return _this.root.setAttribute(attr, value);
      },
      removeAttr: function (attr) {
        return _this.root.removeAttribute(attr);
      },
      setContent: function (content) {
        _this.root.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTextFieldHelperTextFoundation(adapter);
  };

  return MDCTextFieldHelperText;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var icon_constants_strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};
var icon_constants_cssClasses = {
  ROOT: 'mdc-text-field__icon'
};

;// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var foundation_INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldIconFoundation =
/** @class */
function (_super) {
  __extends(MDCTextFieldIconFoundation, _super);

  function MDCTextFieldIconFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTextFieldIconFoundation.defaultAdapter), adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
    get: function () {
      return icon_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
    get: function () {
      return icon_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function () {
          return null;
        },
        setAttr: function () {
          return undefined;
        },
        removeAttr: function () {
          return undefined;
        },
        setContent: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        notifyIconAction: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter.getAttr('tabindex');
    foundation_INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function () {
    var _this = this;

    foundation_INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter.setAttr('tabindex', '-1');
      this.adapter.removeAttr('role');
    } else {
      this.adapter.setAttr('tabindex', this.savedTabIndex_);
      this.adapter.setAttr('role', icon_constants_strings.ICON_ROLE);
    }
  };

  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter.setAttr('aria-label', label);
  };

  MDCTextFieldIconFoundation.prototype.setContent = function (content) {
    this.adapter.setContent(content);
  };

  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      evt.preventDefault(); // stop click from causing host label to focus
      // input

      this.adapter.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const icon_foundation = ((/* unused pure expression or super */ null && (MDCTextFieldIconFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/textfield/icon/component.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldIcon =
/** @class */
function (_super) {
  __extends(MDCTextFieldIcon, _super);

  function MDCTextFieldIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldIcon.attachTo = function (root) {
    return new MDCTextFieldIcon(root);
  };

  Object.defineProperty(MDCTextFieldIcon.prototype, "foundationForTextField", {
    // Provided for access by MDCTextField component
    get: function () {
      return this.foundation;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function (attr) {
        return _this.root.getAttribute(attr);
      },
      setAttr: function (attr, value) {
        return _this.root.setAttribute(attr, value);
      },
      removeAttr: function (attr) {
        return _this.root.removeAttribute(attr);
      },
      setContent: function (content) {
        _this.root.textContent = content;
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function () {
        return _this.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTextFieldIconFoundation(adapter);
  };

  return MDCTextFieldIcon;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/textfield/component.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

















var MDCTextField =
/** @class */
function (_super) {
  __extends(MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function (el) {
        return new MDCLineRipple(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function (el) {
        return new MDCTextFieldHelperText(el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function (el) {
        return new MDCTextFieldCharacterCounter(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function (el) {
        return new MDCTextFieldIcon(el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function (el) {
        return new MDCFloatingLabel(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function (el) {
        return new MDCNotchedOutline(el);
      };
    }

    this.input_ = this.root.querySelector(textfield_constants_strings.INPUT_SELECTOR);
    var labelElement = this.root.querySelector(textfield_constants_strings.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root.querySelector(textfield_constants_strings.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root.querySelector(textfield_constants_strings.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = MDCTextFieldHelperTextFoundation.strings;
    var nextElementSibling = this.root.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(textfield_constants_cssClasses.HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = MDCTextFieldCharacterCounterFoundation.strings;
    var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null; // Leading icon

    var leadingIconEl = this.root.querySelector(textfield_constants_strings.LEADING_ICON_SELECTOR);
    this.leadingIcon_ = leadingIconEl ? iconFactory(leadingIconEl) : null; // Trailing icon

    var trailingIconEl = this.root.querySelector(textfield_constants_strings.TRAILING_ICON_SELECTOR);
    this.trailingIcon_ = trailingIconEl ? iconFactory(trailingIconEl) : null; // Prefix and Suffix

    this.prefix_ = this.root.querySelector(textfield_constants_strings.PREFIX_SELECTOR);
    this.suffix_ = this.root.querySelector(textfield_constants_strings.SUFFIX_SELECTOR);
    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function () {
      return this.foundation.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function (value) {
      this.foundation.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function () {
      return this.foundation.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function (disabled) {
      this.foundation.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function () {
      return this.foundation.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function (valid) {
      this.foundation.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function () {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function (required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function () {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function (pattern) {
      this.input_.pattern = pattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function () {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function (minLength) {
      this.input_.minLength = minLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function () {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function (maxLength) {
      // Chrome throws exception if maxLength is set to a value less than zero
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function () {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function (min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function () {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function (max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function () {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function (step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function (content) {
      this.foundation.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function (label) {
      this.foundation.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function (content) {
      this.foundation.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function (label) {
      this.foundation.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function (content) {
      this.foundation.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function (useNativeValidation) {
      this.foundation.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "prefixText", {
    /**
     * Gets the text content of the prefix, or null if it does not exist.
     */
    get: function () {
      return this.prefix_ ? this.prefix_.textContent : null;
    },

    /**
     * Sets the text content of the prefix, if it exists.
     */
    set: function (prefixText) {
      if (this.prefix_) {
        this.prefix_.textContent = prefixText;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "suffixText", {
    /**
     * Gets the text content of the suffix, or null if it does not exist.
     */
    get: function () {
      return this.suffix_ ? this.suffix_.textContent : null;
    },

    /**
     * Sets the text content of the suffix, if it exists.
     */
    set: function (suffixText) {
      if (this.suffix_) {
        this.suffix_.textContent = suffixText;
      }
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation.shouldFloat;
    this.foundation.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = __assign(__assign(__assign(__assign(__assign({}, this.getRootAdapterMethods_()), this.getInputAdapterMethods_()), this.getLabelAdapterMethods_()), this.getLineRippleAdapterMethods_()), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new MDCTextFieldFoundation(adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function (evtType, handler) {
        _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function (evtType, handler) {
        _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function (handler) {
        var getAttributesList = function (mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function (observer) {
        observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function () {
        return _this.input_;
      },
      setInputAttr: function (attr, value) {
        _this.input_.setAttribute(attr, value);
      },
      removeInputAttr: function (attr) {
        _this.input_.removeAttribute(attr);
      },
      isFocused: function () {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function (evtType, handler) {
        _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: function (evtType, handler) {
        _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function (shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function () {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function () {
        return Boolean(_this.label_);
      },
      shakeLabel: function (shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      },
      setLabelRequired: function (isRequired) {
        return _this.label_ && _this.label_.setRequired(isRequired);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function () {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function () {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function (normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function () {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function () {
        return Boolean(_this.outline_);
      },
      notchOutline: function (labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundationForTextField : undefined,
      helperText: this.helperText_ ? this.helperText_.foundationForTextField : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root.classList.contains(textfield_constants_cssClasses.TEXTAREA);
    var isOutlined = this.root.classList.contains(textfield_constants_cssClasses.OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), {
      isSurfaceActive: function () {
        return matches(_this.input_, ':active');
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, applyPassive());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root, new MDCRippleFoundation(adapter));
  };

  return MDCTextField;
}(MDCComponent);


;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var top_app_bar_constants_cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
var top_app_bar_constants_numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var top_app_bar_constants_strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTopAppBarBaseFoundation =
/** @class */
function (_super) {
  __extends(MDCTopAppBarBaseFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarBaseFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
  }

  Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
    get: function () {
      return top_app_bar_constants_strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
    get: function () {
      return top_app_bar_constants_cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
    get: function () {
      return top_app_bar_constants_numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        getTopAppBarHeight: function () {
          return 0;
        },
        notifyNavigationIconClicked: function () {
          return undefined;
        },
        getViewportScrollY: function () {
          return 0;
        },
        getTotalActionItems: function () {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Other variants of TopAppBar foundation overrides this method */

  MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () {}; // tslint:disable-line:no-empty

  /** Other variants of TopAppBar foundation overrides this method */


  MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () {}; // tslint:disable-line:no-empty


  MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
    this.adapter.notifyNavigationIconClicked();
  };

  return MDCTopAppBarBaseFoundation;
}(MDCFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const top_app_bar_foundation = ((/* unused pure expression or super */ null && (MDCTopAppBarBaseFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/standard/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INITIAL_VALUE = 0;

var MDCTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * Indicates if the top app bar was docked in the previous scroll handler iteration.
     */


    _this.wasDocked_ = true;
    /**
     * Indicates if the top app bar is docked in the fully shown position.
     */

    _this.isDockedShowing_ = true;
    /**
     * Variable for current scroll position of the top app bar
     */

    _this.currentAppBarOffsetTop_ = 0;
    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     */

    _this.isCurrentlyBeingResized_ = false;
    /**
     * The timeout that's used to throttle the resize events
     */

    _this.resizeThrottleId_ = INITIAL_VALUE;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     */

    _this.resizeDebounceId_ = INITIAL_VALUE;
    _this.lastScrollPosition_ = _this.adapter.getViewportScrollY();
    _this.topAppBarHeight_ = _this.adapter.getTopAppBarHeight();
    return _this;
  }

  MDCTopAppBarFoundation.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.adapter.setStyle('top', '');
  };
  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.

    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  };
  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   * @override
   */


  MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
    var _this = this; // Throttle resize events 10 p/s


    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(function () {
        _this.resizeThrottleId_ = INITIAL_VALUE;

        _this.throttledResizeHandler_();
      }, top_app_bar_constants_numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(function () {
      _this.handleTargetScroll();

      _this.isCurrentlyBeingResized_ = false;
      _this.resizeDebounceId_ = INITIAL_VALUE;
    }, top_app_bar_constants_numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  /**
   * Function to determine if the DOM needs to update.
   */


  MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
    var offscreenBoundaryTop = -this.topAppBarHeight_;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };
  /**
   * Function to move the top app bar if needed.
   */


  MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      var offset = this.currentAppBarOffsetTop_;

      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -top_app_bar_constants_numbers.MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter.setStyle('top', offset + 'px');
    }
  };
  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   */


  MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
    var currentHeight = this.adapter.getTopAppBarHeight();

    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.

      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }

    this.handleTargetScroll();
  };

  return MDCTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const standard_foundation = ((/* unused pure expression or super */ null && (MDCTopAppBarFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/fixed/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFixedTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCFixedTopAppBarFoundation, _super);

  function MDCFixedTopAppBarFoundation() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * State variable for the previous scroll iteration top app bar state
     */


    _this.wasScrolled_ = false;
    return _this;
  }
  /**
   * Scroll handler for applying/removing the modifier class on the fixed top app bar.
   * @override
   */


  MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
    var currentScroll = this.adapter.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter.removeClass(top_app_bar_constants_cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter.addClass(top_app_bar_constants_cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  };

  return MDCFixedTopAppBarFoundation;
}(MDCTopAppBarFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const fixed_foundation = ((/* unused pure expression or super */ null && (MDCFixedTopAppBarFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/short/foundation.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCShortTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCShortTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCShortTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;

    _this.isCollapsed_ = false;
    _this.isAlwaysCollapsed_ = false;
    return _this;
  }

  Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
    // Public visibility for backward compatibility.
    get: function () {
      return this.isCollapsed_;
    },
    enumerable: true,
    configurable: true
  });

  MDCShortTopAppBarFoundation.prototype.init = function () {
    _super.prototype.init.call(this);

    if (this.adapter.getTotalActionItems() > 0) {
      this.adapter.addClass(top_app_bar_constants_cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    } // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed


    this.setAlwaysCollapsed(this.adapter.hasClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS));
  };
  /**
   * Set if the short top app bar should always be collapsed.
   *
   * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
   */


  MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
    this.isAlwaysCollapsed_ = !!value;

    if (this.isAlwaysCollapsed_) {
      this.collapse_();
    } else {
      // let maybeCollapseBar_ determine if the bar should be collapsed
      this.maybeCollapseBar_();
    }
  };

  MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
    return this.isAlwaysCollapsed_;
  };
  /**
   * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
   * @override
   */


  MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
    this.maybeCollapseBar_();
  };

  MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
    if (this.isAlwaysCollapsed_) {
      return;
    }

    var currentScroll = this.adapter.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed_) {
        this.uncollapse_();
      }
    } else {
      if (!this.isCollapsed_) {
        this.collapse_();
      }
    }
  };

  MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
    this.adapter.removeClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = false;
  };

  MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
    this.adapter.addClass(top_app_bar_constants_cssClasses.SHORT_COLLAPSED_CLASS);
    this.isCollapsed_ = true;
  };

  return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ const short_foundation = ((/* unused pure expression or super */ null && (MDCShortTopAppBarFoundation)));
;// CONCATENATED MODULE: ./node_modules/@material/top-app-bar/component.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var MDCTopAppBar =
/** @class */
function (_super) {
  __extends(MDCTopAppBar, _super);

  function MDCTopAppBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTopAppBar.attachTo = function (root) {
    return new MDCTopAppBar(root);
  };

  MDCTopAppBar.prototype.initialize = function (rippleFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el) {
        return MDCRipple.attachTo(el);
      };
    }

    this.navIcon_ = this.root.querySelector(top_app_bar_constants_strings.NAVIGATION_ICON_SELECTOR); // Get all icons in the toolbar and instantiate the ripples

    var icons = [].slice.call(this.root.querySelectorAll(top_app_bar_constants_strings.ACTION_ITEM_SELECTOR));

    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map(function (icon) {
      var ripple = rippleFactory(icon);
      ripple.unbounded = true;
      return ripple;
    });
    this.scrollTarget_ = window;
  };

  MDCTopAppBar.prototype.initialSyncWithDOM = function () {
    this.handleNavigationClick_ = this.foundation.handleNavigationClick.bind(this.foundation);
    this.handleWindowResize_ = this.foundation.handleWindowResize.bind(this.foundation);
    this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS);
    var isShort = this.root.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.addEventListener('resize', this.handleWindowResize_);
    }
  };

  MDCTopAppBar.prototype.destroy = function () {
    this.iconRipples_.forEach(function (iconRipple) {
      return iconRipple.destroy();
    });
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);

    if (this.navIcon_) {
      this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
    }

    var isFixed = this.root.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS);
    var isShort = this.root.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS);

    if (!isShort && !isFixed) {
      window.removeEventListener('resize', this.handleWindowResize_);
    }

    _super.prototype.destroy.call(this);
  };

  MDCTopAppBar.prototype.setScrollTarget = function (target) {
    // Remove scroll handler from the previous scroll target
    this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
    this.scrollTarget_ = target; // Initialize scroll handler on the new scroll target

    this.handleTargetScroll_ = this.foundation.handleTargetScroll.bind(this.foundation);
    this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
  };

  MDCTopAppBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function (className) {
        return _this.root.classList.contains(className);
      },
      addClass: function (className) {
        return _this.root.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root.classList.remove(className);
      },
      setStyle: function (property, value) {
        return _this.root.style.setProperty(property, value);
      },
      getTopAppBarHeight: function () {
        return _this.root.clientHeight;
      },
      notifyNavigationIconClicked: function () {
        return _this.emit(top_app_bar_constants_strings.NAVIGATION_EVENT, {});
      },
      getViewportScrollY: function () {
        var win = _this.scrollTarget_;
        var el = _this.scrollTarget_;
        return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
      },
      getTotalActionItems: function () {
        return _this.root.querySelectorAll(top_app_bar_constants_strings.ACTION_ITEM_SELECTOR).length;
      }
    }; // tslint:enable:object-literal-sort-keys

    var foundation;

    if (this.root.classList.contains(top_app_bar_constants_cssClasses.SHORT_CLASS)) {
      foundation = new MDCShortTopAppBarFoundation(adapter);
    } else if (this.root.classList.contains(top_app_bar_constants_cssClasses.FIXED_CLASS)) {
      foundation = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      foundation = new MDCTopAppBarFoundation(adapter);
    }

    return foundation;
  };

  return MDCTopAppBar;
}(MDCComponent);


;// CONCATENATED MODULE: ./source/material.js





 // Instantiation

var selector = '.mdc-button, .mdc-icon-button, .mdc-fab, .mdc-card__primary-action'; //, .mdc-text-field__ripple';

const mdc_elements = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
}); // for (let button of document.querySelectorAll('.mdc-line-ripple')) {
//     mdc_elements.push(new MDCLineRipple(button));
// }

window.mdc_elements = mdc_elements;

try {
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  mdc_elements.push(new MDCTopAppBar(topAppBarElement));
} catch {}

for (let button of document.querySelectorAll('.mdc-icon-button')) {
  mdc_elements.push(new MDCIconButtonToggle(button));
}

for (let chipSetEl of document.querySelectorAll('.mdc-chip-set')) {
  mdc_elements.push(new MDCChipSet(chipSetEl));
}

const dialogues = {};
window.dialogues = dialogues;

for (let dialogue of document.querySelectorAll('.mdc-dialog')) {
  window.dialogues[dialogue.id] = new MDCDialog(dialogue);
}

for (let text_field of document.querySelectorAll('.mdc-text-field')) {
  mdc_elements.push(new MDCTextField(text_field));
}

function material_open(dialogue_id) {
  window.dialogues[dialogue_id].open();
}

function material_close(dialogue_id) {
  window.dialogues[dialogue_id].close();
}

window.open_dialogue = material_open;
window.close_dialogue = material_close;
/******/ })()
;