import React, {useState} from "react";
import OnEventMarkerPopup from "./OnEventMarkerPopup.js";

import "./ControlMarkerPopup.css"

function ControlMarkerPopup() {
    const Barcelona = {lat: 41.38722, lng: 2.17012}
    const Cibernarium = {lat: 41.40319, lng: 2.19604}

    const [markerPosition, setMarkerPosition] = useState(Barcelona);
    const {lat, lng} = markerPosition;

    const [showPop, setShowPop] = useState(false);

    const togglePop = () => {setShowPop(!showPop)}
    const onPop = () => {setShowPop(true)}
    const offPop = () => {setShowPop(false)}

    return (
        <div className="Page">
            {/* Title */}
            <div className="Title">
                <hr /><br />
                <h1>CONTROL MARKER POPUP VISIBILITY</h1>
                <h2>TIP: Mouse Over&Out on Map Marker to Show/Hide Marker Popup</h2>
                <hr /><br />
            </div>

            {/* Marker Info */}
            <div className="MarkerInfo">
                Current markerPosition: lat: {lat}, lng: {lng}
                <hr /><br />
            </div>

            {/* Map */}
            <OnEventMarkerPopup
                markerPosition={markerPosition}
                showPop={showPop}
            />
            <hr /><br />

            {/* Control Marker Popup */}
            <div className="ControlPopup">
                <h1><b>CONTROL MARKER POPUP</b></h1>
            </div>
            <div className="ControlButtons">
                <hr /><br />
                <button onClick={togglePop}>Click to Toggle Popup On/Off</button><br /><br />
                <button onMouseOver={onPop}>Mouse over to SHOW Popup</button><br /><br />
                <button onMouseOver={offPop}>Mouse over to HIDE Popup</button><br /><br />
                <button onMouseOver={onPop} onMouseOut={offPop}>Mouse Over to SHOW & Mouse Out to HIDE Popup</button><br /><br />
            </div>
        </div>
    );
}

export default ControlMarkerPopup