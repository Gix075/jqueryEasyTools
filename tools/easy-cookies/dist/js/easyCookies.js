/*! 
 *  easyCookies | A simple way to handle cookies 
 *  Version 1.0.1 - Date: 11/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-cookies 
*/ 
function easyCookies() {
    
    this.writeCookie = function(opt) {
        var d = new Date();
        d.setTime(d.getTime() + (opt.expires*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = opt.name + "=" + opt.value + "; " + expires;
        if (opt.callback !== undefined && opt.callback !== "") {
            
            var newCookie = this.readCookie(opt.name);
            if (newCookie !== undefined && newCookie !== "") {
                opt.callback(true);
            }else{
                opt.callback(false);
            } 
        }
    };
    
    this.deleteCookie = function(name,callback) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        if (callback !== undefined && callback !== "") callback();  
    };
    
    this.readCookie = function(name) {
        name = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    };
    
    this.listCookie = function(array) {
        var cookielist = document.cookie;
        if (array === true) cookielist = document.cookie.split(';');
        return cookielist;
    };
    
    this.matchCookieValue = function(opt) {
        var cookieVal = this.readCookie(opt.name);
        if (cookieVal === opt.value) {
            if(opt.callback !== undefined || opt.callback !== "") {
                opt.callback(true);
            }else{
                return true;
            }
        }else{
            if(opt.callback !== undefined || opt.callback !== "") {
                opt.callback(false);
            }else{
                return false;
            }
        }
    }
}