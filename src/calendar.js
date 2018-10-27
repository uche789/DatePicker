import {getTranslations} from './i18n/all';

export default class Calendar {
    constructor () {
    }

    initialize (options) {
        this.translations = getTranslations()[options.lang];
        this.test = options;
        this.createCalendar();
    }

    createCalendar () {
        let calenderElement = document.querySelector('#calendar');
        let tbodyElements;

        for (var i = 1; i <= 6; i++) {
            var tr = document.createElement('tr');

            for (var j = 1; j <= 7; j++) {
                var td = document.createElement('td');
                td.innerText = 'x';
                tr.appendChild(td);
            }

            tbodyElements += tr.outerHTML;
        }

        calenderElement.innerHTML = `<table id="calendar">
        <thead>
            <tr>
                <th colspan="7"><button id="month-prev" onclick="prevMonth()"><</button> <span id="monthName"></span> <span id="selectedYear"></span> <button onclick="nextMonth()" id="month-next">></button></th>
            </tr>
            <tr>
                <td colspan="7"><a href="#" onclick="defaults()">${this.translations.reset}</a></td>
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
        <tbody>${tbodyElements}</tbody>
    </table>`;
    }
}