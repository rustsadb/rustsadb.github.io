$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.header').toggleClass('active');
        $('body').toggleClass('lock');
    }),
    $('.menu__link').click(function(event){
        $('.burger,.header').removeClass('active');
        $('body').removeClass('lock');
    })
})
