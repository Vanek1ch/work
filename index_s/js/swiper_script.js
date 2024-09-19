// Инициализация Swiper
var swiper = new Swiper('.swiper-container', {
    // Параметры
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, 
    spaceBetween: 0, 
    touchEventsTarget: 'container',
});