**easyAjaxSpinner** is a light version of jqueryIntroLoader plugin.<br>
This tool can help you to build a simple spinner (based on Spin.js) that you can start and stop as you need.
# USAGE
This tool is included on *jqueryEasyTools* but you can use it also in "stand alone" mode, installing only its javascript and css code.

### Dependencies
**easyAjaxSpinner** needs [**Spin.js**](http://spin.js.org/) to work.<br>
We provide a minified production tool version that include Spin.js: **_easyAjaxSpinner.pack.min.js_**

## Installation

```html
<link rel="stylesheet" href="css/easyAjaxSpinner.min.css" />
<script src="jquery.min.js"></script>
<script src="js/easyAjaxSpinner.pack.min.js"></script>
```

## Markup
Place a DOM element in your page that will be the main container for the spinner. Best pratic is assign an univocal ID to the element:
```html
<div id="ajaxSpinner"></div>
```

## Javascript
At last initialize *easyAjaxSpinner* in this way:
```javascript
var spinner = new easyAjaxSpinner(params);
```
##### Options
To pass some custom parameters you simply need and object like the following one.<br>

```javascript
// spinner options object with default values
params: {
    speedIn: 300, // fadeIn speed [NUMBER]
    speedOut: 300, // fadeOut speed [NUMBER]
    delayIn: 0, // delay time before fadeIn [NUMBER]
    delayOut: 0, // delay time before fadeOut [NUMBER]
    zIndex: 1000, // spinner element css z-index [NUMBER]
    cssClass: "default", // css class [STRING]
    spinJs: {
        // all allowed Spin.js options [OBJECT]
    },
    onAfterInit: function() {...}, // [FUNCTION] (require > v0.8.1)
    onAfterIn: function() {...}, // [FUNCTION] (require > v0.8.1)
    onAfterOut: function() {...}, // [FUNCTION] (require > v0.8.1)
    onAfterDestroy: function() {...} // [FUNCTION] (require > v0.8.1)
}
```
**onAfterIn**, **onAfterOut** and **onAfterDestroy** functions can be overwitten on .start() and .stop() methods.

### Methods
Once *easyAjaxSpinner* is initialized, you can use class methods to start and stop the spinner.<br>

##### Start
```javascript
spinner.start('#element',onAfterIn); 
// '#element' is the DOM element that you want start as spinner 
```
##### Stop
```javascript
spinner.stop('#element',onAfterOut,onAfterDestroy); 
// '#element' is the DOM element that you want stop 
```