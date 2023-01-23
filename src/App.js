import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge, college) => {
    setUsersList((oldUsersList) => [
      { id: Date.now(), name: userName, age: userAge, college },
      ...oldUsersList,
    ]);
  };
  return (
    <div className="app">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
