const menuButton = document.querySelector(".header__nav--menu");
const menuList = document.querySelector(".header__nav--list");


$(window).on("scroll", function() {
    if( $(window).scrollTop() > 25 ) {
       $(".header__nav--container").addClass("nav__active");
   } else {
       $(".header__nav--container").removeClass("nav__active");
   }
});


$(".header__nav--menu").on("click", evt => {
    if( window.innerWidth < 991 ) {
        if( menuList.style.display != "flex" ) {
          $(".header__nav--list").css("display", "flex");
       } else {
          $(".header__nav--list").css("display", "none");     
        }
     } else if( window.innerWidth > 991 ) {
        $(".header__nav--list").css("display", "flex");       
    }
});

$(window).resize(function() {
    if( window.innerWidth > 991 ) {
       menuList.style.display = "flex";
    } else if( window.innerWidth <= 991 ) {
       menuList.style.display = "none";      
    }
});

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
