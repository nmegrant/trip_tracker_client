import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/appState//selectors";
import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { height: 50px; width: 50px; }
 50% { height: 95px; width: 95px; opacity: 0.3; }
 100% { height: 50px; width: 50px; opacity: 0.6; }
 `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
`;

const LoadingIcon = styled.div`
  margin: 0 auto;
  background-color: #2274a5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

export default function Loading() {
  const loadingStatus = useSelector(selectLoading());

  return (
    <div>
      {loadingStatus ? (
        <Container>
          <LoadingIcon />
        </Container>
      ) : null}
    </div>
  );
}
