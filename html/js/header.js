// 쿠키 생성
function setCookie(name, value, exDay) {
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + exDay); 
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; expires=" + todayDate.toUTCString() + ";";
}

// 쿠키 읽기
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// 팝업 닫기
function closePopUp() {
    const cookiedata = getCookie("popup");
    
    if (cookiedata === "done") {
        document.querySelector('.topBanner').style.visibility = "hidden";
    } else {
        document.querySelector('.topBanner').style.visibility = "visible";
    }

    // 하루동안 보지 않기
    const chkbox = document.close24hBtn;
    if (close24hBtn && close24hBtn.checked) {
        setCookie("popup", "done", 1); // 쿠키를 하루 동안 유지
    }
} 

addEventListener('scroll', function(){
    const header = document.querySelector('#header');
    if(window.scrollY > 820){
        header.classList.add('scrolledBg');
    }else{
        header.classList.remove('scrolledBg');
    }
    
    const headerLogo = document.querySelector('.headerLogo');
    const headerLogoSticky = document.querySelector('.headerLogoSticky');
    if(window.scrollY > 60){
        headerLogo.classList.remove('activeHeader');
        headerLogoSticky.classList.add('activeHeader');
        
    }else{
        headerLogo.classList.add('activeHeader');
        headerLogoSticky.classList.remove('activeHeader');
    }
});