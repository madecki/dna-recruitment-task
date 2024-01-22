import styles from "./Button.module.css";

export type ButtonCommonProps = {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
};

type ButtonProps = {
  size?: "regular" | "large";
} & ButtonCommonProps;

export default function Button({
  variant = "primary",
  size = "regular",
  label,
  onClick = () => {},
}: ButtonProps) {
  const variantClassName = styles[`button--${variant}`];
  const sizeClassName = styles[`button--${size}`];

  return (
    <button
      className={`${styles.button} ${variantClassName} ${sizeClassName}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
