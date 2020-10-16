import React, { useState } from "react";
import { Button, Col, ListGroup, Row, Form } from "react-bootstrap";
import DefaultModal from "./DefaultModal";
import Counter from "./Counter";
import "./CourseItem.css";

const CourseItem = (props) => {
  const {
    title,
    count,
    platforms,
    values,
    index,
    handleChange,
    deleteItem,
    setFieldValue,
  } = props;

  const [isDeleting, setDeleting] = useState(false);
  const { courses } = values || {};
  return (
    <ListGroup.Item>
      <div className="d-flex flex-row justify-content-between">
        <h3>{title}</h3>
        {values ? (
          <Counter
            count={courses[index].count}
            setCount={(value) => {
              setFieldValue(`courses[${index}].count`, value);
            }}
            setDeleting={setDeleting}
          />
        ) : (
          count
        )}
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h5>
          <b>
            {
              platforms?.find((pl) => pl.name === courses[index].platform)
                ?.price
            }
          </b>
        </h5>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <Form.Control
          id="platform-input"
          as="select"
          name={`courses[${index}].platform`}
          onChange={handleChange}
          defaultValue={courses[index].platform}
        >
          {platforms?.map((p, ind) => (
            <option key={ind}>{`${p.name}`}</option>
          ))}
        </Form.Control>

        {deleteItem && (
          <Button
            className="ml-3"
            variant="danger"
            onClick={() => setDeleting(true)}
          >
            Delete
          </Button>
        )}
      </div>
      <DefaultModal
        show={isDeleting}
        acceptButtonVariant="danger"
        acceptButtonText="Delete"
        bodyText="Are you sure you want to delete?"
        handleCancel={() => setDeleting(false)}
        handleAccept={() => {
          deleteItem();
          setDeleting(false);
        }}
      />
    </ListGroup.Item>
  );
};

export default CourseItem;
