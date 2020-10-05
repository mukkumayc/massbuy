import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const CourseItem = (props) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col>{props.course_name}</Col>
        <Col>{props.count}</Col>
        <Col>{props.price}</Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CourseItem;
