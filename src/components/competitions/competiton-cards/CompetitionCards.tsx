import { FC } from "react";
import styles from "./CompetitionCards.module.css";
import { competitions } from "../../../data";
import { CompetitionCard } from "../../../ui-kit/competition-card/CompetitionCard";

export const CompetitionCards: FC = () => {
  return (
    <section className={styles.section}>
      {competitions.map((competition) => (
        <CompetitionCard key={competition.title} data={competition} />
      ))}
    </section>
  );
};
