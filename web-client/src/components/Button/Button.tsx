import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit" | "reset";
  variantType?: "primary" | "secondary" | "white";
  className?: string;
  children?: ReactNode;
  onClick?(): void;
}

const Button = ({
  type = "button",
  variantType = "primary",
  className,
  children,
  onClick,
}: IButton) => {
  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[variantType], className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
