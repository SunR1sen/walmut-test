import * as $ from 'jquery';

$(document).ready(function () {
    // Вначале сделал через fadeIn, но там получилось кривое отображение вместе с slick-слайдером
    // поэтому сделал по простому, анимацию прикрутить можно разными путями, просто уже глубокая ночь
    // и фантазия не работает))

    $('#menu-open').click(() => {
        $('.menu-fade').toggleClass('active');
    })

    $('.menu-close').click( () => {
        $('.menu-fade').removeClass('active');
    })

    $('.menu-fade').click( (e) => {
        if ($(e.target).closest('.menu-inner').length === 0) {
            $('.menu-fade').removeClass('active');
        }
    })

    // $('#menu-open').click(function () {
    //     $('.menu-fade').fadeIn(500);
    //     return false;
    // });
    //
    // $('.menu-close').click(function () {
    //     $(this).parents('.menu-fade').fadeOut(500);
    //     return false;
    // })
    //
    // $('.menu-fade').click(function (e) {
    //     if ($(e.target).closest('.menu-inner').length === 0) {
    //         $(this).fadeOut();
    //     }
    // })
})