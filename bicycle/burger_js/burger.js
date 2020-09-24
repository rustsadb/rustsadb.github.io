$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.header').toggleClass('active');
        $('body').toggleClass('lock');
    })
})