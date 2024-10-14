const regions = ["서울", "경기/인천", "충청/대전", "전라/광주", "경북/대구", "경남/울산/부산", "강원", "제주"];
const theaterList = {
    '서울': ['가산디지털', '건대입구', '노원', '독산', '신림'],
    '경기/인천': ['광명', '광주', '구리', '동탄', '의정부', '용인'],
    '충청/대전': ['대전', '대전터미널', '아산', '천안'],
    '전라/광주': ['광주', '군산', '전주'],
    '경북/대구': ['경주', '구미', '대구', '포항'],
    '경남/울산/부산': ['부산', '울산', '창원', '통영'],
    '강원': ['강릉', '남원주', '동해'],
    '제주': ['서귀포시', '제주시']
};

const regionContainer = document.getElementById('regions');
const theaterContainer = document.getElementById('theaters');
const calendarBody = document.getElementById('calendarBody');
const movieSchedule = document.getElementById('movieSchedule');
const timesDiv = document.getElementById('times');
const calendarTitle = document.getElementById('calendarTitle');

let selectedRegion2 = null;
let selectedTheater2 = null;
let selectedDate2 = null;
let currentMonth2 = new Date();

window.onload = function() {
    generateCalendar2(currentMonth2);
    selectRegion2(regionContainer.firstChild, regions[0]);
    selectTheater2(theaterContainer.firstChild, theaterList[regions[0]][0]);
};

// 지역 버튼 생성
regions.forEach(region => {
    const button = document.createElement('div');
    button.className = 'button';
    button.textContent = region;
    button.addEventListener('click', function() {
        selectRegion2(button, region);
    });
    regionContainer.appendChild(button);
});

// 지역 선택
function selectRegion2(button, region) {
    clearSelection2(regionContainer);
    button.classList.add('selected');
    selectedRegion2 = region;
    showTheaters2(region);
    movieSchedule.style.display = 'none';
}

// 상영관 표시
function showTheaters2(region) {
    theaterContainer.innerHTML = '';
    theaterList[region].forEach(theater => {
        const button = document.createElement('div');
        button.className = 'button';
        button.textContent = theater;
        button.addEventListener('click', function() {
            selectTheater2(button, theater);
        });
        theaterContainer.appendChild(button);
    });

    selectTheater2(theaterContainer.firstChild, theaterList[region][0]);
}

// 상영관 선택
function selectTheater2(button, theater) {
    clearSelection2(theaterContainer);
    button.classList.add('selected');
    selectedTheater2 = theater;
    generateCalendar2(currentMonth2);
}

// 선택 초기화
function clearSelection2(container) {
    const buttons = container.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('selected'));
}

// 달력 생성
function generateCalendar2(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    calendarTitle.textContent = `${year}년 ${month + 1}월`;

    calendarBody.innerHTML = '';

    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;

        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            cell.classList.add('today'); // 현재 날짜 강조
        }

        cell.addEventListener('click', function() {
            selectDate2(cell, day);
        });

        row.appendChild(cell);

        if ((firstDay + day) % 7 === 0 || day === lastDate) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }
}

// 날짜 선택
function selectDate2(cell, day) {
    clearDateSelection2();
    cell.classList.add('selected-date');
    selectedDate2 = day;
    showTimes2();
}

// 날짜 선택 초기화
function clearDateSelection2() {
    const cells = calendarBody.querySelectorAll('td');
    cells.forEach(cell => cell.classList.remove('selected-date'));
}

// 상영 시간 표시 (더미 데이터 사용)
function showTimes2() {
    const times = ['12:00', '14:30', '17:00', '19:30'];
    timesDiv.innerHTML = '';
    times.forEach(time => {
        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        timeDiv.textContent = time;
        timesDiv.appendChild(timeDiv);
    });
    movieSchedule.style.display = 'block';
}

// 이전 달로 이동
document.getElementById('prevMonth').addEventListener('click', function() {
    currentMonth2.setMonth(currentMonth2.getMonth() - 1);
    generateCalendar2(currentMonth2);
});

// 다음 달로 이동
document.getElementById('nextMonth').addEventListener('click', function() {
    currentMonth2.setMonth(currentMonth2.getMonth() + 1);
    generateCalendar2(currentMonth2);
});

console.log(`Selected Region: ${selectedRegion2}`);
console.log(`Selected Theater: ${selectedTheater2}`);
console.log(`Selected Date: ${selectedDate2}`);


// 지역별 이벤트를 여는 함수
function openEventRegionTab(tabName) {
    var i;
    var contentElements = document.getElementsByClassName("tab-content");
    var tabButtons = document.getElementsByClassName("tab-menu")[0].getElementsByTagName("button");

    // 모든 탭 내용을 숨기고 모든 버튼에서 active 클래스를 제거
    for (i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = "none"; // 모든 탭 숨기기
        tabButtons[i].classList.remove("active"); // 모든 버튼 비활성화
    }

    // 선택된 탭을 보이게 하고 버튼에 active 클래스 추가
    document.getElementById(tabName).style.display = "block"; // 선택된 탭 보이기
    tabButtons[Array.from(tabButtons).findIndex(btn => btn.textContent === tabName.charAt(0).toUpperCase() + tabName.slice(1))].classList.add("active"); // 활성화
}

// 초기 탭 설정
document.addEventListener("DOMContentLoaded", function() {
    openEventRegionTab('seoul'); // 페이지 로드 시 서울 탭 열기
});

