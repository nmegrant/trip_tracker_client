import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stats from "../components/Stats";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import DarkMode from "../components/DarkMode";
import Map from "../components/Map";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { selectAppState } from "../store/appState/selectors";

// import { selectVisted } from "../store/visited/selectors";
// import { selectToVisit } from "../store/toVisit/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  const mode = useSelector(selectAppState()).darkMode;

  const background = mode ? "#444444" : "#FFFFFF";
  const colour = mode ? "#FFFFFF" : "#444444";

  // const visited = useSelector(selectVisted());
  // const toVisit = useSelector(selectToVisit());

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return (
    <div style={{ background: background, color: colour, height: "1000px" }}>
      <DarkMode />
      <h1>Trip Tracker</h1>
      <LocationSearch />
      <Stats />
      <Map />
    </div>
  );
}
