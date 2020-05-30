// SCRITPS
//--------------------------------------
$(document).ready(function(){

    // Slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 400,
    });


    // Menu
    const $body = $('body');
    const toggleOffcanvas = () => {
        $body.toggleClass('has-offcanvas');
    }
    $('.hamburger-toggle').on('click', toggleOffcanvas);


    // Mostra Api Mobile
    if($('.api-mobile').length) {
        $(".open-login" ).click(function() {
            $(".content-api-mobile").show(300);
        });

        // Esconde Api Mobile
        $(".btn-close" ).click(function() {
            $(".content-api-mobile").hide(200);
        });
    }


    // Fornecedores
    $('.providers').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
          ]
    });


    // Produtos
    $('.carousel-products').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
