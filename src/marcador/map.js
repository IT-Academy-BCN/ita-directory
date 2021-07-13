'use strict'
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
         const {latitude}=position.coords;
         const {longitude}=position.coords;
         console.log(`https://www.google.es/maps/@${latitude},${longitude}`)
    
    const coords=[latitude,longitude];
    const houseIcon = L.icon({
        iconUrl: 'img/home-2.png',
        iconSize:     [59, 59], 
        iconAnchor:   [35, 77], 
        popupAnchor:  [-3, -76]
    });

    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidnB1c2hrYXNoIiwiYSI6ImNrcjB1azZpbDB1M3Uybm1ud2YwZTF4aXUifQ.ZL7KgwFQGu63pe9UMIUlcw'
}).addTo(map);


 map.on('click',function(mapEvent){
 const{lat,lng}=mapEvent.latlng;
  L.marker([lat, lng],{icon: houseIcon})
 .addTo(map)
 .bindPopup(L.popup({
     maxWidth:250,
     minwidth:100,
     autoClose:false,
     closeOnClick:false,
     className:'popup'
 }))
 .setPopupContent('New flat is added')
 .openPopup()
 })

    }, function(){
        alert('Could not get your position')
    })
}