import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

export default function PlanningPage() {
  const history = useHistory();
  const user = useSelector(selectUser());

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
  });

  return (
    <div>
      <h1>Plan your next vacation here</h1>
    </div>
  );
}
