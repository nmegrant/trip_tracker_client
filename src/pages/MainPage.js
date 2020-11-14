import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stats from "../components/Stats";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import DarkMode from "../components/DarkMode";
import Map from "../components/Map";
import CityInfo from "../components/CityInfo";
import { fetchToVisitThunkCreator } from "../store/toVisit/actions";
import { fetchVisitedThunkCreator } from "../store/visited/actions";
import { logOut } from "../store/user/actions";
import { selectAppState } from "../store/appState/selectors";
import { selectUser } from "../store/user/selectors";
import { ModeButton as LogOutButton } from "../components/styles/style";

export default function MainPage() {
  const dispatch = useDispatch();
  const mode = useSelector(selectAppState()).darkMode;
  const user = useSelector(selectUser());

  const background = mode ? "#444444" : "#FFFFFF";
  const colour = mode ? "#FFFFFF" : "#444444";

  console.log(user);

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  function handleLogOut(event) {
    event.preventDefault();
    dispatch(logOut());
  }

  return (
    <div style={{ background: background, color: colour, height: "1000px" }}>
      <DarkMode />
      {user.token === null ? (
        <p>
          <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>{" "}
          to plan/track your own trips!
        </p>
      ) : (
        <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
      )}
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
