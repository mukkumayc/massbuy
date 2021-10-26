import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import withAuth from "../../components/routing/withAuth";

const Success = () => (
  <Container className="page">
    <Row className="justify-content-center">
      <Col md="auto">
        <h1 className="text-danger">Failure!</h1>
      </Col>
    </Row>
  </Container>
);

export default withAuth(Success);
