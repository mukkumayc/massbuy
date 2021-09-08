import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form as BForm } from "react-bootstrap";
import requestsWrapper from "../requestsWrapper";
import { set as setUserId } from "../slices/userIdSlice";
import { useDispatch } from "react-redux";

interface RegisterProps {
  setAuthenticated(b: boolean): void;
  setIsAdmin(b: boolean): void;
}

const Register = ({ setAuthenticated, setIsAdmin }: RegisterProps) => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = (
    values: {
      email: string;
      name: string;
      surname: string;
      patronymic: string;
      password: string;
    },
    setSubmitting: (b: boolean) => void
  ) => {
    const { email, password } = values;
    requestsWrapper
      .post("/api/users/register/user", values)
      .then(() => {
        requestsWrapper
          .post("/api/users/login", { email, password })
          .then((res) => {
            dispatch(setUserId(res.id));
            setAuthenticated(true);
            return requestsWrapper
              .get(`/api/users/all`)
              .then(() => setIsAdmin(true))
              .catch(() => setIsAdmin(false));
          });
      })
      .catch((err) => setErrorMsg(err.toString()))
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="login page" fluid>
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={4}>
          <Formik
            initialValues={{
              email: "",
              name: "",
              surname: "",
              patronymic: "",
              password: "",
            }}
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
                  <BForm.Label htmlFor="register-email">Email</BForm.Label>
                  <BForm.Control
                    type="email"
                    name="email"
                    id="register-email"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label htmlFor="register-name">Name</BForm.Label>
                  <BForm.Control
                    type="text"
                    name="name"
                    id="register-name"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label htmlFor="register-surname">Surname</BForm.Label>
                  <BForm.Control
                    type="text"
                    name="surname"
                    id="register-surname"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label htmlFor="register-patronymic">
                    Patronymic
                  </BForm.Label>
                  <BForm.Control
                    type="text"
                    name="patronymic"
                    id="register-patronymic"
                    onChange={handleChange}
                  />
                </BForm.Group>
                <BForm.Group>
                  <BForm.Label htmlFor="register-password">
                    Password
                  </BForm.Label>
                  <BForm.Control
                    type="password"
                    name="password"
                    id="register-password"
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

export default Register;
