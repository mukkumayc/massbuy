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
  const platform = getPlatform(course_link);
  return (
    <Link href={`/courses/${course_id}`}>
      <Card className="course-card" key={course_id}>
        <Card.Img variant="top" src={picture_link} alt="" />
        <Card.Body>
          <Card.Title>
            {platform && (
              <Badge pill bg="secondary" className="float-end">
                {platform}
              </Badge>
            )}
            {name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CourseCard;
