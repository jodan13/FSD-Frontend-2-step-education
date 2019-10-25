"use strict";

const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();

//     const blockID = anchor.getAttribute("href").substr(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });
//   });
// }
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav"),
    menuItem = document.querySelectorAll(".nav_item"),
    button = document.querySelector(".header-login__guest"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    button.classList.toggle("header-login__guest_active");
    menu.classList.toggle("nav_active");
  });

  function addListenerMulti(element, eventNames, listener) {
    let events = eventNames.split(" ");
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }

  addListenerMulti(window, "scroll touchmove mouseup", function() {
    if (hamburger.classList.contains("hamburger_active")) {
      hamburger.classList.remove("hamburger_active");
    }
    if (menu.classList.contains("nav_active")) {
      menu.classList.remove("nav_active");
    }
    if (button.classList.contains("header-login__guest_active")) {
      button.classList.remove("header-login__guest_active");
    }
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      button.classList.toggle("header-login__guest_active");
      menu.classList.toggle("nav_active");
    });
  });
});
