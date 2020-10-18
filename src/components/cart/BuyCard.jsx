import React from "react";
import { Card, Button } from "react-bootstrap";

const BuyCard = ({ values }) => {
  return (
    <Card className="footer-on-small-devices">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="price">
            Total:{" "}
            {values.courses
              .reduce((acc, c) => acc + parseFloat(c.price) * c.count, 0)
              .toFixed(2)}
          </div>
          <Button type="submit">Buy</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BuyCard;
