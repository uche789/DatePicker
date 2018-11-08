import { getTranslations } from '../i18n/all';
import CalendarBody from '../calendar-body/index';
import EventObserver from '../event-observer/index';

export default class DatePicker {
    constructor () {
        this.eventObserver = new EventObserver();
        this.date = {};
    }

    initialize (options = {}) {
        this.translations = getTranslations()[options.lang || 'en'];
        this.date.onchange = options.onchange || function () {};
        this.calendarBody = new CalendarBody(this.translations);
        this.eventObserver.subscribe(this.calendarBody);
        this.createCalendar();
    }

    setDefaults () {
        this.date.current = new Date();
        this.date.currentYear = this.date.current.getFullYear();
        this.date.currentMonth = this.date.current.getMonth();
        this.updateCalendar();
    }

    setDates () {
        if (this.date.currentMonth === 0) {
            this.date.lastMonth = 11;
            this.date.lastYear = (new Date(this.date.current.setYear(this.date.currentYear - 1))).getFullYear();
        } else {
            this.date.lastYear = this.date.currentYear;
            this.date.lastMonth = this.date.currentMonth - 1;
        }
    
        if (this.date.currentMonth >= 11) {
            this.date.nextMonth = 0;
            this.date.nextYear = (new Date(this.date.current.setYear(this.date.currentYear + 1))).getFullYear();
        } else {
            this.date.nextMonth = this.date.currentMonth + 1;
            this.date.nextYear = this.date.currentYear;
        }
    }

    updateCalendar() {
        this.setDates();
        this.setYearAndMonth();
        this.eventObserver.broadcast(this.date);
    }

    createCalendar () {
        let calenderElement = document.querySelector('#date-picker');
    
        calenderElement.innerHTML = `<table>
            <thead>
                <tr id="month-switcher">
                    <th colspan="7"><span id="month-prev-button"></span> <span id="monthName"></span> <span id="selectedYear"></span> <span id="month-next-button"></span></th>
                </tr>
                <tr>
                    <td colspan="7"><span id="calendar-reset-button"></span></td>
                </tr>
                <tr>
                    <th>${this.translations.days.mon}</th>
                    <th>${this.translations.days.tue}</th>
                    <th>${this.translations.days.wed}</th>
                    <th>${this.translations.days.thu}</th>
                    <th>${this.translations.days.fri}</th>
                    <th>${this.translations.days.sat}</th>
                    <th>${this.translations.days.sun}</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>`;

        this.setButtons();
        this.calendarBody.createBody();
        this.setDefaults();
    }

    setButtons () {
        let monthPrev = document.querySelector('#month-prev-button');
        let monthNext = document.querySelector('#month-next-button');
        let resetButtonContainer = document.querySelector('#calendar-reset-button');

        let buttonPrevMonth = document.createElement('button');
        buttonPrevMonth.onclick = this.prevMonth.bind(this);
        buttonPrevMonth.innerText = '<';
        monthPrev.appendChild(buttonPrevMonth);

        let buttonNextMonth = document.createElement('button');
        buttonNextMonth.onclick = this.nextMonth.bind(this);
        buttonNextMonth.innerText = '>';
        monthNext.appendChild(buttonNextMonth);

        let resetButton = document.createElement('button');
        resetButton.onclick = this.setDefaults.bind(this);
        resetButton.innerHTML = this.translations.reset;
        resetButtonContainer.appendChild(resetButton);
    }

    prevMonth () {
        if (this.date.currentMonth === 0) {
            this.date.currentMonth = 11;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear - 1))).getFullYear();
            this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 0);
        } else {
            this.date.currentMonth--;
        }
    
        this.updateCalendar();
    }
    
     nextMonth () {
        if (this.date.currentMonth >= 11) {
            this.date.currentMonth = 0;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear + 1))).getFullYear();
            this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);
        } else {
            this.date.currentMonth++;
        }
    
        this.updateCalendar();
    }

    setYearAndMonth () {
        let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('monthName').innerText = months[this.date.currentMonth];
        document.getElementById('selectedYear').innerText = this.date.currentYear;
    }
}