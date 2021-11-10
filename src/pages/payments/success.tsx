import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import withAuth from "../../components/routing/withAuth";
import { useRouter } from "next/router";

const Success = () => {
  const [verifyingToken, setVerifyingToken] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const { token } = router.query;
    console.log(token);
    if (token === undefined) {
      router.push("/");
    } else {
      setVerifyingToken(false);
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
