import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CourseItem from "./CourseItem";
import CartWrapper from "../CartWrapper";
import { CartCourse, ICourse } from "../../types";

interface CartListProps {
  courses: ICourse[];
  deleteCourse(id: number): void;
}

const CartList = ({ courses, deleteCourse }: CartListProps) => {
  return (
    <Card>
      {courses.length > 0 ? (
        <ListGroup variant="flush">
          {courses.map((value, ind) => (
            <CourseItem
              key={ind}
              course={value}
              deleteItem={() => deleteCourse(value.course_id)}
            />
          ))}
        </ListGroup>
      ) : (
        <Card.Body key="0">
          <h5>Empty. Go and add something to the cart!</h5>
        </Card.Body>
      )}
    </Card>
  );
};

export default CartList;
