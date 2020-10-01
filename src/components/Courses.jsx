import React from "react";
import { Link } from "react-router-dom";

const Courses = (props) => {
  return (
    <div className="courses" style={{ display: "flex", width: "300px" }}>
      {props?.courses.map((val, ind) => (
        <Link key={ind} to={"/course/" + val.id}>
          <header>{val.name}</header>
          <img src={val.picture_url} alt="noimage" width="100px" />
        </Link>
      ))}
    </div>
  );
};

export default Courses;
