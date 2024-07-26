import styles from "./NavBar.module.css";
import icon from "../../assets/icons/icon-kardo.svg";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  isMain?: boolean;
  isBack?: boolean;
  isTitle?: boolean;
  title?: string;
  isDelete?: boolean;
  isMessage?: boolean;
  isSettings?: boolean;
  isSearch?: boolean;
  isNotice?: boolean;
};

export const NavBar: FC<Props> = ({
  isMain,
  isBack,
  isTitle,
  title,
  isDelete,
  isMessage,
  isSettings,
  isSearch,
  isNotice,
}) => (
  <header
    className={clsx(styles.navBar, {
      [styles.back]: isMain,
    })}
  >
    <div className={styles.wrapper}>
      {isMain && <img className={styles.icon} src={icon} alt="icon" />}
      {isBack && (
        <a className={styles.back} href="/">
          Назад
        </a>
      )}
      <ul className={styles.list}>
        {isSearch && <li className={clsx(styles.button, styles.search)} />}
        {isNotice && <li className={clsx(styles.button, styles.notice)} />}
        {isMessage && <li className={clsx(styles.button, styles.message)} />}
        {isSettings && <li className={clsx(styles.button, styles.settings)} />}
        {isDelete && <li className={clsx(styles.button, styles.delete)} />}
      </ul>
    </div>
    {isTitle && <p className={styles.titleLarge}>{title}</p>}
  </header>
);
