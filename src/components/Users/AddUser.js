import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/wrapper";

import "./AddUser.css";

const AddUser = (props) => {
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();
  const userCollegeInputRef = useRef();
  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log();
    const enteredName = userNameInputRef.current.value;
    const enteredAge = userAgeInputRef.current.value;
    const college = userCollegeInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      !college.trim().length
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid username and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be valid ( age > 0 )",
      });
      return;
    }

    // console.log(userName, age);

    props.onAddUser(enteredName, enteredAge, college);
    // setAge("");
    // setUserName("");

    // reseting
    userNameInputRef.current.value = "";
    userAgeInputRef.current.value = "";
    userCollegeInputRef.current.value = "";
  };

  // const userNameChangeHandler = (event) => {
  //   event.preventDefault();

  //   setUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   event.preventDefault();

  //   setAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
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
            // value={userName}
            placeholder="Enter User Name"
            type="text"
            ref={userNameInputRef}
            // onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            // value={age}
            ref={userAgeInputRef}
            placeholder="Enter Age"
            // onChange={ageChangeHandler}
          />
          <label htmlFor="college">College</label>
          <input type="text" id="college" ref={userCollegeInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
