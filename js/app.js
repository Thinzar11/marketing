$(document).ready(function(){

    let screenHeight = $(window).height();
    // console.log(screenHeight);
    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition >= screenHeight-100){
            $(".nav-site").addClass("nav-site-scroll");
        }else{
            $(".nav-site").removeClass("nav-site-scroll");
            $(".nav-link").removeClass("aa");
            $(".nav-link[href = '#home']").addClass("aa");
        }
    });

   
    var waypoints = $('#home').waypoint(function(direction) {
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#home']").addClass("aa");
      }, {
        offset: '2px'
      })

      var waypoints = $('#about').waypoint(function(direction) {
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#about']").addClass("aa");
      }, {
        offset: '2px'
      })

      var waypoints = $('#services').waypoint(function(direction) {
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#services']").addClass("aa");
      }, {
        offset: '25%'
      })

      var waypoints = $('#pricing').waypoint(function(direction) {
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#pricing']").addClass("aa");
      }, {
        offset: '25%'
      })

      var waypoints = $('#contactus').waypoint(function(direction) {
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#contactus']").addClass("aa");
      }, {
        offset: '25%'
      })
      
});

new WOW().init();
$('.pricing-slick').slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
    $(this).remove();
  })
})









