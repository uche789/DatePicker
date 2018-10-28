import { getTranslations } from '../i18n/all';
import CalendarBody from '../calendar-body/index';
import EventObserver from '../event-observer/index';

export default class DatePicker {
    constructor () {
        this.eventObserver = new EventObserver();
    }

    initialize (options) {
        this.translations = getTranslations()[options.lang];
        this.calendarBody = new CalendarBody(this.translations);
        this.eventObserver.subscribe(this.calendarBody);
        this.createCalendar();
    }

    setDefaults () {
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth();

        this.updateCalendar();
    }

    updateCalendar() {
        this.setYearAndMonth();
        this.eventObserver.broadcast(this);
        this.calendarBody.generate();
    }

    createCalendar () {
        let calenderElement = document.querySelector('#calendar');
    
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
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear = (new Date(this.currentDate.setYear(this.currentYear - 1))).getFullYear();
            this.currentDate = new Date(this.currentYear, this.currentMonth, 0);
        } else {
            this.currentMonth--;
        }
    
        this.updateCalendar();
    }
    
     nextMonth () {
        if (this.currentMonth >= 11) {
            this.currentMonth = 0;
            this.currentYear = (new Date(this.currentDate.setYear(this.currentYear + 1))).getFullYear();
            this.currentDate = new Date(this.currentYear, this.currentMonth, 1);
        } else {
            this.currentMonth++;
        }
    
        this.setYearAndMonth();
        this.calendarBody.generate();
        this.eventObserver.broadcast(this);
    }

    setYearAndMonth () {
        let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('monthName').innerText = months[this.currentMonth];
        document.getElementById('selectedYear').innerText = this.currentYear;
    }
}