import React, { useState } from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";
import { selectVisted } from "../store/visited/selectors";
import { selectToVisit } from "../store/toVisit/selectors";

export default function Map(props) {
  const [center] = useState({ lat: 41, lng: -36 });
  const [zoom] = useState(0);

  const visited = useSelector(selectVisted());
  const toVisit = useSelector(selectToVisit());

  console.log(visited);
  console.log(toVisit);

  return (
    <div style={{ height: "200vh", width: "100%", margin: "10px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {toVisit.map((place) => (
          <Marker
            key={place.id}
            lat={place.lat}
            lng={place.long}
            name={place.city}
            color="red"
          />
        ))}
        {visited.map((place) => (
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
