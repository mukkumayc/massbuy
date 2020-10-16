import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <Card
      border="primary"
      className="course-card"
      style={{ minWidth: "300px", margin: "0.2em", minHeight: "276px" }}
    >
      <Link to={"/course/" + props.id}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={props.cover} alt="noimage" />
      </Link>
    </Card>
  );
};

export default CourseCard;
