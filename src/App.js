import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchToVisitThunkCreator } from "./store/toVisit/actions";
import { fetchVisitedThunkCreator } from "./store/visited/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisitedThunkCreator());
    dispatch(fetchToVisitThunkCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Trip Tracker</h1>
    </div>
  );
}

export default App;
