import { FC } from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";

type Props = {
  children: string;
  direction?: "vertical" | "horizontal";
  color?: "white" | "accent";
  type: "h1" | "h2" | "h3" | "h4";
};

export const Heading: FC<Props> = ({
  children,
  direction = "horizontal",
  type,
  color = "accent",
}) => (
  <>
    {type === "h1" && (
      <h1
        className={clsx(
          styles.heading,
          styles[direction],
          styles[type],
          styles[color],
        )}
      >
        {children}
      </h1>
    )}
    {type === "h2" && (
      <h2
        className={clsx(
          styles.heading,
          styles[direction],
          styles[type],
          styles[color],
        )}
      >
        {children}
      </h2>
    )}
    {type === "h3" && (
      <h3
        className={clsx(
          styles.heading,
          styles[direction],
          styles[type],
          styles[color],
        )}
      >
        {children}
      </h3>
    )}
    {type === "h4" && (
      <h4
        className={clsx(
          styles.heading,
          styles[direction],
          styles[type],
          styles[color],
        )}
      >
        {children}
      </h4>
    )}
  </>
);
