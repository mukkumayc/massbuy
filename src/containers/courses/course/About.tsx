import React from "react";
import { Card } from "react-bootstrap";
import { ICourse } from "../../../types";

interface AboutProps {
  course: ICourse;
}

const About = ({ course }: AboutProps) => {
  return (
    <Card className="about">
      <Card.Body>
        <Card.Title>
          <h2>{course.name}</h2>
        </Card.Title>

        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
