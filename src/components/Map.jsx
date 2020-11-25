import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

export default function Map(props) {
  const { toVisit, visited } = props;
  const [center] = useState({ lat: 41, lng: -36 });
  const [zoom] = useState(0);

  return (
    <div style={{ height: "200vh", width: "100%", margin: "10px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {toVisit &&
          toVisit.map((place) => (
            <Marker
              key={place.id}
              lat={place.lat}
              lng={place.long}
              name={place.city}
              color="red"
            />
          ))}
        {visited &&
          visited.map((place) => (
            <Marker
              key={place.id}
              lat={place.lat}
              lng={place.long}
              name={place.city}
              color="blue"
            />
          ))}
      </GoogleMapReact>
    </div>
  );
}
