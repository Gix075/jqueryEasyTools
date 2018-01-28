#easyFormValidator

**WARNING: this tool will be included on the next release**

**easyFormValidator** is a simple class for form validation. It can validate all inputs, textareas and selects.

## Usage
This tool is included on jqueryEasyTools but you can use it also in "stand alone" mode, installing only its javascript and css code.

### Installation
In order to install *easyFormValidator* include js and css files in your webpage.

```html
<link rel="stylesheet" href="css/easyFormValidator.min.css" />
<script src="jquery.min.js"></script>
<script src="js/easyFormValidator.min.js"></script>
```

### Javascript
Using *easyFormValidator* is very simple. Just init it as shown below

```javascript
$(document).on('ready', function() {
    var globOpts = {
        bootstrap: true,
        mail: {
            format: true,
            confirm: true
        },
        password: {
            format: true,
            formatRegEx: /\b([A-Z0-9])([a-z0-9]+)?\b/gm,
            confirm: true
        },
		telephone: {
			numbersOnly: false
		},
        showErrors: true
    }

    var fv = new formValidator(globOpts)
    var validation = fv.validate('#form', '#submit', {
        success: function() {
            alert('validation success!')
        },
        fail: function() {
            alert('validation fail!')
        }
    });

});
```
## How it works

This script controls all input and radio, checkbox, select and textareas that have assigned the class **.validate**.
The first check is about required fields that means that if an input has the validate class it can't be leaved empty.
Input as type="password", type="email" and type="tel" can be validated also about the value. The email field will be validated checking if the contents is formatted as a valid email address (xxxx@xxx.xx) 
