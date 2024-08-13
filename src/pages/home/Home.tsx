import { FC } from "react";
import { Hero } from "../../components/home/hero/Hero";
import { Layout } from "../../components/layout/Layout";
import { AboutUs } from "../../components/home/about-us/AboutUs";
import { Directions } from "../../components/home/directions/Directions";
import styles from "./Home.module.css";

export const HomePage: FC = () => (
  <Layout isMain>
    <Hero />
    <div className={styles.wrapper}>
      <AboutUs />
      <Directions />
    </div>
  </Layout>
);
