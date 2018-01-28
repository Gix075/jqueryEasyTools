**easyReCaptchaValidator** is a validator for *Google ReCaptcha* security system. It works with javascript and php and it's very simple to use.
See below and usage example and read documentation to learn how integrate this tool on your site.

#USAGE

In order to install and use this tool, register your domain at [https://www.google.com/recaptcha/](https://www.google.com/recaptcha/) and generate *public and private keys*.<br>
**THIS STEP IS REQUIRED! WITHOUT KEYS YOU CAN'T LOAD AND VALIDATE RECAPTCHA!**


**easyReCaptchaValidator** is composed by 2 files and one demo page.

* js/easyReCaptchaValidator.js
* php/easyReCaptchaValidator.php
* demo.html

*demo.html* is a demo webpage that you can use as a test page to learn tool usage.<br>
**Note that the demo page will not work without a correct configuration.**


## 1) Installation
Edit your page and include the following javascript files. Remember that Google ReCaptcha API and jQuery are required!

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/easyReCaptchaValidator.js"></script>
```

## 2) Configuration

Configuration is a very important step. Without a right configuration easyReCaptchaValidator will not work.

### PHP Configuration
Open file **php/easyReCaptchaValidator.php** and edit the var **$secretKey** value with your own secret key 
```php
// Place here your ReCaptcha Secret Key
$secretKey = ""; 
```

### Javascript Configuration
Edit your page placing a javascript object with your own configuration:

```javascript
var reCaptchaParamas = {
    publicKey: "", // place here your public key
    theme: "dark",
    debug: true, 
    phpValidator: 'php/easyReCaptchaValidator.php', 
    callbacks: {
        success: function() {
            ...
        },
        error: function() {
            ...
        }
    }
}
```
#### Callbacks
Callbacks function are launched after each ReCaptcha validation. There are two different callbacks called **"success"** and **"error"**.<br>
As expected, *success* function will executed only if validation process was succesfully passed; *error* function will executed only after a failed validation.

## 3) Markup

Place a DIV as ReCaptcha container.

```html
<div id="recaptchaBox"></div>
```

## 4) Using Methods
In order to use class methods, you need to initialize tool using configuration object as argument:
```javascript
var reCap = new reCaptchaValidator(reCaptchaParamas);
```
Then it's possible to use methods **.getCaptcha()** and **.validateCaptcha()** to load and validate ReCaptcha.
Both of methods require the ReCaptcha wrapper id as argument

```javascript
$(window).on('load', function() {
    var reCap = new reCaptchaValidator(reCaptchaParamas);
    reCap.getCaptcha('recaptchaBox');
    $('#startRecaptcha').on('click', function(e) {
        e.preventDefault();
        reCap.validateCaptcha('recaptchaBox');
    });
});
```