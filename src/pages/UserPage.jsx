import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Map from "../components/Map";
import Table from "../components/Table";
import { selectUser } from "../store/user/selectors";
import { fetchUserToVisitThunkCreator } from "../store/userToVisit/actions";
import { fetchUserVisitedThunkCreator } from "../store/userVisited/actions";
import { selectUserToVisit } from "../store/userToVisit/selectors";
import { selectUserVisited } from "../store/userVisited/selectors";
import { SearchButton as Button } from "../components/styles/style";

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
        <Table userInfo={userToVisit} title="Places to visit" />
        <Table userInfo={userVisited} title="Places I've been" />
        <Button onClick={() => setToVisitState(!toVisitState)}>To Visit</Button>
        <Button onClick={() => setVisitedState(!visitedState)}>Visited</Button>
      </div>
      <Map toVisit={userToVisit} visited={userVisited} />
    </div>
  );
}
