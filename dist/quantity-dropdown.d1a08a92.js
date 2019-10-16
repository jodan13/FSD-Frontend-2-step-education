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

},{}],"components/quantity-dropdown/quantity-dropdown.js":[function(require,module,exports) {
"use strict";

require("../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");

var guests = {
  adults: 0,
  children: 0,
  babies: 0
};
var rooms = {
  bedrooms: 0,
  beds: 0,
  bathrooms: 0
};
var flagZerro = false;

function toggleGlyphicon(dropdown) {
  var whichDropdown = $(dropdown).find(".iqdropdown-menu");

  if (whichDropdown.hasClass("menu-open")) {
    $(dropdown).find(".iqdropdown-selection").find("span").toggleClass("_active");
  } else if ($("#iqOpen").click(function () {})) {
    $(dropdown).find(".iqdropdown-selection").find("span").toggleClass("_active");
  }
}

function addDropdownBtns() {
  $(".isSelectionGuests").find(".iqdropdown-menu").append('<div class="iqdropdown-menu-buttons"></div>');
  $(".isSelectionGuests").find(".iqdropdown-menu-buttons").append('<button class="btn-apply iq-button">Применить</button>');
  $(".isSelectionGuests").find(".iqdropdown-menu-buttons").append('<button class="btn-clear iq-button">Очистить</button>');
}

function dropdownsOpener(dropdown) {
  var whichDropdown = $(dropdown).find(".iqdropdown-menu");
  $(dropdown).find(".iqdropdown-selection").click(function (event) {
    whichDropdown.toggleClass("menu-open");

    if (whichDropdown.hasClass("menu-open")) {
      $(dropdown).find(".iqdropdown__input-btn").css({
        "border-color": "rgba(31, 32, 65, 0.5)",
        "border-bottom-right-radius": "0",
        "border-bottom-left-radius": "0"
      });
    } else {
      $(dropdown).find(".iqdropdown__input-btn").css({
        "border-color": "rgba(31, 32, 65, 0.25)",
        "border-radius": "4px"
      });
    }

    toggleGlyphicon(dropdown);
    event.preventDefault();
  });
  $(document).click(function (event) {
    // if the event is not triggered by your submenu, hide it.
    if ($(event.target).closest($(dropdown).find(".iqdropdown-selection")).length || $(event.target).closest(".btn-clear").length) return;

    if (whichDropdown.hasClass("menu-open")) {
      toggleGlyphicon(dropdown);
      whichDropdown.removeClass("menu-open");
      $(dropdown).find(".iqdropdown__input-btn").css({
        "border-color": "rgba(31, 32, 65, 0.25)",
        "border-radius": "4px"
      });
    }

    event.stopPropagation();
  });
}

function clearBtnForDropdown(dropdown) {
  $(".btn-clear").click(function (event) {
    guests["adults"] = 0;
    guests["children"] = 0;
    guests["babies"] = 0;
    flagZerro = true;
    $(dropdown).find(".counter").html("0");
    $(dropdown).find(".iqdropdown-selection").html("Сколько гостей" + '<span class="iqdropdown__glyphicon _active"></span>');
    $(dropdown).find(".iqdropdown__input-btn").css({
      "border-color": "rgba(31, 32, 65, 0.5)",
      "border-bottom-right-radius": "0",
      "border-bottom-left-radius": "0"
    });
    $(dropdown).find(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.25)");
    $(dropdown).find(".btn-clear").css("display", "none");
    $(dropdown).find(".iqdropdown-menu-option").find(".button-increment").css("border-color", "rgba(31, 32, 65, 0.5)");
    event.preventDefault();
  });
}

function applyBtnForDropdown() {
  $(".btn-apply").click(function (event) {
    event.preventDefault();
  });
} // Guests dropdown list logic


$(document).ready(function () {
  $(".isSelectionGuests").iqDropdown({
    // max total items
    maxItems: Infinity,
    // min total items
    minItems: 0,
    // text to show on the dropdown
    selectionText: "item",
    // text to show for multiple items
    textPlural: "items",
    // buttons to increment/decrement
    controls: {
      position: "right",
      displayCls: "iqdropdown-item-display",
      controlsCls: "iqdropdown-item-controls",
      counterCls: "counter"
    },
    // fires when an item quantity changes
    onChange: function onChange(id, count, totalItems) {
      var sumGuests = guests["adults"] + guests["children"];
      var totalGuests = guests["adults"] + guests["children"] + guests["babies"];
      var guestsDropdown = $(".isSelectionGuests");
      var textDrop = "";

      if (sumGuests >= 5 || sumGuests == 0) {
        textDrop = "".concat(sumGuests, " \u0433\u043E\u0441\u0442\u0435\u0439");
      } else if (sumGuests > 1 && sumGuests < 5) {
        textDrop = "".concat(sumGuests, " \u0433\u043E\u0441\u0442\u044F");
      } else if (sumGuests == 1) {
        textDrop = "".concat(sumGuests, " \u0433\u043E\u0441\u0442\u044C");
      }

      if (guests["babies"] >= 5) {
        textDrop = "".concat(textDrop, ", ").concat(guests["babies"], " \u043C\u043B\u0430\u0434\u0435\u043D\u0446\u0435\u0432");
      } else if (guests["babies"] == 1) {
        textDrop = "".concat(textDrop, ", ").concat(guests["babies"], " \u043C\u043B\u0430\u0434\u0435\u043D\u0435\u0446");
      } else if (guests["babies"] > 1 && guests["babies"] < 5) {
        textDrop = "".concat(textDrop, ", ").concat(guests["babies"], " \u043C\u043B\u0430\u0434\u0435\u043D\u0446\u0430");
      }

      guestsDropdown.find(".iqdropdown-selection").html("".concat(textDrop, "<span class=\"iqdropdown__glyphicon _active\"></span>"));

      if (count > 0) {
        $("[data-id=".concat(id, "]")).find(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.5)");
      } else {
        $("[data-id=".concat(id, "]")).find(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.25)");
      }

      if (totalGuests == 9) {
        guestsDropdown.find(".iqdropdown-menu-option").find(".button-increment").css("border-color", "rgba(31, 32, 65, 0.25)");
      } else {
        guestsDropdown.find(".iqdropdown-menu-option").find(".button-increment").css("border-color", "rgba(31, 32, 65, 0.5)");
      }

      if (totalGuests != 0) {
        guestsDropdown.find(".btn-clear").css("display", "block");
      } else {
        guestsDropdown.find(".btn-clear").css("display", "none");
      }
    },
    // return false to prevent an item decrement
    beforeDecrement: function beforeDecrement(id, itemCount) {
      var totalCount = itemCount["adults"] + itemCount["children"] + itemCount["babies"];

      if (flagZerro) {
        itemCount["adults"] = 0;
        itemCount["children"] = 0;
        itemCount["babies"] = 0;
        flagZerro = false;
      } else if (totalCount > 0 && guests[id] > 0) {
        guests[id] = itemCount[id] - 1;
        return true;
      }
    },
    // return false to prevent an item increment
    beforeIncrement: function beforeIncrement(id, itemCount) {
      var totalCount = itemCount["adults"] + itemCount["children"] + itemCount["babies"] + 1;

      if (flagZerro) {
        itemCount["adults"] = 0;
        itemCount["children"] = 0;
        itemCount["babies"] = 0;
        flagZerro = false;
        guests[id] = itemCount[id] + 1;
        return true;
      } else if (totalCount < 10) {
        guests[id] = itemCount[id] + 1;
        return true;
      }
    }
  });
  addDropdownBtns();
  dropdownsOpener(".isSelectionGuests");
  clearBtnForDropdown(".isSelectionGuests", guests);
  applyBtnForDropdown();
}); // Rooms dropdown list logic

$(document).ready(function () {
  $(".isSelectionRooms").iqDropdown({
    // max total items
    maxItems: Infinity,
    // min total items
    minItems: 0,
    // text to show on the dropdown
    selectionText: "item",
    // text to show for multiple items
    textPlural: "items",
    // buttons to increment/decrement
    controls: {
      position: "right",
      displayCls: "iqdropdown-item-display",
      controlsCls: "iqdropdown-item-controls",
      counterCls: "counter"
    },
    // fires when an item quantity changes
    onChange: function onChange(id, count, totalItems) {
      var bedrooms = rooms["bedrooms"];
      var beds = rooms["beds"];
      var bathrooms = rooms["bathrooms"];
      var totalRooms = bedrooms + beds + bathrooms;
      var roomsDropdown = $(".isSelectionRooms");
      var textDrop = "";

      if (bedrooms >= 5 || bedrooms == 0) {
        textDrop = "".concat(bedrooms, " \u0441\u043F\u0430\u043B\u0435\u043D");
      } else if (bedrooms > 1 && bedrooms < 5) {
        textDrop = "".concat(bedrooms, " \u0441\u043F\u0430\u043B\u044C\u043D\u0438");
      } else if (bedrooms == 1) {
        textDrop = "".concat(bedrooms, " \u0441\u043F\u0430\u043B\u044C\u043D\u044F");
      }

      if (beds >= 5) {
        textDrop = "".concat(textDrop, ", ").concat(beds, " \u043A\u0440\u043E\u0432\u0430\u0442\u0435\u0439");
      } else if (beds > 1 && beds < 5) {
        textDrop = "".concat(textDrop, ", ").concat(beds, " \u043A\u0440\u043E\u0432\u0430\u0442\u0438");
      } else if (beds == 1) {
        textDrop = "".concat(textDrop, ", ").concat(beds, " \u043A\u0440\u043E\u0432\u0430\u0442\u044C");
      }

      if (bathrooms >= 5) {
        textDrop = "".concat(textDrop, ", ").concat(bathrooms, " \u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043D\u0430\u0442");
      } else if (bathrooms == 1) {
        textDrop = "".concat(textDrop, ", ").concat(bathrooms, " \u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430");
      } else if (bathrooms > 1 && bathrooms < 5) {
        textDrop = "".concat(textDrop, ", ").concat(bathrooms, " \u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B");
      }

      if (textDrop.length < 21) {
        roomsDropdown.find(".iqdropdown-selection").html("".concat(textDrop, "<span class=\"iqdropdown__glyphicon _active\"></span>"));
      } else {
        roomsDropdown.find(".iqdropdown-selection").html("".concat(textDrop.substring(0, 20), "... <span class=\"iqdropdown__glyphicon _active\"></span>"));
      }

      if (count > 0) {
        $("[data-id=".concat(id, "]")).find(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.5)");
      } else {
        $("[data-id=".concat(id, "]")).find(".button-decrement").css("border-color", "rgba(31, 32, 65, 0.25)");
      }

      if (totalRooms == 9) {
        roomsDropdown.find(".iqdropdown-menu-option").find(".button-increment").css("border-color", "rgba(31, 32, 65, 0.25)");
      } else {
        roomsDropdown.find(".iqdropdown-menu-option").find(".button-increment").css("border-color", "rgba(31, 32, 65, 0.5)");
      }

      if (totalRooms == 0) {
        roomsDropdown.find(".iqdropdown-selection").html('Сколько комнат <span class="iqdropdown__glyphicon _active"></span>');
      }
    },
    // return false to prevent an item decrement
    beforeDecrement: function beforeDecrement(id, itemCount) {
      var totalCount = itemCount["bedrooms"] + itemCount["beds"] + itemCount["bathrooms"];

      if (totalCount > 0 && rooms[id] > 0) {
        rooms[id] = itemCount[id] - 1;
        return true;
      }
    },
    // return false to prevent an item increment
    beforeIncrement: function beforeIncrement(id, itemCount) {
      var totalCount = itemCount["bedrooms"] + itemCount["beds"] + itemCount["bathrooms"] + 1;

      if (totalCount < 10) {
        rooms[id] = itemCount[id] + 1;
        return true;
      }
    }
  });
  dropdownsOpener(".isSelectionRooms");
});
},{"../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js":"../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js"}],"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65025" + '/');

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
},{}]},{},["C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/quantity-dropdown/quantity-dropdown.js"], null)
//# sourceMappingURL=/quantity-dropdown.d1a08a92.js.map