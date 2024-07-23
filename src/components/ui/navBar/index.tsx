import classNames from "classnames";
import classes from "./style.module.scss";
import icon from "../../assets/images/icon/icon-kardo.svg";

const NavBar = ({
  isMain,
  isBack,
  isTitle,
  title,
  isDelete,
  isMessage,
  isSettings,
  isSearch,
  isNotice,
}) => {
  const navBarStyle = classNames(classes["nav-bar"], {
    [classes["nav-bar_back"]]: isMain,
  });

  return (
    <header className={navBarStyle}>
      <div className={classes["nav-bar__wrapper"]}>
        {isMain && (
          <img className={classes["nav-bar__icon"]} src={icon} alt="icon" />
        )}
        {isBack && (
          <a className={classes["nav-bar__back"]} href="/">
            Назад
          </a>
        )}
        {/* <p className={classes['nav-bar__title']}>Главная</p> */}
        <ul className={classes["nav-bar__button-list"]}>
          {isSearch && (
            <li
              className={classNames(
                classes["nav-bar__button"],
                classes["nav-bar__button_search"],
              )}
            />
          )}
          {isNotice && (
            <li
              className={classNames(
                classes["nav-bar__button"],
                classes["nav-bar__button_notice"],
              )}
            />
          )}
          {isMessage && (
            <li
              className={classNames(
                classes["nav-bar__button"],
                classes["nav-bar__button_message"],
              )}
            />
          )}
          {isSettings && (
            <li
              className={classNames(
                classes["nav-bar__button"],
                classes["nav-bar__button_settings"],
              )}
            />
          )}
          {isDelete && (
            <li
              className={classNames(
                classes["nav-bar__button"],
                classes["nav-bar__button_delete"],
              )}
            />
          )}
        </ul>
      </div>
      {isTitle && <p className={classes["nav-bar__title_large"]}>{title}</p>}
    </header>
  );
};

export default NavBar;
