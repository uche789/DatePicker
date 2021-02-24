### DATE PICKER

* Webpack
* Babel + ECMAScript 6

## Objective of this project
Experiment with webpack, observer pattern and modules.

## Setup
Include the bundle

```
    <script src="dist/bundle.js"></script>
```

Initialize calendar

```
    var datePicker = new Calendar.DatePicker();
    datePicker.initialize({});
```

**Options**
* Lang: include any locale or the equivalent short code. These two-letter ISO will change the format of the date output and the display language: ja, en, de, fr
