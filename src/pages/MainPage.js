import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stats from "../components/Stats";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
// import { selectVisted } from "../store/visited/selectors";
// import { selectToVisit } from "../store/toVisit/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  // const visited = useSelector(selectVisted());
  // const toVisit = useSelector(selectToVisit());

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>Trip Tracker</h1>
      <LocationSearch />
      <Stats />
    </div>
  );
}
