document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded launching functions");
    start();
let createCircle;
    for (var i = 0; i < 8; i++) {
        document.getElementsByTagName('h4')[i].addEventListener("click", lol, false);
    }
});

function linkcircles(circles) {
console.log("hey");

cercle.on('click', onMapClick);
}


createCircle = function(data, circles) {
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

    let lat, long, nbmessage, country, city;
    console.log("create circle started");
    for (let i = 0; i < data.histoire.length; i++) {
        //define the lat long and nbmessage from the json (data)
        lat = data.histoire[i].coordonees[0], long = data.histoire[i].coordonees[1], nbmessage = data.histoire[i].nombredemessage, country = data.histoire[i].pays, city = data.histoire[i].ville;
        console.log(i);
        circles.push({
            //give to the circle the coordinates
            circle: L.circle([lat, long], {
                //random color generation by using math random
                color: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', 1.0)',
                fillColor: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', ' +
                    (Math.random() * 255).toFixed(0) + ', 1.0)',
                //set the opacity of the circle
                fillOpacity: 0.8,
                //set the radius
                radius: nbmessage * 50
            }).addTo(mymap)
        })
        console.log("circles: ", circles);
        console.log("latitude: ", lat, "longitude: ", long, "nbmessage: ", nbmessage);
    }
    let lul = circles[0];
    console.log("circles: ", circles);
    console.log("circles: ", circles[0]);

    return linkcircles(circles);
}







// useless function that make the clicked element bigger :)
function lol() {
    console.log("yo");
    console.log("this = ", this);

    let parent = this.parentNode;
    console.log("parent:", parent);

    this.parentNode.style.animationName = "iwannabebig";
    console.log("animation started");
    setTimeout(redraw, 7001);
}
// this is for test & debug
function redraw() {
    //  openLayers2();
    //  openLayers3();
    leaflet();
}
// the start function
function start() {

    console.log(" salut ! ");
    openLayers2();
    openLayers3();
    leaflet();
}
// do i need to explain this one ? yes well this is an experimental function for later maybe if i feel good enough and i have time to spend on making an openlayer V2 based script
function openLayers2() {
    map = new OpenLayers.Map("demoMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();
}
// same as the previous one just replace V2 by V3 :)
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
//here i define the variable mymap so i don't get any problem with the variable scope even if i think i will give it as an argument for the callbackfunction on getjson, maybe later :)
var mymap;
// the leaflet function that define the mapitself (woah)
function leaflet() {
    //define were we start to see the map on the load
    mymap = L.map('mapid').setView([37.996, 15.908], 5);
    console.log("leaflet started");
    //  define long/lat of the boundary
    let southWest = L.latLng(40.712, -74.227),
        northEast = L.latLng(40.774, -74.125),
        bounds = L.latLngBounds(southWest, northEast);
    //select the map template the max zoom and the min zoom, and finally create it
    L.tileLayer("https://api.mapbox.com/styles/v1/accelerator/cizzftwny00gy2spf4jd8t8gg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWNjZWxlcmF0b3IiLCJhIjoiY2l6emRuNjExMDAxbDJxbzB1bWl6ZjFjdCJ9.00Aldip8FUzUISgvMLwanA", {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        //max zoom possible
        maxZoom: 18,
        //min zoom possible
        minZoom: 0,
        id: 'mapbox.satellite',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);

    var cercle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);

    cercle.bindPopup("YOOOOOOOO, ALORS BIEN OU BIEN AHHHHHHHHHHHHHHHHHH");
    cercle.on('click', onMapClick);

    var circles = [];
    // let's start the most funny function :) enjoy!
    getjson(createCircle, circles);
    function linkcircles(circles) {
    console.log("hey");

    circles.on('click', onMapClick);
    }
}
function onMapClick() {
  console.log(" SALUTTTTTTT");
}


//get the JSON response from the server
function getjson(callback, circles) {
    //create a new variable that will contain all the request
    var request = new XMLHttpRequest();
    console.log("hey");
    request.ontimeout = function() {
        console.error("The request for timed out.");
    };

    //make an event listener on the progression of the transfer (JSON in that case)
    request.addEventListener("progress", updateProgress, false);
    //once the status load is defined we can assume that the transfer is done
    request.addEventListener("load", transferComplete, false);
    //same for all previous but if the transfer failed
    request.addEventListener("error", transferFailed, false);
    //if the transfer is canceled this may inform us
    request.addEventListener("abort", transferCanceled, false);
    // console log as i like to do (this one show the request and how it looks like)
    console.log("request", request);

    // download progress (like a progress bar yep yep ^^) gives you information about the download status
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
    //once all is loaded we can charger this function that will callback the function we gave to it as an args remember ? getjson(callback) for now the callback is the function createCircle
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
                return callback(data, circles);
            } else {
                console.error(request.statusText);
            }
        }
    };
    // here we use the function open() to GET 'GET' the JSON 'villesetmessages.json'
    request.open('GET', 'villesetmessages.json', true);
    // the send is useless (for now :) )
    request.send();
}
