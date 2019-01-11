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
