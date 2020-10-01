import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <AuthenticatedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
