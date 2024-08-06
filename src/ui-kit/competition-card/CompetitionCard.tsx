import { FC } from "react";
import { Competition } from "../../types";
import styles from "./CompetitionCard.module.css";

type Props = {
  data: Competition;
};

export const CompetitionCard: FC<Props> = ({ data }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Начало: <span className={styles.date}>{data.startDate}</span>
        </p>
        <p className={styles.text}>
          Конец: <span className={styles.date}>{data.endDate}</span>
        </p>
      </div>
    </article>
  );
};
