import { FC } from "react";
import { Heading } from "../../../ui-kit/heading/Heading";
import { AboutUsCard } from "../../../ui-kit/about-us-card/AboutUsCard";
import styles from "./AboutUs.module.css";
import { HomeSlider } from "../home-slider/HomeSlider";

export const AboutUs: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Heading type="h2" direction="vertical">
          О нас
        </Heading>
        <div className={styles.container}>
          <AboutUsCard
            title="миссия"
            content="Создание мира возможностей для людей улиц через переплетение историй и судеб благодаря вашей поддержке."
          />
          <AboutUsCard
            title="цели"
            content="Поиск и поддержка талантов в уличной культуре и спорте, информирование общества"
          />
        </div>
      </div>
      <HomeSlider />
    </section>
  );
};
