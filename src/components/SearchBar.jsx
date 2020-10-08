import React from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const SearchBar = (props) => {
  if (!props.search) {
    console.error("No search function, don't know what to do");
    return;
  }
  return (
    <Formik
      initialValues={{
        term: new URLSearchParams(window.location.search).get("term"),
      }}
      validationSchema={Yup.object().shape({
        term: Yup.string().required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        props.search({ values }).then((res) => {
          setSubmitting(false);
        });
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting, values }) => (
        <Form onSubmit={handleSubmit} inline>
          <Form.Group>
            <Form.Control
              name="term"
              type="text"
              placeholder="Search for courses"
              onChange={handleChange}
              value={values.term || ""}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
