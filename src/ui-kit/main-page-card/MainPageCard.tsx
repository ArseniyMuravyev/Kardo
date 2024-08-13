import { FC } from "react";
import { Button } from "../button/Button";
import styles from "./MainPageCard.module.css";

type Props = {
  title: string;
};

export const MainPageCard: FC<Props> = ({ title }) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.container}>
      <Button variant="text" color="primary" size="large">
        Подробнее
      </Button>
    </div>
  </article>
);
