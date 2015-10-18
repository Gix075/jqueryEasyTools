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