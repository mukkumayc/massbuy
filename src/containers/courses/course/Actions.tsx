import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DefaultModal from "../../../components/DefaultModal";
import { ICourse } from "../../../types";
import requestsWrapper from "../../../requestsWrapper";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../../store";

interface ActionsProps {
  course: ICourse;
}

const Actions = ({ course }: ActionsProps) => {
  const [show, setShow] = useState(false); // showing alert about successful adding to cart
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const userId = useSelector((state: RootState) => state.userId.value);
  const router = useRouter();

  return (
    <Card className="actions footer-on-small-devices">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
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
              router.push(`/courses/update/${course.course_id}`);
              setSubmitting(false);
            }}
          >
            Edit
          </Button>
        </div>
        <a href={course.course_link}>To the course page on platform</a>
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

export default Actions;
