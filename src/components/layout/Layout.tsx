import { FC, ReactNode } from "react";
import { NavBar } from "../../ui-kit/nav-bar/NavBar";
import styles from "./Layout.module.css";
import { TabBar } from "../../ui-kit/tab-bar/TabBar";
import clsx from "clsx";
import { StatusBar } from "../../ui-kit/status-bar/StatusBar";
import { ModalInfo } from "../modal-info/ModalInfo";

type Props = {
  children: ReactNode;
  isMain?: boolean;
  isBack?: boolean;
  isTitle?: boolean;
  title?: string;
};

export const Layout: FC<Props> = ({
  children,
  isMain = false,
  isBack = false,
  isTitle = false,
  title,
}) => {
  return (
    <>
      <StatusBar />
      <NavBar isMain={isMain} isTitle={isTitle} isBack={isBack} title={title} />
      <main className={clsx(styles.main, { [styles.grey]: isMain })}>
        {children}
      </main>
      <TabBar />
      <ModalInfo />
    </>
  );
};
