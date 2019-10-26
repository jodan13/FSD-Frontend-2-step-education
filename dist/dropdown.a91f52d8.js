// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js":[function(require,module,exports) {
var define;
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("item-quantity-dropdown",[],t):"object"==typeof exports?exports["item-quantity-dropdown"]=t():n["item-quantity-dropdown"]=t()}(window,function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);!function(n){var t={maxItems:1/0,minItems:0,selectionText:"item",textPlural:"items",controls:{position:"right",displayCls:"iqdropdown-content",controlsCls:"iqdropdown-item-controls",counterCls:"counter"},items:{},onChange:function(){},beforeDecrement:function(){return!0},beforeIncrement:function(){return!0}};n.fn.iqDropdown=function(e){return this.each(function(){var o=n(this),r=o.find("p.iqdropdown-selection").last(),i=o.find("div.iqdropdown-menu").find("div.iqdropdown-menu-option"),u=n.extend(!0,{},t,e),c={},a=0;function l(){var n=1!==a&&u.textPlural.length>0?u.textPlural:u.selectionText;r.html("".concat(a," ").concat(n))}o.click(function(){o.toggleClass("menu-open")}),i.each(function(){var t=n(this),e=t.data("id"),o=Number(t.data("defaultcount")||"0");c[e]=o,a+=o,function(n,t){var e=Number(t.data("mincount")),o=Number(t.data("maxcount"));u.items[n]={minCount:Number.isNaN(Number(e))?0:e,maxCount:Number.isNaN(Number(o))?1/0:o}}(e,t),function(t,e){var o=n("<div />").addClass(u.controls.controlsCls),r=n('\n          <button class="button-decrement">\n            <i class="icon-decrement"></i>\n          </button>\n        '),i=n('\n          <button class="button-increment">\n            <i class="icon-decrement icon-increment"></i>\n          </button>\n        '),s=n("<span>".concat(c[t],"</span>")).addClass(u.controls.counterCls);e.children("div").addClass(u.controls.displayCls),o.append(r,s,i),"right"===u.controls.position?e.append(o):e.prepend(o),r.click(function(n){var e=u.items,o=u.minItems,r=u.beforeDecrement,i=u.onChange;r(t,c)&&a>o&&c[t]>e[t].minCount&&(c[t]-=1,a-=1,s.html(c[t]),l(),i(t,c[t],a)),n.preventDefault()}),i.click(function(n){var e=u.items,o=u.maxItems,r=u.beforeIncrement,i=u.onChange;r(t,c)&&a<o&&c[t]<e[t].maxCount&&(c[t]+=1,a+=1,s.html(c[t]),l(),i(t,c[t],a)),n.preventDefault()}),e.click(function(n){return n.stopPropagation()})}(e,t)}),l()}),this}}(jQuery)},function(n,t,e){}])});

},{}],"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/dropdown/dropdown.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/dropdown/dropdown.js":[function(require,module,exports) {
"use strict";

require("../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");

require("../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css");

require("./dropdown.scss");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getNoun = function getNoun(num, one, two, five) {
  var lastDigits = num % 100;

  if (lastDigits > 4 && lastDigits < 21) {
    return five;
  }

  lastDigits %= 10;

  if (lastDigits === 1) {
    return one;
  } else if (lastDigits > 4 || lastDigits === 0) {
    return five;
  } else {
    return two;
  }
};

var showInitialSelection = function showInitialSelection($dropdown) {
  $dropdown.find(".dropdown__selection").val($dropdown.data("initialSelection"));
};

var setValue = function setValue($dropdown, itemName, itemCount) {
  $dropdown.find(".dropdown__input[name=".concat(itemName, "]")).first().val(itemCount);
}; // If there is fields with same nouns, combine them
// Plugin uses data-id for counter, so I can't repeat them


var showSelection = function showSelection($dropdown) {
  var $inputs = $dropdown.find(".dropdown__input");
  var selectionData = {}; // nounsArray: count
  // Collect all values in case there will be identical nouns

  $inputs.each(function () {
    var $currentInput = $(this);
    var nounsKey = $currentInput.attr("data-nouns");
    var count = Number($currentInput.val());

    if (nounsKey in selectionData) {
      // Check if object already contains a value
      count += selectionData[nounsKey];
    }

    selectionData[nounsKey] = count;
  });
  var selection = [];

  for (var nounsStr in selectionData) {
    var count = selectionData[nounsStr];
    if (!count) continue; // Don't show item in selection if 0

    var noun = getNoun.apply(void 0, [count].concat(_toConsumableArray(JSON.parse(nounsStr)))); // Get noun

    selection.push("".concat(count, " ").concat(noun));
  }

  $dropdown.find(".dropdown__selection").val(selection.join(", ")); // Set selection text
};

var resetSelection = function resetSelection($dropdown) {
  $dropdown.find(".dropdown__input").val(0);
  showInitialSelection($dropdown);
};

$(".dropdown").each(function () {
  var $dropdown = $(this);
  var $controls = $(".dropdown__controls", $dropdown);
  $(".iqdropdown", $dropdown).iqDropdown({
    onChange: function onChange(itemName, itemCount, total) {
      setValue($dropdown, itemName, itemCount);
      showSelection($dropdown);

      if (total) {
        $(".dropdown__reset-btn", $dropdown).removeClass("hidden");
      } else {
        showInitialSelection($dropdown);
        $(".dropdown__reset-btn", $dropdown).addClass("hidden");
      }
    }
  }); // Prevent close if controls is clicked (click handler in item-quantity-dropdown)

  $controls.click(function (e) {
    return e.stopPropagation();
  });
  $controls.find(".dropdown__reset-btn").click(function () {
    return resetSelection($dropdown);
  });
  showInitialSelection($dropdown);
});
},{"../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js":"../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js","../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css":"../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css","./dropdown.scss":"components/dropdown/dropdown.scss"}],"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60788" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/dropdown/dropdown.js"], null)
//# sourceMappingURL=/dropdown.a91f52d8.js.map