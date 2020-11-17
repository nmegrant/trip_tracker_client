import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Stats from "../components/Stats";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import Map from "../components/Map";
import CityInfo from "../components/CityInfo";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return (
    <div>
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
