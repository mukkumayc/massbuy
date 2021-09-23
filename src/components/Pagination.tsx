import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { LinkContainer } from "react-router-bootstrap";

const createItems = (pagesNum: number) => {
  const locationSearch = new URLSearchParams(window.location.search);
  let publicUrlPathname;
  try {
    publicUrlPathname = new URL(process.env.PUBLIC_URL).pathname;
  } catch (err) {
    publicUrlPathname = process.env.PUBLIC_URL;
  }
  const items = [];
  if (pagesNum < 100) {
    for (let n = 1; n <= pagesNum; ++n) {
      locationSearch.set("page", n.toString());
      const pathname = window.location.pathname.startsWith(publicUrlPathname)
        ? window.location.pathname.substr(publicUrlPathname.length)
        : window.location.pathname;
      items.push(
        <LinkContainer key={n} to={`${pathname}?${locationSearch.toString()}`}>
          <Pagination.Item>{n}</Pagination.Item>
        </LinkContainer>
      );
    }
  }
  return items;
};

interface CustomPaginationProps {
  pagesNum: number;
}

const CustomPagination = ({ pagesNum }: CustomPaginationProps) => {
  return <Pagination>{createItems(pagesNum)}</Pagination>;
};

export default CustomPagination;
