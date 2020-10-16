import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, cover }) => {
  return (
    <Card
      border="primary"
      className="course-card"
      style={{ minWidth: "300px", margin: "0.2em", minHeight: "276px" }}
    >
      <Link to={"/course/" + id}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={cover} alt="noimage" />
      </Link>
    </Card>
  );
};

export default CourseCard;
