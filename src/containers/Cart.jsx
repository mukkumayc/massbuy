import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import CourseItem from "../components/CourseItem";
import { FieldArray, Formik } from "formik";

const Cart = (props) => {
  return (
    <Container className="cart">
      <Formik
        initialValues={{
          courses: Array.from(props.cart, (v, k) => v[1]).map((value, ind) => {
            return { ...value };
          }),
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <FieldArray name="courses">
              {({ remove }) => (
                <ListGroup>
                  <CourseItem
                    key={-1}
                    course_name="Course name"
                    count="Count"
                    price="Price"
                    platform="Platform"
                  />
                  {Array.from(props.cart, (v, k) => v[1]).map((value, ind) => (
                    <CourseItem
                      index={ind}
                      key={value.id}
                      {...value}
                      deleteItem={() => {
                        let cart = new Map(props.cart);
                        if (!cart.delete(value.id)) {
                          console.error("Not found the item in cart to delete");
                          return;
                        }
                        remove(ind);
                        props.setCart(cart);
                      }}
                      handleChange={handleChange}
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  ))}
                  <ListGroup.Item>
                    Total:{" "}
                    {values.courses.reduce(
                      (acc, c) => acc + parseFloat(c.price) * c.count,
                      0
                    )}
                  </ListGroup.Item>
                </ListGroup>
              )}
            </FieldArray>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Cart;
