import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVisted } from "../store/visited/selectors";

export default function CityInfo() {
  const [facts, setFacts] = useState([]);

  const visited = useSelector(selectVisted());
  const cities = visited.map((place) => place.city);

  useEffect(() => {
    if (cities.includes("Tokyo")) {
      setFacts([
        ...facts,
        "You've been to Tokyo, Japan, the largest city in the world by area.",
      ]);
    }
    if (cities.includes("Shanghai")) {
      setFacts([
        ...facts,
        "You've been to Shanghai, China, the largest city in the world by population.",
      ]);
    }
    if (cities.includes("Mecca")) {
      setFacts([
        ...facts,
        "You've been to Mecca, Saudi Arabia, the hottest city in the world.",
      ]);
    }
    if (cities.includes("Yakutsk")) {
      setFacts([
        ...facts,
        "You've been to Yakutsk, Russia, the coldest city in the world.",
      ]);
    }
    if (cities.includes("Wellington")) {
      setFacts([
        ...facts,
        "You've been to Wellington, New Zealand, the windiest city in the world.",
      ]);
    }
    if (cities.includes("Mawsynram")) {
      setFacts([
        ...facts,
        "You've been to Mawsynram, India, the wettest city in the world.",
      ]);
    }
    if (cities.includes("Arica")) {
      setFacts([
        ...facts,
        "You've been to Arica, Chile, the driest city in the world.",
      ]);
    }
    if (cities.includes("Yuma")) {
      setFacts([
        ...facts,
        "You've been to Yuma, USA, the sunniest city in the world.",
      ]);
    }
    if (cities.includes("La Paz")) {
      setFacts([
        ...facts,
        "You've been to La Paz, Bolivia, the highest city in the world.",
      ]);
    }
    if (cities.includes("Baku")) {
      setFacts([
        ...facts,
        "You've been to Baku, Azerbaijan, the lowest city in the world.",
      ]);
    }
    if (cities.includes("Bangkok")) {
      setFacts([
        ...facts,
        "You've been to Bangkok, Thailand, the most visited city in the world.",
      ]);
    }
  }, []);

  console.log(facts);

  return (
    <div>
      <h1>City Info</h1>
      {facts.length === 0 ? (
        <p>No city info yet!</p>
      ) : (
        facts.map((fact) => <p>fact</p>)
      )}
    </div>
  );
}
