//Adding navscroll functionality
$(window).on("scroll", () => {
    if( $(window).scrollTop() > 75 ) {
        $(".header__nav").addClass("active__nav");
    } else if( $(window).scrollTop() < 74 ) {
        $(".header__nav").removeClass("active__nav");
    }
});

//Adding dropdown nav functionality
$(".mobile__nav img").on("click", () => {
    if( $(".header__nav--list").css("display") === "none" ) {
        $(".header__nav--list").css("display", "flex");
    } else {
        $(".header__nav--list").css("display", "none");
    }
});

//Checking the windows width so that nav list doesn't disapear on larger screens
$(window).resize(() => {
    if( $(window).innerWidth() > 965 ) {
        $(".header__nav--list").css("display", "flex");
    } else if( $(window).innerWidth() < 965 ) {
        $(".header__nav--list").css("display", "none");
    }
});

//Adding scroll animations
AOS.init();

  //Adding active nav on scroll
  //Adding classes to nav based on position relative to window
  $(window).on("scroll", () => {
    if( $("#about").offset().top - $(window).scrollTop() < 65 ) {
      $(".header__nav--list--items:nth-child(1) a").addClass("activeScroll");
    } if( $("#skills").offset().top - $(window).scrollTop() < 175 ) {
      $(".header__nav--list--items:nth-child(2) a").addClass("activeScroll");
      $(".header__nav--list--items:nth-child(1) a").removeClass("activeScroll");
    } if( $("#portfolio").offset().top - $(window).scrollTop() < 75 ) {
      $(".header__nav--list--items:nth-child(3) a").addClass("activeScroll");
      $(".header__nav--list--items:nth-child(2) a").removeClass("activeScroll");
    } if( $("#contact").offset().top - $(window).scrollTop() < 275 ) {
      $(".header__nav--list--items:nth-child(4) a").addClass("activeScroll");
      $(".header__nav--list--items:nth-child(3) a").removeClass("activeScroll");
    }
  });

  //Removing classes to nav based on position relative to window
  $(window).on("scroll", () => {
    if($("#about").offset().top - $(window).scrollTop() > 66) {
      $(".header__nav--list--items:nth-child(1) a").removeClass("activeScroll");
    } if($("#skills").offset().top - $(window).scrollTop() > 176) {
      $(".header__nav--list--items:nth-child(2) a").removeClass("activeScroll");
    } if($("#portfolio").offset().top - $(window).scrollTop() > 76) {
      $(".header__nav--list--items:nth-child(3) a").removeClass("activeScroll");
    } if($("#contact").offset().top - $(window).scrollTop() > 275) {
      $(".header__nav--list--items:nth-child(4) a").removeClass("activeScroll");
    }
  });