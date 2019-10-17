import "../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
// var jquery = require("jquery");
// import $ from "jquery";
// window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui-dist/jquery-ui.js");
const guests = {
  adults: 0,
  children: 0,
  babies: 0
};

const rooms = {
  bedrooms: 0,
  beds: 0,
  bathrooms: 0
};

let flagZerro = false;

function toggleGlyphicon(dropdown) {
  let whichDropdown = $(dropdown).find(".iqdropdown-menu");
  if (whichDropdown.hasClass("menu-open")) {
    $(dropdown)
      .find(".iqdropdown-selection")
      .find("span")
      .toggleClass("_active");
  } else if ($("#iqOpen").click(() => {})) {
    $(dropdown)
      .find(".iqdropdown-selection")
      .find("span")
      .toggleClass("_active");
  }
}

function addDropdownBtns() {
  $(".isSelectionGuests")
    .find(".iqdropdown-menu")
    .append('<div class="iqdropdown-menu-buttons"></div>');
  $(".isSelectionGuests")
    .find(".iqdropdown-menu-buttons")
    .append('<button class="btn-apply iq-button">Применить</button>');
  $(".isSelectionGuests")
    .find(".iqdropdown-menu-buttons")
    .append('<button class="btn-clear iq-button">Очистить</button>');
}

function dropdownsOpener(dropdown) {
  let whichDropdown = $(dropdown).find(".iqdropdown-menu");

  $(dropdown)
    .find(".iqdropdown-selection")
    .click(event => {
      whichDropdown.toggleClass("menu-open");
      if (whichDropdown.hasClass("menu-open")) {
        $(dropdown)
          .find(".iqdropdown__input-btn")
          .css({
            "border-color": "rgba(31, 32, 65, 0.5)",
            "border-bottom-right-radius": "0",
            "border-bottom-left-radius": "0"
          });
      } else {
        $(dropdown)
          .find(".iqdropdown__input-btn")
          .css({
            "border-color": "rgba(31, 32, 65, 0.25)",
            "border-radius": "4px"
          });
      }
      toggleGlyphicon(dropdown);
      event.preventDefault();
    });

  $(document).click(event => {
    // if the event is not triggered by your submenu, hide it.
    if ($(event.target).closest($(dropdown).find(".iqdropdown-selection")).length || $(event.target).closest(".btn-clear").length)
      return;

    if (whichDropdown.hasClass("menu-open")) {
      toggleGlyphicon(dropdown);
      whichDropdown.removeClass("menu-open");
      $(dropdown)
        .find(".iqdropdown__input-btn")
        .css({
          "border-color": "rgba(31, 32, 65, 0.25)",
          "border-radius": "4px"
        });
    }
    event.stopPropagation();
  });
}

function clearBtnForDropdown(dropdown) {
  $(".btn-clear").click(event => {
    guests["adults"] = 0;
    guests["children"] = 0;
    guests["babies"] = 0;
    flagZerro = true;
    $(dropdown)
      .find(".counter")
      .html("0");
    $(dropdown)
      .find(".iqdropdown-selection")
      .html("Сколько гостей" + '<span class="iqdropdown__glyphicon _active"></span>');
    $(dropdown)
      .find(".iqdropdown__input-btn")
      .css({
        "border-color": "rgba(31, 32, 65, 0.5)",
        "border-bottom-right-radius": "0",
        "border-bottom-left-radius": "0"
      });
    $(dropdown)
      .find(".button-decrement")
      .css("border-color", "rgba(31, 32, 65, 0.25)");
    $(dropdown)
      .find(".btn-clear")
      .css("display", "none");
    $(dropdown)
      .find(".iqdropdown-menu-option")
      .find(".button-increment")
      .css("border-color", "rgba(31, 32, 65, 0.5)");
    event.preventDefault();
  });
}

function applyBtnForDropdown() {
  $(".btn-apply").click(event => {
    event.preventDefault();
  });
}

// Guests dropdown list logic
$(document).ready(() => {
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
    onChange: (id, count, totalItems) => {
      let sumGuests = guests["adults"] + guests["children"];
      let totalGuests = guests["adults"] + guests["children"] + guests["babies"];
      let guestsDropdown = $(".isSelectionGuests");
      let textDrop = "";

      if (sumGuests >= 5 || sumGuests == 0) {
        textDrop = `${sumGuests} гостей`;
      } else if (sumGuests > 1 && sumGuests < 5) {
        textDrop = `${sumGuests} гостя`;
      } else if (sumGuests == 1) {
        textDrop = `${sumGuests} гость`;
      }

      if (guests["babies"] >= 5) {
        textDrop = `${textDrop}, ${guests["babies"]} младенцев`;
      } else if (guests["babies"] == 1) {
        textDrop = `${textDrop}, ${guests["babies"]} младенец`;
      } else if (guests["babies"] > 1 && guests["babies"] < 5) {
        textDrop = `${textDrop}, ${guests["babies"]} младенца`;
      }
      guestsDropdown.find(".iqdropdown-selection").html(`${textDrop}<span class="iqdropdown__glyphicon _active"></span>`);
      if (count > 0) {
        $(`[data-id=${id}]`)
          .find(".button-decrement")
          .css("border-color", "rgba(31, 32, 65, 0.5)");
      } else {
        $(`[data-id=${id}]`)
          .find(".button-decrement")
          .css("border-color", "rgba(31, 32, 65, 0.25)");
      }
      if (totalGuests == 9) {
        guestsDropdown
          .find(".iqdropdown-menu-option")
          .find(".button-increment")
          .css("border-color", "rgba(31, 32, 65, 0.25)");
      } else {
        guestsDropdown
          .find(".iqdropdown-menu-option")
          .find(".button-increment")
          .css("border-color", "rgba(31, 32, 65, 0.5)");
      }
      if (totalGuests != 0) {
        guestsDropdown.find(".btn-clear").css("display", "block");
      } else {
        guestsDropdown.find(".btn-clear").css("display", "none");
      }
    },
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => {
      let totalCount = itemCount["adults"] + itemCount["children"] + itemCount["babies"];
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
    beforeIncrement: (id, itemCount) => {
      let totalCount = itemCount["adults"] + itemCount["children"] + itemCount["babies"] + 1;
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
});

// Rooms dropdown list logic
$(document).ready(() => {
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
    onChange: (id, count, totalItems) => {
      let bedrooms = rooms["bedrooms"];
      let beds = rooms["beds"];
      let bathrooms = rooms["bathrooms"];
      let totalRooms = bedrooms + beds + bathrooms;
      let roomsDropdown = $(".isSelectionRooms");
      let textDrop = "";

      if (bedrooms >= 5 || bedrooms == 0) {
        textDrop = `${bedrooms} спален`;
      } else if (bedrooms > 1 && bedrooms < 5) {
        textDrop = `${bedrooms} спальни`;
      } else if (bedrooms == 1) {
        textDrop = `${bedrooms} спальня`;
      }

      if (beds >= 5) {
        textDrop = `${textDrop}, ${beds} кроватей`;
      } else if (beds > 1 && beds < 5) {
        textDrop = `${textDrop}, ${beds} кровати`;
      } else if (beds == 1) {
        textDrop = `${textDrop}, ${beds} кровать`;
      }

      if (bathrooms >= 5) {
        textDrop = `${textDrop}, ${bathrooms} ванных комнат`;
      } else if (bathrooms == 1) {
        textDrop = `${textDrop}, ${bathrooms} ванная комната`;
      } else if (bathrooms > 1 && bathrooms < 5) {
        textDrop = `${textDrop}, ${bathrooms} ванные комнаты`;
      }
      if (textDrop.length < 21) {
        roomsDropdown.find(".iqdropdown-selection").html(`${textDrop}<span class="iqdropdown__glyphicon _active"></span>`);
      } else {
        roomsDropdown
          .find(".iqdropdown-selection")
          .html(`${textDrop.substring(0, 20)}... <span class="iqdropdown__glyphicon _active"></span>`);
      }

      if (count > 0) {
        $(`[data-id=${id}]`)
          .find(".button-decrement")
          .css("border-color", "rgba(31, 32, 65, 0.5)");
      } else {
        $(`[data-id=${id}]`)
          .find(".button-decrement")
          .css("border-color", "rgba(31, 32, 65, 0.25)");
      }
      if (totalRooms == 9) {
        roomsDropdown
          .find(".iqdropdown-menu-option")
          .find(".button-increment")
          .css("border-color", "rgba(31, 32, 65, 0.25)");
      } else {
        roomsDropdown
          .find(".iqdropdown-menu-option")
          .find(".button-increment")
          .css("border-color", "rgba(31, 32, 65, 0.5)");
      }
      if (totalRooms == 0) {
        roomsDropdown.find(".iqdropdown-selection").html('Сколько комнат <span class="iqdropdown__glyphicon _active"></span>');
      }
    },
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => {
      let totalCount = itemCount["bedrooms"] + itemCount["beds"] + itemCount["bathrooms"];
      if (totalCount > 0 && rooms[id] > 0) {
        rooms[id] = itemCount[id] - 1;
        return true;
      }
    },
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => {
      let totalCount = itemCount["bedrooms"] + itemCount["beds"] + itemCount["bathrooms"] + 1;
      if (totalCount < 10) {
        rooms[id] = itemCount[id] + 1;
        return true;
      }
    }
  });
  dropdownsOpener(".isSelectionRooms");
});
