import React, {useEffect, useRef} from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

function OnEventMarkerPopup({markerPosition, showPop}) {

  // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: markerPosition,
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, [markerPosition]);

  // add marker
  const markerRef = useRef(null);

  useEffect(
    () => {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition);
      } else {
        markerRef.current = L.marker(markerPosition).addTo(mapRef.current)
          .bindPopup(`lat: ${markerPosition.lat} lng: ${markerPosition.lng}`);
      }
      markerRef.current.on('mouseover', (e) => {e.target.openPopup()});
      markerRef.current.on('mouseout', (e) => {e.target.closePopup()});
    },
    [markerPosition]
  );

  // Control Popup

  useEffect(() => {
    showPop ? obrirPop() : tancarPop();
  }, [showPop])

  const obrirPop = () => {markerRef.current.openPopup()}
  const tancarPop = () => {markerRef.current.closePopup()}

  return (
    <div>
      <div id="map" style={style} />
    </div>
  );
}

export default OnEventMarkerPopup;
