parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wpA6":[function(require,module,exports) {

},{"./..\\fonts\\Montserrat-Bold.woff2":[["Montserrat-Bold.65bda194.woff2","R8xu"],"R8xu"],"./..\\fonts\\Montserrat-Bold.woff":[["Montserrat-Bold.37ff223a.woff","P1mB"],"P1mB"],"./..\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.621e6edf.ttf","xApb"],"xApb"],"./..\\fonts\\Montserrat-Bold.svg":[["Montserrat-Bold.994a7d02.svg","luqg"],"luqg"],"./..\\fonts\\Montserrat-Regular.woff2":[["Montserrat-Regular.0cea91dc.woff2","CyCx"],"CyCx"],"./..\\fonts\\Montserrat-Regular.woff":[["Montserrat-Regular.ccba4f2c.woff","t5nJ"],"t5nJ"],"./..\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.47bc4f02.ttf","tPtE"],"tPtE"],"./..\\fonts\\Montserrat-Regular.svg":[["Montserrat-Regular.062aeb17.svg","5ll8"],"5ll8"],"./..\\img\\twitter.svg":[["twitter.9007fca2.svg","DqDj"],"DqDj"],"./..\\img\\facebook.svg":[["facebook.df70f354.svg","izbk"],"izbk"],"./..\\img\\instagram.svg":[["instagram.6e4999b8.svg","F2e+"],"F2e+"]}],"jAVA":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll('a[href*="#"]');window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".nav"),t=document.querySelectorAll(".nav_item"),a=document.querySelector(".header-login__guest"),s=document.querySelector(".hamburger");s.addEventListener("click",function(){s.classList.toggle("hamburger_active"),a.classList.toggle("header-login__guest_active"),e.classList.toggle("nav_active")}),function(e,t,a){for(var s=t.split(" "),c=0,i=s.length;c<i;c++)e.addEventListener(s[c],a,!1)}(window,"scroll touchmove mouseup",function(){s.classList.contains("hamburger_active")&&s.classList.remove("hamburger_active"),e.classList.contains("nav_active")&&e.classList.remove("nav_active"),a.classList.contains("header-login__guest_active")&&a.classList.remove("header-login__guest_active")}),t.forEach(function(t){t.addEventListener("click",function(){s.classList.toggle("hamburger_active"),a.classList.toggle("header-login__guest_active"),e.classList.toggle("nav_active")})})});
},{}],"Or3u":[function(require,module,exports) {
"use strict";require("./ui-kit.scss"),require("../modules/header.js");
},{"./ui-kit.scss":"wpA6","../modules/header.js":"jAVA"}]},{},["Or3u"], null)
//# sourceMappingURL=ui-kit.f35339cb.js.map