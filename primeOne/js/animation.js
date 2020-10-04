
window.onload = function() {  
    myFunc();
}
function myFunc(){
    let  elem = document.querySelector('.private__content');
    elem.classList.add('private__content_anim');
}   
let food = document.querySelectorAll('.food-item');
    for (i=0;i<food.length;i++){
        food[i].style.visibility = 'visible';
        food[i].classList.add('animate__animated', 'animate__fadeInUp');
        food[i].setAttribute('data-wow-delay', `${i*0.2}s`)
    }
let why = document.querySelectorAll('.why-top__column');
    for (i=0;i<why.length;i++){
        if (why[i].classList.contains('why-top__column_left')){
            why[i].classList.add('animate__animated', 'animate__fadeInLeft');
        } else {
            why[i].classList.add('animate__animated', 'animate__fadeInRight');
        }
    }
let whyItem  = document.querySelectorAll('.why-bot-item');
    for (i=0;i<whyItem.length;i++){
        whyItem[i].classList.add('wow','animate__animated', 'animate__fadeIn');
        whyItem[i].setAttribute('data-wow-delay', `${i*0.2}s`)
    }
let sayHello  = document.querySelectorAll('.contact-top__title');
for (i=0;i<sayHello.length;i++){
    sayHello[i].classList.add('wow','animate__animated', 'animate__fadeInRightBig');
}