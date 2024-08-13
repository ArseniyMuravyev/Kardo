import { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { Heading } from "../../ui-kit/heading/Heading";
import { CompetitionCards } from "../../components/competitions/competiton-cards/CompetitionCards";
import styles from "./Competitions.module.css";

export const CompetitionsPage: FC = () => {
  return (
    <Layout isBack isTitle title="flyblueyes">
      <Heading type="h2">Подать заявку</Heading>
      <CompetitionCards />
      <div className={styles.wrapper}>
        <img src="/images/competitions.png" alt="components image" />
      </div>
    </Layout>
  );
};
