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
    //  openLayers2();
    //  openLayers3();
    leaflet();
}

function start() {

    console.log(" salut ! ");
    openLayers2();
    openLayers3();
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
var mymap;

let leaflet = function() {
    mymap = L.map('mapid').setView([37.996, 15.908], 5);
    console.log("leaflet started");
    //  define long/lat of the boundary
    let southWest = L.latLng(40.712, -74.227),
        northEast = L.latLng(40.774, -74.125),
        bounds = L.latLngBounds(southWest, northEast);
    //select the map template the max zoom and the min zoom, and finally create it
    L.tileLayer("https://api.mapbox.com/styles/v1/accelerator/cizzftwny00gy2spf4jd8t8gg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWNjZWxlcmF0b3IiLCJhIjoiY2l6emRuNjExMDAxbDJxbzB1bWl6ZjFjdCJ9.00Aldip8FUzUISgvMLwanA", {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 0,
        id: 'mapbox.satellite',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);

    getjson(createCircle);
}





let createCircle = function(data) {
    console.log("heeey", data, mymap);
    if (data) {
        console.log(data);
        for (let i = 0; i < data.histoire.length; i++) {
            console.log(data.histoire[i]);
        }
        console.log("inside circle");
    } else {
        console.log("rien de défini");
        return false;
    }

    console.log("my map: ", mymap);
    console.log("après get json");
    console.log("data dans create", data);
    let circles = [];
    let lat, long, nbmessage;
    console.log("create circle started");
    for (let i = 0; i < data.histoire.length; i++) {
        //define the lat long and nbmessage from the json (data)
        lat = data.histoire[i].coordonees[0], long = data.histoire[i].coordonees[1], nbmessage = data.histoire[i].nombredemessage;
        console.log(i);
        circles.push({
            i: L.circle([lat, long], {
                //random color generation by using math random
                color: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', 1.0)',
                fillColor: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', 1.0)',
                fillOpacity: 0.5,
                radius: nbmessage * 50
            }).addTo(mymap)
        })
        console.log("latitude: ", lat, "longitude: ", long, "nbmessage: ", nbmessage);
    }
    console.log("circles: ", circles);



}

function getjson(callback) {
    var request = new XMLHttpRequest();
    console.log("hey");
    request.ontimeout = function() {
        console.error("The request for timed out.");
    };
    request.addEventListener("progress", updateProgress, false);
    request.addEventListener("load", transferComplete, false);
    request.addEventListener("error", transferFailed, false);
    request.addEventListener("abort", transferCanceled, false);

    console.log("request", request);

    // progression des transferts depuis le serveur jusqu'au client (téléchargement)
    function updateProgress(oEvent) {
        if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total;
            console.log("oEvent: ", oEvent, "; oEvent.total", oEvent.total, "oEvent.loaded: ", oEvent.loaded);

        } else {
            console.log("can't read the length");
        }
    }

    function transferComplete(evt) {
        console.log("Le transfert est terminé.");
    }

    function transferFailed(evt) {
        console.error("Une erreur est survenue pendant le transfert du fichier.");
    }

    function transferCanceled(evt) {
        console.log("Le transfert a été annulé par l'utilisateur.");
    }

    request.onload = function() {
        if (request.readyState === 4) {
            console.log("4 passé");
            if (request.status === 200) {
                console.log("200 passé");
                console.log("this: ", this);
                console.log("response: ", this.response);
                let data = JSON.parse(this.response);
                console.log("data", data);
                console.log("map dans onload: ", mymap);
                console.log("nbmessage: ", data.histoire[0].nombredemessage);
                console.log("createCircle before: ", createCircle);
                console.log("callback: ", callback);
                return callback(data);
            } else {
                console.error(request.statusText);
            }
        }
    };
    request.open('GET', 'http://openstreetmap.local/json/villesetmessages.json', true);
    request.send();
}
