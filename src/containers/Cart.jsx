import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CartList from "../components/cart/CartList";
import { Formik } from "formik";
import BuyCard from "../components/cart/BuyCard";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <Container className="cart">
      <Formik
        initialValues={{
          courses: Array.from(cart.data(), (v, k) => v[1]).map((value, ind) => {
            return { ...value };
          }),
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
