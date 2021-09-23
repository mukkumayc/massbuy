import React from "react";
import { Badge, Card } from "react-bootstrap";
import { ICourse } from "../types";
import Link from "next/link";
import getPlatform from "../lib/getPlatform";

const CourseCard = ({
  course: { course_id, name, picture_link, course_link },
}: {
  course: ICourse;
}) => {
  return (
    <Card border="primary" className="course-card" key={course_id}>
      <Link href={`/courses/${course_id}`}>
        <Card.Body>
          <Card.Title>
            {name}
            <Badge pill bg="secondary">
              {getPlatform(course_link)}
            </Badge>
          </Card.Title>
          <Card.Img variant="bottom" src={picture_link} alt="noimage" />
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CourseCard;
