import { FC } from "react";
import styles from "./TabList.module.css";
import { Option } from "../../types";

type Props = {
  options: Option[]
  activeTab: string | number
  onChange: (selected: Option['id']) => void;
};

export const TabList: FC<Props> = ({ options, activeTab, onChange }) => {


  return (
    <ul className={styles.tabList}>
      {options.map(({ id, name }) =>
        <li
          key={id}
          className={`${styles.tab} ${id === activeTab ? styles.tabActive : ''}`}
          onClick={() => onChange(id)}
        >
          {name}
        </li>
      )}
    </ul>
  );
}
  
