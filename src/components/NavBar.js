import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkMode from "../components/DarkMode";
import { ModeButton as LogOutButton } from "../components/styles/style";
import { logOut } from "../store/user/actions";
import { selectAppState } from "../store/appState/selectors";
import { selectUser } from "../store/user/selectors";

export default function NavBar() {
  const dispatch = useDispatch();
  const mode = useSelector(selectAppState()).darkMode;
  const user = useSelector(selectUser());

  const background = mode ? "#444444" : "#FFFFFF";
  const colour = mode ? "#FFFFFF" : "#444444";

  function handleLogOut(event) {
    event.preventDefault();
    dispatch(logOut());
  }

  return (
    <div style={{ background: background, color: colour }}>
      <DarkMode />
      {user.token === null ? (
        <p>
          <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>{" "}
          to plan/track your own trips!
        </p>
      ) : (
        <span>
          <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
          <Link to="/userpage">{`${user.firstName}'s Page`}</Link>
        </span>
      )}
    </div>
  );
}
