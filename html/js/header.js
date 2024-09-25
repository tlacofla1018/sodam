// Top Banner - 24시간 동안 안 보기
    const $topBanner = $('.topBanner');
    const hour = 24; // 24시간 동안 팝업 숨기기

    // 닫기 버튼 클릭 시 팝업 숨기기와 쿠키 설정
    $topBanner.on('click', '.closeBtn', function(e) {
        e.preventDefault();
        const hidePopup = $('#close24hBtn').prop('checked'); // 팝업을 숨길지 여부
        if (hidePopup) {
            const d = new Date();
            d.setTime(d.getTime() + (hour * 60 * 60 * 1000));
            const expires = `expires=${d.toUTCString()}`;
            document.cookie = `hidePopup=true; ${expires}; path=/`; // 쿠키 설정
        }
        $topBanner.hide();
    });

    // 쿠키 확인하여 팝업을 보여줄지 결정
    if (document.cookie.indexOf('hidePopup=true') >= 0) {
        $topBanner.hide(); // 팝업 숨기기
    } else {
        $topBanner.show(); // 쿠키가 없으면 팝업을 보여줌
    }



// Mobile Header - nav
    $(function() {
        $('#mHeader .navBtn').on('click', function(){
            $(this).toggleClass('slideOn');
            $('#mHeader .gnb').toggleClass('slideOn');
        });
    });
    $(function() {
        $('#mHeader .depthMenuBtn').on('click', function(){
            $(this).toggleClass('slideOn');
            const siblings = $(this).parent().siblings();
            siblings.toggleClass('slideOn');
        });
    });



// Header
    const header = document.querySelector('#header');
    const mHeader = document.querySelector('#mHeader');
    const headerLogo = document.querySelector('.headerLogo');
    const gnb = document.querySelector('.gnb');

    gnb.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#000'; // 호버 시 배경색
        mHeader.style.backgroundColor = '#000';
    });

    gnb.addEventListener('mouseleave', () => {
        header.style.backgroundColor = 'transparent'; // 기본 배경색
        mHeader.style.backgroundColor = 'transparent';
    });

    addEventListener('scroll', function(){
        if(window.scrollY > 400){
            header.classList.add('scrolledBg');
            mHeader.classList.add('scrolledBg');
        }else{
            header.classList.remove('scrolledBg');
            mHeader.classList.remove('scrolledBg');
        }
    });