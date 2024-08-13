import { FC } from "react";
import { SliderItem } from "../../types";
import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";
import { ArrowLeft } from "../icons/arrows/ArrowLeft";
import { ArrowRight } from "../icons/arrows/ArrowRight";

type Props = {
  data: SliderItem[];
};

export const Slider: FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <div className={styles.slider}>
      {data.map((item, itemIndex) => {
        const { id, image } = item;
        let position = "next";
        if (itemIndex === index) {
          position = "active";
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === data.length - 1)
        ) {
          position = "last";
        }
        return (
          <div key={id} className={clsx(styles[position], styles.card)}>
            <img src={image} alt="kardo photo" />
          </div>
        );
      })}
      <button onClick={prevSlide} className={styles.prevButton}>
        <ArrowLeft />
      </button>
      <button onClick={nextSlide} className={styles.nextButton}>
        <ArrowRight />
      </button>
      <div className={styles.indicatorWrapper}>
        {data.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={clsx(styles.indicator, {
              [styles.activeInidcator]: slideIndex === index,
            })}
            onClick={() => setIndex(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};
