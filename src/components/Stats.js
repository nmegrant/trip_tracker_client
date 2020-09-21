import React from "react";
import { useSelector } from "react-redux";
import { selectVisted } from "../store/visited/selectors";
import { selectToVisit } from "../store/toVisit/selectors";

export default function Stats() {
  const visited = useSelector(selectVisted());
  const toVisit = useSelector(selectToVisit());

  console.log(visited);
  console.log(toVisit);

  //calculate percentage of cities visited - may move to server later

  //calculate percentage of countries visited - may move to server later

  return <h1>Statistics</h1>;
}
