adaptiveFunction()
$(window).resize(function (event) { 
    adaptiveFunction();
});
function adaptive_navigation(w,h) {
    let burgerMenu = $('.burger-menu');
    let headerTopLanguage = $('.header-top__language');
    let headerBottomMenu = $('.header-bottom__menu')
    if(w<767){
        if (!headerTopLanguage.hasClass('done')){
            headerTopLanguage.addClass('done').appendTo(burgerMenu);
        }
    } else {
        if (headerTopLanguage.hasClass('done')){
            headerTopLanguage.removeClass('done').prependTo($('.header-top__row'));
        }
    }
    if(w<767){
        if(!headerBottomMenu.hasClass('done')){
            headerBottomMenu.addClass('done').appendTo(burgerMenu)
        }
    } else {
        $.each(headerBottomMenu, function (indexInArray, valueOfElement) {
            if($(this).hasClass('menu_left')){
                if ($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
                }
            } else if ($(this).hasClass('menu_right')){
                if ($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
                }
            } 
        });
    }
}  
function adaptiveFunction(){
    let w = $(window).outerWidth();
    let h = $(window).outerHeight();
    adaptive_navigation(w,h)
}