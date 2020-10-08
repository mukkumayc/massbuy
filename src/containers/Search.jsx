import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Courses from "../components/Courses";
import fetchCourses from "../components/fetchCourses";
import SearchBar from "../components/SearchBar";

const Search = (props) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function search(term) {
    if (!term) {
      setLoading(false);
      return;
    }
    props.history.push(`/search?term=${term}`);
    let courses = props.courses;
    if (props.courses?.length === 0) {
      courses = await fetchCourses();
      props.setCourses(courses);
    }
    let res = courses?.filter((course) => course.name.includes(term));
    console.log(props.courses.length, courses.length, res.length);
    setResult(res);
    setLoading(false);
    return res;
  }

  useEffect(() => {
    search(new URLSearchParams(window.location.search).get("term"));
  }, []);

  return (
    <Container className="search" fluid>
      <SearchBar search={({ values }) => search(values.term)} />
      {isLoading || <Courses courses={result} />}
    </Container>
  );
};

export default Search;
