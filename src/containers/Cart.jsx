import React from "react";
import { Container, ListGroup } from "react-bootstrap";
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
          <CourseItem
            key={value.id}
            {...value}
            delete={() => {
              let cart = new Map(props.cart);
              if (!cart.delete(value.id)) {
                console.error("Not found the item in cart to delete");
                return;
              }
              props.setCart(cart);
            }}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Cart;
