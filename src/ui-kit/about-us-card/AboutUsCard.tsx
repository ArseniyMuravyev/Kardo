import { FC } from "react";
import { Heading } from "../heading/Heading";
import { Button } from "../button/Button";
import { Chevron } from "../icons/chevron/Chevron";
import styles from "./AboutUsCard.module.css";

type Props = {
  title: string;
};

export const AboutUsCard: FC<Props> = ({ title }) => {
  return (
    <article className={styles.card}>
      <Heading type="h3">{title}</Heading>
      <div className={styles.container}>
        <Button variant="text" size="medium" icon={<Chevron />}>
          {" "}
        </Button>
      </div>
    </article>
  );
};
