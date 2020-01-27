var scrolled;
var viewHeight = document.documentElement.clientHeight;
// меню
$(".hamb-container").click(function() {
	$(".mob-menu__footer").toggle();
	
	if ($(".mob-menu").hasClass("header-white")) {
		$(".mob-menu").removeClass("header-white");
		$(".hamb-bot").css({"transform": "translate3d(0,0,0)"});
		$(".hamb-top").css({"transform": "translate3d(0,0,0)"});
	}
	else {
		$(".mob-menu").addClass("header-white");
		$(".hamb-bot").css({"transform": "translate3d(0,-3px,0) rotate(-45deg)"});
		$(".hamb-top").css({"transform": "translate3d(0,3px,0) rotate(45deg)"});
	}
})
// кнопки подтверждения
$(".validateBtn").click(function(e) {
	e.preventDefault();
	$('.form-section__box').hide();
	$('.success-form').fadeIn();
})
$(".submit-email").click(function(e) {
	e.preventDefault();
	$('.intro-copy').hide();
	$('.collect-success').fadeIn();
})


