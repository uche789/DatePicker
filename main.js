

const MONTH_TYPE = {
    LAST_MONTH: 0,
    THIS_MONTH: 1,
    NEXT_MONTH: 2
}

var currentDate, currentYear, currentMonth;
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

createTable();
defaults();

function prevMonth (event) {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear = (new Date(currentDate.setYear(currentYear - 1))).getFullYear();
        currentDate = new Date(currentYear, currentMonth, 0);
    } else {
        currentMonth--;
    }

    setYearAndMonth();
}

function nextMonth () {
    if (currentMonth >= 11) {
        currentMonth = 0;
        currentYear = (new Date(currentDate.setYear(currentYear + 1))).getFullYear();
        currentDate = new Date(currentYear, currentMonth, 1);
    } else {
        currentMonth++;
    }

    setYearAndMonth();
}

function setYearAndMonth () {
    document.getElementById('monthName').innerText = months[currentMonth];
    document.getElementById('selectedYear').innerText = currentYear;
    setCalendar();
}

function getNumberOfDays (type) {
    var lastMonth,
        nextMonth,
        lastYear,
        nextYear;

    if (currentMonth === 0) {
        lastMonth = 11;
        lastYear = (new Date(currentDate.setYear(currentYear + 1))).getFullYear();
    } else {
        lastMonth = currentMonth - 1;
    }

    if (currentMonth >= 11) {
        nextMonth = 0;
        nextYear = (new Date(currentDate.setYear(currentYear - 1))).getFullYear();
    } else {
        nextMonth = currentMonth + 1;
    }

    if (type === MONTH_TYPE.THIS_MONTH) {
        return new Date(currentYear, currentMonth+1, 0).getDate();
    }

    if (type === MONTH_TYPE.LAST_MONTH) {
        return new Date(lastYear || currentYear, lastMonth+1, 0).getDate();
    }

    if (type === MONTH_TYPE.NEXT_MONTH) {
        return new Date(lastYear || currentYear, nextMonth+1, 0).getDate();
    }
}

function setCalendar () {
    var current_numberOfDays = getNumberOfDays(MONTH_TYPE.THIS_MONTH);
    var calendarTable = document.querySelectorAll('#calendar tbody td');
    var dateNumber = 1;
    var startDay = new Date(currentYear, currentMonth, 1).getDay() - 1;
    var last_numberOfDays = getNumberOfDays(MONTH_TYPE.LAST_MONTH) - (startDay - 1);
    var next_numberOfDays = 1;
    var type = MONTH_TYPE.NEXT_MONTH;

    if (startDay === -1) {
        startDay = 6;
        last_numberOfDays-=6;
    }

    for (var i = 0; i < calendarTable.length; i++) {
        if (dateNumber === 1 || dateNumber === current_numberOfDays + 1) {
            if (startDay > i) {
                calendarTable[i].innerText = last_numberOfDays++;
            }

            if (dateNumber > current_numberOfDays) {
                calendarTable[i].innerText = next_numberOfDays++;
            }

            calendarTable[i].classList.add('otherMonth');
        }

        if (startDay  === i || (dateNumber > 1 && dateNumber <= current_numberOfDays)) {
            calendarTable[i].innerText = dateNumber;
            calendarTable[i].classList.remove('otherMonth');
            dateNumber++;
        }
    }
}

function defaults() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();

    setYearAndMonth();
}

function createTable () {
    var calendarTable = document.querySelector('#calendar tbody');

    for (var i = 1; i <= 6; i++) {
        var tr = document.createElement('tr');

        for (var j = 1; j <= 7; j++) {
            var td = document.createElement('td');
            td.innerText = 'x';
            tr.appendChild(td);
        }

        calendarTable.appendChild(tr);
    }
}

function validateSearch () {

}