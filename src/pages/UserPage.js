import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { selectUser } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector(selectUser());
  const history = useHistory();

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
  }, [user]);
  return (
    <div>
      <h1>{`Welcome ${user.firstName}, to your trip planning and tracking page`}</h1>
    </div>
  );
}
