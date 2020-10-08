import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";
import Container from "react-bootstrap/Container";
import fetchCourses from "../components/fetchCourses";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const { setCourses } = props;

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
      {!isLoading && <Courses courses={props.courses} />}
    </Container>
  );
};

export default Home;
