import { FC, ReactNode } from "react";
import { NavBar } from "../../ui-kit/nav-bar/NavBar";
import styles from "./Layout.module.css";
import { TabBar } from "../../ui-kit/tab-bar/TabBar";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  isMain?: boolean;
};

export const Layout: FC<Props> = ({ children, isMain = false }) => {
  return (
    <>
      <NavBar isMain={isMain} />
      <main className={clsx(styles.main, { [styles.grey]: isMain })}>
        {children}
      </main>
      <TabBar />
    </>
  );
};
