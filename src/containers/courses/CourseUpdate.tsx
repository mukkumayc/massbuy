import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form as BForm } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import requestsWrapper from "../../requestsWrapper";
import { IUser } from "../../types";
import { useDispatch } from "react-redux";
import { show } from "../../slices/messageModalSlice";
import { useRouter } from "next/router";

interface CourseUpdateProps {}

function CourseUpdate(props: CourseUpdateProps) {
  const router = useRouter();
  const [course, setCourse] = useState<IUser | null>(null);
  const [deleting, setDeleting] = useState(false);
  const { courseId } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    requestsWrapper
      .get(`/api/courses/${courseId}`)
      .then((u) => setCourse(u))
      .catch((err) => console.error(err));
  }, [courseId]);
  return (
    <Container id="update" className="page d-flex justify-content-center">
      <Card id="update-card" className="main-card">
        <Card.Header>
          <h4>Update course</h4>
        </Card.Header>
        <Card.Body>
          {course ? (
            <Formik
              initialValues={course}
              onSubmit={(course, { setSubmitting }) => {
                setSubmitting(true);
                requestsWrapper
                  .post(`/api/courses/update/${courseId}`, course)
                  .then(() =>
                    dispatch(
                      show({
                        header: "Success",
                        message: "Course successfully updated",
                      })
                    )
                  )
                  .catch((err: Error) =>
                    dispatch(show({ header: err.name, message: err.message }))
                  )
                  .finally(() => setSubmitting(false));
              }}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <BForm.Group controlId="name" className="mt-3">
                    <BForm.Label>Name</BForm.Label>
                    <Field className="form-control" type="text" name="name" />
                  </BForm.Group>
                  <BForm.Group controlId="description" className="mt-3">
                    <BForm.Label>Description</BForm.Label>
                    <Field
                      className="form-control"
                      type="textarea"
                      name="description"
                      as="textarea"
                    />
                  </BForm.Group>
                  <BForm.Group controlId="price" className="mt-3">
                    <BForm.Label>Price</BForm.Label>
                    <Field
                      className="form-control"
                      type="number"
                      name="price"
                    />
                  </BForm.Group>
                  <BForm.Group controlId="course_link" className="mt-3">
                    <BForm.Label>Course link</BForm.Label>
                    <Field
                      className="form-control"
                      type="text"
                      name="course_link"
                    />
                  </BForm.Group>
                  <BForm.Group controlId="picture_link" className="mt-3">
                    <BForm.Label>Picture link</BForm.Label>
                    <Field
                      className="form-control"
                      type="text"
                      name="picture_link"
                    />
                  </BForm.Group>
                  <BForm.Group controlId="discount" className="mt-3">
                    <BForm.Label>Discount</BForm.Label>
                    <Field
                      className="form-control"
                      type="number"
                      step="0.01"
                      name="discount"
                    />
                  </BForm.Group>
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting || deleting}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      disabled={isSubmitting || deleting}
                      onClick={() => {
                        setDeleting(true);
                        requestsWrapper
                          .post(`/api/courses/delete/${courseId}`, values)
                          .then(() => {
                            alert("Deleted");
                            setDeleting(false);
                            router.push("/courses/all");
                          });
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseUpdate;
