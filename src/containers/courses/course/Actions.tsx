import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import DefaultModal from "../../../components/DefaultModal";
import "./Actions.css";
import CartWrapper from "../../../components/CartWrapper";
import { ICourse } from "../../../types";
import { RouteComponentProps, withRouter } from "react-router";
import requestsWrapper from "../../../requestsWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

interface ActionsProps extends RouteComponentProps {
  cart: CartWrapper;
  course: ICourse;
}

const Actions = ({ cart, course, history }: ActionsProps) => {
  const [show, setShow] = useState(false); // showing alert about successful adding to cart
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const userId = useSelector((state: RootState) => state.userId.value);

  return (
    <Card className="actions footer-on-small-devices">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Button
            disabled={submitting}
            onClick={async () => {
              setSubmitting(true);
              const { description, ...item } = course;
              await requestsWrapper
                .post(
                  `/api/baskets/add_course_to_basket/${userId}/${course.course_id}`
                )
                .then(() => {
                  setStatus("Added to the cart");
                  setShow(true);
                })
                .catch((err) => {
                  setStatus(err.message);
                  setShow(true);
                })
                .finally(() => setSubmitting(false));
              // cart.setItem(course.course_id, item);
            }}
          >
            Add to cart
          </Button>
          <Button
            disabled={submitting}
            variant="warning"
            onClick={() => {
              setSubmitting(true);
              const { description, ...item } = course;
              cart.setItem(course.course_id, item);
              history.push(`/courses/update/${course.course_id}`);
              setSubmitting(false);
            }}
          >
            Edit
          </Button>
        </div>
        <DefaultModal
          show={show}
          handleHide={() => setShow(false)}
          handleAccept={() => setShow(false)}
          bodyText={status}
          acceptButtonText="Ok"
        />
      </Card.Body>
    </Card>
  );
};

export default withRouter(Actions);
