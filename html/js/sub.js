// [SUB] Movie Page -----------------------------------------------------------

var subMovieMainBannerSwiper = new Swiper("#subMovieMain .subMainBannerBox #mainBanner.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    loop: true,
    navigation: {
        nextEl: "#subMovieMain .subMainBannerBox .swiper-button.nextBtn",
        prevEl: "#subMovieMain .subMainBannerBox .swiper-button.prevBtn",
    },
});

var subMovieRankSwiper01 = new Swiper("#subNowRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#nowRankContentBox .nextBtn",
        prevEl: "#nowRankContentBox .prevBtn",
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

var subMovieRankSwiper02 = new Swiper("#subRecentRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#recentRankContentBox .nextBtn",
        prevEl: "#recentRankContentBox .prevBtn",
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

var subMovieRankSwiper03 = new Swiper("#subScheduledRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#scheduledRankContentBox .nextBtn",
        prevEl: "#scheduledRankContentBox .prevBtn",
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

var subMovieRankSwiper04 = new Swiper("#subDDayRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#dDayRankContentBox .nextBtn",
        prevEl: "#dDayRankContentBox .prevBtn",
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



// [SUB] Event Page -----------------------------------------------------------

var subEventMainBannerSwiper = new Swiper("#subEventMain .subMainBannerBox #mainBanner.swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    loop: true,
    navigation: {
        nextEl: "#subEventMain .subMainBannerBox .swiper-button.nextBtn",
        prevEl: "#subEventMain .subMainBannerBox .swiper-button.prevBtn",
    },
});

var subHotEventSwiper01 = new Swiper("#subEventHotSlide .eventContainer.swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: "#subEventHotSlide .nextBtn",
        prevEl: "#subEventHotSlide .prevBtn",
    },
});

var subHotEventSwiper02 = new Swiper("#subEventMovieSlide .eventContainer.swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: "#subEventMovieSlide .nextBtn",
        prevEl: "#subEventMovieSlide .prevBtn",
    },
});

var subHotEventSwiper03 = new Swiper("#subEventPreviewSlide .eventContainer.swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: "#subEventPreviewSlide .nextBtn",
        prevEl: "#subEventPreviewSlide .prevBtn",
    },
});

var subHotEventSwiper04 = new Swiper("#subEventPaySlide .eventContainer.swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: "#subEventPaySlide .nextBtn",
        prevEl: "#subEventPaySlide .prevBtn",
    },
});

var subHotEventSwiper05 = new Swiper("#subEventRegionSlide .eventContainer.swiper.mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: "#subEventRegionSlide .nextBtn",
        prevEl: "#subEventRegionSlide .prevBtn",
    },
});