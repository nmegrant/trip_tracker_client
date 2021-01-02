import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMessage } from "../store/appState//selectors";

export default function Alert() {
  const message = useSelector(selectMessage());

  let textColour;
  let backgroundColour;

  if (message && message.style === "info") {
    textColour = `rgb(34, 139, 34)`;
    backgroundColour = `rgba(34, 139, 34, 0.1)`;
  } else {
    textColour = `rgb(178, 34, 34)`;
    backgroundColour = `rgba(178, 34, 34, 0.1)`;
  }

  const AlertBox = message
    ? styled.div`
        border: solid 1px ${textColour};
        background-color: ${backgroundColour};
        color: ${textColour};
      `
    : null;

  return (
    <div>
      {message ? (
        <AlertBox>
          <p>{message.message}</p>
        </AlertBox>
      ) : null}
    </div>
  );
}
