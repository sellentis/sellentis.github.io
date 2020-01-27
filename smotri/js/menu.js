window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 1){
        $("header").css({"border-bottom-color": "#DFE2EF", "background": "#fff"});
        $("header").css("box-shadow", "0px 5px 8px rgba(47, 54, 64, 0.15)");
        $("#go-top").fadeIn("slow")
    }
    if(1 > scrolled){
        $("header").css({"border-bottom-color": "transparent", "background": "transparent"});
        $("header").css("box-shadow", "none");
        $("#go-top").fadeOut("slow")
    }
}

var menu_selector = "#menu-scroll"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
var menu = 72;
jQuery("#menu-scroll li:first-child a").addClass("menu__link--current");

function onScroll(){
    var scroll_top = jQuery(document).scrollTop();
    
    jQuery(menu_selector + " a").each(function(){
        var hash = jQuery(this).attr("href");
        var target = jQuery(hash);
        if (target.position().top - menu <= scroll_top && target.position().top + target.outerHeight()  > scroll_top) {
            jQuery(menu_selector + " a.menu__link--current").removeClass("menu__link--current");
            jQuery(this).addClass("menu__link--current");
        } else {
            jQuery(this).removeClass("menu__link--current");
        }
    });
}
 
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
 $.fn.scrollToBot = function() {
   var z = $("#about").offset().top;
   $(this).click(function() {
   $("html, body").animate({scrollTop: z}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();

 $(".scroll-down").scrollToBot();
});

jQuery(document).on("scroll", onScroll);

jQuery("#menu-scroll .menu__link").click(function(e){
    e.preventDefault();

    jQuery(document).off("scroll");
    jQuery(menu_selector + " .menu__link--current").removeClass("menu__link--current");
    jQuery(this).addClass("menu__link--current");
    var hash = jQuery(this).attr("href");
    var target = jQuery(hash);
    jQuery("html, body").animate({
        scrollTop: target.offset().top
    }, 300, function(){
        window.location.hash = hash;
        jQuery(document).on("scroll", onScroll);
        
    });

});
jQuery("#menu-mob .menu__link").click(function(e){
    e.preventDefault();
    $(".mob-menu__footer").toggle();
    $(".mob-menu").removeClass("header-white");
	$(".hamb-bot").css({"transform": "translate3d(0,0,0)"});
	$(".hamb-top").css({"transform": "translate3d(0,0,0)"});
    jQuery(document).off("scroll");
    var hash = jQuery(this).attr("href");
    var target = jQuery(hash);
    jQuery("html, body").animate({
        scrollTop: target.offset().top
    }, 300, function(){
        window.location.hash = hash;
        jQuery(document).on("scroll", onScroll);
    });
});