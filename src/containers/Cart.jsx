import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { Row } from "react-bootstrap";
import CourseItem from "../components/CourseItem";

const Cart = (props) => {
  return (
    <Container className="cart">
      <ListGroup>
        <CourseItem
          key={-1}
          course_name="Course name"
          count="Count"
          price="Price"
        />
        {Array.from(props.cart, (v, k) => v[1]).map((value, ind) => (
          <CourseItem key={value.id} {...value} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Cart;
