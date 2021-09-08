import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IAppProps } from "../../types";

interface AuthenticatedRouteProps extends RouteProps {
  component(props: any): JSX.Element;
  appProps: IAppProps;
}

const AuthenticatedRoute = ({
  component: C,
  appProps,
  ...rest
}: AuthenticatedRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        appProps?.authenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
