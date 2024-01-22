import { ButtonCommonProps } from "../Button";
import styles from "./ButtonCTA.module.css";

export default function ButtonCTA({
  label,
  variant,
  onClick = () => {},
}: ButtonCommonProps) {
  return (
    <button
      className={`${styles.buttonCTA} ${styles[`buttonCTA--${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
