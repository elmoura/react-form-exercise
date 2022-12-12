import { Card } from "../Card";
import { Button } from "../Button";
import { FunctionComponent } from "react";
import styles from "./styles.module.css";

export type ModalError = {
  title: string;
  message: string;
};

type Props = ModalError & {
  onClickOk: () => void;
};

export const ErrorModal: FunctionComponent<Props> = ({
  title,
  message,
  onClickOk,
}) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>

        <div className={styles.content}>
          <p>{message}</p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={onClickOk}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
