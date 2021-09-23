import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartList from "../components/cart/CartList";
import PayCard from "../components/cart/PayCard";
import { ICourse } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import requestsWrapper from "../requestsWrapper";

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
      .get(`/api/baskets/${userId}`)
      .then((c) => setCart(c))
      .catch(console.log)
      .finally(() => setFetching(false));
  }, [userId]);

  const deleteCourse = useCallback(
    (courseId: number) => {
      requestsWrapper
        .post(`/api/baskets/delete_course_from_basket/${userId}/${courseId}`)
        .then(fetchCourses)
        .catch(console.error);
    },
    [userId, fetchCourses]
  );

  useEffect(fetchCourses, []);
  return (
    <Container className="cart page">
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
