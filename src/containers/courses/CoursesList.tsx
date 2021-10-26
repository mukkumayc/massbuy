import React from "react";
import { Row, Col } from "react-bootstrap";
import CourseCard from "../../components/CourseCard";
import Config from "../../config";
import Pagination from "../../components/Pagination";
import { ICourse } from "../../types";

interface CoursesProps {
  courses: ICourse[];
}

const CoursesList = ({ courses }: CoursesProps) => {
  const page = parseInt(
    new URLSearchParams(window.location.search).get("page") || "1"
  );
  return (
    <div className="courses">
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
            <Col md="auto" key={ind}>
              <CourseCard course={val} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CoursesList;
