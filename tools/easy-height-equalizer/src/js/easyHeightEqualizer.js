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