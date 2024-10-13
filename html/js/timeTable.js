const regions = ["서울", "부산", "대전"];
const theaterList = {
    "서울": ["강남", "잠실", "홍대"],
    "부산": ["해운대", "서면", "광안리"],
    "대전": ["유성", "서대전", "대덕"]
};

const regionContainer = document.getElementById('regions');
const theaterContainer = document.getElementById('theaters');
const calendarBody = document.getElementById('calendarBody');
const movieSchedule = document.getElementById('movieSchedule');
const timesDiv = document.getElementById('times');
const calendarTitle = document.getElementById('calendarTitle');

let selectedRegion = null;
let selectedTheater = null;
let selectedDate = null;
let currentMonth = new Date();

window.onload = function() {
    generateCalendar(currentMonth);
    selectRegion(regionContainer.firstChild, regions[0]);
    selectTheater(theaterContainer.firstChild, theaterList[regions[0]][0]);
};

// 지역 버튼 생성
regions.forEach(region => {
    const button = document.createElement('div');
    button.className = 'button';
    button.textContent = region;
    button.addEventListener('click', function() {
        selectRegion(button, region);
    });
    regionContainer.appendChild(button);
});

// 지역 선택
function selectRegion(button, region) {
    clearSelection(regionContainer);
    button.classList.add('selected');
    selectedRegion = region;
    showTheaters(region);
    movieSchedule.style.display = 'none';
}

// 상영관 표시
function showTheaters(region) {
    theaterContainer.innerHTML = '';
    theaterList[region].forEach(theater => {
        const button = document.createElement('div');
        button.className = 'button';
        button.textContent = theater;
        button.addEventListener('click', function() {
            selectTheater(button, theater);
        });
        theaterContainer.appendChild(button);
    });

    selectTheater(theaterContainer.firstChild, theaterList[region][0]);
}

// 상영관 선택
function selectTheater(button, theater) {
    clearSelection(theaterContainer);
    button.classList.add('selected');
    selectedTheater = theater;
    generateCalendar(currentMonth);
}

// 선택 초기화
function clearSelection(container) {
    const buttons = container.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('selected'));
}

// 달력 생성
function generateCalendar(date) {
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
            selectDate(cell, day);
        });

        row.appendChild(cell);

        if ((firstDay + day) % 7 === 0 || day === lastDate) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }
}

// 날짜 선택
function selectDate(cell, day) {
    clearDateSelection();
    cell.classList.add('selected-date');
    selectedDate = day;
    showTimes();
}

// 날짜 선택 초기화
function clearDateSelection() {
    const cells = calendarBody.querySelectorAll('td');
    cells.forEach(cell => cell.classList.remove('selected-date'));
}

// 상영 시간 표시 (더미 데이터 사용)
function showTimes() {
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
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    generateCalendar(currentMonth);
});

// 다음 달로 이동
document.getElementById('nextMonth').addEventListener('click', function() {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    generateCalendar(currentMonth);
});

console.log(`Selected Region: ${selectedRegion}`);
console.log(`Selected Theater: ${selectedTheater}`);
console.log(`Selected Date: ${selectedDate}`);
