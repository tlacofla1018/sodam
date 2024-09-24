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
        nextEl: ".swiper-button.nextBtn",
        prevEl: ".swiper-button.prevBtn",
    },
});

// nowRecentRankContent Swiper
var swiper02 = new Swiper("#nowRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#nowRankContent .nextBtn",
        prevEl: "#nowRankContent .prevBtn",
    },
});

var swiper03 = new Swiper("#recentRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#recentRankContent .nextBtn",
        prevEl: "#recentRankContent .prevBtn",
    },
});

// scheduledDdayRankContent Swiper
var swiper04 = new Swiper(".scheduledRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#scheduledRankContent .nextBtn",
        prevEl: "#scheduledRankContent .prevBtn",
    },
});

var swiper05 = new Swiper(".dDayRankContent.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#dDayRankContent .nextBtn",
        prevEl: "#dDayRankContent .prevBtn",
    },
});


// middleBanner Swiper
// var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});

// previewContent
