/*!
 *  jqueryEasyTools - v1.0.0
 *  ========================================================== 
 *  Date: 18/10/2015 
 *  Home: https://github.com/Gix075/jqueryEasyTools#readme 
 *  (c) by Gix075 | All righrs reserved! 
*/
/*! 
 *  easyAjaxSpinner | a simple way to menage an ajax spinner 
 *  Version 1.0.0 - Date: 17/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-ajax-spinner 
*/ 

function easyAjaxSpinner(options) {
    
    var defaults = {
        speedIn: 300, // [NUMBER]
        speedOut: 300, // [NUMBER]
        delayIn: 0, // [NUMBER]
        delayOut: 0, // [NUMBER]
        parentPosition: false, // [BOOL(false only) / STRING]
        zIndex: 1000, // [NUMBER]
        cssClass: 'default', // [STRING]
        spinJs: {}, // [OBJECT]
        onAfterInit: false, // [BOOL(false only) / FUNCTION]
        onAfterIn: false, // [BOOL(false only) / FUNCTION]
        onAfterOut: false, // [BOOL(false only) / FUNCTION]
        onAfterDestroy: false // [BOOL(false only) / FUNCTION]
    };
    
    this.settings = $.extend(true, defaults, options);
    
    this.loader = new Spinner(this.settings.spinJs).spin();
    
    // onAfterInit Function
    if ( this.settings.onAfterInit !== false ) this.settings.onAfterInit();
    
    // START LOADER
    // ========================================
    this.start = function(element,onAfterIn) {
        
        var startError = false;
        
        if ( element === undefined || element == "") startError = "EMISSINGEL missing element ";
        if ( jQuery.type( new String(element) ) !== "string" ) startError = "EBADTYPE element must be a string ";
        if ( !element.length ) startError = "ENOEL element not exists ";
        
        if ( startError !== false) {
            console.log('%c ' + startError,'background: #FF0000; color: #FFFFFF;');
            return false;
        }
        
        if (this.settings.parentPosition !== false) {
            $(element).css({'position': this.settings.parentPosition});
        }
        
        var style = (this.settings.zIndex !== false || this.settings.zIndex !== "") ? ' style="z-index:' + this.settings.zIndex + '"' : '',
            markup = '<div class="ajaxSpinner ' + this.settings.cssClass + '"' + style + '></div>';
            
        $(element).append(markup);
        var plugin = this;
        $(element).promise().done(function() {
            
            setTimeout(function() {
                
                $(element).find('.ajaxSpinner').fadeIn(plugin.settings.speedIn,function() {
                    // onAfterIn Function
                    if ( plugin.settings.onAfterIn !== false && onAfterIn === undefined ) plugin.settings.onAfterIn();
                    if ( onAfterIn !== undefined || onAfterIn !== "" ) onAfterIn();
                });
                target = document.querySelector(element+" > .ajaxSpinner");
                target.appendChild(plugin.loader.el);
                
            }, plugin.settings.delayIn);
            
        });
    };
    
    // STOP LOADER
    // ========================================
    this.stop = function(element,onAfterOut,onAfterDestroy) {
        
        var plugin = this;
        
        setTimeout(function() {
            
            var spinnerElement = $(element).find('.ajaxSpinner');
            
            if ( spinnerElement.length > 0 ) {
            
                spinnerElement.fadeOut(plugin.settings.speedOut, function() {

                    // onAfterOut Function
                    if ( plugin.settings.onAfterOut !== false && onAfterOut === undefined ) plugin.settings.onAfterOut();
                    if ( onAfterOut !== false && onAfterOut !== undefined ) onAfterOut();

                });

                spinnerElement.promise().done(function() {

                    $(element).find('.ajaxSpinner').remove();
                    // onAfterDestroy Function
                    if ( plugin.settings.onAfterDestroy !== false && onAfterDestroy === undefined ) plugin.settings.onAfterDestroy();
                    if ( onAfterDestroy !== false && onAfterDestroy !== undefined ) onAfterDestroy();

                });
            
            }else{
                console.log('%c ENOSPINNER no spinner on $("' + element + '") ','background: #FF0000; color: #FFFFFF;');
                console.log('%c Tip: try to use start("' + element + '") before stop spinner ','background: #CCC; color: #333;');
            }
                
            
                
        }, plugin.settings.delayOut);
    };
}
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
/*! 
 *  easyGmap | A simple way to include one or more Google Maps inside your site 
 *  Version 1.0.2 - Date: 17/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-gmap 
*/ 

function easyGMap() {   
                        
    this.getMap = function(opts) {
        this.infoBoxMarkup = '<div class="easygmap_mapinfobox">'+
                        '   <div class="easygmap_mapinfobox-sitenotice">'+
                        ''+
                        '   </div>'+
                        '   <h3 class="easygmap_mapinfobox-heading">'+ opts.infoBoxTitle +'</h3>'+
                        '   <div class="easygmap_mapinfobox-content">'+
                        '       <p>' + opts.infoBoxDescription + '</p>'+
                        '   </div>'+
                        '</div>';
        mapFromCoords(this.infoBoxMarkup,opts);
    };
    
    function mapFromCoords(infoBoxMarkup,opts) {

        var map_canvas = document.getElementById(opts.elementId);
        var placePosition = new google.maps.LatLng(opts.mapLat,opts.mapLong);
        var mapOptions = {
            center: placePosition,
            zoom: opts.mapZoom,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // Map
        var map = new google.maps.Map(map_canvas, mapOptions);
        
        // InfoBox
        var infowindow = new google.maps.InfoWindow({
            content: infoBoxMarkup
        });
        
        // Marker
        var marker = new google.maps.Marker({
            position: placePosition, 
            map: map, 
            icon: opts.markerIcon,
            title: opts.markerTitle
        });
            google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
}




/*! 
 *  easyReadmore | Build your collapsing text with a simple system! 
 *  Version 1.0.1 - Date: 11/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-readmore 
*/ 

function easyReadmore (options) {
    
    var defaults = {
            btnClass: ".readmore",
            hideOpenBtn: true,
            ease: "swing", //jquery ease plugin needed
            speed: 300
        },
        settings = $.extend({}, defaults, options);
        wrapper = settings.btnClass + "-wrapper",
        openBtn = settings.btnClass + ".open",
        closeBtn = settings.btnClass + ".close",
        hiddenBox = settings.btnClass + "-hidden";
        
        
    // open readmore box
    // =========================================================
    $(openBtn).on('click', function (e) {
        e.preventDefault();
        if (settings.hideOpenBtn === true) $(this).hide();
        $(this).closest(wrapper).find(hiddenBox).slideDown({
            duration: settings.speed,
            easing: settings.ease
        });
    });
    
    // close readmore box
    // =========================================================
    $(closeBtn).on('click', function (e) {
        e.preventDefault();
        $(this).closest(hiddenBox).slideUp({
            duration: settings.speed,
            easing: settings.ease,
            done: function() {
                if (settings.hideOpenBtn === true) $(this).closest(wrapper).find(openBtn).fadeIn();
            }
        });
    });
    
}
/*! 
 *  easyYouTube | asynchronous YouTube iframe generator 
 *  Version 1.0.2 - Date: 13/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-youtube 
*/ 

function easyYouTube(options) {
    var defaults = {
        element: "",
        videoId: "",
        responsive: true,
        ratio: "16/9",
        width: "560",
        height: "315",
        noCookie: true,
        fullscreen: true,
        autoplay: false,
        controls: true,
        related: true,
        showinfo: true
    },
    settings = $.extend({}, defaults, options),
    element = settings.element,
    ratio = settings.ratio,
    domain = (settings.noCookie === true) ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/",
    autoplay = (settings.autoplay === true) ? "&autoplay=1" : "&autoplay=0",
    controls = (settings.controls === true) ? "&controls=1" : "&controls=0",
    related = (settings.related === true) ? "&rel=1" : "&rel=0",
    showinfo = (settings.showinfo === true) ? "&showinfo=1" : "&showinfo=0",
    fullscreen = (settings.fullscreen === true) ? " allowfullscreen" : "",
    url = domain + settings.videoId + "?" + autoplay + controls + related + showinfo,
    markup = '<iframe src="'+ url +'" frameborder="0"'+ fullscreen +' style="opacity:0"></iframe>';
    
    if(element === "") {
        console.log('easyYouTube.js --> Error --> No element selected');
        return;
    }
    
    $(element).html(markup);
    
    if (settings.responsive === true) {
        
        var playerS = playerSizes();
        playerResize (playerS.playerW,playerS.playerH);
        $(element).find('iframe').css({'opacity': 1});

    } else {
        playerResize (settings.width,settings.height);
        $(element).find('iframe').css({'opacity': 1});
    }
    
    function playerSizes() {
        var playerRatio = ratio.split('/');
            playerRatio[0] = parseInt(playerRatio[0]);
            playerRatio[1] = parseInt(playerRatio[1]);
        var playerSizesObj = {
                playerW: $(element).innerWidth(),
                playerH: $(element).innerWidth()*playerRatio[1]/playerRatio[0]
            };
        return playerSizesObj;
    }
    
    function playerResize (playerW,playerH) {
        $(element).find('iframe').attr('width',playerW);
        $(element).find('iframe').attr('height',playerH);
    }
    
}

