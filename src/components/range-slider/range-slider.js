import "jquery-ui/ui/widgets/slider";
import "./range-slider.scss";

/**
 * Show values from range slider
 * @param {Array} values - From - to values
 * @param {jQuery} $output - Target element
 */
const showValues = function(values, $output) {
  const [from, to] = values;
  $output.val(`${from}₽ - ${to}₽`);
};

$(".range-slider").each((i, sliderContainer) => {
  const $sliderContainer = $(sliderContainer);
  const $slider = $(".range-slider__slider", sliderContainer);
  const $output = $(".range-slider__output", sliderContainer);

  const min = +$sliderContainer.attr("data-from");
  const max = +$sliderContainer.attr("data-to");
  const values = [+$sliderContainer.attr("data-min-value"), +$sliderContainer.attr("data-max-value")];

  $slider.slider({
    range: true,
    min,
    max,
    values,
    slide(event, ui) {
      showValues(ui.values, $output);
    }
  });

  showValues(values, $output);
});
