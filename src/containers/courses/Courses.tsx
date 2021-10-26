import React, { useEffect, useState } from "react";
import CoursesList from "./CoursesList";
import Container from "react-bootstrap/Container";
import { ICourse } from "../../types";
import requestsWrapper from "../../requestsWrapper";
import { fold } from "fp-ts/lib/Either";

interface CoursesProps {
  courses: ICourse[];
  setCourses(_c: ICourse[]): void;
}

const Courses = ({ courses, setCourses }: CoursesProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    requestsWrapper
      .courses()
      .then(
        fold((err) => {
          console.error(err);
          setCourses([]);
        }, setCourses)
      )
      .then(() => setLoading(false));
  }, [setCourses]);

  return (
    <Container className="home page">
      {!isLoading && <CoursesList courses={courses} />}
    </Container>
  );
};

export default Courses;
