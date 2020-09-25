import React from "react";
import { useSelector } from "react-redux";
import { selectVisted } from "../store/visited/selectors";

export default function CityInfo() {
  const visited = useSelector(selectVisted());
  const cities = visited.map((place) => place.city);

  //largest city in the world by area - Tokyo, Japan
  //largest city in the world by population - Shanghai, China
  //hottest city in the world - Mecca, Saudi Arabia
  //coldest city in the world - Yakutsk, Russia
  //windiest city in the world - Wellington, New Zealand
  //wettest city in the world - Mawsynram, India
  //driest city in the world - Arica, Chile
  //sunniest city in the world - Yuma, USA
  //highest city in the world - La Paz, Bolivia
  //lowest city in the world - Baku, Azerbaijan
  //most visited city in the world - Bangkok, Thailand
  return <h1>City Info</h1>;
}
