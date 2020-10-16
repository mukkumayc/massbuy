import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container className="not-found">
      <Row className="justify-content-center mt-5">
        <h2>Page not found</h2>
      </Row>
    </Container>
  );
};

export default NotFound;
