import './rate-btn.scss';

const $rateBtn = $('.rate-btn');
const $rateStars = $('.rate-btn__star');
const emptyModifier = 'rate-btn__star--empty';

/**
 * @param {jQuery} $rateBtn
 * @param {number} targetIdx - Last filled star index
 */
const fillStars = function($rateBtn, targetIdx) {
  $('.rate-btn__star', $rateBtn)
    .each((idx, star) => {
      if (idx <= targetIdx) {
        $(star).removeClass(emptyModifier);
      } else {
        $(star).addClass(emptyModifier)
      }
    });
};

const handleHover = function({ currentTarget: hoveredStar }) {
  const $rateBtn = $(hoveredStar).parent('.rate-btn');
  fillStars($rateBtn, $(hoveredStar).index());
};

const handleLeave = function({ currentTarget: rateBtn }) {
  fillStars($(rateBtn), +rateBtn.dataset.rate - 1);
};

const handleClick = function({ currentTarget: clickedStar }) {
  const $rateBtn = $(clickedStar).parent('.rate-btn');
  const newRate = $(clickedStar).index() + 1;
  $rateBtn.attr('data-rate', newRate);
};

$rateStars.mouseover(handleHover);
$rateBtn.mouseleave(handleLeave);
$rateStars.click(handleClick);
