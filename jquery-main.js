$(document).ready(function () {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        wrapAround: true,
        autoPlay: 3000,
        prevNextButtons: false,
    });

    const behavior = function(val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },

    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        },
        placeholder: '(00) 00000-0000 ou (00) 0000-0000'
    };
    
    $('#tel').mask(behavior, options);
})

