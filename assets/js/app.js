
$(document).ready(function(){
    $(".navbar .nav-item").click(function(){
        $(this).toggleClass("show")
    })

    $(".closeIcon").click(function(){
        $(".navbar-collapse").animate({"right":"-100%"},1000)
        $(".navbar-collapse").removeClass("show")
    })

    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").animate({"right":"0%"},1000)
        $(".navbar-collapse").removeClass("show")
    });

                           // btnTop
    $(window).scroll(function(){
        $(".btnTop").toggleClass("active", $(this).scrollTop() >300)
        $(".navbar").toggleClass("scroll", $(this).scrollTop() >300)
    })

    $(".btnTop").click(function(){
        $("html,body").animate({scrollTop:0},1000)
    })

                    //    preloader
    $(".pre-loader").fadeOut(4000)

    // $('.project .owl-carousel').owlCarousel({
    //     loop:false,
    //     margin:30,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:false
    //         },
    //         600:{
    //             items:2,
    //             nav:false
    //         },
    //         1000:{
    //             items:3,
    //             nav:false,
    //             loop:false
    //         }
    //     }
    // });
    $('.project .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    $('.team-members .owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            600:{
                items:2,
                nav:false,
                loop:true
            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })


    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                loop:true
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    })

    $('.brand .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                loop:true
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    })

});

  
    