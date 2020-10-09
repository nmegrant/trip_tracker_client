import React from "react";
import "./Marker.css";
import ReactTooltip from "react-tooltip";

export default function Marker(props) {
  const { color, name } = props;

  return (
    <div
      data-tip={name}
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    >
      <ReactTooltip />
    </div>
  );
}
