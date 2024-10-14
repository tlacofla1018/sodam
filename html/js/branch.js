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

kakao.maps.load(function() {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.564, 127.001), // 서울 강남의 위도, 경도
        level: 3 // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(37.564, 127.001);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 지도에 마커를 표시
    marker.setMap(map);
});
