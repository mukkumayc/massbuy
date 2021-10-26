import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ICourse, IPageProps } from "../../types";
import requestsWrapper from "../../requestsWrapper";
import getPlatform from "../../lib/getPlatform";
import { useRouter } from "next/router";
import { show as showMessage } from "../../slices/messageModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fold } from "fp-ts/lib/Either";

interface CourseProps extends IPageProps {}

const Course = (props: CourseProps) => {
  const [isLoading, setLoading] = useState(true); // loading info about course
  const [course, setCourse] = useState<ICourse | null>(null); // information about current course
  const userId = useSelector((state: RootState) => state.userId.value);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = window.location.pathname.split("/").pop() || "1";
    requestsWrapper
      .course(id)
      .then(
        fold(
          (e) => dispatch(showMessage({ header: "Error", message: e })),
          setCourse
        )
      )
      .finally(() => setLoading(false));
  }, []);

  const platform = getPlatform(course?.course_link || "");

  return (
    <Container className="course page">
      {!isLoading && (
        <Row className="justify-content-center">
          {course && (
            <Col md="6">
              <Card>
                <Card.Header>
                  <h3>{course.name}</h3>
                </Card.Header>
                <Card.Body>
                  <h5>Description</h5>
                  <p>{course.description}</p>
                  <h5>Additional information</h5>
                  <p>
                    <strong>Price: {course.price}</strong>
                  </p>
                  {platform && (
                    <p>
                      <strong>Platform: {platform}</strong>
                    </p>
                  )}
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Button
                        onClick={() =>
                          requestsWrapper
                            .addCourseToBasket(userId, course.course_id)
                            .then(
                              fold(
                                (err) => {
                                  dispatch(
                                    showMessage({
                                      header: "Error",
                                      message: err,
                                    })
                                  );
                                },
                                () => {
                                  dispatch(
                                    showMessage({
                                      header: "Success",
                                      message: "Course added to the cart",
                                    })
                                  );
                                }
                              )
                            )
                        }
                      >
                        Add to cart
                      </Button>
                    </Col>
                    <Col md="auto">
                      {props.isAdmin && (
                        <Button
                          className="me-3"
                          variant="warning"
                          onClick={() =>
                            router.push(`/courses/update/${course.course_id}`)
                          }
                        >
                          Edit
                        </Button>
                      )}
                      {platform && (
                        <Button
                          variant="secondary"
                          onClick={() =>
                            window?.open(course.course_link, "_blank")?.focus()
                          }
                        >
                          Open on {platform}
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Course;
