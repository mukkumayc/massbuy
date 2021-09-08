import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router";
import Routes from "./components/routing/Routes";
import NavBar from "./components/NavBar";
import CartWrapper from "./components/CartWrapper";
import "./App.css";
import { IAppProps, ICourse } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { set as setUserId } from "./slices/userIdSlice";
import requestsWrapper from "./requestsWrapper";
import { RootState } from "./store";
import MessageModal from "./components/MessageModal";

const cart = new CartWrapper();

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
    cart,
    courses,
    setCourses,
  };
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userId.value);
  const messageModalProps = useSelector(
    (state: RootState) => state.messageModal.value
  );

  useEffect(() => {
    // dispatch(setUserId(2));
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
  }, []);

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
