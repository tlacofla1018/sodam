$(document).ready(function() {
    // Swiper 초기화
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    // 탭 클릭 이벤트
    $('.tab').on('click', function() {
        const target = $(this).data('target');

        // 모든 탭 비활성화 및 숨기기
        $('.tab').removeClass('active');
        $('.tab-content').removeClass('active');

        // 클릭한 탭 활성화 및 해당 내용 표시
        $(this).addClass('active');
        $(target).addClass('active');
    });
});

// 지도 표시 (예: 구글 맵 API 사용)
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.564, lng: 127.001 }, // 서울 강남의 위도, 경도
        zoom: 15,
    });
    const marker = new google.maps.Marker({
        position: { lat: 37.564, lng: 127.001 },
        map: map,
        title: "서울 강남",
    });
}