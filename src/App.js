import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import NavBar from "./components/NavBar";
import PlanningPage from "./pages/PlanningPage";
import { selectAppState } from "./store/appState/selectors";
import { getLoggedInUserThunkCreator } from "./store/user/actions";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector(selectAppState()).darkMode;

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator());
  }, [dispatch]);

  const background = mode ? "#444444" : "#FFFFFF";
  const colour = mode ? "#FFFFFF" : "#444444";

  return (
    <div
      className="App"
      style={{ background: background, color: colour, height: "1000px" }}
    >
      <NavBar />
      <Loading />
      <Alert />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/planning" component={PlanningPage} />
      </Switch>
    </div>
  );
}

export default App;
