const MONTH_TYPE = {
    LAST_MONTH: 0,
    THIS_MONTH: 1,
    NEXT_MONTH: 2 
};
export default class CalendarBody {
    constructor () {
        this.date = {};
    }

    /**
     * Create calendar shell to be filled up later with actual values
     */
    createBody() {
        const calendarBody = document.querySelector('#sdp-date-picker tbody');
    
        for (let i = 1; i <= 6; i++) {
            const tr = document.createElement('tr');
    
            for (let j = 1; j <= 7; j++) {
                const td = document.createElement('td');
                td.innerText = 'x';
                tr.appendChild(td);
            }
    
            calendarBody.appendChild(tr);
        }
    }

    /**
     * Fill up calendar body with actual values
     */
    generate() {
        const calendarTable = document.querySelectorAll('#sdp-date-picker tbody td');
        const thisMonthNumberOfDays = this.getNumberOfDays(MONTH_TYPE.THIS_MONTH);
        let dateNumber = 1;
        let startDay = new Date(this.date.currentYear, this.date.currentMonth, 1).getDay() - 1;
        let lastMonthNumberOfDays = this.getNumberOfDays(MONTH_TYPE.LAST_MONTH);
        let nextMonthNumberOfDays = 1;

        startDay = startDay > -1 ? startDay : 6;
        lastMonthNumberOfDays -= (startDay - 1);

        for (let i = 0; i < calendarTable.length; i++) {
            let value = 0;
            const radioButton = document.createElement('input');
            const label = document.createElement('label');
            calendarTable[i].innerHTML = '';

            radioButton.type = 'radio';
            radioButton.name = 'sdp-date-value';
            radioButton.onchange = this.date.onchange;

            // Insert days belonging to the previous and next month
            if (dateNumber === 1 || dateNumber === thisMonthNumberOfDays + 1) {
                if (startDay > i) {
                    value = lastMonthNumberOfDays;
                    radioButton.value = `${this.date.lastYear}-${this.date.lastMonth+1}-${lastMonthNumberOfDays}`;
                    label.innerText = lastMonthNumberOfDays;
                    radioButton.id = 'sdp-last-month-value_' + lastMonthNumberOfDays;
                    label.htmlFor = 'sdp-last-month-value_' + lastMonthNumberOfDays;
                    lastMonthNumberOfDays++;
                }

                if (dateNumber > thisMonthNumberOfDays) {
                    value = nextMonthNumberOfDays;
                    radioButton.value = `${this.date.nextYear}-${this.date.nextMonth+1}-${nextMonthNumberOfDays}`;
                    label.innerText = nextMonthNumberOfDays;
                    radioButton.id = 'sdp-next-month-value_' + nextMonthNumberOfDays;
                    label.htmlFor = 'sdp-next-month-value_' + nextMonthNumberOfDays;
                    nextMonthNumberOfDays++;
                }

                calendarTable[i].classList.add('sdp-different-month');
            }

            // Insert days belonging to the current month
            if (startDay  === i || (dateNumber > 1 && dateNumber <= thisMonthNumberOfDays)) {
                value = dateNumber;
                const { selectedDate, currentMonth, currentYear } = this.date;
                calendarTable[i].classList.remove('sdp-different-month');
                radioButton.value = `${currentYear}-${currentMonth+1}-${dateNumber}`;
                radioButton.id = 'sdp-current-month-value_' + dateNumber;
                label.htmlFor = 'sdp-current-month-value_' + dateNumber;

                if (selectedDate.getDate() === dateNumber &&
                    selectedDate.getMonth()+1 === currentMonth+1 &&
                    selectedDate.getFullYear() === currentYear) {
                    radioButton.checked = true;
                }

                dateNumber++;
            }
            
            label.innerHTML = `${value}`;
            const div = document.createElement('div')
            div.append(label);

            calendarTable[i].appendChild(radioButton);
            calendarTable[i].appendChild(div);
        }
    }

    update(data) {
        this.date = Object.assign({}, data);
        this.generate();
    }

    getNumberOfDays(type) {
        if (type === MONTH_TYPE.THIS_MONTH) {
            return new Date(this.date.currentYear, this.date.currentMonth+1, 0).getDate();
        }
    
        if (type === MONTH_TYPE.LAST_MONTH) {
            return new Date(this.date.lastYear || this.date.currentYear, this.date.lastMonth+1, 0).getDate();
        }
    
        if (type === MONTH_TYPE.NEXT_MONTH) {
            return new Date(this.date.nextYear || this.date.currentYear, this.date.nextMonth+1, 0).getDate();
        }
    }
}