import styles from "./Tab.module.css";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  icon: ReactNode;
  isActive?: boolean;
  title: string;
  link: string;
};

export const Tab: FC<Props> = ({ icon, isActive, title, link }) => (
  <Link to={link} className={styles.tab}>
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
  </Link>
);
