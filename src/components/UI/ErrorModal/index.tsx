import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import ReactDOM from "react-dom";
import { Card } from "../Card";
import { Button } from "../Button";
import styles from "./styles.module.css";

export const Backdrop: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return <div className={styles.backdrop} {...rest}></div>;
};

export type ModalError = {
  title: string;
  message: string;
};

type Props = ModalError & {
  onConfirm: () => void;
};

const ModalOverlay: FunctionComponent<Props> = ({
  title,
  message,
  onConfirm,
}) => {
  return (
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
  );
};

export const ErrorModal: FunctionComponent<Props> = ({
  title,
  message,
  onConfirm,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById("backdrop-root")!
      )}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};
