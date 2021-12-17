import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import { City } from "./pages/exports";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:cityName" component={City} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
