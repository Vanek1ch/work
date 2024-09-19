// Инициализация Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        
    },
    slidesPerView: 1, 

    touchEventsTarget: 'container',
});