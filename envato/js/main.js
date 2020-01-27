$(document).ready(function(){
  //timer
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days + ' :';
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ' :';
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ' :';
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  var deadline = '02-18-2019';
  //var deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('clockdiv', deadline);
  //menu nav
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 500;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top}, t);
  });
  $('a[href^="#welcome_link"], *[data-href^="#welcome_link"]').on('click', function(e){
      e.preventDefault();
      var t = 500;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top-50}, t);
  });
  // Initialize and add the google map
  function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.02296821, lng: 36.21254146};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  //close and open map
  $('#close_block').click(function(){
    $('#map_jq').fadeOut();
    $('#open_block').fadeIn();
  });
  $('#open_block').click(function(){
    $('#map_jq').fadeIn();
    $('#open_block').fadeOut();
  });
  $('#map').click(function(){
    $('#map_jq').fadeOut();
    $('#open_block').fadeIn();
  });
  //mobile menu
  $('#open_menu').click(function() { 
        $('.menu').animate({ 
            left: '0px' /
        }, 200);    
        $('body').animate({
            left: '320px' 
        }, 200); 
        $("body").css("overflow-y", "hidden");
        $( ".menu__link" ).addClass( "checker" );
    });
    $('.close-container').click(function() { 
        $('.menu').animate({ 
            left: '-320px' 
        }, 200);    
    $('body').animate({ 
            left: '0px'
        }, 200);
    $("body").css("overflow-y", "visible");
    $( ".menu__link" ).removeClass( "checker" );
    });
    $('.menu__link').click(function() {
        if ($( ".menu__link" ).hasClass( "checker" )){
            $('.menu').animate({
                left: '-320px'
            }, 200);
            $('body').animate({
                left: '0px'
            }, 200); 
            $("body").css("overflow-y", "visible");
        }
    });
    $('main').click(function() {
        if ($( ".menu__link" ).hasClass( "checker" )){
            $('.menu').animate({
                left: '-320px'
            }, 200);
            $('body').animate({
                left: '0px'
            }, 200); 
            $("body").css("overflow-y", "visible");
        }
    });
});