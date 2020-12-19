import React from "react";
import styled from "styled-components";

const AlertBox = styled.div`
  background-color: red;
`;

export default function Alert(props) {
  return <AlertBox>{props.message}</AlertBox>;
}
