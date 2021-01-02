import React from "react";
import { useSelector } from "react-redux";
import { selectMessage } from "../store/appState//selectors";

export default function Alert() {
  const message = useSelector(selectMessage());

  return (
    <div>
      {message !== null ? (
        <h1 style={{ color: message.style }}>{message.message}</h1>
      ) : null}
    </div>
  );
}
