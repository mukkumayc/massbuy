import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <Card
      border="primary"
      className="course-card"
      style={{ "min-width": "300px", margin: "0.2em", "min-height": "276px" }}
    >
      <Link to={"/course/" + props.id}>
        <Card.Body>
          <Card.Title>{props.course_name}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={props.picture_url} alt="noimage" />
      </Link>
    </Card>
  );
};

export default CourseCard;
