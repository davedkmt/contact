function initMap() {
  //code for initializing the google map
    "use strict";
    var uluru = {lat:  31.96860, lng: -99.90181},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru,
            zoomControl: true,
            scaleControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true

        }),
        marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
}
