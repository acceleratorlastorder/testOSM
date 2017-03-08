document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    start();
});

function start() {
    console.log(" salut ! ");
    openLayers2(),openLayers3(),leaflet();
}

function openLayers2() {
    map = new OpenLayers.Map("demoMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();
}

function openLayers3() {
    let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 4
        })
    });
}

function leaflet() {
  let southWest = L.latLng(40.712, -74.227),
    northEast = L.latLng(40.774, -74.125),
    bounds = L.latLngBounds(southWest, northEast);
    let mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer("https://api.mapbox.com/styles/v1/accelerator/cizzftwny00gy2spf4jd8t8gg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWNjZWxlcmF0b3IiLCJhIjoiY2l6emRuNjExMDAxbDJxbzB1bWl6ZjFjdCJ9.00Aldip8FUzUISgvMLwanA", {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        minZoom: 4,
        id: 'mapbox.satellite',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);


    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
    }).addTo(mymap);
}
