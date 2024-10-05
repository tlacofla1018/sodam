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
    // spaceBetween: 10,
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

var swiper03 = new Swiper("#recentRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    // spaceBetween: 30,
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

// scheduledDdayRankContent Swiper
var swiper04 = new Swiper("#scheduledRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    // spaceBetween: 30,
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

var swiper05 = new Swiper("#dDayRankContent.swiper.mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    // spaceBetween: 30,
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

// 모든 하트 요소를 선택
const hearts = document.querySelectorAll('.likeBtn img');

// 각 하트에 클릭 이벤트 리스너 추가
hearts.forEach(heart => {
    heart.addEventListener('click', (event) => {
        const currentHeart = event.target; // 클릭한 하트 요소
        
        // 현재 하트의 src 속성을 확인하고 변경
        if (currentHeart.src.includes('heartIcon.svg')) {
            currentHeart.src = '/img/icon/fullHeartIcon.svg'; // 채워진 하트 이미지로 변경
        } else {
            currentHeart.src = '/img/icon/heartIcon.svg'; // 빈 하트 이미지로 변경
        }
    });
});


// 모든 li 요소를 선택
const listItems = document.querySelectorAll('.previewContent .item');

// 각 li에 hover 이벤트 추가
listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // 먼저 모든 li에서 active 클래스를 제거
        listItems.forEach(li => li.classList.remove('active'));

        // 현재 마우스를 올린 li에 active 클래스 추가
        item.classList.add('active');
    });
});

// middleBanner Swiper
// var swiper03 = new Swiper("#middleBanner.swiper.mySwiper", {});

// previewContent
