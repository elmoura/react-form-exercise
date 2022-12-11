import { FormEvent } from "react";
import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import styles from "./styles.module.css";

export const AddUser = () => {
  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />

        <Button>Add user</Button>
      </form>
    </Card>
  );
};
