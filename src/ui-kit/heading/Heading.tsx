import { FC } from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";

type Props = {
  children: string;
  direction?: "vertical" | "horizontal";
  type?: "h1" | "h2" | "h3";
};

export const Heading: FC<Props> = ({
  children,
  direction = "horizontal",
  type,
}) => {
  return (
    <>
      {type === "h1" && (
        <h1 className={clsx(styles.heading, styles[direction], styles[type])}>
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2 className={clsx(styles.heading, styles[direction], styles[type])}>
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3 className={clsx(styles.heading, styles[direction], styles[type])}>
          {children}
        </h3>
      )}
    </>
  );
};
