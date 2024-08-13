import { FC } from "react";
import { Heading } from "../../../ui-kit/heading/Heading";
import { DirectionsCard } from "../../../ui-kit/directions-card/DirectionsCard";
import { directions } from "../../../data";
import styles from "./Diretions.module.css";

export const Directions: FC = () => {
  return (
    <section className={styles.section}>
      <Heading direction="vertical" type="h2">
        направления
      </Heading>
      {directions.map((direction) => (
        <DirectionsCard key={direction.title} data={direction} />
      ))}
    </section>
  );
};
