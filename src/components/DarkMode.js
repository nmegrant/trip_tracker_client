import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkMode } from "../store/appState/actions";
import { selectAppState } from "../store/appState/selectors";

export default function DarkMode() {
  const dispatch = useDispatch();
  const currentMode = useSelector(selectAppState()).darkMode;

  console.log(currentMode);

  function changeMode(event) {
    event.preventDefault();
    dispatch(changeDarkMode(!currentMode));
  }

  return <button onClick={changeMode}>Dark Mode</button>;
}
