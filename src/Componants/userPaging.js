import React from "react";

function Pagination(props) {
  console.log("Pagination");
  const totalPages = Math.round(props.totalrecords / props.pagesize);
  const pageNumbers = [];
  for (var i = 1; i <= totalPages; i++) pageNumbers.push(i);
  const data = pageNumbers.map((item) => {
    return (
      <li key={item} onClick={() => props.handlePageClick(item)}>
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
export default React.memo(Pagination);
