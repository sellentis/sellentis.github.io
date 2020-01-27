$("body").css("padding-right", "0");
// табы
$(".tab_item").not(":first").hide();
$(".about .tab").click(function() {
    $(".about .tab").removeClass("tab--active").eq($(this).index()).addClass("tab--active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
    var destination = $(".tab__container").offset().top;
    if (window.screen.width < 768) {
    	$("body,html").animate({scrollTop: destination-50 }, 800);
    }
}).eq(0).addClass("tab--active");
// табы
$(".map .tab").click(function(e) {
	e.preventDefault();
    $(".map .tab").removeClass("tab--active").eq($(this).index()).addClass("tab--active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab--active");
// табы выпадающий список выбора языка
$(".menu__cabinet__lang").click(function(e) {
    e.preventDefault();
     $(".lang__switch").slideToggle();
});
// слайдер - предыдущий
$('body').on('click', '.prev-slide', function (e) {
	e.preventDefault();
	var w = parseInt($(".slider__bar__fill").css("width"));
	if (w > 70) {
		$(".slider__bar__fill").css("width", w-70);
		$(".slider__box .slider__item--active").removeClass("slider__item--active").prev().addClass("slider__item--active");
		$(".price__steps .price__steps__item--mob").removeClass("price__steps__item--mob").prev().addClass("price__steps__item--mob");
		var v = parseInt($(".ss-active").text());
		$(".ss-active").text(v-1);
	}
});
// слайдер - следующий
$('body').on('click', '.next-slide', function (e) {
	e.preventDefault();
	var w = parseInt($(".slider__bar__fill").css("width"));
	if (w < 280) {
		$(".slider__bar__fill").css("width", w+70);
		$(".slider__box .slider__item--active").removeClass("slider__item--active").next().addClass("slider__item--active");
		$(".price__steps .price__steps__item--mob").removeClass("price__steps__item--mob").next().addClass("price__steps__item--mob");
		var v = parseInt($(".ss-active").text());
		$(".ss-active").text(v+1);
	}
});
// шаги
$('.price__step1').click(function(){
    $(".slider__box .slider__item--active").removeClass("slider__item--active");
    $(".slider__box .slider__item1").addClass("slider__item--active");
    $(".slider__bar__fill").css("width", 70);
    $(".ss-active").text("1");
});
$('.price__step2').click(function(){
    $(".slider__box .slider__item--active").removeClass("slider__item--active");
    $(".slider__box .slider__item2").addClass("slider__item--active");
    $(".slider__bar__fill").css("width", 140);
    $(".ss-active").text("2");
});
$('.price__step3').click(function(){
    $(".slider__box .slider__item--active").removeClass("slider__item--active");
    $(".slider__box .slider__item3").addClass("slider__item--active");
    $(".slider__bar__fill").css("width", 210);
    $(".ss-active").text("3");
});
$('.price__step4').click(function(){
    $(".slider__box .slider__item--active").removeClass("slider__item--active");
    $(".slider__box .slider__item4").addClass("slider__item--active");
    $(".slider__bar__fill").css("width", 280);
    $(".ss-active").text("4");
});
// меню
$('.close-cont').click(function(e){
    e.preventDefault();
    $('.mob__menu').fadeOut();
    $('body').css("overflow-y", "visible");
});
$('.menu__button').click(function(e){
    e.preventDefault();
    $('.mob__menu').fadeIn();
    $('body').css("overflow-y", "hidden");
});
// textarea max counter
var max = 270;
console.log($('#remainingC'));
$('#remainingC').html(max + '/270');
$('textarea').keyup(function() {
    var text_length = $('textarea').val().length;
    var text_remaining = max - text_length;
    $('#remainingC').html(text_remaining + '/270');
});
// калькулятор
const values = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9,
				10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
				20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
				30, 31];
const prices = [12,20,28,36,45,54.00,60.20,66.00,72.00,80.00,
                90.00,105.00,113.60,128.70,145.00,159.50,170.40,
                182.00,189.00,210.00,224.00,238.00,248.40,262.20,
                280.00,291.90,299.20,312.80,324.00,340.00,353.60,
                367.20,378.00,377.00,390.00,403.00
];

const slider = document.querySelector('.rangekg');
   
slider.max = values.length - 1;
slider.oninput = function() {
    console.log(values[this.value]);
    $(".rangeinp").val(values[this.value]);
};
slider.oninput();
$(".rangeinp").val(values[0]);
$(".rangekg").val(0);
$(".priceinp").val("12 USD");

$('.rangesb').click(function(e){
    e.preventDefault();
    var kg = $(".rangeinp").val();
    if ($(".rangesel").val() == 0) {
    	$(".priceinp").val("Выберите город!");
    }
    else {
    	for (var i = values.length - 1; i >= 0; i--) {
	    	if (kg == values[i]) {
	    		$(".priceinp").val(prices[i] + " USD");
	    	}
	    }
    }
});
$('.rangesel').click(function(e){
    e.preventDefault();
});