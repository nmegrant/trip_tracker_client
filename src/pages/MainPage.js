import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { selectVisted } from "../store/visited/selectors";
import { selectToVisit } from "../store/toVisit/selectors";

export default function MainPage() {
  const dispatch = useDispatch();
  const visited = useSelector(selectVisted());
  const toVisit = useSelector(selectToVisit());

  console.log(visited);
  console.log(toVisit);

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return <h1>Trip Tracker</h1>;
}
