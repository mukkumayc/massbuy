import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CourseItem from "./CourseItem";
import { FieldArray } from "formik";

const CartList = ({ cart, values, handleChange, setFieldValue }) => {
  return (
    <FieldArray name="courses">
      {({ remove }) => (
        <Card>
          <ListGroup variant="flush">
            {(() => {
              let res = Array.from(cart.data(), (v, k) => v[1]).map(
                (value, ind) => {
                  return (
                    <CourseItem
                      index={ind}
                      key={value.id}
                      {...value}
                      deleteItem={() => {
                        if (!cart.removeItem(value.id)) {
                          console.error("Not found the item in cart to delete");
                          return;
                        }

                        remove(ind);
                      }}
                      handleChange={handleChange}
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  );
                }
              );
              if (res.length === 0) {
                res = (
                  <Card.Body>
                    <h5>Empty. Go and add something to the cart!</h5>
                  </Card.Body>
                );
              }
              return res;
            })()}
          </ListGroup>
        </Card>
      )}
    </FieldArray>
  );
};

export default CartList;
