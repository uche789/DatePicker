import { getTranslations } from './i18n/all';
import CalendarBody from './calendarBody';
import EventHandler from './events';

export default class DatePicker {
    constructor () {
        this.eventHandler = new EventHandler();
        this.date = {};
    }

    initialize ({defaultValue = null, lang = ''}) {
        if (defaultValue && !(defaultValue instanceof Date)) {
            throw new Error('Invalid argument: Date');
        }

        if (typeof lang !== 'string'){
            throw new Error('Invalid argument: String');
        }

        this.date.selectedDate = defaultValue || new Date()
        this.lang = lang;
        this.translations = getTranslations()[this.lang || 'en'];
        this.date.onchange = this.setInputValue.bind(this);

        this.calendarBody = new CalendarBody();
        this.eventHandler.subscribe(this.calendarBody);
        this.createCalendar();
        this.setPickerFields();
    }

    setDefaultInputValue(date, input) {
        if (this.lang) {
            input.value = (date).toLocaleDateString(this.lang);
        } else {
            input.value = (date).toLocaleDateString();
        }
    }

    setInputValue(event) {
        this.setDefaultInputValue(new Date(event.target.value), this.focusedElement);
        this.focusedElement = null;

        const datePicker = document.querySelector('#sdp-date-picker');        
        datePicker.style.display = 'none';
    }

    setPickerFields () {
        const inputFields = document.querySelectorAll('input[data-datepicker]');
        const datePicker = document.querySelector('#sdp-date-picker');
        this.focusedElement = null;

        inputFields.forEach(input => {
            input.setAttribute('readonly', true);
            this.setDefaultInputValue(this.date.selectedDate, input);
            input.onfocus = (event) => {
                const rects = event.target.getBoundingClientRect();
                this.focusedElement = event.target;
                datePicker.style.display = 'table';
                datePicker.style.left = rects.left + 'px';
                datePicker.style.top = (event.target.offsetHeight + rects.top) + 'px';
                this.setDefaults(event.target.value);
            };
        });

        this.hideIfOutsideBox();
    }

    hideIfOutsideBox () {
        document.addEventListener('click', (event) => {
            const datePicker = document.querySelector('#sdp-date-picker');
            const focusedElement = document.querySelector('input[data-datepicker]:focus');
            
            if (focusedElement || datePicker.contains(event.target)) {
                return;
            }

            datePicker.style.display = 'none';
        });
    }

    setDefaults(value) {
        // Only set the selected value if the value exists.
        // This selectedDate will be assigned the value of the currently focused input
        if (value) {
            this.date.selectedDate = new Date(value); 
        }
        this.date.current = value ? new Date(value) : new Date();
        this.date.currentYear = this.date.current.getFullYear();
        this.date.currentMonth = this.date.current.getMonth();
        this.updateCalendar();
    }

    setPreviousAndNextDates () {
        if (this.date.currentMonth === 0) {
            this.date.lastMonth = 11;
        } else {
            this.date.lastMonth = this.date.currentMonth - 1;
        }
    
        if (this.date.currentMonth >= 11) {
            this.date.nextMonth = 0;
        } else {
            this.date.nextMonth = this.date.currentMonth + 1;
        }

        this.date.lastYear = (new Date(this.date.current.setYear(this.date.currentYear - 1))).getFullYear();
        this.date.nextYear = (new Date(this.date.current.setYear(this.date.currentYear + 1))).getFullYear();
    }

    updateCalendar() {
        this.setPreviousAndNextDates();
        this.setMonthYearText();
        this.eventHandler.broadcast(this.date);
    }

    createCalendar() {
        const bodyElement = document.querySelector('body');
        const headings = Object.values(this.translations.days).map((day) => {
            return `<th>${day}</th>`;
        })
    
        bodyElement.innerHTML += `
        <div id="sdp-date-picker" style="display: none;">
            <table>
                <thead>
                    <tr id="spd-month-switcher">
                        <th colspan="7">
                            <span id="sdp-month-prev-button">
                                <button><<</button><button><</button>
                            </span>
                            <span id="spd-monthYear"></span>
                            <span id="sdp-month-next-button">
                                <button>></button><button>>></button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="7"><button id="spd-reset-button">${this.translations.today}</button></th>
                    </tr>
                    <tr>${headings.join('')}</tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>`;

        this.setButtons();
        this.calendarBody.createBody();
        this.setDefaults();
    }

    setButtons () {
        const buttonPrevYear = document.querySelector('#sdp-month-prev-button button:first-child');
        const buttonPrevMonth = document.querySelector('#sdp-month-prev-button button:nth-child(2)');
        const buttonNextMonth = document.querySelector('#sdp-month-next-button button:nth-child(2)');
        const buttonNextYear = document.querySelector('#sdp-month-next-button button:first-child');
        const resetToTodayButton = document.querySelector('#spd-reset-button');

        buttonPrevMonth.onclick = this.goToPrevMonth.bind(this);
        buttonPrevYear.onclick = this.goToPrevYear.bind(this);
        buttonNextMonth.onclick = this.goToNextYear.bind(this);
        buttonNextYear.onclick = this.goToNextMonth.bind(this);
        resetToTodayButton.onclick = () => this.setDefaults();
    }

    goToPrevYear() {
        this.date.currentYear--;
        this.updateCalendar();
    }

    goToNextYear() {
        this.date.currentYear++;
        this.updateCalendar();
    }

    goToPrevMonth() {
        if (this.date.currentMonth === 0) {
            this.date.currentMonth = 11;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear - 1))).getFullYear();
        } else {
            this.date.currentMonth--;
        }

        this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);    
        this.updateCalendar();
    }
    
     goToNextMonth () {
        if (this.date.currentMonth >= 11) {
            this.date.currentMonth = 0;
            this.date.currentYear = (new Date(this.date.current.setYear(this.date.currentYear + 1))).getFullYear();
        } else {
            this.date.currentMonth++;
        }
    
        this.date.current = new Date(this.date.currentYear, this.date.currentMonth, 1);
        this.updateCalendar();
    }

    setMonthYearText() {
        const months = Object.values(this.translations.months);
        document.getElementById('spd-monthYear').innerText = `${months[this.date.currentMonth]} ${this.date.currentYear}`;
    }
}