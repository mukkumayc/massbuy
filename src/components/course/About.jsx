import React from "react";
import { Card } from "react-bootstrap";
const About = ({ course }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>{course.title}</h2>
        </Card.Title>

        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
