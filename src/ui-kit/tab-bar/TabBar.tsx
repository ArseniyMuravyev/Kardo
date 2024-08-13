import styles from "./TabBar.module.css";
import { tabs } from "../../data";
import { Tab } from "../tab/Tab";
import { getPathSegment } from "../../utils/helper";

export const TabBar = () => {

  return (
  <footer className={styles.tabBar}>
    {tabs.map((tab) => (
      <Tab isActive={getPathSegment(window.location.href) === tab.link} key={tab.title} icon={tab.icon} title={tab.title} link={tab.link} />
    ))}
  </footer>
)};
