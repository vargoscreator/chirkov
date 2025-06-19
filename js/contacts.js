async function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.473605591537684, lng: 30.466746056306434 },
        zoom: 17
      });
      new google.maps.Marker({
        position: { lat: 50.473605591537684, lng: 30.466746056306434 },
        map: map,
        icon: {
          url: "../img/point.png",
          scaledSize: new google.maps.Size(50, 50)
        }
      });
  }
window.initMap = initMap;