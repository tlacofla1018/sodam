// mainBanner Swiper
var swiper01 = new Swiper("#mainBanner.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// nowRecentRankContent Swiper
var swiper03 = new Swiper(".rankContent01 .swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".rankContent01 .nextBtn",
        prevEl: ".rankContent01 .prevBtn",
    },
});

// scheduledDdayRankContent Swiper
var swiper04 = new Swiper(".rankContent02 .swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".rankContent02 .nextBtn",
        prevEl: ".rankContent02 .prevBtn",
    },
});

// middleBanner Swiper
var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});