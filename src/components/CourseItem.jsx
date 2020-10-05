import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";

const CourseItem = (props) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col>{props.course_name}</Col>
        <Col>{props.count}</Col>
        <Col>{props.price}</Col>
        <Col>
          {props.delete && (
            <Button variant="danger" onClick={props.delete}>
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CourseItem;
