import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Geocode from "react-geocode";
import { addNewVisitedThunkCreator } from "../../store/visited/actions";
import { addNewToVisitThunkCreator } from "../../store/toVisit/actions";
import "./LocationSearch.css";

export default function LocationSearch() {
  const [visited, setVisited] = useState("");
  const [toVisit, setToVisit] = useState("");
  const dispatch = useDispatch();

  Geocode.setApiKey(process.env.REACT_APP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.enableDebug();

  function searchVisited(event) {
    event.preventDefault();
    Geocode.fromAddress(`${visited}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        dispatch(addNewVisitedThunkCreator({ lat, lng, visited }));
      },
      (error) => {
        console.error(error);
      }
    );
    setVisited("");
  }

  function searchToVisit(event) {
    event.preventDefault();

    Geocode.fromAddress(`${toVisit}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        dispatch(addNewToVisitThunkCreator({ lat, lng, toVisit }));
      },
      (error) => {
        console.error(error);
      }
    );
    setToVisit("");
  }

  Geocode.setApiKey(process.env.REACT_APP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.enableDebug();

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
