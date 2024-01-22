import { ReactNode } from "react";
import styles from "./IconButton.module.css";
import { ButtonCommonProps } from "../Button";

type IconButton = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: ButtonCommonProps["onClick"];
};

export default function IconButton({
  variant = "primary",
  children,
  onClick = () => {},
}: IconButton) {
  return (
    <button
      className={`${styles["icon-button"]} ${
        styles[`icon-button--${variant}`]
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
