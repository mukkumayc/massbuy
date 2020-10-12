import React from "react";
import { Formik, FieldArray } from "formik";
import { Button, Col, ListGroup, Row, Form } from "react-bootstrap";

const CourseItem = (props) => {
  const {
    course_name,
    count,
    platforms,
    values,
    index,
    handleChange,
    deleteItem,
    platform,
    price,
    setFieldValue,
  } = props;
  const { courses } = values || {};
  return (
    <ListGroup.Item>
      <Row>
        <Col>{course_name}</Col>
        <Col>
          {values ? (
            <>
              <Button
                variant="danger"
                onClick={() =>
                  courses[index].count > 1
                    ? setFieldValue(
                        `courses[${index}].count`,
                        courses[index].count - 1
                      )
                    : deleteItem()
                }
              >
                -
              </Button>
              {courses[index].count}
              <Button
                variant="success"
                onClick={() =>
                  setFieldValue(
                    `courses[${index}].count`,
                    courses[index].count + 1
                  )
                }
              >
                +
              </Button>
            </>
          ) : (
            count
          )}
        </Col>
        <Col>
          {platforms ? (
            <Form.Control
              as="select"
              name={`courses[${index}].platform`}
              onChange={handleChange}
              defaultValue={courses[index].platform}
            >
              {platforms?.map((p, ind) => (
                <option key={ind}>{`${p.name}`}</option>
              ))}
            </Form.Control>
          ) : (
            platform
          )}
        </Col>
        <Col>
          {platforms
            ? platforms?.find((pl) => pl.name === courses[index].platform)
                ?.price
            : price}
        </Col>
        <Col>
          {deleteItem && (
            <Button variant="danger" onClick={deleteItem}>
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CourseItem;
