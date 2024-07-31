import { FC, ReactNode } from "react";
import { NavBar } from "../../ui-kit/nav-bar/NavBar";
import styles from "./Layout.module.css";
import { TabBar } from "storybook/internal/components";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar isMain />
      <main className={styles.main}>{children}</main>
      <TabBar />
    </>
  );
};
