import { Fragment, useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";
import { IUser } from "./models/User";

function App() {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  const addUserHandler = (newUser: Omit<IUser, "id">) => {
    setUsersList((exisitingUsers) => [
      { ...newUser, id: Math.random().toString() },
      ...exisitingUsers,
    ]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
