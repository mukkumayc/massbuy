import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";

const Courses = (props) => {
  return (
    <Container className="courses" fluid>
      <Row className="justify-content-center">
        {props?.courses.map((val, ind) => (
          <Card border="primary" style={{ margin: "0.2rem" }}>
            <Link key={ind} to={"/course/" + val.id}>
              <Card.Body>
                <Card.Title>{val.name}</Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={val.picture_url} alt="noimage" />
            </Link>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
