import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import Map from "../components/Map";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { selectVisted } from "../store/visited/selectors";
import { selectToVisit } from "../store/toVisit/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  const visited = useSelector(selectVisted());
  const toVisit = useSelector(selectToVisit());

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
        <LocationSearch />
      </div>
      <Map toVisit={toVisit} visited={visited} />
    </div>
  );
}
