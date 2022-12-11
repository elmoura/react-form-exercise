import { FunctionComponent, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<Props> = ({
  type,
  children,
  ...rest
}: Props) => {
  return (
    <button className={styles.button} type={type || "button"} {...rest}>
      {children}
    </button>
  );
};
