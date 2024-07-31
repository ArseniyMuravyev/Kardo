import { FC } from "react";
import { Heading } from "../../../ui-kit/heading/Heading";
import { AboutUsCard } from "../../../ui-kit/about-us-card/AboutUsCard";
import styles from "./AboutUs.module.css";

export const AboutUs: FC = () => {
  return (
    <section className={styles.section}>
      <Heading type="h2" direction="vertical">
        О нас
      </Heading>
      <div className={styles.container}>
        <AboutUsCard title="миссия" />
        <AboutUsCard title="цели кардо" />
      </div>
    </section>
  );
};
