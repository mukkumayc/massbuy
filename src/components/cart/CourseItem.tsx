import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { ICourse } from "../../types";
import DefaultModal from "../DefaultModal";

interface CourseItemProps {
  course: ICourse;
  deleteItem(): void;
}

const CourseItem = (props: CourseItemProps) => {
  const { deleteItem, course } = props;

  const [isDeleting, setDeleting] = useState(false);
  return (
    <ListGroup.Item>
      <div className="d-flex flex-row justify-content-between">
        <h3>{course.name}</h3>
        <Button
          className="ml-3"
          variant="danger"
          onClick={() => setDeleting(true)}
        >
          Delete
        </Button>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="price">Price: {course.price}</div>
      </div>
      <div className="d-flex flex-row justify-content-between">{}</div>
      <DefaultModal
        show={isDeleting}
        acceptButtonVariant="danger"
        acceptButtonText="Delete"
        bodyText="Are you sure you want to delete?"
        handleHide={() => setDeleting(false)}
        handleAccept={() => {
          deleteItem();
          setDeleting(false);
        }}
      />
    </ListGroup.Item>
  );
};

export default CourseItem;
