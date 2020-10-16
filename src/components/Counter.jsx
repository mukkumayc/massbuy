import React from "react";
import { Button } from "react-bootstrap";

const Counter = ({ count, setCount, setDeleting }) => {
  return (
    <div className="d-flex flex-row align-items-center counter">
      <Button
        className="py-0 px-1 counter-button"
        variant="danger"
        onClick={() => (count > 1 ? setCount(count - 1) : setDeleting(true))}
      >
        -
      </Button>
      <span className="mx-2">{count}</span>
      <Button
        className="py-0 px-1 counter-button"
        variant="success"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
