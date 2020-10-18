import React, { useState, useEffect } from "react";
import Config from "../config";
import { Container, Row, Col } from "react-bootstrap";
import Actions from "../components/course/Actions";
import About from "../components/course/About";
import "./Course.css";

const Course = ({ cart }) => {
  const [isLoading, setLoading] = useState(true); // loading info about course
  const [course, setCourse] = useState({}); // information about current course

  useEffect(() => {
    let id = window.location.pathname.split("/");
    id = id[id.length - 1];
    fetch(Config.serverUrl + "/course/" + id)
      .then((res) => res.json())
      .then((json) => {
        setCourse(json);
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
          <Col sm="8">
            <About course={course} />
          </Col>
          <Col sm="4">
            <Actions course={course} cart={cart} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Course;
