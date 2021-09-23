import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form as BForm } from "react-bootstrap";
import requestsWrapper from "../requestsWrapper";
import { set as setUserId } from "../slices/userIdSlice";
import { useDispatch } from "react-redux";

interface LoginProps {
  setAuthenticated(_b: boolean): void;
  setIsAdmin(_b: boolean): void;
}

const Login = ({ setAuthenticated, setIsAdmin }: LoginProps) => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    setSubmitting: (_b: boolean) => void
  ) => {
    requestsWrapper
      .post("/api/users/login", { email, password })
      .then((res) => {
        dispatch(setUserId(res.id));
        setAuthenticated(true);
        requestsWrapper
          .get(`/api/users/all`)
          .then(() => setIsAdmin(true))
          .catch(() => setIsAdmin(false));
      })
      .catch((err) => setErrorMsg(err.toString()))
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="login page" fluid>
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={4}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .required("Email is required")
                .email("Invalid email"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) =>
              handleSubmit(values, setSubmitting)
            }
          >
            {({ isSubmitting, handleChange }) => (
              <Form>
                <BForm.Group>
                  <BForm.Label htmlFor="login-email">Email</BForm.Label>
                  <BForm.Control
                    type="email"
                    name="email"
                    id="login-email"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label htmlFor="login-password">Password</BForm.Label>
                  <BForm.Control
                    type="password"
                    name="password"
                    id="login-password"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
                {errorMsg ? (
                  <div className="alert alert-danger m-3">{errorMsg}</div>
                ) : null}
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
