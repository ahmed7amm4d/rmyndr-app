import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
