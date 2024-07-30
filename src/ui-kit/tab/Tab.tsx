import styles from "./Tab.module.css";
import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  isActive?: boolean;
  title: string;
};

export const Tab: FC<Props> = ({ icon, isActive, title }) => (
  <button className={styles.tab}>
    <div className={clsx(styles.icon, { [styles.active]: isActive })}>
      {icon}
    </div>
    <p
      className={clsx(styles.title, {
        [styles.active]: isActive,
      })}
    >
      {title}
    </p>
  </button>
);
