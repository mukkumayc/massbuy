import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import requestsWrapper from "../../requestsWrapper";
import { ICourse } from "../../types";
import CoursesList from "./CoursesList";

function UserCourses() {
  const { userId } = useParams<{ userId: string }>();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<ICourse[] | null>(null);

  useEffect(() => {
    requestsWrapper
      .get(`/api/courses/user_courses/${userId}`)
      .then((cs) => setCourses(cs))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userId]);
  return (
    <Container className="user-courses">
      <h2>User courses</h2>
      {!loading ? (
        courses ? (
          <CoursesList courses={courses} />
        ) : (
          ""
        )
      ) : (
        "Loading..."
      )}
    </Container>
  );
}

export default UserCourses;
