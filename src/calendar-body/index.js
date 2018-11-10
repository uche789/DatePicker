export default class CalendarBody {
    constructor (translations) {
        this.translations = translations;
        this.date = {};
        this.MONTH_TYPE = {
            LAST_MONTH: 0,
            THIS_MONTH: 1,
            NEXT_MONTH: 2 
        };
    }

    createBody () {
        var calendarBody = document.querySelector('#date-picker tbody');
    
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
        let calendarTable = document.querySelectorAll('#date-picker tbody td');
        let thisMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.THIS_MONTH);
        let defaultCheckedValue = this.date.current.getDate();
        let dateNumber = 1;
        let startDay = new Date(this.date.currentYear, this.date.currentMonth, 1).getDay() - 1;
        let lastMonthNumberOfDays = this.getNumberOfDays(this.MONTH_TYPE.LAST_MONTH);
        let nextMonthNumberOfDays = 1;

        startDay = startDay > -1 ? startDay : 6;
        lastMonthNumberOfDays -= (startDay - 1);

        for (var i = 0; i < calendarTable.length; i++) {
            let value = 0;
            let radioButton = document.createElement('input');
            let label = document.createElement('label');
            calendarTable[i].innerHTML = '';

            radioButton.type = 'radio';
            radioButton.name = 'date-input-value';
            radioButton.onchange = this.date.onchange;

            //Insert days that belong to the previous and next month
            if (dateNumber === 1 || dateNumber === thisMonthNumberOfDays + 1) {
                if (startDay > i) {
                    value = lastMonthNumberOfDays;
                    radioButton.value = `${lastMonthNumberOfDays}/${this.date.lastMonth+1}/${this.date.lastYear}`;
                    label.innerText = lastMonthNumberOfDays;
                    radioButton.id = 'last-month-value_' + lastMonthNumberOfDays;
                    label.htmlFor = 'last-month-value_' + lastMonthNumberOfDays;
                    lastMonthNumberOfDays++;
                }

                if (dateNumber > thisMonthNumberOfDays) {
                    value = nextMonthNumberOfDays;
                    radioButton.value = `${nextMonthNumberOfDays}/${this.date.nextMonth+1}/${this.date.nextYear}`;
                    label.innerText = nextMonthNumberOfDays;
                    radioButton.id = 'next-month-value_' + nextMonthNumberOfDays;
                    label.htmlFor = 'next-month-value_' + nextMonthNumberOfDays;
                    nextMonthNumberOfDays++;
                }

                calendarTable[i].classList.add('date-different-month');
            }

            if (startDay  === i || (dateNumber > 1 && dateNumber <= thisMonthNumberOfDays)) {
                value = dateNumber;
                calendarTable[i].classList.remove('date-different-month');
                radioButton.value = `${dateNumber}/${this.date.currentMonth+1}/${this.date.currentYear}`;
                radioButton.id = 'current-month-value_' + dateNumber;
                label.htmlFor = 'current-month-value_' + dateNumber;
                dateNumber++;

                if (value == defaultCheckedValue && this.date.current.getMonth() === this.date.currentMonth) {
                    radioButton.checked = true;
                }
            }
            
            label.innerHTML = `<div>${value}</div>`;

            calendarTable[i].appendChild(radioButton);
            calendarTable[i].appendChild(label);
        }
    }

    update (data) {
        this.date = Object.assign({}, data);
        this.generate();
    }

    getNumberOfDays (type) {
        if (type === this.MONTH_TYPE.THIS_MONTH) {
            return new Date(this.date.currentYear, this.date.currentMonth+1, 0).getDate();
        }
    
        if (type === this.MONTH_TYPE.LAST_MONTH) {
            return new Date(this.date.lastYear || this.date.currentYear, this.date.lastMonth+1, 0).getDate();
        }
    
        if (type === this.MONTH_TYPE.NEXT_MONTH) {
            return new Date(this.date.nextYear || this.date.currentYear, this.date.nextMonth+1, 0).getDate();
        }
    }
}