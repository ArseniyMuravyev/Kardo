import styles from "./NavBar.module.css";
import logo from "/icons/logo.svg";
import clsx from "clsx";
import { FC } from "react";
import searchIcon from "/icons/search.svg";
import notificationIcon from "/icons/notification.svg";

type Props = {
  isMain?: boolean;
  isTitle?: boolean;
  title?: string;
};

export const NavBar: FC<Props> = ({ isMain, title, isTitle }) => (
  <header
    className={clsx(styles.navBar, {
      [styles.back]: isMain,
    })}
  >
    <div className={styles.wrapper}>
      <img className={styles.icon} src={logo} alt="logo" />
    </div>
    {isTitle && <p className={styles.titleLarge}>{title}</p>}
    <div className={styles.iconWrapper}>
      {!isMain && (
        <img
          src={notificationIcon}
          alt="notification icon"
          className={styles.notification}
        />
      )}
      <img src={searchIcon} alt="search icon" className={styles.search} />
    </div>
  </header>
);
