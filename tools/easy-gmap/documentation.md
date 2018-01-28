```html
<div id="mapWrapper"></div>
            
<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="easyGmap.js"></script>
<script>
    var opts = {
        elementId: 'mapWrapper',
        mapLat: 40.758891,
        mapLong: -73.985142,
        mapZoom: 18,
        infoBoxTitle: 'This is Times Square',
        infoBoxDescription: 'Go to Times Square in New York',
        markerTitle: 'Times Square',
        markerIcon: '' // custom image
    }


    $(window).load(function(){
      var map = new easyGMap().getMap(opts);

    });
</script>
```