import { FC, useEffect, useState } from "react";
import styles from "./CompetitionCards.module.css";
import { CompetitionCard } from "../../../ui-kit/competition-card/CompetitionCard";
import { CompetitionsService } from "../../../services/competitions.service";
import { TCompetitionCard } from "../../../types";

export const CompetitionCards: FC = () => {
  const [competitionsList, setCompetitionsList] = useState<TCompetitionCard[]>([] as unknown as TCompetitionCard[])

  function getCompetitions() {
    return CompetitionsService
      .getCompetitionsAll()
      .then((res) => {setCompetitionsList(res)})
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

useEffect(() => {
  getCompetitions()
}, [])

  return (
    <section className={styles.section}>
      {competitionsList.map((competition) => (
        <CompetitionCard key={competition.competitionType} data={competition} />
      ))}
    </section>
  );
};
