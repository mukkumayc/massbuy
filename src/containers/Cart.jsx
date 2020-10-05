import React from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { Row } from "react-bootstrap";

const Cart = (props) => {
  return (
    <Container className="cart">
      <Row className="justify-content-center">
        {Array.from(props.cart, (v, k) => v[1]).map((value, ind) => (
          <CourseCard key={value.id} {...value} />
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
