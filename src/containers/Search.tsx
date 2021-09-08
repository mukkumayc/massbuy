import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Container } from "react-bootstrap";
import CoursesList from "./courses/CoursesList";
import fetchCourses from "../lib/fetchCourses";
import SearchBar from "../components/SearchBar";
import { ICourse } from "../types";
import { RouteComponentProps } from "react-router-dom";

interface SearchProps extends RouteComponentProps<any> {
  courses: ICourse[];
  setCourses(c: ICourse[]): void;
}

const Search = ({ history, courses, setCourses }: SearchProps) => {
  const [result, setResult] = useState<ICourse[]>([]);
  const [isLoading, setLoading] = useState(true);

  const search = useCallback(
    async (term: string) => {
      if (!term) {
        setLoading(false);
        return null;
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
    search(new URLSearchParams(window.location.search).get("term") || "");
  }, [search]);

  return (
    <Container className="search" fluid>
      <div className="d-flex justify-content-center">
        <SearchBar search={search} />
      </div>

      {isLoading || <CoursesList courses={result} />}
    </Container>
  );
};

export default Search;
