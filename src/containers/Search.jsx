import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Courses from "../components/Courses";
import fetchCourses from "../components/fetchCourses";
import SearchBar from "../components/SearchBar";

const Search = (props) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  async function search(term) {
    if (!term) {
      setLoading(false);
      return;
    }
    props.history.push(`/search?term=${term}`);
    if (props.courses?.length === 0) {
      await fetchCourses(props.setCourses, setLoading);
    }
    let res = props.courses?.filter((course) => course.name.includes(term));
    setResult(res);
    setLoading(false);
    console.log(res.length);
  }

  useEffect(() => {
    search(new URLSearchParams(window.location.search).get("term"));
  }, []);

  return (
    <Container className="search" fluid>
      <SearchBar search={({ values }) => search(values.term)} />
      {loading || <Courses courses={result} />}
    </Container>
  );
};

export default Search;
