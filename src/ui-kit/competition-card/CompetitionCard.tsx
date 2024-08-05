import { FC } from "react";
import styles from "./CompetitionCard.module.css";
import { Button } from "../button/Button";

type Props = {
  title: string;
};

export const CompetitionCard: FC<Props> = ({ title }) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.container}>
      <Button variant="text" color="primary" size="large">
        Подробнее
      </Button>
    </div>
  </article>
);
