import React from "react";
import { useSelector } from "react-redux";
import { selectVisted } from "../store/visited/selectors";

export default function Stats() {
  const visited = useSelector(selectVisted());

  //calculate percentage of cities visited - may move to server later

  const numberOfCities = visited.map((place) => place.city).length;
  const percentageOfCities = (numberOfCities / 10000) * 100;

  //calculate percentage of countries visited - may move to server later
  const numberOfCountries = [];
  for (let place of visited) {
    if (numberOfCountries.includes(place.country) === false) {
      numberOfCountries.push(place.country);
    }
  }

  const percentageOfCountries = (numberOfCountries.length / 195) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      <p>
        There are 10,000 cities in the world and you've visited{" "}
        {percentageOfCities.toFixed(2)}% of them.
      </p>
      <p>
        There are 195 countries in the world and you've visited{" "}
        {percentageOfCountries.toFixed(2)}% of them.
      </p>
    </div>
  );
}
