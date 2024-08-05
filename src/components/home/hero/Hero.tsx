import { FC } from "react";
import styles from "./Hero.module.css";
import { Button } from "../../../ui-kit/button/Button";
import { CompetitionCard } from "../../../ui-kit/competition-card/CompetitionCard";

export const Hero: FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Kardo</h1>
      <div>
        <img src="/images/hero.png" alt="hero image" className={styles.image} />
      </div>
      <p className={styles.text}>
        Регистрация на национальные <br /> и региональные этапы!
      </p>
      <Button variant="filled" size="medium" fullWidth>
        Подать заявку
      </Button>
      <CompetitionCard title="Соревнования 22-25 августа" />
    </section>
  );
};
