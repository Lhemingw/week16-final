import React from "react";
import { useState, useEffect } from "react";
import AboutFinance from "../Components/AboutFinance";
import TableFinance from "../Components/TableFinance";
import Home from "./Home";

export default function Finances() {
  const [users, setUsers] = useState([]);
  const [newPayCheck, setNewPayCheck] = useState("");
  const [newTotalTax, setNewTotalTax] = useState("");
  const [newTotalSaving, setNewTotalSaving] = useState("");

  const [updatedPayCHeck, setUpdatedPayCheck] = useState("");
  const [updatedTotalTax, setUpdatedTotalTax] = useState("");
  const [updatedTotalSaving, setUpdatedTotalSaving] = useState("");
  const [newUser, setNewUser] = useState([
    {
      payCheck: "",
      tax: "",
      totalSaving: "",
      totalTax: "",
    },
  ]);
  const MOCK_API_URL = "https://64e55febc55563802914592e.mockapi.io/Finances";

  //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
  function getUsers() {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  }

  function updateUser(e, userObject) {
    e.preventDefault();
    let updatedUserObject = {
      ...userObject,
      payCheck: updatedPayCheck,
      totalTax: updatedTotalTax,
      totalSaving: updatedTotalSaving,
    };
    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUserObject),
      headers: { "Content-Type": "application/json" },
    }).then(() => getUsers());
  }
  function postNewUser(e, userObject) {
    e.preventDefault();
    fetch(MOCK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payCheck: newPayCheck,
        tax: newTotalTax,
        totalSaving: newTotalSaving,
      }),
    }).then(() => getUsers());
  }
  return (
    <>
      <div>
        <h4>Hi, welcome to the finances page</h4>
        <AboutFinance />
        <TableFinance
          users={users}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
         <Home handleupdatePayHours={handleUpdate} />
         <form>
      <div className=" row text-center">
        <h3 className="header ">POST new Pay Check</h3>
        {/* <div className="col-md-6 ">
            
            </div> */}
        <div className="col-med-6">
          <label className="mb-3 button2"> Total Paycheck</label>
          {/* Label is on top, input is bottom that has the e.target.value to get it initiated */}
          {/* <input type="text" onChange={(e) => setNewPayCheck(e.target.value)}></input> */}
          <input
            type="text"
            className="col-sm-1 button2"
            name="submit"
            value={newPayCheck}
            onChange={(e) => setNewPayCheck(e.target.value)}
          />

          <label className="mb-3 button2">Total Tax</label>
          <input
            type="text"
            className="col-sm-1 button2"
            name="submit"
            value={newTotalTax}
            onChange={(e) => setNewTotalTax(e.target.value)}
          />
          {/* <input type="text" onChange={(e) => setNewTotalTax(e.target.value)}></input> */}

          <label className="mb-3 form-group button2">Total Saving</label>
          <input
            type="text"
            className="mb-5 col-sm-1 button2"
            name="submit"
            value={newTotalSaving}
            onChange={(e) => setNewTotalSaving(e.target.value)}
          />
          {/* <input type="text" onChange={() => setNewTotalSaving(e.target.value)}></input> */}
          <button className="button" onClick={(e) => postNewUser(e)}>
            Submit
          </button>
        </div>
      </div>
    </form>
    {/* <h2>Add Claculator Add a 2nd one here</h2> */}
    {users.map((user, index) => (
      <div className="userContainer" key={index}>
        <div>
          payCheck: {user.payCheck}
          totalTax: {user.tax}
          totalSaving: {user.totalSaving}
          <button className="button " onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>

        <form>
          <h3>Update This Paycheck</h3>
          <label className="container">Updated Pay Check</label>
          <input
            type="text"
            name="submit"
            value={user.payCheck}
            onChange={(e) => setUpdatedPayCheck(e.target.value)}
          />

          <label className="container">Update Pay Check-after tax</label>
          <input
            type="text"
            name="submit"
            value={user.tax}
            onChange={(e) => setUpdatedTotalTax(e.target.value)}
          />
          {/* <input type="text" onChange ={(e) => setUpdatedTotalTax(e.target.value)}></input> */}

          <label className="container">Updated Total Saving</label>
          <input
            type="text"
            name="submit"
            value={user.totalSaving}
            onChange={(e) => setUpdatedTotalSaving(e.target.value)}
          />
          {/* <input type="text" onChange={(e) => setUpdatedTotalSaving(e.target.value)}></input> */}
          <button className="button" onClick={(e) => updateUser(e, user)}>
            Update
          </button>
        </form>
      </div>
    ))}
  </div>
  {/* // CRUD-opperationCreateItem,ReadItem,UpdateItem,DeleteItem */}
    </>
  );
}
