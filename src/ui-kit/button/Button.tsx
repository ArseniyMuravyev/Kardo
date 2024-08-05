import { FC, ReactNode } from "react";
import styles from "./Button.module.css";
import { ArrowRight } from "../icons/arrows/ArrowRight";
import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  variant: "outline" | "filled" | "text";
  icon?: ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size: "small" | "medium" | "large";
  onClick?: () => void;
  color?: "primary" | "secondary" | "grey";
  grey?: boolean;
  white?: boolean;
  fullWidth?: boolean;
  asLink?: boolean;
  link?: string;
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
  fullWidth,
  grey,
  white,
  asLink,
  link,
}) => {
  if (!asLink) {
    return (
      <button
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          styles[color],
          { [styles.disabled]: disabled, [styles.fullWidth]: fullWidth },
        )}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {icon}
        {size === "small" && <ArrowRight disabled={disabled} grey={grey} />}
        {size === "medium" && <span>{children}</span>}
        {size === "large" && (
          <>
            <span>{children}</span>
            <ArrowRight disabled={disabled} grey={grey} />
          </>
        )}
      </button>
    );
  } else {
    return (
      <Link
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          styles[color],
          { [styles.disabled]: disabled, [styles.fullWidth]: fullWidth },
        )}
        to={link ?? "/"}
      >
        {icon}
        {size === "small" && <ArrowRight disabled={disabled} grey={grey} />}
        {size === "medium" && <span>{children}</span>}
        {size === "large" && (
          <>
            <span>{children}</span>
            <ArrowRight disabled={disabled} grey={grey} white={white} />
          </>
        )}
      </Link>
    );
  }
};
