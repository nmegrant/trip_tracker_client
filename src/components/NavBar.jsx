import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { ModeButton as LogOutButton } from "./styles/style";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { showMessageThunkCreator } from "../store/appState/actions";
import styled from "styled-components";

const Bar = styled.span`
  display: flex;
  justify-content: space-evenly;
`;

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function handleLogOut(event) {
    event.preventDefault();
    dispatch(logOut());
    dispatch(showMessageThunkCreator("Logged out!", "green"));
  }

  return (
    <span>
      <DarkMode />
      {user.token === null ? (
        <p>
          <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>{" "}
          to plan/track your own trips!
        </p>
      ) : (
        <Bar>
          <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
          <Link to="/">Main Page</Link>
          <Link to="/userpage">{`${user.firstName}'s Page`}</Link>
        </Bar>
      )}
    </span>
  );
}
