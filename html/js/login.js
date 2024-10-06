// JavaScript 초기화 함수 및 초기화 확인
Kakao.init('cb34b5727280769c98e279647531734a'); // [내 애플리케이션] > [앱 키]에서 확인한 JavaScript Key 할당
Kakao.isInitialized(); // true 값이 나와야 함

// 간편로그인 요청 함수
function loginWithKakao() {
    // 모바일에서만 앱을 호출하도록 조건 설정
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        Kakao.Auth.authorize({
            redirectUri: 'http://sodamcine.dothome.co.kr/sub/login.html',
            throughTalk: true // 앱을 통한 로그인 시도
        });
    } else {
        // PC 웹 환경에서는 바로 OAuth 인증 페이지로 이동
        Kakao.Auth.authorize({
            redirectUri: 'http://sodamcine.dothome.co.kr/sub/login.html'
        });
    }
}

// 아래는 데모를 위한 UI 코드입니다.
// displayToken()
// function displayToken() {
//     var token = getCookie('authorize-access-token');

//     if(token) {
//     Kakao.Auth.setAccessToken(token);
//     Kakao.Auth.getStatusInfo()
//         .then(function(res) {
//         if (res.status === 'connected') {
//             document.getElementById('token-result').innerText
//             = 'login success, token: ' + Kakao.Auth.getAccessToken();
//         }
//         })
//         .catch(function(err) {
//         Kakao.Auth.setAccessToken(null);
//         });
//     }
// }

// function getCookie(name) {
//     var parts = document.cookie.split(name + '=');
//     if (parts.length === 2) { return parts[1].split(';')[0]; }
// }