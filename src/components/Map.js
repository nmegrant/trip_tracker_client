import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

export default function Map(props) {
  const [center, setCenter] = useState({ lat: 41, lng: -36 });
  const [zoom, setZoom] = useState(1);
  return (
    <div style={{ height: "200vh", width: "100%", margin: "10px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={37.5665} lng={126.978} name="My Marker" color="blue" />
      </GoogleMapReact>
    </div>
  );
}
