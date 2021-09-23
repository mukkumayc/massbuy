import React from "react";
import { Card } from "react-bootstrap";
import { ICourse } from "../types";
import { useRouter } from "next/router";

const CourseCard = ({
  course: { course_id, name, picture_link },
}: {
  course: ICourse;
}) => {
  const router = useRouter();
  return (
    <Card border="primary" className="course-card" key={course_id}>
      <a onClick={() => router.push(`/courses/${course_id}`)}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="bottom" src={picture_link} alt="noimage" />
        </Card.Body>
      </a>
    </Card>
  );
};

export default CourseCard;
