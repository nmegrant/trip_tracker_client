import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMessage } from "../store/appState//selectors";

export default function Alert() {
  const message = useSelector(selectMessage());

  const AlertBox = message
    ? styled.div`
        border: solid 1px ${message.style};
        background-color: rgba(0, 255, 0, 0.1);
        color: ${message.style};
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
