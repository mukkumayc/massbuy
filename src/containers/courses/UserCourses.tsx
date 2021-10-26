import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import requestsWrapper from "../../requestsWrapper";
import { ICourse } from "../../types";
import CoursesList from "./CoursesList";
import { useRouter } from "next/router";
import { fold } from "fp-ts/lib/Either";

function UserCourses() {
  const router = useRouter();
  const { userId } = router.query;
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<ICourse[] | null>(null);

  useEffect(() => {
    requestsWrapper
      .userCourses(userId instanceof Array ? userId[0] : userId || "")
      .then(fold(console.error, setCourses))
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
