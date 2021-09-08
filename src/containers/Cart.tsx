import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartList from "../components/cart/CartList";
import PayCard from "../components/cart/PayCard";
import "./Cart.css";
import { ICourse } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import requestsWrapper from "../requestsWrapper";

// interface CartProps {
//   cart: CartWrapper;
// }

interface Cart {
  courses: ICourse[];
  total_price: number;
}

const Cart = () => {
  const [cart, setCart] = useState<{
    courses: ICourse[];
    total_price: number;
  } | null>(null);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state: RootState) => state.userId.value);

  const fetchCourses = useCallback(() => {
    requestsWrapper
      .get(`/api/baskets/${userId}`)
      .then((c) => setCart(c))
      .catch(console.log)
      .finally(() => setFetching(false));
  }, []);

  const deleteCourse = useCallback((courseId: number) => {
    setLoading(true);
    requestsWrapper
      .post(`/api/baskets/delete_course_from_basket/${userId}/${courseId}`)
      .then(fetchCourses)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(fetchCourses, []);
  return (
    <Container className="cart">
      {fetching ? (
        "Loading..."
      ) : cart ? (
        <Row>
          <Col sm="8">
            <CartList courses={cart.courses} {...{ deleteCourse }} />
          </Col>
          <Col sm="4">
            <PayCard totalPrice={cart.total_price} />
          </Col>
        </Row>
      ) : (
        "Failed to load cart"
      )}
    </Container>
  );
};

export default Cart;
