import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";
import Config from "../config";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(Config.serverUrl + "/courses")
      .then((res) => res.json())
      .then((json) => {
        setCourses(json.courses);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="home" fluid>
      {!isLoading && (
        <>
          <LinkContainer to="/cart">
            <Button>Cart</Button>
          </LinkContainer>
          <Courses courses={courses} />
        </>
      )}
    </Container>
  );
};

export default Home;
