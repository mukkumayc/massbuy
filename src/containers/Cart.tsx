import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartList from "../components/cart/CartList";
import PayCard from "../components/cart/PayCard";
import { ICourse } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import requestsWrapper from "../requestsWrapper";
import { fold } from "fp-ts/lib/Either";

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
  const userId = useSelector((state: RootState) => state.userId.value);

  const fetchCourses = useCallback(() => {
    setFetching(true);
    requestsWrapper
      .basket(userId)
      .then(fold(console.error, setCart))
      .finally(() => setFetching(false));
  }, [userId]);

  const deleteCourse = useCallback(
    (courseId: number) => {
      requestsWrapper
        .deleteCourseFromBasket(userId, courseId)
        .then(fold(console.error, fetchCourses));
    },
    [userId, fetchCourses]
  );

  useEffect(fetchCourses, []);
  return (
    <Container className="cart page">
      {fetching ? (
        "Loading..."
      ) : cart ? (
        <Row className="justify-content-center">
          <Col md="6">
            <CartList courses={cart.courses} {...{ deleteCourse }} />
          </Col>
          <Col md="3">
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
