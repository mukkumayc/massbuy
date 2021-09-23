import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import requestsWrapper from "../../requestsWrapper";
import { ICourse } from "../../types";
import CoursesList from "./CoursesList";
import { useRouter } from "next/router";

function UserCourses() {
  const router = useRouter();
  const { userId } = router.query;
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
    <Container className="user-courses page">
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
