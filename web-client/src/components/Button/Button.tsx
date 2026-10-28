import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit" | "reset";
  variantType?: "primary" | "secondary" | "white";
  className?: string;
  children?: ReactNode;
}

const Button = ({
  type = "button",
  variantType = "primary",
  className,
  children,
}: IButton) => {
  return (
    <>
      <button
        type={type}
        className={clsx(styles.button, styles[variantType], className)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
