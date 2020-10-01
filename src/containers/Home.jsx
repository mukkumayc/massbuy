import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";
import Config from "../config";

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
    <div className="home container">
      {!isLoading && <Courses courses={courses} />}
    </div>
  );
};

export default Home;
