document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    start();

    document.getElementsByTagName('h4')[0].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[1].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[2].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[3].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[4].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[5].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[6].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[7].addEventListener("click", lol, false);
    document.getElementsByTagName('h4')[8].addEventListener("click", lol, false);

});









function lol() {
    console.log("jkgjskqjgk");
    console.log("this = ", this);

    let parent = this.parentNode;
    console.log("parent:", parent);

    this.parentNode.style.animationName = "iwannabebig";
    console.log("animation started");
    setTimeout(redraw, 7001);
}

function redraw() {
    //openLayers2();
    //openLayers3();
    leaflet();
}

function start() {
    console.log(" salut ! ");
    //openLayers2();
    //openLayers3();
    leaflet();

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
    console.log("leaflet started");
    let southWest = L.latLng(40.712, -74.227),
        northEast = L.latLng(40.774, -74.125),
        bounds = L.latLngBounds(southWest, northEast);
    let mymap = L.map('mapid').setView([37.996, 15.908], 5);
    L.tileLayer("https://api.mapbox.com/styles/v1/accelerator/cizzftwny00gy2spf4jd8t8gg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWNjZWxlcmF0b3IiLCJhIjoiY2l6emRuNjExMDAxbDJxbzB1bWl6ZjFjdCJ9.00Aldip8FUzUISgvMLwanA", {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 0,
        id: 'mapbox.satellite',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);
    getjson();
}

function getjson() {

    var request = new XMLHttpRequest();
    request.open('GET', 'back/villesetmessages.json', true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var data = JSON.parse(this.response);
            console.log("reponse: ", this);
            console.log("data: ", data);
        } else {
            // We reached our target server, but it returned an error
            console.log("error");
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
    };

    request.send();
    createcircle();
}

function createcircle() {

    for (let i = 0; i < array.length; i++) {
        var circle + i = L.circle([43.296346, 5.369889], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: nbmessage * 100
        }).addTo(mymap);
    }

}
