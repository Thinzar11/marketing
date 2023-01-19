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

    // $(".navbar-toggler").click(function() {
        
       
    //     let result = ($(".navbar-collapse").hasClass("show"))
    //     console.log(result);

    //     if(result){
    //         $(".navbar-toggler").html(`<i class="fa fa-bars fa-2x menu-icon"></i>`);
    //       }else{
    //         $(".navbar-toggler").html(`<i class="fa fa-close fa-2x menu-icon"></i>`);
    //       }
    //   });

   
    var waypoints = $('#home').waypoint(function(direction) {
        console.log("I am home.")
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#home']").addClass("aa");
      }, {
        offset: '2px'
      })

      var waypoints = $('#about').waypoint(function(direction) {
        console.log("I am about.")
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#about']").addClass("aa");
      }, {
        offset: '2px'
      })

      var waypoints = $('#services').waypoint(function(direction) {
        console.log("I am services.")
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#services']").addClass("aa");
      }, {
        offset: '25%'
      })

      var waypoints = $('#pricing').waypoint(function(direction) {
        console.log("I am pricing.")
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#pricing']").addClass("aa");
      }, {
        offset: '25%'
      })

      var waypoints = $('#contactus').waypoint(function(direction) {
        console.log("I am contactus.")
        $(".nav-link").removeClass("aa");
        $(".nav-link[href = '#contactus']").addClass("aa");
      }, {
        offset: '25%'
      })
      
});

// function setActive(current) {

//   $(".nav-link").removeClass("aa");

//   $(`.nav-link[href='#${current}']`).addClass('aa');

// }

// function navScroll() {

//   let currentSection = $("section[id]");
//   currentSection.waypoint(function (direction) {

//       if(direction == "down"){
//           let currentSectionId = $(this.element).attr('id');
//           console.log(currentSectionId);
//           setActive(currentSectionId);
//       }

//   },{ offset:'150px' });

//   currentSection.waypoint(function (direction) {

//       if(direction == "up"){
//           let currentSectionId = $(this.element).attr('id');
//           console.log(currentSectionId);
//           setActive(currentSectionId);
//       }

//   },{ offset:'150px' });

// }

// navScroll();

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









