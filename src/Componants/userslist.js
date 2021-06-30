import React, { useState, useEffect, useCallback } from "react";
import UserFilters from "./userFilters";
import Pagination from "./userPaging";

function UserList(props) {
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [Users, setUsers] = useState([]);
  const [Filters, setFilters] = useState({
    Search: "",
    Department: "",
    Sex: ""
  });
  const [SortOrder, setSortOrder] = useState({ SortBy: "Name", Order: "Asc" });
  const handlePageClick = useCallback((pageid) => {
    setCurrentPage(pageid);
  }, currentPage);

  const HandleFilters = useCallback(
    (event) => {
      setFilters((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
      setCurrentPage(1);
    },
    [Filters]
  );

  const HandleSortOrder = useCallback(
    (SortBy) => {
      const Order =
        SortOrder.SortBy === SortBy && SortOrder.Order === "Asc"
          ? "Dsc"
          : "Asc";

      setSortOrder({ SortBy: SortBy, Order: Order });
    },
    [SortOrder, SortOrder]
  );

  useEffect(() => {
    let tUsers = props.Users;

    tUsers = tUsers.filter((row) => {
      let isValid = true;
      if (Filters.Search !== "") {
        row.Name.toUpperCase().indexOf(Filters.Search.toUpperCase()) === -1
          ? (isValid = false)
          : (isValid = true);
      }
      if (
        isValid === true &&
        Filters.Department !== "" &&
        Filters.Department !== row.Department
      ) {
        isValid = false;
      }
      if (isValid === true && Filters.Sex !== "" && Filters.Sex !== row.Sex) {
        isValid = false;
      }
      return isValid;
    });

    SortOrder.Order === "Asc"
      ? tUsers.sort((a, b) =>
          a[SortOrder.SortBy] > b[SortOrder.SortBy] ? 1 : -1
        )
      : tUsers.sort((a, b) =>
          a[SortOrder.SortBy] < b[SortOrder.SortBy] ? 1 : -1
        );

    setUsers(tUsers);
  }, [Filters, SortOrder, props.Users]);

  const PrintHeading = React.memo((props) => {
    console.log("PrintHeading");
    return (
      <thead>
        <tr>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("Name")}
            >
              Name
            </span>
          </th>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("EmailID")}
            >
              Email
            </span>
          </th>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("Address")}
            >
              Address
            </span>
          </th>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("Department")}
            >
              Department
            </span>
          </th>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("Age")}
            >
              Age
            </span>
          </th>
          <th>
            <span
              className={props.SortOrder.Order}
              onClick={() => props.HandleSortOrder("Sex")}
            >
              Sex
            </span>
          </th>
          <th>
            <span>Action</span>
          </th>
        </tr>
      </thead>
    );
  });

  const PrintBody = (props) => {
    return (
      <tbody>
        {props.Users.length > 0 ? (
          props.Users.map((user) => (
            <PrintUser
              key={user.ID}
              user={user}
              HandleAction={props.HandleAction}
            />
          ))
        ) : (
          <tr>
            <td colSpan="7" className="no-results">
              No results found.
            </td>
          </tr>
        )}
      </tbody>
    );
  };

  const PrintUser = (props) => {
    const user = props.user;
    return (
      <tr>
        <td>{user.Name}</td>
        <td>{user.EmailID}</td>
        <td>{user.Address}</td>
        <td>{user.Department}</td>
        <td>{user.Age}</td>
        <td>{user.Sex}</td>
        <td>
          <span onClick={() => props.HandleAction("Edit", user.ID)}>Edit</span>
          <span> | </span>
          <span onClick={() => props.HandleAction("Delete", user.ID)}>
            Delete
          </span>
        </td>
      </tr>
    );
  };
  const start = currentPage * pageSize - pageSize;
  const end =
    props.Users.length > currentPage * pageSize
      ? currentPage * pageSize
      : props.Users.length;
  const currentUsers = Users.slice(start, end);
  return (
    <>
      {props.Users.length > 0 && (
        <UserFilters Filters={Filters} HandleFilters={HandleFilters} />
      )}

      <div className="user-list">
        <table>
          <PrintHeading
            HandleSortOrder={HandleSortOrder}
            SortOrder={SortOrder}
          />
          <PrintBody Users={currentUsers} HandleAction={props.HandleAction} />
        </table>
      </div>
      {props.Users.length > 0 && (
        <Pagination
          currentpage={currentPage}
          pagesize={pageSize}
          totalrecords={Users.length}
          handlePageClick={handlePageClick}
        />
      )}
    </>
  );
}

export default UserList;
