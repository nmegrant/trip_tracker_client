import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/appState//selectors";

export default function Loading() {
  const loadingStatus = useSelector(selectLoading());

  return <div>{loadingStatus ? <h1>LOADING</h1> : null}</div>;
}
