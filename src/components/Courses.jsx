import React from "react";
import { Container, Row } from "react-bootstrap";
import CourseCard from "./CourseCard";
import Config from "../config";
import Pagination from "./Pagination";
const Courses = (props) => {
  let page = new URLSearchParams(window.location.search).get("page") || 1;
  return (
    <Container className="courses" fluid>
      <Row className="justify-content-center">
        <Pagination
          pagesNum={Math.ceil(props.courses?.length / Config.coursesOnOnePage)}
        />
      </Row>
      <Row className="justify-content-center">
        {props.courses
          ?.slice(
            Config.coursesOnOnePage * (page - 1),
            Config.coursesOnOnePage * page
          )
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
