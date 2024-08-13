import { FC } from "react";
import { TCompetitionCard } from "../../types";
import styles from "./CompetitionCard.module.css";
import { Link } from "react-router-dom";
import { dateFormat } from "../../utils/helper";

type Props = {
  data: TCompetitionCard;
};

export const CompetitionCard: FC<Props> = ({ data }) => {

  return (
    <Link to={`/contests/competitions/${data.id}`} >
    <article className={styles.card}>
      <h3 className={styles.title}>{data.competitionType}</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Начало: <span className={styles.date}>{dateFormat(data.startDate)}</span>
        </p>
        <p className={styles.text}>
          Конец: <span className={styles.date}>{dateFormat(data.endDate)}</span>
        </p>
      </div>
    </article>
    </Link>
  );
};
