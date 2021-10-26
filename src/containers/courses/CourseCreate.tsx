import React from "react";
import { Button, Card, Container, Form as BForm } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import requestsWrapper from "../../requestsWrapper";
import { fold } from "fp-ts/lib/Either";

function CourseCreate() {
  return (
    <Container id="create" className="page d-flex justify-content-center">
      <Card id="create-card" className="main-card">
        <Card.Header>
          <h4>Create course</h4>
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: 0,
              course_link: "",
              picture_link: "",
              discount: 0,
            }}
            onSubmit={(course, { setSubmitting }) => {
              setSubmitting(true);
              requestsWrapper
                .createCourse(course)
                .then(
                  fold(
                    (err) => alert(err),
                    (json) => alert(JSON.stringify(json, null, 2))
                  )
                )
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
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
                  <Field className="form-control" type="number" name="price" />
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
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3"
                >
                  Create
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseCreate;
