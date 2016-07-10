console.log('Test');

$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        slidesPerView: 'auto',
        loop: true
    });

    var swiperCarousel = new Swiper('.geek-carousel-container', {
        nextButton: '.geek-button-next',
        prevButton: '.geek-button-prev',
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        simulateTouch: false,
        buttonDisabledClass: 'hide'
    });
});
