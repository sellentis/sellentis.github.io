$(".btn-menu").click(function () {
  // $(this).toggleClass("active");
  if ($(".mob__menu").hasClass("showed")) {
    $(".mob__menu").removeClass("showed").animate({"left": '-280px'});
  }
  else {
    $(".mob__menu").addClass("showed").animate({"left": '0'});
  }
});