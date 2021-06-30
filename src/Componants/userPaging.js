import React from "react";

export default function Pagination(props) {
  const totalPages = Math.round(props.totalrecords / props.pagesize);
  const pageNumbers = [];
  for (var i = 1; i <= totalPages; i++) pageNumbers.push(i);
  const data = pageNumbers.map((item) => {
    return (
      <li onClick={() => props.handlePageClick(item)} key={item}>
        {item}
      </li>
    );
  });

  return (
    <div className="pagging">
      <ul>{data}</ul>
    </div>
  );
}
