import React from "react";
import { Card } from "react-bootstrap";
import { ICourse } from "../types";
import { useRouter } from "next/router";
import Link from "next/link";

const CourseCard = ({
  course: { course_id, name, picture_link },
}: {
  course: ICourse;
}) => {
  const router = useRouter();
  return (
    <Card border="primary" className="course-card" key={course_id}>
      <Link href={`/courses/${course_id}`}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="bottom" src={picture_link} alt="noimage" />
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CourseCard;
