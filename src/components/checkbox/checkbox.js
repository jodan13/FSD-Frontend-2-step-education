var expanded = false;

$(".expandable-checkbox").each(function() {
  const $checkbox = $(this);
  const $checkboxListContent = $(".expandable-checkbox__list", $checkbox);
  const $checkboxListTitle = $(".expandable-checkbox__header", $checkbox);

  const toggleCheckbox = function() {
    const isExpanded = $checkbox.attr("aria-expanded") === "true";
    $checkbox.attr("aria-expanded", !isExpanded);
    $checkboxListContent.slideToggle();
  };

  $checkboxListTitle.click(toggleCheckbox);
  toggleCheckbox();
});
