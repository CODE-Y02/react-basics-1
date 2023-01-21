import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import "./AddUser.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid username and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be valid ( age > 0 )",
      });
      return;
    }

    // console.log(userName, age);

    props.onAddUser(userName, age);
    setAge("");
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    event.preventDefault();

    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    event.preventDefault();

    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          details={error.message}
          onErrorClose={errorHandler}
        />
      )}
      <Card className="addUser-wrap">
        <form onSubmit={addUserHandler} className="adduser">
          <label htmlFor="username"> User Name</label>
          <input
            id="username"
            value={userName}
            placeholder="Enter User Name"
            type="text"
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            placeholder="Enter Age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
