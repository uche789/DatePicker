import { getTranslations } from '../i18n/all';
import CalendarBody from '../calendar-body/index';
import EventObserver from '../event-observer/index';

export default class DatePicker {
    constructor () {
        this.eventObserver = new EventObserver();
        this.date = {};
    }

    initialize (options = {}) {
        this.lang = options.lang;
        this.translations = getTranslations()[this.lang || 'en'];
        this.date.onchange = this.setInputValue.bind(this);

        this.calendarBody = new CalendarBody(this.translations);
        this.eventObserver.subscribe(this.calendarBody);
        this.createCalendar();
        this.setAllFields();
    }

    setInputValue (event) {
        let datePicker = document.querySelector('#date-picker');
        
        if (typeof this.lang == 'string') {
            this.focusedElement.value = (new Date(event.target.value)).toLocaleDateString(this.lang);
        } else {
            this.focusedElement.value = (new Date(event.target.value)).toLocaleDateString();
        }
        
        this.focusedElement = null;
        datePicker.style.display = 'none';
        this.setDefaults();
    }

    setAllFields () {
        let _this = this;
        let inputFields = document.querySelectorAll('input[data-datepicker]');
        let datePicker = document.querySelector('#date-picker');
        this.focusedElement = null;

        inputFields.forEach(input => {
            input.onfocus = function (event) {
                let rects = event.target.getBoundingClientRect();

                _this.focusedElement = event.target;
                datePicker.style.display = 'table';
                datePicker.style.left = rects.left + 'px';
                datePicker.style.top = (event.target.offsetHeight + rects.top) + 'px';
                _this.setDefaults();
            };
        });

        this.hideIfOutsideBox();
    }

    hideIfOutsideBox () {
        document.addEventListener('click', function (event) {
            let datePicker = document.querySelector('#date-picker');
            let focusedElement = document.querySelector('input[data-datepicker]:focus');
            
            if (focusedElement || datePicker.contains(event.target)) {
                return;
            }

            datePicker.style.display = 'none';
            this.setDefaults();
        }.bind(this));
    }

    setDefaults () {
        this.date.current = new Date();
        this.date.currentYear = this.date.current.getFullYear();
        this.date.currentMonth = this.date.current.getMonth();
        this.updateCalendar();
    }

    setPreviousAndNextDates () {
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
        this.setPreviousAndNextDates();
        this.setYearAndMonth();
        this.eventObserver.broadcast(this.date);
    }

    createCalendar () {
        let bodyElement = document.querySelector('body');
    
        bodyElement.innerHTML += `<div id="date-picker" style="display: none;"><table>
            <thead>
                <tr id="month-switcher">
                    <th colspan="7">
                    <span id="month-prev-button">
                    <button><<</button><button><</button></span> <span id="monthName"></span>
                    <span id="selectedYear"></span>
                    <span id="month-next-button"><button>></button><button>>></button></span>
                    </th>
                </tr>
                <tr>
                    <th colspan="7"><span id="calendar-reset-button"><a>${this.translations.today}</a></span></th>
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
        </table></div>`;

        this.setButtons();
        this.calendarBody.createBody();
        this.setDefaults();
    }

    setButtons () {
        let buttonPrevMonth = document.querySelector('#month-prev-button button:nth-child(2)');
        let buttonNextMonth = document.querySelector('#month-next-button button:first-child');
        let buttonPrevYear = document.querySelector('#month-prev-button button:first-child');
        let buttonNextYear = document.querySelector('#month-next-button button:nth-child(2)');
        let resetToTodayButton = document.querySelector('#calendar-reset-button a');

        buttonPrevMonth.onclick = this.prevMonth.bind(this);
        buttonNextMonth.onclick = this.nextMonth.bind(this);
        buttonPrevYear.onclick = this.prevYear.bind(this);
        buttonNextYear.onclick = this.nextYear.bind(this);
        resetToTodayButton.onclick = this.setDefaults.bind(this);
    }

    prevYear () {
        this.date.currentYear--;
        this.updateCalendar();
    }

    nextYear () {
        this.date.currentYear++;
        this.updateCalendar();
    }

    prevMonth () {
        if (this.date.currentMonth === 0) {
            this.date.currentMonth = 11;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear - 1))).getFullYear();
        } else {
            this.date.currentMonth--;
        }

        this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);    
        this.updateCalendar();
    }
    
     nextMonth () {
        if (this.date.currentMonth >= 11) {
            this.date.currentMonth = 0;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear + 1))).getFullYear();
        } else {
            this.date.currentMonth++;
        }
    
        this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);
        this.updateCalendar();
    }

    setYearAndMonth () {
        let months = Object.values(this.translations.months);
        document.getElementById('monthName').innerText = months[this.date.currentMonth];
        document.getElementById('selectedYear').innerText = this.date.currentYear;
    }
}