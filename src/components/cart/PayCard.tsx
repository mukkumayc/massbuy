import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import requestsWrapper from "../../requestsWrapper";
import { show } from "../../slices/messageModalSlice";
import { RootState } from "../../store";

interface BuyCardProps {
  totalPrice: number;
}

const PayCard = ({ totalPrice }: BuyCardProps) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userId.value);
  return (
    <Card className="footer-on-small-devices">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="price">{`Total: ${totalPrice}`}</div>
          <Button
            type="submit"
            onClick={() => {
              requestsWrapper
                .post(`/api/orders/payment/${userId}`)
                .then(console.log)
                .catch((err) =>
                  dispatch(show({ header: "Error", message: err.message }))
                );
            }}
          >
            Pay
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PayCard;
