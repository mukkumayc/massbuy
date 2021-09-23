import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Actions from "./course/Actions";
import About from "./course/About";
import { ICourse } from "../../types";
import requestsWrapper from "../../requestsWrapper";

const Course = () => {
  const [isLoading, setLoading] = useState(true); // loading info about course
  const [course, setCourse] = useState<ICourse | null>(null); // information about current course

  useEffect(() => {
    const id = window.location.pathname.split("/").pop() || "1";
    requestsWrapper
      .get(`/api/courses/${id}`)
      .then((course) => {
        setCourse(course);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="course">
      {!isLoading && (
        <Row>
          <Col sm="8">{course ? <About course={course} /> : "Loading..."}</Col>
          <Col sm="4">
            {course ? <Actions course={course} /> : "Loading..."}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Course;
