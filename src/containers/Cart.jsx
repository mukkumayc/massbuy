import React from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { Row } from "react-bootstrap";

const Cart = (props) => {
  return (
    <Container className="cart">
      <Row className="justify-content-center">
        {props.cart.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
