import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { ModeButton as LogOutButton } from "./styles/style";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function handleLogOut(event) {
    event.preventDefault();
    dispatch(logOut());
  }

  return (
    <div>
      <DarkMode />
      {user.token === null ? (
        <p>
          <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>{" "}
          to plan/track your own trips!
        </p>
      ) : (
        <span>
          <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
          <Link to="/">Main Page</Link>
          <Link to="/userpage">{`${user.firstName}'s Page`}</Link>
        </span>
      )}
    </div>
  );
}
