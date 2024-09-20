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

// nowRankContent Swiper
var swiper02 = new Swiper("#nowRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button.nextBtn",
        prevEl: ".swiper-button.prevBtn",
    },
});

// recentRankContent Swiper
var swiper03 = new Swiper("#recentRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
});

// scheduledRankContent Swiper
var swiper04 = new Swiper("#scheduledRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
});

// dDayRankContent Swiper
var swiper05 = new Swiper("#dDayRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
});

// middleBanner Swiper
var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});