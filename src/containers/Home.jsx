import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import fetchCourses from "../components/fetchCourses";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((res) => {
        props.setCourses(res);
      })
      .catch((e) => {
        console.error(e);
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <Container className="home" fluid>
      {!isLoading && (
        <>
          <LinkContainer to="/cart">
            <Button>Cart</Button>
          </LinkContainer>
          <Courses courses={props.courses} />
        </>
      )}
    </Container>
  );
};

export default Home;
