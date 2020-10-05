import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import Course from "../containers/Course";
import Cart from "../containers/Cart";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <AuthenticatedRoute path="/" exact component={Home} appProps={appProps} />
      <AuthenticatedRoute
        path="/course/:id"
        exact
        component={Course}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/cart"
        exact
        component={Cart}
        appProps={appProps}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
