import * as $ from 'jquery';

$(document).ready( () => {
    let cbBtns = document.querySelectorAll('.callback-btn');
    cbBtns.forEach( btn => btn.addEventListener('click', () => {
        $('.modal-fade').toggleClass('active');
        $('.modal').addClass('active');
        $('.menu-fade').removeClass('active');
    }))

    $('.modal-close').click(() => {
        $('.modal-fade').removeClass('active');
        $('.modal').removeClass('active');
    });

    $('.modal-fade').click( (e) => {
            if ($(e.target).closest('.modal').length === 0) {
                $('.modal-fade').removeClass('active');
                $('.modal').removeClass('active');
            }
        })

    document.getElementById('callback').onsubmit = function() {
        $('.modal').removeClass('active');
        $('.modal-thanks').addClass('active');
    }

    $('.modal-thanks-close').click(() => {
        $('.modal-fade').removeClass('active');
        $('.modal-thanks').removeClass('active');
    })
})




