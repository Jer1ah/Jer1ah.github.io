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
