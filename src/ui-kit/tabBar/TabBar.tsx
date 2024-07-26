import { HomeIcon } from "../icons/home/HomeIcon";
import { NewsIcon } from "../icons/news/NewsIcon";
import { ProfileIcon } from "../icons/profile/ProfileIcon";
import { TrophyIcon } from "../icons/trophy/TropyIcon";
import styles from "./TabBar.module.css";
import { Tab } from "./tab/Tab";

export const TabBar = () => (
  <footer className={styles.tabBar}>
    <Tab icon={<HomeIcon />} title="Главная" isActive />
    <Tab icon={<TrophyIcon />} title="Конкурсы" />
    <Tab icon={<NewsIcon />} title="Лента" />
    <Tab icon={<ProfileIcon />} title="Профиль" />
  </footer>
);
