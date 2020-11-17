import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import NavBar from "./components/NavBar";
import { getLoggedInUserThunkCreator } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
