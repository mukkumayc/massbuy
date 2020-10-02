import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <Card border="primary" style={{ margin: "0.2rem" }}>
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
