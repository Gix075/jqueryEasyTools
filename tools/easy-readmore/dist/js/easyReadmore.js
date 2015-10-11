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