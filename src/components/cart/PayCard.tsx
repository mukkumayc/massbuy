import { foldW } from "fp-ts/lib/Either";
import React, { useState } from "react";
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
  const [payForm, setPayForm] = useState("");
  return (
    <Card className="footer-on-small-devices">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="price">{`Total: ${totalPrice}`}</div>
          <Button
            type="submit"
            onClick={() => {
              requestsWrapper.payment(userId).then(
                foldW(
                  (message) => dispatch(show({ header: "Error", message })),
                  (formText) => {
                    setPayForm(formText);
                    // @ts-ignore
                    document.getElementById("gateway_middle_form")!.submit();
                  }
                )
              );
            }}
          >
            Pay
          </Button>
        </div>
      </Card.Body>
      {payForm.length > 0 && (
        <div
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: payForm }}
        ></div>
      )}
    </Card>
  );
};

export default PayCard;
