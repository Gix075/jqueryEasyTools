#easyCookies
A simple way to handle cookies

## USAGE

``` javascript
    var cookie = new easyCookies();
    
    // write cookie
    // =================================
    var opt = {
        name: "CookieName",
        value: "",
        expire: 30,
        callback: function(result) {
            [...]
        }
    }
    cookie.writeCookie(opt);
    
    // read cookie
    // =================================
    cookie.readCookie("cookieName");
    
    // delete cookie
    // =================================
    cookie.deleteCookie("cookieName");
    
    // match cookie value
    // =================================
    var opt = {
        name: "CookieName",
        value: "Cookie Value",
        callback: function(result) {
            [...]
        }
    }
    cookies.matchCookieValue(opt);  
```

