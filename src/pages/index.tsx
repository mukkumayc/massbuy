import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  useRouter().push("/courses/all");
  return <></>;
};

export default Index;
