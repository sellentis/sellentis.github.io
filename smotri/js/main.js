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

$(".quests__question").click(function(e) {
	e.preventDefault();
	$(this).next(".quests__answer").slideToggle();
	$(this).children(".q_arrow").toggleClass("q_arrow--active");
	$(this).toggleClass("quests__question--active");
})


