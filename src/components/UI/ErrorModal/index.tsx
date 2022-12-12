import { FunctionComponent } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import styles from "./styles.module.css";

export type ModalError = {
  title: string;
  message: string;
};

type Props = ModalError & {
  onConfirm: () => void;
};

export const ErrorModal: FunctionComponent<Props> = ({
  title,
  message,
  onConfirm,
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
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
