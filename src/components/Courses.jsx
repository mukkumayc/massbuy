import React from "react";
import { Container, Row } from "react-bootstrap";
import Pagination from "./Pagination";
import CourseCard from "./CourseCard";

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
            <CourseCard
              key={val.id}
              id={val.id}
              course_name={val.name}
              picture_url={val.picture_url}
            />
          ))}
      </Row>
    </Container>
  );
};

export default Courses;
