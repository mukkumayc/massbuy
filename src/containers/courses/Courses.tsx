import React, { useEffect, useState } from "react";
import CoursesList from "./CoursesList";
import Container from "react-bootstrap/Container";
import fetchCourses from "../../lib/fetchCourses";
import { ICourse } from "../../types";

interface CoursesProps {
  courses: ICourse[];
  setCourses(_c: ICourse[]): void;
}

const Courses = ({ courses, setCourses }: CoursesProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((res) => {
        setCourses(res);
      })
      .catch((e) => {
        console.error(e);
      })
      .then(() => setLoading(false));
  }, [setCourses]);

  return (
    <Container className="home" fluid>
      {!isLoading && <CoursesList courses={courses} />}
    </Container>
  );
};

export default Courses;
