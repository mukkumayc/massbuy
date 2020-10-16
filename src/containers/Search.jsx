import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Container } from "react-bootstrap";
import Courses from "../components/Courses";
import fetchCourses from "../lib/fetchCourses";
import SearchBar from "../components/SearchBar";

const Search = ({ history, courses, setCourses }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      let res = c?.filter((course) => course.title.includes(term));
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
      <div className="d-flex justify-content-center">
        <SearchBar search={({ values }) => search(values.term)} />
      </div>

      {isLoading || <Courses courses={result} />}
    </Container>
  );
};

export default Search;
