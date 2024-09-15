// mainBanner Swiper
var swiper01 = new Swiper("#mainBanner.swiper.mySwiper", {
  
});

// movieRank01 Swiper
let appendNumber02 = 600;
let prependNumber02 = 1;
const swiper02 = new Swiper('#nowMovieRankContents01.swiper', {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 20,
    pagination: {
    el: '#nowMovieRankContents01 .swiper-pagination',
    type: 'fraction',
    },
    navigation: {
        nextEl: '#nowMovieRankContents01 .swiper-button-next',
        prevEl: '#nowMovieRankContents01 .swiper-button-prev',
    },
    virtual: {
        slides: (function () {
            const slides = [];
            for (var i = 0; i < 600; i += 1) {
                slides.push('Slide ' + (i + 1));
            }
            return slides;
        })(),
    },
});

// middleBanner Swiper
var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});