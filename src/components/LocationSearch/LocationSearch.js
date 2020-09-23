import React, { useState } from "react";
import "./LocationSearch.css";

export default function LocationSearch() {
  const [visited, setVisited] = useState("");
  const [toVisit, setToVisit] = useState("");

  function searchVisited(event) {
    event.preventDefault();
    console.log(visited);
    setVisited("");
  }

  function searchToVisit(event) {
    event.preventDefault();
    console.log(toVisit);
    setToVisit("");
  }

  return (
    <form className="formstyle">
      <label>Search and add a new visited location</label>
      <input
        type="text"
        value={visited}
        onChange={(event) => setVisited(event.target.value)}
      ></input>
      <button onClick={searchVisited}>Search</button>
      <label className="spacing">Search and add a to visit location</label>
      <input
        type="text"
        value={toVisit}
        onChange={(event) => setToVisit(event.target.value)}
      ></input>
      <button onClick={searchToVisit}>Search</button>
    </form>
  );
}