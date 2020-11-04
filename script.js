jQuery(function($) {
// code
    const sign = $('.singIn');
    const signBlock = $('.sign-blok');
    const signBlock_active =  $('.sign-blok_active');
    const exit = $('.exit')

    sign.click(function (){
        signBlock.toggleClass('sign-blok_active')
    });
    exit.click(function (){
        signBlock.removeClass('sign-blok_active')
    });
});


