//Adding navscroll functionality
$(window).on("scroll", () => {
    if( $(window).scrollTop() > 75 ) {
        $(".header__nav").addClass("active__nav");
    } else if( $(window).scrollTop() < 74 ) {
        $(".header__nav").removeClass("active__nav");
    }
});


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


//adding mobile-nav functionality
const mobileNavController = (function() {
  const _navButton = document.querySelector(".mobile-menu");
  const _navList = document.querySelector(".header__nav--list");
  const _mobileBackground = document.querySelector(".mobile-background");

  _navButton.addEventListener("click", () => {
    if(window.getComputedStyle(_navList).visibility === "hidden") {
      _mobileBackground.style.transform = "scale(170)";
      _navList.style.visibility = "visible";
      _navList.style.opacity = "1";
      _navButton.src = "img/up-arrow.svg";
    } else {
      _mobileBackground.style.transform = "scale(0)";
      _navList.style.visibility = "hidden";
      _navList.style.opacity = "0";
      _navButton.src = "img/down-arrow.svg";
    }
  });
}());