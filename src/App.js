import React, { useState } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Context from "./context/context";
import Login from "./Components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  let homepage = <Route path="/" exact component={Homepage} />;

  if (!loggedIn) {
    homepage = <Route path="/" exact component={Login} />;
  }

  return (
    <Context.Provider
      value={{
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
        userData: userData,
        setUserData: setUserData,
      }}
    >
      <Switch>{homepage}</Switch>
    </Context.Provider>
  );
}

export default App;
