import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Text.module.scss";

interface IText {
  as?: "h1" | "h2" | "p" | "nav";
  size?: "xl" | "lg" | "md" | "sm";
  fontFamily?: "Montserrat" | "Lora";
  weight?: "normal" | "bold";
  className?: string;
  children: ReactNode;
}

const Text = ({
  as: Tag = "p",
  size = "md",
  fontFamily = "Lora",
  weight = "normal",
  className = "",
  children,
}: IText) => {
  return (
    <Tag
      className={clsx(
        styles.text,
        styles[size],
        styles[fontFamily],
        styles[weight],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
