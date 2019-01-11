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

//Adding smooth scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });