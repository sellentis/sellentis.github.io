$(document).ready(function() {
    var width = $(window).width();



    var menu = 350;
    var menu_selector = "#menu-scroll"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    jQuery("#menu-scroll .header__link:first-child").addClass("active");

    function onScroll() {
        var scroll_top = jQuery(document).scrollTop();

        jQuery(menu_selector + " a").each(function() {
            var hash = jQuery(this).attr("href");
            var target = jQuery(hash);
            if (target.position().top - menu <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                jQuery(menu_selector + " a.active").removeClass("active");
                jQuery(this).addClass("active");
            } else {
                jQuery(this).removeClass("active");
            }
        });
        if (scroll_top > 200) {
            $(".header").addClass("active")
        } else {
            $(".header").removeClass("active")
        }
    }
    jQuery(document).on("scroll", onScroll);

    jQuery(".header__link").click(function(e) {
        e.preventDefault();
        jQuery(document).off("scroll");
        jQuery(menu_selector + " .active").removeClass("active");
        $(this).addClass("active")
        $(".header").addClass("active")
        var hash = jQuery(this).attr("href");
        var target = jQuery(hash);
        jQuery("html, body").animate({
            scrollTop: target.offset().top - 129
        }, 300, function() {
            // window.location.hash = hash;
            jQuery(document).on("scroll", onScroll);

        });
        
        if ($(this).index() === 0) {
            $(".header").removeClass("active")
        }
        $(".menu__list").removeClass("active")
    });
});