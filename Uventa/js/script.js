//РАБОТА КНОПКИ КАТАЛОГА
$('.catalog-button').click(function(event){
    $('.catalog-button,.tab-buttons,.tab-body,.catalog-panel').toggleClass('active');
    $('.wrapper').toggleClass('shadow');

    //КОРРЕКТИРОВКА ТАБ КНОПОК И ТАБОВ В ФИКСИРОВАННОМ МЕНЮ
    if($('.catalog-button').hasClass('active')){
        $('.tab-buttons').addClass('moved');
        $('.tab-menu').addClass('moved');
    }
}),

//СБРОС ПЕРЕХОДА ПО ССЫЛКЕ НА ТАБ-КНОПКЕ
$('.tab-buttons__btn').click(function(event){
    event.preventDefault();
})
//ТАБЫ
$(".tab-content").not(":first").hide();
$(".tab-buttons__btn").click(function() {
    $(".tab-buttons .tab-buttons__btn").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");

//УСТАНОВКА КАРТИНКИ В КАЧЕСТВЕ БЭКГРАУНДА
function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
}
    
ibg();
//СЛАЙДЕР
$('.slider-small__slide').click(function(params) {
    $('.slider-small .slider-small__slide').removeClass('active');
    $('.slider-big .slider-big__image').hide()
    let imageSource = $(this).children('.slider-small__image').attr("src");
    $('.slider-big .slider-big__image').attr("src", imageSource).fadeIn();
    $(this).addClass('active');
})
var craiting = function(nowPos) {
    // У всех убираем active
    $('.raiting .raiting__star').removeClass('active').children('i').addClass('fa-star-o').removeClass('fa-star');
    for (var i = 0; nowPos + 1 > i; i++) {
      $('.raiting .raiting__star').eq(i).toggleClass('active').children('i').removeClass('fa-star-o').addClass('fa-star');
    }
  }
  
  //переменная содержит количество активных звезд
  let raitingCount = $('.raiting__star.active').length;
  //Количество голосов
  let votesCount = 123;
  //Отображение количества голосов
  $('.raiting .raiting__num').html('(' + votesCount + ')');
  
  // При наведении
  $('.raiting .raiting__star').hover(function() {
    craiting($(this).index());
  });
  
  // При клике
  $('.raiting .raiting__star').click(function() {
    craiting($(this).index());
    //меняем количество по клику
    raitingCount = $('.raiting__star.active').length;
    votesCount++;
    $('.raiting .raiting__num').html('(' + votesCount + ')');
    $('.raiting').addClass('nohover')
    console.log(raitingCount)
    //Отправка запроса
    jQuery.post('rating.php', raitingCount, console.log('Данные отправлены'));
  });
  
  $('.raiting .raiting__star').on('mouseleave', function() {
    craiting(+raitingCount - 1);
  });
const animItem = $('.anim-item');
const topRow = $('.top-row');
const hiddenBlock = $('.hidden-block');
const personalRow = $('.personal-row');
const topMenuList = $('.top-menu__list');
const catalogPanel = $('.catalog-panel');
const catalogColumn = $('.catalog__column');
const topMenuLi = $('.top-menu__li');

//ФИКСИРОВАННОЕ МЕНЮ ПРИ СКРОЛЛЕ
$(window).scroll(function () { 
        //КОГДА ПРОКРУЧИВАЕМ НИЖЕ БЛОКА С КЛАССОМ .anim-item
        if($(window).scrollTop() >  animItem.offset().top){
            topRow.addClass('menu-fixed');
            hiddenBlock.addClass('active');
            //ПЕРЕКИДЫВАЕМ КОРЗИНУ И ПРОЧЕЕ В ФИКС МЕНЮ
            if (!personalRow.hasClass('done')){
                personalRow.addClass('done').appendTo(topMenuList.eq(1));
            }
            //ПЕРЕКИДЫВАЕМ КАТАЛОГ В ФИКС МЕНЮ
            if($(window).width()>850){ 
                if (!catalogPanel.hasClass('done')){
                    catalogPanel.addClass('done').insertAfter(topMenuLi.eq(0));
                }
            }    
        } else {
            topRow.removeClass('menu-fixed')
            hiddenBlock.removeClass('active');
            //ВОЗВРАЩАЕМ КОРЗИНУ ОБРАТНО
            if (personalRow.hasClass('done')){
                personalRow.removeClass('done').appendTo($('.catalog__column').eq(2));
            }
            //ВОЗВРАЩАЕМ КАТАЛОГ ОБРАТНО
            if (catalogPanel.hasClass('done')){
                catalogPanel.removeClass('done').appendTo(catalogColumn.eq(0));
            }
        }
});
//КНОПКА БУРГЕРА И БУРГЕР-МЕНЮ
$(document).ready(function(){
    $('.burger-icon').click(function(event){
        $('.burger-icon,.top-menu__list_sections').toggleClass('active');
        $('body').toggleClass('lock');
        $('.wrapper').toggleClass('shadow');
    })
    $('.menu__link').click(function(event){
        $('.burger-menu,.top-menu__list_sections').removeClass('active');
        $('body').removeClass('lock');
    })
})
$('.top-menu__link').click(function(params) {
    $('.top-menu').find('.top-menu__link').removeClass('active');
    $(this).addClass('active');
})
