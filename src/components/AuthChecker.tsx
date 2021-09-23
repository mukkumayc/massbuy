import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import requestsWrapper from "../requestsWrapper";
import { RootState } from "../store";
import { IPageProps, ICourse } from "../types";
import MessageModal from "./MessageModal";
import NavBar from "./NavBar";

interface AuthCheckerProps {
  children?: React.ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const pageProps: IPageProps = {
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
          <NavBar {...pageProps} />
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { pageProps })
              : child
          )}
          <MessageModal {...messageModalProps} />
        </>
      )}
    </div>
  );
};

export default AuthChecker;
