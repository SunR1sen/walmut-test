import * as $ from 'jquery';
import 'slick-slider';

$(document).ready(function () {

    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    });

})

