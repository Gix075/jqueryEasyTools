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