
    var previousPosition = null;
   
    function initialize() {
      map = new google.maps.Map(document.getElementById("map_canvas"), {
            zoom: 15,
            mapTypeControl:true,

              center: new google.maps.LatLng(48.858565, 2.347198),
             backgroundColor: '#efedbe',
              mapTypeControlOptions: {
               style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
             },
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });   
    }
       
    if (navigator.geolocation)
      var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
    else
      alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
       
    function successCallback(position){
      map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      var red_marker = new google.maps.MarkerImage('img/red-marker.png');

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
        map: map,
        icon:red_marker,

        title: "HETIC"
      });  
      if (previousPosition){
        var newLineCoordinates = [
           new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
           new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];
         
        var newLine = new google.maps.Polyline({
          path: newLineCoordinates,        
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        newLine.setMap(map);
      }
      previousPosition = position;
    };    
    
 