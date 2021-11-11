import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import withAuth from "../../../components/routing/withAuth";
import { useRouter } from "next/router";
import requestsWrapper from "../../../requestsWrapper";
import { fold } from "fp-ts/lib/Either";

const Success = () => {
  const [verifyingToken, setVerifyingToken] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const { token } = router.query;
    console.log(token);
    if (token === undefined || token instanceof Array) {
      console.warn("Payment token not found or it is array(!)");
      router.push("/");
    } else {
      requestsWrapper.checkPayment(token).then(
        fold(
          (err) => {
            console.error(err);
            router.push("/");
          },
          () => setVerifyingToken(false)
        )
      );
    }
  }, []);
  return (
    <Container className="page">
      {!verifyingToken && (
        <Row className="justify-content-center">
          <Col md="auto">
            <h1 className="text-success">Successful</h1>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default withAuth(Success);
