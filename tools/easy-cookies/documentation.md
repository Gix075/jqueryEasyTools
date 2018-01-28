**easyCookies** is a simple way to handle browser cookies.

# USAGE
This tool is included on *jqueryEasyTools* but you can use it also in "stand alone" mode, installing only its javascript.

## Installation

```html
<script src="jquery.min.js"></script>
<script src="js/easyCookies.min.js"></script>
```

## INIT
Initialize easyCookies

``` javascript
    var cookies = new easyCookies();
```
### Methods

#### .writeCookie()
``` javascript   
    // write cookie
    // =================================
    var writeOpts = {
        name: "CookieName",
        value: "CookieValue",
        expires: 30,
        callback: function(result) {
            [...]
        }
    }
    cookies.writeCookie(writeOpts);
```
##### Session Cookie
If you want write a session cookie, simply set the *"expires"* parameter to *0* ( **expires: 0** )

#### .readCookie()
``` javascript    
    // read cookie
    // =================================
    cookies.readCookie("cookieName");
``` 
#### .deleteCookie()
``` javascript     
    // delete cookie
    // =================================
    cookies.deleteCookie("cookieName");
```

#### .matchCookieValue()
This method can match the cookie value with another value passed to the function as "value".<br>
This method return a callback function with bool result (true/false) passed as argument.

``` javascript 
    // match cookie value
    // =================================
    var matchOpts = {
        name: "CookieName",
        value: "Cookie Value", 
        callback: function(result) {
            [...]
        }
    }
    cookies.matchCookieValue(matchOpts);  
```

