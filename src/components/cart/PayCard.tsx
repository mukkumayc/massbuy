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
              requestsWrapper
                .post(`/api/orders/payment/${userId}`)
                .then((formText) => {
                  setPayForm(formText);
                  // @ts-ignore
                  document.getElementById("gateway_middle_form")!.submit();
                  // const form = new DOMParser().parseFromString(formText, "text/html");
                  // // why emoji?
                  // const emoji = form.querySelector("#gateway_middle_form input[name='emoji']")?.getAttribute("value");
                  // const formData = new FormData();
                  // if (!emoji) {
                  //   throw new Error("Emoji value not found");
                  // }
                  // formData.append("emoji", emoji);
                  // return fetch("https://paydev.spbu.ru/gateway/index.php", {
                  //   method: "post",

                  // })
                })
                .catch((err) =>
                  dispatch(show({ header: "Error", message: err.message }))
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
