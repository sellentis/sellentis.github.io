var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 1){
        $("header").css({"border-bottom-color": "#0359a0", "background": "#fff"});
    }
    if(1 > scrolled){
        $("header").css({"border-bottom-color": "transparent", "background": "transparent"});
    }

}
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
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
$( "#cost_input" ).keyup(function() {
	var tmp = $( "#cost_input" ).val();
	var tmp3 = tmp * 0.05;
  $( "#cost_output" ).val(tmp*1 + tmp3*1);
});
$( "#login-click" ).click(function(e) {
  e.preventDefault();
  console.log("qwe");
  $( ".login-box" ).toggle();
});