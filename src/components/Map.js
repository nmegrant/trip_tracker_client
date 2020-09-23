import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props) {
  const [center, setCenter] = useState({ lat: 41, lng: -36 });
  const [zoom, setZoom] = useState(1);
  return (
    <div style={{ height: "200vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={11.0168} lng={76.9558} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
