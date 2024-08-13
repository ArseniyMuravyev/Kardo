import { FC } from "react";
import styles from "./ContestCard.module.css";
import { Contest } from "../../types";
import { Heading } from "../heading/Heading";
import { Button } from "../button/Button";

type Props = {
  data: Contest;
};

export const ContestCard: FC<Props> = ({ data }) => {
  return (
    <article className={styles.card}>
      <Heading type="h2" color="white">
        {data.title}
      </Heading>
      <p className={styles.description}>{data.description}</p>
      <Button asLink link={data.link} variant="filled" size="large" isWhite>
        Подробнее
      </Button>
    </article>
  );
};
