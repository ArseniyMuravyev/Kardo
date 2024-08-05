import { FC } from "react";
import { Heading } from "../heading/Heading";
import styles from "./AboutUsCard.module.css";

type Props = {
  title: string;
  content: string;
};

export const AboutUsCard: FC<Props> = ({ title, content }) => (
  <article className={styles.card}>
    <Heading type="h4">{title}</Heading>
    <p className={styles.content}>{content}</p>
  </article>
);
