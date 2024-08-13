import { FC } from "react";
import { Slider } from "../../../ui-kit/slider/Slider";
import { mainPageSlider } from "../../../data";
import { Button } from "../../../ui-kit/button/Button";
import styles from "./HomeSlider.module.css";

export const HomeSlider: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Slider data={mainPageSlider} />
      </div>
      <p className={styles.text}>
        <span className={styles.accentText}>«КАРДО»</span> - так в Римской
        империи называлась улица, ориентированная с севера на юг. Именно она
        была центром социальной и экономической жизни города.
      </p>
      <div className={styles.buttonWrapper}>
        <Button variant="outline" size="large" color="grey" isGrey>
          Подробнее
        </Button>
      </div>
    </>
  );
};
