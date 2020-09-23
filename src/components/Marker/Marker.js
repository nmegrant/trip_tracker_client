import React from "react";
import "./Marker.css";

export default function Marker(props) {
  const { color, name } = props;

  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  );
}
