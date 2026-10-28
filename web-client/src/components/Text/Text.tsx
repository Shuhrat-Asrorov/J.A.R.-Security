import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Text.module.scss";

interface IText {
  children: ReactNode;
  size?: "xl" | "lg" | "md" | "sm";
  as?: "h1" | "h2" | "p" | "nav";
  className?: string;
  fontFamily: "Montserrat" | "Lora";
}

const Text = ({
  children,
  size = "md",
  className = "",
  as: Tag = "p",
}: IText) => {
  return (
    <Tag className={clsx(styles.text, styles[size], className)}>{children}</Tag>
  );
};

export default Text;
