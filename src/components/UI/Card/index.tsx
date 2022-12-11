import { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Card: FunctionComponent<Props> = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
