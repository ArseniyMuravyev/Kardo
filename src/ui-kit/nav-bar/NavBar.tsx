import styles from "./NavBar.module.css";
import logo from "/icons/logo.svg";
import clsx from "clsx";
import { FC } from "react";
import searchIcon from "/icons/search.svg";

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
      {isMain && <img className={styles.icon} src={logo} alt="logo" />}
    </div>
    {isTitle && <p className={styles.titleLarge}>{title}</p>}
    <div>
      <img src={searchIcon} alt="search icon" className={styles.search} />
    </div>
  </header>
);
