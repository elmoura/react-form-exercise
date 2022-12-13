import { useState, FormEvent, ChangeEvent, FunctionComponent } from "react";
import { Card } from "../../UI/Card";
import { Button } from "../../UI/Button";
import styles from "./styles.module.css";
import { IUser } from "../../../models/User";
import { ErrorModal, ModalError } from "../../UI/ErrorModal";
import { Wrapper } from "../../Helpers/Wrapper";

type Props = {
  onAddUser: (user: Omit<IUser, "id">) => void;
};

export const AddUser: FunctionComponent<Props> = ({ onAddUser }) => {
  const emptyError: ModalError = { title: "", message: "" };

  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<ModalError>(emptyError);

  const handleErrorModalConfirmation = (): void => {
    setError(emptyError);
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Something went wrong!",
        message:
          "Both name and age are required. Please fill the fields with data.",
      });
      return;
    }

    if (Number(age) < 1) {
      setError({
        title: "Something went wrong!",
        message: "Your age must be greater than 1.",
      });
      return;
    }

    onAddUser({ name, age: Number(age) });

    setAge("");
    setName("");
  };

  return (
    <Wrapper>
      {error.message && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleErrorModalConfirmation}
        />
      )}
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
          <input
            id="age"
            type="number"
            onChange={handleAgeChange}
            value={age}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
