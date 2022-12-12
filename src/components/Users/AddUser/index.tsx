import { useState, FormEvent, ChangeEvent, FunctionComponent } from "react";
import { Card } from "../../UI/Card";
import { Button } from "../../UI/Button";
import styles from "./styles.module.css";
import { IUser } from "../../../models/User";

type Props = {
  onAddUser: (user: Omit<IUser, "id">) => void;
};

export const AddUser: FunctionComponent<Props> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) return;

    if (Number(age) < 1) return;

    console.log({ age, name });

    onAddUser({ name, age: Number(age) });

    setAge("");
    setName("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input
          id="username"
          type="text"
          onChange={handleUserNameChange}
          value={name}
        />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" onChange={handleAgeChange} value={age} />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
