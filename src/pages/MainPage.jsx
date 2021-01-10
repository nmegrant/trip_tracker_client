import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import Map from "../components/Map";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { selectVisted } from "../store/visited/selectors";
import { selectToVisit } from "../store/toVisit/selectors";
import styled from "styled-components";

export const Button = styled.button`
  background-color: #00916e;
  color: #feefe5;
  font-size: 16px;
  max-height: 50px;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px;
  border: solid 2px #00916e;
  transition-duration: 0.4s;
  &:hover {
    background-color: #feefe5;
    color: #00916e;
    border: solid 2px #00916e;
  }
`;

export default function MainPage() {
  const dispatch = useDispatch();
  const visited = useSelector(selectVisted());
  const toVisit = useSelector(selectToVisit());

  const [toVisitState, setToVisitState] = useState(true);
  const [visitedState, setVisitedState] = useState(true);

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
      <Button onClick={() => setToVisitState(!toVisitState)}>To Visit</Button>
      <Button onClick={() => setVisitedState(!visitedState)}>Visited</Button>
      <Map toVisit={toVisit} visited={visited} />
    </div>
  );
}
