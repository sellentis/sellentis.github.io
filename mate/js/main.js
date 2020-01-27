$(".lang__container__current").click(function() {
	$(".lang__container__list").slideToggle();
	$(".lang__container__current").toggleClass("active");
});
$(".faq__row").click(function() {
	$(this).toggleClass("active");
	$(this).find(".faq__answer").slideToggle();
})
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});
$(".faq__tab").not(":nth-child(1)").hide();
$(".faq__tabs a").click(function(e) {
	e.preventDefault();
    $(".faq__tabs a").removeClass("active").eq($(this).index()).addClass("active");
    $(".faq__tab").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(document).ready(function(){
  var mainSlider = $('.support__slider');
  if (mainSlider.length){
    $(mainSlider).slick({
      variableWidth: true,
      dots: false,
      arrows: false,
      autoplay: true,
      pauseOnHover:  false,
      autoplaySpeed:  5000
    });
  }
  
});
$(".copy-btn").click(function(e) {
    e.preventDefault();
    var $temp = $(".pass");
    $temp.select();
    document.execCommand("copy");   
    $(".copy-text").show().delay(1000).fadeOut();
})
$(".copy-words").click(function(e) {
    e.preventDefault();
    var $temp = $(".unique");
    $temp.select();
    document.execCommand("copy");   
    $(".copy-text2").show().delay(1000).fadeOut();
})
$(".close-reg").click(function(e) {
    e.preventDefault();
    $.fancybox.close();
})
$(".continue-reg").click(function() {
    parent.$.fancybox.close();
})

$(".live-btn").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".live-toggle").slideToggle();
})

// menu  scroll

$(document).ready(function(){
    $('.header__menu *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 140 }, t);
    });

    $('.overlayMenu *[data-href^="#"]').on('click', function(e){
        e.preventDefault();

        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked"); 

        var t = 500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top + 140 }, t);
    });
    $('.header-messenger').on('click', function(e){
        e.preventDefault();

        var t = 500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 140 }, t);
    });
});

// scroll top

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide();
  if ($(window).scrollTop() >= 250) $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= 250) $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#Go_Top").scrollToTop();
});



// ЛК
$("#navSlideLeft").click(function () {
  $(this).toggleClass("active");
  if ($(".left-menu").hasClass("showed")) {
    $(".left-menu").removeClass("showed").animate({"left": '-260px'});
  }
  else {
    $(".left-menu").addClass("showed").animate({"left": '0'});
  }
});

$("#navBurgerUser").click(function () {
  $(this).toggleClass("active");
  if ($(".messenger__user").hasClass("suser")) {
    $(".messenger__user").removeClass("suser").animate({"right": '-260px'});
  }
  else {
    $(".messenger__user").addClass("suser").animate({"right": '0'});
  }
});

$("#navBurgerDialogs").click(function () {
  $(this).toggleClass("active");
  if ($(".mes__inbox").hasClass("sinbox")) {
    $(".mes__inbox").removeClass("sinbox").animate({"left": '-270px'});
  }
  else {
    $(".mes__inbox").addClass("sinbox").animate({"left": '0'});
  }
});

$(".copy-ref-btn").click(function(e) {
    e.preventDefault();
    var $temp = $(".ref-href");
    $temp.select();
    document.execCommand("copy");   
    $(".copy-ref-text").show().delay(1000).fadeOut();
})

$(".wallet__history__item").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).find(".wallet__history__toggled").slideToggle();
})

var windowsize = $(window).width();
var myDiv = $('.wallet-menu');
if (myDiv.length){
  if (windowsize > 980) {
    $(".wallet-menu").mCustomScrollbar();
  }
  else {
    $(".wallet-menu").removeClass("mCustomScrollbar");
  }
}

$(".inp-copy").click(function(e) {
    e.preventDefault();
    $(this).siblings("input").select();
    document.execCommand("copy");   
    $(this).siblings(".inp-copy-text").show().delay(1000).fadeOut();
})
$(".wallet-send").click(function() {
    $.fancybox.close();
})

// $(".mes__chat__box").scrollTop($(".mes__chat__box")[0].scrollHeight);
var chat = $('.mes__chat__box');
if (chat.length){
  $(".mes__chat__box").scrollTop($(".mes__chat__box")[0].scrollHeight);
}

$('#user-avatar').change(function() {
    if ($(this).val() != '') $("#user-avatar-label").text('Выбрано файлов: ' + $(this)[0].files.length);
    else $("#user-avatar-label").text('Прикрепить файлы');
});

$("[data-fancybox]").fancybox({
    touch: false
});