function initMap() {
  var uluru = {lat: 37.593355, lng: -122.5118067};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
