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



