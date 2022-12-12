import { FunctionComponent } from "react";
import { IUser } from "../../../models/User";
import { Card } from "../../UI/Card";
import styles from "./styles.module.css";

type Props = {
  users: IUser[];
};

export const UsersList: FunctionComponent<Props> = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};
