import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";
import Config from "../config";
import Container from "react-bootstrap/Container";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(Config.serverUrl + "/courses")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
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
      {!isLoading && <Courses courses={courses} />}
    </Container>
  );
};

export default Home;
