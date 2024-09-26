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
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#nowRankContent .nextBtn",
        prevEl: "#nowRankContent .prevBtn",
    },
    breakpoints: {
        1220: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        970: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        220: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

var swiper03 = new Swiper("#recentRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#recentRankContent .nextBtn",
        prevEl: "#recentRankContent .prevBtn",
    },
    breakpoints: {
        1220: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        970: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        220: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

// scheduledDdayRankContent Swiper
var swiper04 = new Swiper("#scheduledRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#scheduledRankContent .nextBtn",
        prevEl: "#scheduledRankContent .prevBtn",
    },
    breakpoints: {
        1220: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        970: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        220: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

var swiper05 = new Swiper("#dDayRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#dDayRankContent .nextBtn",
        prevEl: "#dDayRankContent .prevBtn",
    },
    breakpoints: {
        1220: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        970: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        220: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("previewHover");
        $(this).toggleClass("previewHover");
    });
});

// middleBanner Swiper
// var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});

// previewContent
