// SCRITPS
//--------------------------------------
$j(document).ready(function(){

    // slider-home
    $j('.slider-home').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 400,
    });


    // Menu
    const $body = $j('body');
    const toggleOffcanvas = () => {
        $body.toggleClass('has-offcanvas');
    }
    $j('.hamburger-toggle').on('click', toggleOffcanvas);


    // Mostra Api Mobile
    if($j('.api-mobile').length) {
        $j(".open-login" ).click(function() {
            $j(".content-api-mobile").show(300);
        });

        // Esconde Api Mobile
        $j(".btn-close" ).click(function() {
            $j(".content-api-mobile").hide(200);
        });
    }


    // list
    $j('.carousel-products').slick({
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
