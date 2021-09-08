import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ICourse } from "../types";
import "./CourseCard.css";

const CourseCard = ({
  course: { course_id, name, picture_link },
}: {
  course: ICourse;
}) => {
  return (
    <Card border="primary" className="course-card" key={course_id}>
      <Link to={`/courses/${course_id}`}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="bottom" src={picture_link} alt="noimage" />
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CourseCard;
