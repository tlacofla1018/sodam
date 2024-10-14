const theaters = {
    '서울': ['가산디지털', '건대입구', '노원', '독산', '신림'],
    '경기/인천': ['광명', '광주', '구리', '동탄', '의정부', '용인'],
    '충청/대전': ['대전', '대전터미널', '아산', '천안'],
    '전라/광주': ['광주', '군산', '전주'],
    '경북/대구': ['경주', '구미', '대구', '포항'],
    '경남/울산/부산': ['부산', '울산', '창원', '통영'],
    '강원': ['강릉', '남원주', '동해'],
    '제주': ['서귀포시', '제주시'],
};

const moviesList = {
    '가산디지털': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '건대입구': ['에이리언:로물루스', '파일럿'],
    '노원': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '독산': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '신림': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '광명': ['에이리언:로물루스', '파일럿'],
    '광주': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '구리': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '동탄': ['에이리언:로물루스', '파일럿'],
    '의정부': ['에이리언:로물루스', '파일럿'],
    '용인': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '대전': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '대전터미널': ['에이리언:로물루스', '파일럿'],
    '아산': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '천안': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '광주': ['에이리언:로물루스', '파일럿'],
    '군산': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '전주': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '경주': ['에이리언:로물루스', '파일럿'],
    '구미': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '대구': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '포항': ['에이리언:로물루스', '파일럿'],
    '부산': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '울산': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '창원': ['에이리언:로물루스', '파일럿'],
    '통영': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '강릉': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '남원주': ['에이리언:로물루스', '파일럿'],
    '동해': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '서귀포시': ['베테랑2', '안녕, 할부지', '비긴 어게인'],
    '제주시': ['에이리언:로물루스', '파일럿']
};

const showTimes = {
    '베테랑2': ['10:00', '12:00', '14:00'],
    '안녕, 할부지': ['11:00', '13:00'],
    '비긴 어게인': ['09:00', '15:00'],
    '파일럿': ['10:30', '13:30'],
    '에이리언:로물루스': ['11:30', '14:30']
};

let selectedDate = null;

function showTheaters(region, selectedItem) {
    const theaterContainer = document.getElementById('theater-container');
    const theaterList = document.getElementById('theater-list');
    theaterList.innerHTML = ''; // 이전 내용 초기화
    const timeList = document.getElementById('time-list');
    timeList.innerHTML = ''; // 시간 목록 초기화

    // 선택된 지역 항목 강조
    highlightSelectedItem('region-list', selectedItem);

    if (theaters[region]) {
        theaters[region].forEach(theater => {
            const li = document.createElement('li');
            li.textContent = theater;
            li.onclick = function() { showMovies(theater, li); }; // 클릭 시 영화 목록 보여주기
            theaterList.appendChild(li);
        });
        document.getElementById('selected-region').textContent = "지역: " + region; // 선택된 지역 표시
        showMovies(theaters[region][0], theaterList.children[0]); // 첫 번째 영화관 자동 선택
    }
}

function showMovies(theater, selectedItem) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // 영화 목록 초기화
    const moviesDiv = document.getElementById('movies');
    moviesDiv.style.display = 'block'; // 영화 목록 보이기

    highlightSelectedItem('theater-list', selectedItem);

    if (moviesList[theater]) {
        moviesList[theater].forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie;
            li.onclick = function() { selectMovie(movie); };
            movieList.appendChild(li);
        });

        document.getElementById('selected-theater').textContent = "영화관: " + theater; // 선택된 영화관 표시
        selectMovie(moviesList[theater][0]); // 첫 번째 영화 자동 선택
    } else {
        moviesDiv.style.display = 'none'; // 영화 목록 숨기기
        document.getElementById('selected-theater').textContent = "영화관: 선택되지 않음"; // 초기화
        resetSelection(); // 선택 결과 초기화
    }
}

function hideMovies() {
    document.getElementById('movies').style.display = 'none'; // 영화 목록 숨기기
}

function resetSelection() {
    document.getElementById('selected-movie').textContent = "영화: 선택되지 않음"; // 선택 결과 초기화
    document.getElementById('time-list').innerHTML = ''; // 시간 목록 초기화
    document.getElementById('next-button').style.display = 'none'; // 다음 버튼 숨기기
}

function selectMovie(movieName) {
    document.getElementById('selected-movie').textContent = "영화: " + movieName; // 선택된 영화 표시
    displayShowTimes(movieName); // 선택된 영화의 상영 시간 표시
}

function displayShowTimes(movieName) {
    const timeList = document.getElementById('time-list');
    timeList.innerHTML = ''; // 시간 목록 초기화

    if (showTimes[movieName]) {
        showTimes[movieName].forEach(time => {
            const li = document.createElement('li');
            li.textContent = time;
            li.onclick = function() { selectShowTime(time); }; // 상영 시간 선택 이벤트 추가
            timeList.appendChild(li);
        });
    }
}

function highlightSelectedItem(listId, selectedItem) {
    const listItems = document.querySelectorAll(`#${listId} li`);
    listItems.forEach(item => {
        item.classList.remove('selected');
    });
    selectedItem.classList.add('selected');
}

function createCalendar() {
    const calendarContainer = document.getElementById('calendar');
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    calendarContainer.innerHTML = '';

    // 달력 날짜 생성
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day';
        calendarContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        dayCell.textContent = day;

        dayCell.onclick = function() {
            selectDate(day, dayCell);
        };

        calendarContainer.appendChild(dayCell);
    }
}

function selectDate(day, selectedItem) {
    selectedDate = day; // 선택한 날짜 저장
    document.getElementById('selected-date').textContent = "날짜: " + day + "일"; // 선택된 날짜 표시

    // 선택된 날짜 강조
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(item => {
        item.classList.remove('selected-date'); // 이전 선택된 날짜 제거
    });
    selectedItem.classList.add('selected-date'); // 현재 선택된 날짜에 클래스 추가

    displayShowTimes(document.getElementById('selected-movie').textContent.split("영화: ")[1]); // 선택된 영화의 시간을 표시
}

function selectShowTime(showTime) {
    const movieName = document.getElementById('selected-movie').textContent.split("영화: ")[1]; // 선택된 영화 이름
    const date = document.getElementById('selected-date').textContent.split("날짜: ")[1]; // 선택된 날짜
    const region = document.getElementById('selected-region').textContent.split("지역: ")[1]; // 선택된 지역
    const theater = document.getElementById('selected-theater').textContent.split("영화관: ")[1]; // 선택된 영화관

    // 선택된 내용을 확인하는 알림창
    const confirmationMessage = `지역: ${region}\n영화관: ${theater}\n영화: ${movieName}\n날짜: ${date}\n상영 시간: ${showTime}`;
    if (confirm(confirmationMessage)) {
        document.getElementById('next-button').style.display = 'block'; // "다음" 버튼 보이기
        
        // 선택된 정보를 localStorage에 저장
        localStorage.setItem('selectedRegion', region);
        localStorage.setItem('selectedTheater', theater);
        localStorage.setItem('selectedMovie', movieName);
        localStorage.setItem('selectedDate', date);
        localStorage.setItem('selectedShowTime', showTime);
    }
}

// 초기 로드 시 기본 선택
window.onload = function() {
    showTheaters('서울', document.querySelector('#region-list li')); // 서울을 기본으로 설정
    createCalendar(); // 달력 생성
};

function goToNext() {
    // 다음 페이지로 이동 (예: movie-detail.html)
    window.location.href = 'movie-detail.html'; // 이동할 페이지 URL
}

// 할인 안내
function showContent(contentId) {
    // 모든 콘텐츠 숨기기
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 모든 탭 비활성화
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 선택된 콘텐츠와 탭 활성화
    document.getElementById(contentId).classList.add('active');
    const activeTab = Array.from(tabs).find(tab => tab.textContent === contentId.split('-')[0].replace(/([a-z])([A-Z])/g, '$1 $2'));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}