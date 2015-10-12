/*! 
 *  easyAjaxSpinner | a simple way to menage an ajax spinner 
 *  Version 0.4.1 - Date: 12/10/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-ajax-spinner 
*/ 

function ajaxSpinner(options) {
    
    var defaults = {
        speedIn: 300,
        speedOut: 300,
        delayIn: 0,
        delayOut: 0,
        parentPosition: false,
        zIndex: 1000,
        cssClass: 'default',
        spinJs: {}
    };
    
    this.settings = $.extend(true, defaults, options);
    
    this.loader = new Spinner(this.settings.spinJs).spin();
    
    // START LOADER
    // ========================================
    this.start = function(element,callback) {
        
        if (this.settings.parentPosition !== false) {
            $(element).css({'position': this.settings.parentPosition});
        }
        
        var style = (this.settings.zIndex !== false || this.settings.zIndex !== "") ? ' style="z-index:' + this.settings.zIndex + '"' : '',
            markup = '<div class="ajaxSpinner ' + this.settings.cssClass + '"' + style + '></div>';
            
        $(element).append(markup);
        var plugin = this;
        $(element).promise().done(function() {
            
            setTimeout(function() {
                
                $(element).find('.ajaxSpinner').fadeIn(plugin.settings.speedIn);
                target = document.querySelector(element+" > .ajaxSpinner");
                target.appendChild(plugin.loader.el);
                
            }, plugin.settings.delayIn);
            
        });
    };
    
    // STOP LOADER
    // ========================================
    this.stop = function(element) {
        var plugin = this;
        setTimeout(function() {
                
            $(element).find('.ajaxSpinner').fadeOut(plugin.settings.speedOut, function() {
                $(this).remove();
            });
                
        }, plugin.settings.delayOut);
    };
}