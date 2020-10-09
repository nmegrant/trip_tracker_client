import React from "react";
import "./Marker.css";
import ReactTooltip from "react-tooltip";

export default function Marker(props) {
  const { color, name } = props;

  return (
    <div>
      <div
        data-tip={name}
        data-for="city-marker"
        className="marker"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      ></div>
      <ReactTooltip id="city-marker" />
    </div>
  );
}
