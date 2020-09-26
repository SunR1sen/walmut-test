import Inputmask from 'inputmask';

let phoneInput = document.getElementById('phone');

let im = new Inputmask('+7(999)-999-99-99');
im.mask(phoneInput);