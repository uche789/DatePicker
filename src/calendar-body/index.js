export default class CalendarBody {
    constructor (translations) {
        this.translations = translations;
        this.MONTH_TYPE = {
            LAST_MONTH: 0,
            THIS_MONTH: 1,
            NEXT_MONTH: 2 
        };

        this.createBody();
    }

    createBody () {
        var calendarBody = document.querySelector('#calendar tbody');
    
        for (var i = 1; i <= 6; i++) {
            var tr = document.createElement('tr');
    
            for (var j = 1; j <= 7; j++) {
                var td = document.createElement('td');
                td.innerText = 'x';
                tr.appendChild(td);
            }
    
            calendarBody.appendChild(tr);
        }
    }

    generate () {
        let calendarTable = document.querySelectorAll('#calendar tbody td');
        let thisMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.THIS_MONTH);
        let dateNumber = 1;
        let startDay = new Date(this.currentYear, this.currentMonth, 1).getDay() - 1;
        let lastMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.LAST_MONTH) - (startDay - 1);
        let nextMonthNumberOfDays = 1;

        if (startDay === -1) {
            startDay = 6;
            lastMonthNumberOfDays-=6;
        }

        for (var i = 0; i < calendarTable.length; i++) {
            if (dateNumber === 1 || dateNumber === thisMonthNumberOfDays + 1) {
                if (startDay > i) {
                    calendarTable[i].innerText = lastMonthNumberOfDays++;
                }

                if (dateNumber > thisMonthNumberOfDays) {
                    calendarTable[i].innerText = nextMonthNumberOfDays++;
                }

                calendarTable[i].classList.add('otherMonth');
            }

            if (startDay  === i || (dateNumber > 1 && dateNumber <= thisMonthNumberOfDays)) {
                calendarTable[i].innerText = dateNumber;
                calendarTable[i].classList.remove('otherMonth');
                dateNumber++;
            }
        }
    }

    update (data) {
        this.currentDate = data.currentDate;
        this.currentYear = data.currentYear;
        this.currentMonth = data.currentMonth;
    }

    getNumberOfDays (type) {
        let lastMonth,
            nextMonth,
            lastYear,
            nextYear;
    
        if (this.currentMonth === 0) {
            lastMonth = 11;
            lastYear = (new Date(this.currentDate.setYear(this.currentYear + 1))).getFullYear();
        } else {
            lastMonth = this.currentMonth - 1;
        }
    
        if (this.currentMonth >= 11) {
            nextMonth = 0;
            nextYear = (new Date(this.currentDate.setYear(this.currentYear - 1))).getFullYear();
        } else {
            nextMonth = this.currentMonth + 1;
        }
    
        if (type === this.MONTH_TYPE.THIS_MONTH) {
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
        }
    
        if (type === this.MONTH_TYPE.LAST_MONTH) {
            return new Date(lastYear || this.currentYear, lastMonth+1, 0).getDate();
        }
    
        if (type === this.MONTH_TYPE.NEXT_MONTH) {
            return new Date(nextYear || this.currentYear, nextMonth+1, 0).getDate();
        }
    }
}