import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Map from "../components/Map";
import { selectUser } from "../store/user/selectors";
import { fetchUserToVisitThunkCreator } from "../store/userToVisit/actions";
import { fetchUserVisitedThunkCreator } from "../store/userVisited/actions";
import { selectUserToVisit } from "../store/userToVisit/selectors";
import { selectUserVisited } from "../store/userVisited/selectors";

export default function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser());
  const userToVisit = useSelector(selectUserToVisit());
  const userVisited = useSelector(selectUserVisited());

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
    dispatch(fetchUserToVisitThunkCreator);
    dispatch(fetchUserVisitedThunkCreator);
  }, [user]);

  console.log({ userToVisit });
  console.log({ userVisited });

  return (
    <div>
      <h1>{`Welcome ${user.firstName}, to your trip planning and tracking page`}</h1>
      <Map />
    </div>
  );
}
