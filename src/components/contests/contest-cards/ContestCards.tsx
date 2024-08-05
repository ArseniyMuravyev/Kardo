import { FC } from "react";
import styles from "./ContestCards.module.css";
import { ContestCard } from "../../../ui-kit/contest-card/ContestCard";
import { contests } from "../../../data";

export const ContestCards: FC = () => (
  <section className={styles.section}>
    {contests.map((contest) => (
      <ContestCard key={contest.title} data={contest} />
    ))}
  </section>
);
