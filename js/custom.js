//toggle menu

$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".main-nav").toggleClass("main-nav-left");
  });
});

$('#homeBannerslider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    items:1,
    dots:true,
    nav:false,
    autoplay:true
});




//portfolio slider
$('#portfolioslider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    navText:["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
                    "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
    autoplay:true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items:1,
        dots:true,
        nav:false
    },
    // breakpoint from 480 up
    480 : {
        items:2,
        dots:true,
        nav:false
    },
    // breakpoint from 768 up
    768 : {
        items:3,
        dots:true,
        nav:true
    }
}
});





//single blog breadcrum
