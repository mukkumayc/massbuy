import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CartList from "../components/cart/CartList";
import { Formik } from "formik";
import BuyCard from "../components/cart/BuyCard";
import "./Cart.css";
import * as Yup from "yup";

const Cart = ({ cart }) => {
  return (
    <Container className="cart">
      <Formik
        initialValues={{
          courses: Array.from(cart.data(), (v, k) => v[1]).map((value, ind) => {
            return { ...value };
          }),
        }}
        validationSchema={Yup.object().shape({
          courses: Yup.array()
            .of(
              Yup.object().shape({
                id: Yup.string().required(),
                platform: Yup.string().required(),
              })
            )
            .min(1, "Minimum 1 course"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(params) => (
          <Form onSubmit={params.handleSubmit}>
            <Row>
              <Col sm="8">
                <CartList cart={cart} {...params} />
              </Col>
              <Col sm="4">
                <BuyCard values={params.values} />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Cart;
