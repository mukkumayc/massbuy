import React, { useState, useEffect } from "react";
import Config from "../config";
import { Jumbotron, Container, Button } from "react-bootstrap";

const Course = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState({});

  useEffect(() => {
    let id = window.location.pathname.split("/");
    id = id[id.length - 1];
    fetch(Config.serverUrl + "/course/" + id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCourse(json);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="course">
      {!isLoading && (
        <Jumbotron>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <Button
            onClick={() => {
              let cart = props.cart;
              let item = {
                id: course.id,
                course_name: course.name,
                picture_url: course.picture_url,
              };
              props.setCart(cart.concat(item));
            }}
          >
            Add to cart
          </Button>
        </Jumbotron>
      )}
    </Container>
  );
};

export default Course;
