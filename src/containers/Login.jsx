import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form } from "react-bootstrap";

class Login extends Component {
  state = {
    errorMsg: "",
  };

  render() {
    return (
      <Container className="login" fluid>
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
                this.handleSubmit(values, setSubmitting)
              }
            >
              {({ isSubmitting, handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="login-email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="login-email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="login-password">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="login-password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </button>
                  {this.state.errorMsg ? (
                    <div className="alert alert-danger m-3">
                      {this.state.errorMsg}
                    </div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    );
  }

  handleSubmit = (values, setSubmitting) => {
    fetch(process.env.REACT_APP_SERVER_URL + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        credentials: values,
      }),
    })
      .then((res) => {
        if (res.ok) {
          this.props.userHasAuthenticated(true);
        } else {
          res.json().then((json) => {
            this.setState({ errorMsg: json.error });
            setSubmitting(false);
          });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err.toString() });
        setSubmitting(false);
      });
  };
}

export default Login;
