import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row } from "react-bootstrap";
import Pagination from "./Pagination";

const COURSES_ON_ONE_PAGE = 15;

const Courses = (props) => {
  let page = new URLSearchParams(window.location.search).get("page") || 1;
  return (
    <Container className="courses" fluid>
      <Pagination
        pagesNum={Math.ceil(props.courses.length / COURSES_ON_ONE_PAGE)}
      />
      <Row className="justify-content-center">
        {props?.courses
          .slice(COURSES_ON_ONE_PAGE * (page - 1), COURSES_ON_ONE_PAGE * page)
          .map((val, ind) => (
            <Card key={ind} border="primary" style={{ margin: "0.2rem" }}>
              <Link key={ind} to={"/course/" + val.id}>
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  src={val.picture_url}
                  alt="noimage"
                />
              </Link>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default Courses;
