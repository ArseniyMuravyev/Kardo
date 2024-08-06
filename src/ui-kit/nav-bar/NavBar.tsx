import styles from "./NavBar.module.css";
import logo from "/icons/logo.svg";
import { FC } from "react";
import searchIcon from "/icons/search.svg";
import notificationIcon from "/icons/notification.svg";
import { ArrowLeft } from "../icons/arrows/ArrowLeft";
import { useNavigate } from "react-router-dom";

type Props = {
  isMain?: boolean;
  isTitle?: boolean;
  isBack?: boolean;
  title?: string;
};

export const NavBar: FC<Props> = ({ isMain, title, isTitle, isBack }) => {
  const navigate = useNavigate();

  const onClick = () => navigate(-1);

  return (
    <header className={styles.navBar}>
      {!isBack && (
        <div className={styles.wrapper}>
          <img className={styles.icon} src={logo} alt="logo" />
        </div>
      )}
      {isBack && (
        <button onClick={onClick} className={styles.back}>
          <ArrowLeft isWhite />
        </button>
      )}
      {isTitle && <p className={styles.title}>{title}</p>}
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
};
