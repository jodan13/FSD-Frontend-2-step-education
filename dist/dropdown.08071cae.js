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
})({"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"./bundle-url":"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/dropdown.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\arrow-down.svg":[["arrow-down.89ffe8bc.svg","img/arrow-down.svg"],"img/arrow-down.svg"],"_css_loader":"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/dropdown.js":[function(require,module,exports) {
"use strict";

require("./dropdown.scss");

/*
 * numbercategoryselector.js
 * Author & copyright (c) 2017: Sakri Koskimies
 *
 * MIT license
 */
var $input, $goriginalPlaceholder, $gparent, $gi, $gcategory, $gtext, $gname, $gbuttons, $gbutton_minus, $gvalue, $gbutton_plus, $gclose, $gadded, $gsum, $gnum, $baby, $last, $gzero;

(function ($) {
  $.fn.guest = function (options) {
    $input = $(this);
    $goriginalPlaceholder = $input.attr("placeholder");
    var settings = $.extend({
      // Defaults.
      categoryNames: ["Adults", "Children"],
      categoryValues: false,
      minValue: 0,
      maxValue: 10,
      closeOnOutsideClick: true,
      showText: true,
      delimiter: ", ",
      align: "left",
      fade: true,
      useDisplay: true,
      showZero: false,
      callback: function callback(values) {}
    }, options);

    if (!settings.categoryValues) {
      settings.categoryValues = newFilledArray(settings.categoryNames.length, 0);
    }

    $gparent = createHTML();

    if (settings.closeOnOutsideClick) {
      $(document).mouseup(function (e) {
        if (!$input.is(e.target) && !$gparent.is(e.target) && $gparent.has(e.target).length === 0 && !$("div.guest.display").is(e.target) && $("div.guest.display").has(e.target).length === 0) {
          if (settings.fade) {
            $gparent.fadeOut(200);
          } else {
            $gparent.hide();
          }
        }
      });
    }

    $(this).click(function () {
      switchSelector();
    });
    $(window).resize(function () {
      setPositions();
    });

    function doCallback() {
      if (typeof options.callback == "function") {
        var callbackResult = {};

        for ($gi = 0; $gi < settings.categoryNames.length; $gi++) {
          callbackResult[settings.categoryNames[$gi]] = settings.categoryValues[$gi];
        }

        options.callback.call(this, callbackResult);
      }
    }

    function setPositions() {
      switch (settings.align) {
        case "left":
          $gparent.css("top", $input.position().top + $input.outerHeight());
          $gparent.css("left", $input.position().left);
          break;
      }

      if (settings.useDisplay) {
        $gdisplay = $("div.guest.display");
        $gdisplay.css("top", $input.position().top + 1);
        $gdisplay.css("left", $input.position().left + 1);
        $gdisplay.css("width", $input.width() - 1);
        $gdisplay.css("height", $input.height() - 1);
      }
    }

    $("a.guest.button.plus").click(function () {
      $gcategory = $(this).attr("category");

      if (settings.categoryValues[$gcategory] < settings.maxValue) {
        settings.categoryValues[$gcategory]++;
        $gnum = settings.categoryValues[$gcategory];
        $("div.guest.value[category='" + $gcategory + "']").text($gnum);
        doCallback();

        if (settings.categoryValues[$gcategory] == settings.maxValue) {
          $(this).addClass("inactive");
        } else {
          $(this).removeClass("inactive");
        }

        if (settings.categoryValues[$gcategory] > settings.minValue) {
          $("a.guest.button.minus[category='" + $gcategory + "']").removeClass("inactive");
        } else {
          $("a.guest.button.minus[category='" + $gcategory + "']").addClass("inactive");
        }
      }

      if (settings.showText) {
        if (!settings.useDisplay) {
          updateText();
        } else {
          updateElement();
        }
      }

      return false;
    });
    $("a.guest.button.minus").click(function () {
      $gcategory = $(this).attr("category");

      if (settings.categoryValues[$gcategory] > settings.minValue) {
        settings.categoryValues[$gcategory]--;
        $gnum = settings.categoryValues[$gcategory];
        $("div.guest.value[category='" + $gcategory + "']").text($gnum);
        doCallback();

        if (settings.categoryValues[$gcategory] == settings.minValue) {
          $(this).addClass("inactive");
        } else {
          $(this).removeClass("inactive");
        }

        if (settings.categoryValues[$gcategory] < settings.maxValue) {
          $("a.guest.button.plus[category='" + $gcategory + "']").removeClass("inactive");
        } else {
          $("a.guest.button.plus[category='" + $gcategory + "']").addClass("inactive");
        }
      }

      if (settings.showText) {
        if (!settings.useDisplay) {
          updateText();
        } else {
          updateElement();
        }
      }

      return false;
    });

    function updateElement() {
      $input.val("");
      $gdisplay = $("div.guest.inlinedisplay");
      $gdisplay.empty();
      $gdisplayelements = 0;

      for ($gi = 0; $gi < settings.categoryNames.length; $gi++) {
        if (settings.categoryValues[$gi] != 0 || settings.showZero) {
          $gdisplayelement = $("<div class='guest displayelement'></div>").appendTo($gdisplay);
          $gdisplayelement.text(settings.categoryValues[$gi] + " " + settings.categoryNames[$gi] + ", ");
          $gdisplayelements++;
        }
      }

      if ($gdisplayelements == 0) {
        $input.attr("placeholder", $goriginalPlaceholder);
      } else {
        $input.attr("placeholder", "");
      }

      updateText();
    }

    function updateText() {
      $gtext = "";
      $gadded = 0;
      $gsum = 0;
      $baby = 0;
      $last = settings.categoryNames.length - 1;

      for ($gi = 0; $gi < settings.categoryNames.length; $gi++) {
        if (settings.categoryValues[$gi] != 0 || settings.showZero) {
          $gsum += settings.categoryValues[$gi];
          $gadded++;
        }
      }

      $baby += settings.categoryValues[$last];

      if ($baby != 0) {
        //$gtext+=$gsum + " гостя, " + $baby + " младенцы";   Если младенец != гость
        var formsgb = ["гость", "гостя", "гостей"];
        var xgb10 = ($gsum - $baby) % 10,
            xgb100 = ($gsum - $baby) % 100,
            formgb = formsgb[2]; // гостей

        if (xgb10 == 1 && xgb100 != 11) formgb = formsgb[0]; // гость
        else if (xgb10 > 1 && xgb10 < 5 && (xgb100 < 10 || xgb100 > 21)) formgb = formsgb[1]; // гостя

        var formsb = ["младенец", "младенца", "младенцев"];
        var xb10 = $baby % 10,
            xb100 = $baby % 100,
            formb = formsb[2]; // младенцев

        if (xb10 == 1 && xb100 != 11) formb = formsb[0]; // младенец
        else if (xb10 > 1 && xb10 < 5 && (xb100 < 10 || xb100 > 21)) formb = formsb[1]; // младенца

        $gtext += $gsum - $baby + " " + formgb + ", " + $baby + " " + formb;
      } else {
        var forms = ["гость", "гостя", "гостей"];
        var x10 = $gsum % 10,
            x100 = $gsum % 100,
            form = forms[2]; // гостей

        if (x10 == 1 && x100 != 11) form = forms[0]; // гость
        else if (x10 > 1 && x10 < 5 && (x100 < 10 || x100 > 21)) form = forms[1]; // гостя

        $gtext += $gsum + " " + form;
      }

      if ($gsum == 0) {
        $input.val($goriginalPlaceholder);
        $(".NCSG.reset").hide();
      } else {
        $input.val($gtext);
        $(".NCSG.reset").show();
      }
    }

    function createHTML() {
      $input.attr("type", "text");

      if (settings.useDisplay) {
        $input.attr("placeholder", "");
        $gdisplay = $("<div class='guest display'></div>").prependTo("body");
        $gdisplay.css("top", $input.position().top + 1);
        $gdisplay.css("left", $input.position().left + 1);
        $gdisplay.css("width", $input.width() - 1);
        $gdisplay.css("height", $input.height() - 1);
        $("<div class='guest inlinedisplay'></div>").prependTo($gdisplay);
        $gdisplay.click(function () {
          switchSelector();
        });
      }

      $gparent = $("<div class='guest parent'></div>").prependTo("body").hide();

      switch (settings.align) {
        case "left":
          $gparent.css("top", $input.position().top + $input.outerHeight() - 3);
          $gparent.css("left", $input.position().left);
          break;
      }

      for ($gi = 0; $gi < settings.categoryNames.length; $gi++) {
        $gcategory = $("<div class='guest category'></div>").appendTo($gparent);
        $gtext = $("<div class='guest text'></div>").appendTo($gcategory);
        $gname = $("<div class='guest name' category='" + $gi + "'>" + settings.categoryNames[$gi] + "</div>").appendTo($gtext);
        $gbuttons = $("<div class='guest buttons'></div>").appendTo($gcategory);
        $gbutton_minus = $("<a href='' class='guest button minus' category='" + $gi + "'>&#8211;</a>").appendTo($gbuttons);
        $gvalue = $("<div class='guest value' category='" + $gi + "'>" + settings.categoryValues[$gi] + "</div>").appendTo($gbuttons);
        $gbutton_plus = $("<a href='' class='guest button plus' category='" + $gi + "'>&#43;</a>").appendTo($gbuttons);

        if (settings.categoryValues[$gi] == settings.maxValue) {
          $gbutton_plus.addClass("inactive");
        }

        if (settings.categoryValues[$gi] == settings.minValue) {
          $gbutton_minus.addClass("inactive");
        }
      }

      $gclose = $("<div class='NCSG room'></div><a class='NCSG close' href=''>Применить</a>").appendTo($gparent);
      $gclose.click(function () {
        if (settings.fade) {
          $gparent.fadeOut(200);
        } else {
          $gparent.hide();
        }

        return false;
      });
      $gzero = $("<div class='NCSG room'></div><a class='NCSG reset' href=''>Очистить</a>").appendTo($gparent);
      $gzero.click(function () {
        for ($gi = 0; $gi < settings.categoryNames.length; $gi++) {
          if (settings.categoryValues[$gi] != 0 || settings.showZero) {
            settings.categoryValues[$gi] = 0;
            $("div.guest.value[category='" + $gi + "']").text("0");
            $(".guest.button.minus").addClass("inactive");
            doCallback();
          }
        }

        updateText();
        return false;
      });

      if (settings.showText) {
        if (!settings.useDisplay) {
          updateText();
        } else {
          updateElement();
        }
      }

      if (settings.useDisplay) {
        $input.css("color", "transparent");
      }

      return $gparent;
    }

    function switchSelector() {
      if (settings.fade) {
        $gparent.fadeToggle(200);
      } else {
        $gparent.toggle();
      }
    }

    function newFilledArray(len, val) {
      var rv = new Array(len);

      while (--len >= 0) {
        rv[len] = val;
      }

      return rv;
    }
  };

  $("input[name='guest']").guest({
    categoryNames: ["Взрослые", "Дети", "Младенцы"],
    categoryValues: false,
    minValue: 0,
    maxValue: 10,
    closeOnOutsideClick: false,
    showText: true,
    delimiter: ", ",
    align: "left",
    fade: true,
    useDisplay: false,
    showZero: false
  });
})(jQuery);
},{"./dropdown.scss":"components/dropdown.scss"}],"C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50502" + '/');

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
},{}]},{},["C:/Users/Евгений/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/dropdown.js"], null)
//# sourceMappingURL=/dropdown.08071cae.js.map