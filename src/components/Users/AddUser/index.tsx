import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import styles from "./styles.module.css";

export const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      username,
      age,
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={handleUsernameChange}
          value={username}
        />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" onChange={handleAgeChange} value={age} />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
