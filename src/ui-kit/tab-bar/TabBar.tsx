import styles from "./TabBar.module.css";
import { tabs } from "../../data";
import { Tab } from "../tab/Tab";

export const TabBar = () => (
  <footer className={styles.tabBar}>
    {tabs.map((tab) => (
      <Tab key={tab.title} icon={tab.icon} title={tab.title} link={tab.link} />
    ))}
  </footer>
);
