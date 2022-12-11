import React, { FormEvent } from "react";

export const AddUser = () => {
  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />

      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number" />

      <button type="submit">Add user</button>
    </form>
  );
};
