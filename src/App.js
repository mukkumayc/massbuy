import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Routes from "./components/Routes";
import Config from "./config";
import NavBar from "./components/NavBar";

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [cart, setCart] = useState(new Map());
  const [courses, setCourses] = useState([]);
  const appProps = {
    isAuthenticated,
    userHasAuthenticated,
    cart,
    setCart,
    courses,
    setCourses,
  };

  useEffect(() => {
    fetch(Config.serverUrl + "/checktoken", {
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
