import { FC } from "react";
import styles from "./DirectionsCard.module.css";
import { DirectionsItem } from "../../types";
import { ArrowRight } from "../icons/arrows/ArrowRight";

type Props = {
  data: DirectionsItem;
};

export const DirectionsCard: FC<Props> = ({ data }) => {
  return (
    <article className={styles.card}>
      <img src={data.image} alt={data.title} className={styles.image} />
      <button className={styles.button}>
        <span className={styles.title}>{data.title}</span>
        <ArrowRight />
      </button>
    </article>
  );
};
