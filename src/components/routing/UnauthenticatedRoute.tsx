import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IAppProps } from "../../types";

interface UnauthenticatedRouteProps extends RouteProps {
  component(_props: any): JSX.Element;
  appProps: IAppProps;
}

const UnauthenticatedRoute = ({
  component: C,
  appProps,
  ...rest
}: UnauthenticatedRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !appProps?.authenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default UnauthenticatedRoute;
