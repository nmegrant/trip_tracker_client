import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Map from "../components/Map";
import Table from "../components/Table";
import styled from "styled-components";
import { selectUser } from "../store/user/selectors";
import { fetchUserToVisitThunkCreator } from "../store/userToVisit/actions";
import { fetchUserVisitedThunkCreator } from "../store/userVisited/actions";
import { selectUserToVisit } from "../store/userToVisit/selectors";
import { selectUserVisited } from "../store/userVisited/selectors";

export const Button = styled.button`
  background-color: #00916e;
  color: #feefe5;
  font-size: 16px;
  max-height: 40px;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px;
  border: solid 2px #00916e;
  transition-duration: 0.4s;
  &:hover {
    background-color: #feefe5;
    color: #00916e;
    border: solid 2px #00916e;
  }
`;

const ButtonLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser());
  const userToVisit = useSelector(selectUserToVisit());
  const userVisited = useSelector(selectUserVisited());

  const [toVisitState, setToVisitState] = useState(true);
  const [visitedState, setVisitedState] = useState(true);

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
  }, [user, history]);

  useEffect(() => {
    dispatch(fetchUserToVisitThunkCreator());
    dispatch(fetchUserVisitedThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>{`Welcome ${user.firstName}, to your trip planning and tracking page`}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>
          <ButtonLink to="/planning">Track Your Trips</ButtonLink>
        </Button>
        <Table userInfo={userToVisit} title="Places to visit" />
        <Table userInfo={userVisited} title="Places I've been" />
        <Button onClick={() => setToVisitState(!toVisitState)}>To Visit</Button>
        <Button onClick={() => setVisitedState(!visitedState)}>Visited</Button>
      </div>
      <Map
        toVisit={toVisitState ? userToVisit : []}
        visited={visitedState ? userVisited : []}
      />
    </div>
  );
}
