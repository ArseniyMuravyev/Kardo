import HomeIcon from "../icons/home";
import NewsIcon from "../icons/news";
import ProfileIcon from "../icons/profile";
import TrophyIcon from "../icons/trophy";
import classes from "./style.module.scss";
import Tab from "./tab";

const TabBar = () => (
  <footer className={classes["tab-bar"]}>
    <Tab element={HomeIcon} title="Главная" />
    <Tab element={TrophyIcon} title="Конкурсы" />
    <Tab element={NewsIcon} title="Лента" />
    <Tab element={ProfileIcon} title="Профиль" />
  </footer>
);

export default TabBar;
