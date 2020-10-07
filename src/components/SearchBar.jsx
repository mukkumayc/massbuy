import React from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";

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
        term: Yup.string().required("Please select a platform"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        console.log("start searching!");
        props.search({ values }).then(() => {
          console.log("end searching!");
          setSubmitting(false);
        });
        // props.history.push(`/search?term=${values.term}`);
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
              value={values.term}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Search
          </Button>
          <div>{JSON.stringify(values)}</div>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(SearchBar);
