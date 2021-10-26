import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Link from "next/link";

const createItems = (pagesNum: number) => {
  const locationSearch = new URLSearchParams(window.location.search);
  let publicUrlPathname = "";
  try {
    if (process.env.PUBLIC_URL) {
      publicUrlPathname = new URL(process.env.PUBLIC_URL).pathname;
    }
  } catch (err) {
    if (process.env.PUBLIC_URL) {
      publicUrlPathname = process.env.PUBLIC_URL;
    }
  }
  const items = [];
  if (pagesNum < 100) {
    for (let n = 1; n <= pagesNum; ++n) {
      locationSearch.set("page", n.toString());
      const pathname = window.location.pathname.startsWith(publicUrlPathname)
        ? window.location.pathname.substr(publicUrlPathname.length)
        : window.location.pathname;
      items.push(
        <Link key={n} href={`${pathname}?${locationSearch.toString()}`}>
          <Pagination.Item>{n}</Pagination.Item>
        </Link>
      );
    }
  }
  return items;
};

interface CustomPaginationProps {
  pagesNum: number;
}

const CustomPagination = ({ pagesNum }: CustomPaginationProps) => {
  return (
    <Pagination className="d-flex justify-content-center">
      {createItems(pagesNum)}
    </Pagination>
  );
};

export default CustomPagination;
