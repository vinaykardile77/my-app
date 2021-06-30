import React, { useState, useRef, useEffect } from "react";
import { Departments, Module } from "./utility";

function UserForm(props) {
  const nameRef = useRef(null);
  const [User, setUser] = useState(props.user);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const HandleChange = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Module>
      <div className="user-form">
        <h2>{props.action === "Add" ? "Add new user" : "Edit user"}</h2>

        <form
          onSubmit={props.handelSubmit}
          noValidate
          className={props.InputError}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="Name">Name</label>
                </td>
                <td>
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    ref={nameRef}
                    maxLength="100"
                    value={User.Name}
                    onChange={HandleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Email">Email</label>
                </td>
                <td>
                  <input
                    id="Email"
                    name="EmailID"
                    type="email"
                    maxLength="100"
                    value={User.EmailID}
                    onChange={HandleChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Address">Adreess</label>
                </td>
                <td>
                  <textarea
                    name="Address"
                    value={User.Address}
                    maxLength="1000"
                    onChange={HandleChange}
                    required
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Department">Department</label>
                </td>
                <td>
                  <select
                    id="Department"
                    name="Department"
                    value={User.Department}
                    onChange={HandleChange}
                    required
                  >
                    <Departments Text="Select Department" />
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Age">Age</label>
                </td>
                <td>
                  <input
                    id="Age"
                    name="Age"
                    type="number"
                    value={User.Age}
                    onChange={HandleChange}
                    min="18"
                    max="100"
                    required
                    pattern="\d+"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Sex">Sex</label>
                </td>
                <td>
                  <label>
                    <input
                      name="Sex"
                      type="radio"
                      value="Male"
                      checked={User.Sex === "Male"}
                      onChange={HandleChange}
                    ></input>
                    Male
                  </label>
                  <label>
                    <input
                      name="Sex"
                      type="radio"
                      value="Female"
                      checked={User.Sex === "Female"}
                      onChange={HandleChange}
                    ></input>
                    Female
                  </label>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit"></input>
                  <input
                    type="button"
                    value="Cancle"
                    onClick={() => props.HandleAction("", "")}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </Module>
  );
}
export default UserForm;
