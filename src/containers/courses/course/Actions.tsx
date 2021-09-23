import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DefaultModal from "../../../components/DefaultModal";
import "./Actions.css";
import { ICourse } from "../../../types";
import { RouteComponentProps, withRouter } from "react-router";
import requestsWrapper from "../../../requestsWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface ActionsProps extends RouteComponentProps {
  course: ICourse;
}

const Actions = ({ course, history }: ActionsProps) => {
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
            }}
          >
            Add to cart
          </Button>
          <Button
            disabled={submitting}
            variant="warning"
            onClick={() => {
              setSubmitting(true);
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
