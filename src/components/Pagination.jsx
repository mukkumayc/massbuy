import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { LinkContainer } from "react-router-bootstrap";

const createItems = (pagesNum) => {
  let items = [];
  if (pagesNum < 100) {
    for (let number = 1; number <= pagesNum; ++number) {
      items.push(
        <LinkContainer key={number} to={"/?page=" + number.toString()}>
          <Pagination.Item>{number}</Pagination.Item>
        </LinkContainer>
      );
    }
  }
  return items;
};

const CustomPagination = (props) => {
  return <Pagination>{createItems(props.pagesNum)}</Pagination>;
};

export default CustomPagination;
