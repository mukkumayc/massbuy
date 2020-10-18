import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { LinkContainer } from "react-router-bootstrap";

const createItems = (pagesNum) => {
  let locationSearch = new URLSearchParams(window.location.search);
  let publicUrlPathname;
  try {
    publicUrlPathname = new URL(process.env.PUBLIC_URL).pathname;
  } catch (err) {
    publicUrlPathname = process.env.PUBLIC_URL;
  }
  let items = [];
  if (pagesNum < 100) {
    for (let number = 1; number <= pagesNum; ++number) {
      locationSearch.set("page", number);
      let pathname = window.location.pathname.startsWith(publicUrlPathname)
        ? window.location.pathname.substr(publicUrlPathname.length)
        : window.location.pathname;
      items.push(
        <LinkContainer
          key={number}
          to={`${pathname}?${locationSearch.toString()}`}
        >
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
