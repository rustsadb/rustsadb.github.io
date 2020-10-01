 //=============SLOW SCROLL=================
 $(document).ready(function(){
    $(".header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//=============SCROLL ANIMATION=============
const animItems = document.querySelectorAll('.anim-item');
if (animItems.length > 0){
    window.addEventListener('scroll',animOnScroll); 
    function animOnScroll(params){
        for (let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint  = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('animated')
            } else {
                animItem.classList.remove('animated')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect()
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(animOnScroll,1000);
} 
