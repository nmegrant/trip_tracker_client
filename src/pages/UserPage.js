import React from "react";
import { selectUser } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector(selectUser());
  return (
    <div>
      <h1>{`Welcome ${user.firstName}, to your trip planning and tracking page`}</h1>
    </div>
  );
}
