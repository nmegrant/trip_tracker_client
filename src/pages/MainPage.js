import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stats from "../components/Stats";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import DarkMode from "../components/DarkMode";
import Map from "../components/Map";
import CityInfo from "../components/CityInfo";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { selectAppState } from "../store/appState/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  const mode = useSelector(selectAppState()).darkMode;

  const background = mode ? "#444444" : "#FFFFFF";
  const colour = mode ? "#FFFFFF" : "#444444";

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return (
    <div style={{ background: background, color: colour, height: "1000px" }}>
      <DarkMode />
      <p>
        <Link to="/signup">Sign up</Link> or <Link to="login">Log in</Link> to
        plan/track your own trips!
      </p>
      <h1>Trip Tracker</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Stats />
        <LocationSearch />
        <CityInfo />
      </div>
      <Map />
    </div>
  );
}
