import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Routes from "./components/routing/Routes";
import NavBar from "./components/NavBar";
import CartWrapper from "./components/CartWrapper";
import "./App.css";

const cart = new CartWrapper();

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [courses, setCourses] = useState([]);
  const appProps = {
    isAuthenticated,
    userHasAuthenticated,
    cart,
    courses,
    setCourses,
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/checktoken", {
      credentials: "include",
    })
      .then((res) => {
        userHasAuthenticated(res.ok);
        setAuthenticating(false);
      })
      .catch((e) => {
        console.error(e);
        setAuthenticating(false);
      });
  }, []);

  return (
    <div className="App">
      {!isAuthenticating && (
        <>
          <NavBar {...appProps} />
          <Routes appProps={appProps} />
        </>
      )}
    </div>
  );
}

export default withRouter(App);
