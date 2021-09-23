import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Routes from "./components/routing/Routes";
import NavBar from "./components/NavBar";
import "./App.css";
import { IAppProps, ICourse } from "./types";
import { useSelector } from "react-redux";
import requestsWrapper from "./requestsWrapper";
import { RootState } from "./store";
import MessageModal from "./components/MessageModal";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const appProps: IAppProps = {
    authenticated,
    setAuthenticated,
    isAdmin,
    setIsAdmin,
    courses,
    setCourses,
  };
  const userId = useSelector((state: RootState) => state.userId.value);
  const messageModalProps = useSelector(
    (state: RootState) => state.messageModal.value
  );

  useEffect(() => {
    if (Number.isNaN(userId)) {
      setAuthenticating(false);
      return;
    }
    requestsWrapper
      .post(`/api/users/is_auth`)
      .then(() => {
        setAuthenticated(true);
        return requestsWrapper
          .get(`/api/users/all`)
          .then(() => setIsAdmin(true))
          .catch(() => setIsAdmin(false));
      })
      .catch(() => {})
      .finally(() => setAuthenticating(false));
  }, [userId]);

  return (
    <div className="App">
      {!isAuthenticating && (
        <>
          <NavBar {...appProps} />
          <Routes appProps={appProps} />
          <MessageModal {...messageModalProps} />
        </>
      )}
    </div>
  );
}

export default withRouter(App);
