/*!
 *  jqueryEasyTools - v1.2.0
 *  ========================================================== 
 *  Date: 16/01/2016 
 *  Home: https://github.com/Gix075/jqueryEasyTools#readme 
 *  (c) by Gix075 | All righrs reserved! 
*/
/*! 
 *  easyAjaxSpinner | a simple way to menage an ajax spinner 
 *  Version 1.0.1 - Date: 18/10/2015 
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
                    if ( onAfterIn !== undefined && onAfterIn !== "" ) onAfterIn();
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
 *  easySmoothScroll | Smooth scroll navigation 
 *  Version 1.0.0 - Date: 18/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-smooth-scroll 
*/ 

function easySmoothScroll(options) {
    
    'use strict';
    
    var defaults = {
        element: '.scroll',
        speed: 500,
        offset: 0,
        backTopElement: '.back-top'
    },
        settings = $.extend(true, defaults, options),
        element = settings.element;
    
    $('a' + element).on('click', function (e) {
        
        e.preventDefault();
        
        var offset = (!$(this).data('offset')) ? settings.offset : $(this).data('offset'),
            speed = (!$(this).data('speed')) ? settings.speed : $(this).data('speed'),
            target = $(this).attr('href');
        
        if ($(target).length) {
            $('html,body').animate({
                scrollTop: $(target).offset().top + offset
            }, speed);
            return true;
        } else {
            console.log(' ENOTARGET! Missing target element ');
            return false;
        }

    }); // end click
    
    $('a' + settings.backTopElement).on('click', function (e) {
        
        e.preventDefault();
        
        var offset = (!$(this).data('offset')) ? settings.offset : $(this).data('offset'),
            speed = (!$(this).data('speed')) ? settings.speed : $(this).data('speed');
        
        $('html,body').animate({
            scrollTop: 0 + offset
        }, speed);
        return true;

    }); // end click
    
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


/*! 
 *  easyReCaptchaValidator | A simple way to include and validate Google ReCaptcha 
 *  Version 1.0.1 - Date: 13/11/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-recaptcha-validator 
*/ 


/*! 
    Include this on head:
    <script src="https://www.google.com/recaptcha/api.js?onload=reCaptchaValidator&render=explicit" async defer></script> 
*/


function easyReCaptchaValidator(params) {
    this.params = params,
    this.getCaptcha = function (elementID,theme) {
        var useTheme = (!theme || theme == "")? this.params.theme : theme;
        grecaptcha.render(elementID, {
            'sitekey' : this.params.publicKey, 
            'theme' : useTheme
        });  
    },
    this.validateCaptcha = function(elementID) {
        var reCaptchaVal = {
            response: $('#'+elementID).find('.g-recaptcha-response').val()
        }
        if(reCaptchaVal.response != "") {
            var plugin = this;
            $.ajax({
                url: this.params.phpValidator,
                type: 'POST',
                data: reCaptchaVal,
                dataType: 'json',
                success: function(data) {
                    if(data.success === true) {
                        if (plugin.params.debug === true) console.log('reCaptchaValidator: Validation Success!'); // DEBUG Node
                        plugin.params.callbacks.success();
                    }else{
                        if (plugin.params.debug === true) console.log('reCaptchaValidator: Validation Fail!'); // DEBUG Node
                        plugin.params.callbacks.error();
                    }
                },
                error: function() {
                    if (plugin.params.debug === true) console.log('reCaptchaValidator: AjaxError!'); // DEBUG Node
                    plugin.params.callbacks.error();
                }
            });//end ajax
        }else{
            if (this.params.debug === true) console.log('reCaptchaValidator: No reCaptcha Data!'); // DEBUG Node
            this.params.callbacks.error();
        }
    }
}
/*! 
 *  easyHeightEqualizer | Height Equilizer for DOM elements 
 *  Version 1.1.0 - Date: 20/12/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-height-equalizer 
*/ 
function easyHeightEqualizer(element,assign) {
    
    element = (element === undefined || element === "") ? ".HEqualizer" : element;
    assign = (element === false || element === true) ? element : assign;
    assign = (assign === undefined || assign === "") ? true : assign;
    
    var maxHeight = 0,
        elementHeight = 0;
        
    $(element).each(function(){
        elementHeight = $(this).height();
        if (elementHeight > maxHeight) { maxHeight = elementHeight }
    });
    
    if (assign === true) {
        $(element).height(maxHeight);
    }else{
        return maxHeight;
    }
}
/*! 
 *  easyFormValidator | A simple form validator 
 *  Version 2.1.0 - Date: 16/01/2016 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-form-validator 
*/ 
function easyFormValidator(a){var b="",c="";this.opts=a,this.formValidation=!0,this.validInput=!1,this.validTextarea=!1,this.validPassword=!1,this.validEmail=!1,this.validSelect=!1,this.validRadio=!1,this.validCheckbox=!1,this.validPhone=!1,b=this.opts,c=this,this.validate=function(a,d,e){$(d).on("click",function(d){d.preventDefault();var f=$("form"+a),g=f.find("input.validate").not('input[type="radio"]').not('input[type="checkbox"]'),h=f.find('input[type="password"].validate'),i=f.find('input[type="tel"].validate'),j=f.find("textarea.validate"),k=f.find("select.validate"),l=f.find('input[type="email"].validate'),m=f.find(".radio-group.validate"),n=f.find(".checkbox-group.validate"),o=0;$(g).each(function(){""==$(this).val()?(b.showErrors===!0&&c.showError(this,"input","empty"),o+=1):b.showErrors===!0&&c.hideError(this,"input")}),c.validInput=o>0?!1:!0,o=0,b.telephone.numbersOnly===!0&&$(i).each(function(){var a=$(this).val();if(""!=a){var d=/^\d+$/;d.test(a)===!1?(b.showErrors===!0&&c.showError(this,"input","wrong"),o+=1):b.showErrors===!0&&c.hideError(this,"input")}}),c.validPhone=o>0?!1:!0,o=0,$(j).each(function(){""==$(this).val()?(b.showErrors===!0&&c.showError(this,"textarea","empty"),o+=1):b.showErrors===!0&&c.hideError(this,"textarea")}),c.validTextarea=o>0?!1:!0,o=0,$(k).each(function(){$("option:selected",this).not(".not-option").length?b.showErrors===!0&&c.hideError(this,"select"):(b.showErrors===!0&&c.showError(this,"select","empty"),o+=1)}),c.validSelect=o>0?!1:!0,o=0,$(l).not(".email-confirm").each(function(){if(""!=$(this).val()&&b.mail.format===!0){var a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;a.test($(this).val())===!1?(b.showErrors===!0&&c.showError(this,"email","wrong"),o+=1):b.showErrors===!0&&c.hideError(this,"email")}if(""!=$(this).val()&&b.mail.confirm===!0&&0==o){console.log($(this).attr("id"));var d=$('.email-confirm[data-confirm="#'+$(this).attr("id")+'"]');$(this).val()!=$(d).val()?(b.showErrors===!0&&c.showError(d,"email","wrong"),o+=1):b.showErrors===!0&&c.hideError(d,"email")}}),c.validEmail=o>0?!1:!0,o=0,b.password.format===!0&&$(h).not(".pswd-confirm").each(function(){if(""!=$(this).val()){var a=$(this).val(),d=b.password.formatRegEx;a.match(d)?b.showErrors===!0&&c.hideError(this,"password"):(b.showErrors===!0&&c.showError(this,"password","wrong"),o+=1)}}),b.password.confirm===!0&&$(".pswd-confirm").each(function(){if(""!=$(this).val()){var a=$(this).data("confirm");$(this).val()!=$(a).val()?(b.showErrors===!0&&c.showError(this,"password","wrong"),o+=1):b.showErrors===!0&&c.hideError(this,"password")}}),c.validPassword=o>0?!1:!0,o=0,$(m).each(function(){var a=!1;$(this).find('input[type="radio"]').each(function(){$(this).is(":checked")&&(a=!0)}),a===!1?(b.showErrors===!0&&c.showError(this,"radio","empty"),o+=1):b.showErrors===!0&&c.hideError(this,"radio")}),c.validRadio=o>0?!1:!0,o=0,$(n).each(function(){var a=!1;$(this).find('input[type="checkbox"]').each(function(){$(this).is(":checked")&&(a=!0)}),a===!1?(b.showErrors===!0&&c.showError(this,"checkbox","empty"),o+=1):b.showErrors===!0&&c.hideError(this,"checkbox")}),c.validCheckbox=o>0?!1:!0,o=0,c.validInput===!0&&c.validPassword===!0&&c.validPhone===!0&&c.validTextarea===!0&&c.validEmail===!0&&c.validSelect===!0&&c.validRadio===!0&&c.validCheckbox===!0?e.success():e.fail()})},this.showError=function(a,c,d){if("radio"==c||"checkbox"==c)b.bootstrap===!0?$(a).closest("."+c+"-group").addClass("has-error"):$(a).addClass("error"),$(a).closest("."+c+"-group").find(".form-input-error-msg").addClass("show-error");else switch(b.bootstrap===!0?$(a).closest(".form-group").addClass("has-error"):$(a).addClass("error"),$(a).prev(".form-input-error-msg").addClass("show-error"),d){case"empty":$(a).prev(".form-input-error-msg").find(".error-wrong").removeClass("show-error"),$(a).prev(".form-input-error-msg").find(".error-empty").addClass("show-error");break;case"wrong":$(a).prev(".form-input-error-msg").find(".error-empty").removeClass("show-error"),$(a).prev(".form-input-error-msg").find(".error-wrong").addClass("show-error")}},this.hideError=function(a,c){"radio"==c||"checkbox"==c?(b.bootstrap===!0?$(a).closest("."+c+"-group").removeClass("has-error"):$(a).removeClass("error"),$(a).closest("."+c+"-group").find(".form-input-error-msg").removeClass("show-error")):(b.bootstrap===!0?$(a).closest(".form-group").removeClass("has-error"):$(a).removeClass("error"),$(a).prev(".form-input-error-msg").removeClass("show-error"),$(a).prev(".form-input-error-msg").find(".error-empty,.error-wrong").removeClass("show-error"))},this.clearError=function(a){$(a).find("*").removeClass("error"),$(a).find("*").removeClass("has-error"),$(a).find("*").removeClass("show-error")}}