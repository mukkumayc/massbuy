import React from "react";
import { Card } from "react-bootstrap";
const About = ({ course }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1>{course.title}</h1>
        </Card.Title>

        <Card.Text>
          <p className="lead">{course.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
