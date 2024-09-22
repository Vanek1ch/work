
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        
    },
    slidesPerView: 1, 

    touchEventsTarget: 'container',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        768:{
            slidesPerView:2
        },
        
    }
    
});
document.querySelector('#prev-button').style.backgroundImage = 'url("index_s/images/leftButton.png")';
document.querySelector('#next-button').style.backgroundImage = 'url("index_s/images/rightButton.png")';