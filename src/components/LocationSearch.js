import React, { useState } from "react";

export default function LocationSearch() {
  const [location, setLocation] = useState("");

  function searchLocations(event) {
    event.preventDefault();
    console.log(location);
    setLocation("");
  }

  return (
    <form onSubmit={searchLocations}>
      <label>Search a new location to add</label>
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
}
