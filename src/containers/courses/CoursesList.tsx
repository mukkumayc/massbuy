import React from "react";
import { Container, Row } from "react-bootstrap";
import CourseCard from "../../components/CourseCard";
import Config from "../../config";
import Pagination from "../../components/Pagination";
import { ICourse } from "../../types";

interface CoursesProps {
  courses: ICourse[];
}

const CoursesList = ({ courses }: CoursesProps) => {
  let page = parseInt(
    new URLSearchParams(window.location.search).get("page") || "1"
  );
  return (
    <Container className="courses" fluid>
      <Row className="justify-content-center">
        <Pagination
          pagesNum={Math.ceil(courses?.length / Config.coursesOnOnePage)}
        />
      </Row>
      <Row className="justify-content-center">
        {courses
          ?.slice(
            Config.coursesOnOnePage * (page - 1),
            Config.coursesOnOnePage * page
          )
          .map((val, ind) => (
            <CourseCard key={ind} course={val} />
          ))}
      </Row>
    </Container>
  );
};

export default CoursesList;
