import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
