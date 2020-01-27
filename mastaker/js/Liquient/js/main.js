var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 1){
        $("header").css({"border-bottom-color": "#DFE2EF", "background": "#fff"});
    }
    if(1 > scrolled){
        $("header").css({"border-bottom-color": "transparent", "background": "transparent"});   
    }

}