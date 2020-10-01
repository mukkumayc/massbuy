import React, { useState, useEffect } from "react";
import Config from "../config";

const Course = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState({});

  useEffect(() => {
    let id = window.location.pathname.split("/");
    id = id[id.length - 1];
    fetch(Config.serverUrl + "/course/" + id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCourse(json);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="course container">
      {!isLoading && (
        <>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </>
      )}
    </div>
  );
};

export default Course;
