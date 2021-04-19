import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Main } from "../pages";
import { Grid } from "../elements/";

function App() {
  return (
    <Grid isRoot>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main} />
      </ConnectedRouter>
    </Grid>
  );
}

export default App;
