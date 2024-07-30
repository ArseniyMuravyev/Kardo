import { FC, ReactNode } from "react";
import styles from "./Button.module.css";
import { ArrowRight } from "../icons/arrows/ArrowRight";

type Props = {
  children: string;
  variant: "outline" | "filled" | "text";
  icon?: ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size: "small" | "medium" | "large";
  onClick?: () => void;
  color?: "primary" | "secondary";
};

export const Button: FC<Props> = ({
  children,
  variant,
  icon,
  disabled = false,
  type = "button",
  size = "medium",
  color = "primary",
  onClick,
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[color]} ${disabled ? styles.disabled : ""}`}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {icon}
    {size === "small" && <ArrowRight disabled={disabled} />}
    {size === "medium" && <span>{children}</span>}
    {size === "large" && (
      <>
        <span>{children}</span>
        <ArrowRight disabled={disabled} />
      </>
    )}
  </button>
);
