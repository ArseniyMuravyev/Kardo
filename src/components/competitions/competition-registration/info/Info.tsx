import { FC } from "react";
import styles from "./Info.module.css";
import { dateFormat } from "../../../../utils/helper";

interface Props {
  competitionType: string
  startDate: string
  endDate: string
  location: string
}

export const Info: FC<Props> = ({competitionType, startDate, endDate, location}) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{`${competitionType} КАРДО — ${location}`}</h2>
      <div className={styles.container}>
        <p className={styles.subtitle}>Начало: <span className={styles.span}>{dateFormat(startDate)}</span></p>
        <p className={styles.subtitle}>Конец: <span className={styles.span}>{dateFormat(endDate)}</span></p>
      </div>
    </article>
  );
};
