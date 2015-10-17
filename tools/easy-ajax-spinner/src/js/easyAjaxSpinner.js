
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