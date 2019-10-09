import "./dropdown.scss";
var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");
/*
 * numbercategoryselector.js
 * Author & copyright (c) 2017: Sakri Koskimies
 *
 * MIT license
 */
let $input,
  $goriginalPlaceholder,
  $gparent,
  $gi,
  $gcategory,
  $gtext,
  $gname,
  $gbuttons,
  $gbutton_minus,
  $gvalue,
  $gbutton_plus,
  $gclose,
  $gadded,
  $gsum,
  $gnum,
  $baby,
  $last,
  $gzero;
(function($) {
  $.fn.guest = function(options) {
    $input = $(this);
    $goriginalPlaceholder = $input.attr("placeholder");

    let settings = $.extend(
      {
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
        callback: function(values) {}
      },
      options
    );

    if (!settings.categoryValues) {
      settings.categoryValues = newFilledArray(settings.categoryNames.length, 0);
    }

    $gparent = createHTML();

    $(document).mouseup(function(e) {
      if (
        !$input.is(e.target) &&
        !$gparent.is(e.target) &&
        $gparent.has(e.target).length === 0 &&
        !$("div.guest.display").is(e.target) &&
        $("div.guest.display").has(e.target).length === 0
      ) {
        if (settings.fade) {
          $gparent.fadeOut(200);
        } else {
          $gparent.hide();
        }
      }
    });

    // $(document).mouseup(function(e) {
    //   // событие клика по веб-документу
    //   var div = $(this); // тут указываем ID элемента
    //   if (
    //     !div.is(e.target) && // если клик был не по нашему блоку
    //     div.has(e.target).length === 0
    //   ) {
    //     // и не по его дочерним элементам
    //     $gparent.hide(); // скрываем его
    //   }
    // });
    $(this).click(function() {
      switchSelector();
    });

    $(window).resize(function() {
      setPositions();
    });

    function doCallback() {
      if (typeof options.callback == "function") {
        let callbackResult = {};
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

    $("a.guest.button.plus").click(function() {
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

    $("a.guest.button.minus").click(function() {
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
        let formsgb = ["гость", "гостя", "гостей"];
        let xgb10 = ($gsum - $baby) % 10,
          xgb100 = ($gsum - $baby) % 100,
          formgb = formsgb[2]; // гостей
        if (xgb10 == 1 && xgb100 != 11) formgb = formsgb[0];
        // гость
        else if (xgb10 > 1 && xgb10 < 5 && (xgb100 < 10 || xgb100 > 21)) formgb = formsgb[1]; // гостя
        let formsb = ["младенец", "младенца", "младенцев"];
        let xb10 = $baby % 10,
          xb100 = $baby % 100,
          formb = formsb[2]; // младенцев
        if (xb10 == 1 && xb100 != 11) formb = formsb[0];
        // младенец
        else if (xb10 > 1 && xb10 < 5 && (xb100 < 10 || xb100 > 21)) formb = formsb[1]; // младенца
        $gtext += $gsum - $baby + " " + formgb + ", " + $baby + " " + formb;
      } else {
        let forms = ["гость", "гостя", "гостей"];
        let x10 = $gsum % 10,
          x100 = $gsum % 100,
          form = forms[2]; // гостей
        if (x10 == 1 && x100 != 11) form = forms[0];
        // гость
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

        $gdisplay.click(function() {
          switchSelector();
        });
      }

      $gparent = $("<div class='guest parent'></div>")
        .prependTo("body")
        .hide();

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
        $gvalue = $("<div class='guest value' category='" + $gi + "'>" + settings.categoryValues[$gi] + "</div>").appendTo(
          $gbuttons
        );
        $gbutton_plus = $("<a href='' class='guest button plus' category='" + $gi + "'>&#43;</a>").appendTo($gbuttons);

        if (settings.categoryValues[$gi] == settings.maxValue) {
          $gbutton_plus.addClass("inactive");
        }

        if (settings.categoryValues[$gi] == settings.minValue) {
          $gbutton_minus.addClass("inactive");
        }
      }
      $gclose = $("<div class='NCSG room'></div><a class='NCSG close' href=''>Применить</a>").appendTo($gparent);
      $gclose.click(function() {
        if (settings.fade) {
          $gparent.fadeOut(200);
        } else {
          $gparent.hide();
        }
        return false;
      });

      $gzero = $("<div class='NCSG room'></div><a class='NCSG reset' href=''>Очистить</a>").appendTo($gparent);
      $gzero.click(function() {
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
      let rv = new Array(len);
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
