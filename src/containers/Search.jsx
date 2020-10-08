import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Container } from "react-bootstrap";
import Courses from "../components/Courses";
import fetchCourses from "../components/fetchCourses";
import SearchBar from "../components/SearchBar";

const Search = (props) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { history, courses, setCourses } = props;

  const search = useCallback(
    async (term) => {
      if (!term) {
        setLoading(false);
        return;
      }
      history.push(`/search?term=${term}`);
      let c = courses;
      if (c?.length === 0) {
        c = await fetchCourses();
        setCourses(c);
      }
      let res = c?.filter((course) => course.name.includes(term));
      setResult(res);
      setLoading(false);
      return res;
    },
    [courses, history, setCourses]
  );

  useEffect(() => {
    search(new URLSearchParams(window.location.search).get("term"));
  }, [search]);

  return (
    <Container className="search" fluid>
      <SearchBar search={({ values }) => search(values.term)} />
      {isLoading || <Courses courses={result} />}
    </Container>
  );
};

export default Search;
