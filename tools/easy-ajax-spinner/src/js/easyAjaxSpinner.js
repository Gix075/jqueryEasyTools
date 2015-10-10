/* EASY AJAX SPINNER */
/* ================================== */
/* 
    Author: Gix075 
    License: MIT
    Copyright: 2015 by Gix075
    GitHub: 
    Bugs:
    HomePage: 
*/

function ajaxSpinner(options) {
    
    var defaults = {
        fadeOutTime: '',
        delay: '',
        zIndex: 1000,
        spinJs: {
            lines: 13, 
            length: 28, 
            width: 10, 
            radius: 42, 
            scale: 1, 
            corners: 1, 
            color: '#000'
        }
    }
    
    this.settings = $.extend(true, defaults, options);
    
    this.loader = new Spinner(this.settings.spinJs).spin();
    
    // START LOADER
    this.start = function(element,callback) {
        $(element).css({'position': 'relative'});
        
        var style = (this.settings.zIndex !== false || this.settings.zIndex !== "") ? ' style="z-index:' + this.settings.zIndex + '"' : '',
            markup = '<div class="ajaxSpinner"' + style + '></div>';
            
        $(element).append(markup);
        $(element).find('.ajaxSpinner').fadeIn();
        target = document.querySelector(element+" > .ajaxSpinner");
        target.appendChild(this.loader.el);
    };
    
    // STOP LOADER
    this.stop = function(element) {
        $(element).find('.ajaxSpinner').fadeOut(300, function() {
            $(this).remove();
        });
    };
}