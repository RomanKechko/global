import React, { FC, useEffect, useRef, useState } from "react";
import s from "./portfolio.module.css";

import Controls from "./Controls/Controls";
import { data, slidersArr } from "../../../utils/data";

type Image = null | number;

const PortfolioRight: FC = () => {
  const [currentImage, setCurrentImage] = useState<Image>(null);
  const [autoSlide, setAutoSlide] = useState(true); // Добавлено состояние для автоматического перелистывания

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = slidersArr.length;
  const countTracker = (count: number) => setCurrentImage(count);

  useEffect(() => {
    // Запуск автоматического перелистывания при монтировании компонента
    startAutoSlide();

    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    // Обработка изменения состояния текущего слайда
    if (autoSlide && currentImage !== null) {
      startAutoSlide();
    }
  }, [currentImage, autoSlide]);

  const startAutoSlide = () => {
    // Запуск автоматического перелистывания с интервалом в 2000 миллисекунд
    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setAutoSlide(false); // Отключение автоматического перелистывания при взаимодействии пользователя
      handleIncrement();
    }, 2000);
  };

  const handleIncrement = () => {
    setAutoSlide(false);
    setCurrentImage((prevCount) =>
      prevCount === null || prevCount === slidersArr.length - 1
        ? 0
        : prevCount + 1
    );
  };

  return (
    <div className={s.portfolio_right}>
      {currentImage !== null && (
        <img
          className={s.portfolio_image}
          src={slidersArr[currentImage]}
          alt="кот"
          onMouseEnter={() => setAutoSlide(false)} // Отключение автоматического перелистывания при наведении курсора
          onMouseLeave={() => setAutoSlide(true)} // Включение автоматического перелистывания при уходе курсора
        />
      )}
      <Controls
        Count={countTracker}
        totalImages={totalImages}
        currentImage={currentImage}
      />
      {currentImage !== null && (
        <>
          <h2 className={s.portfolio_title}>{data[currentImage].title}</h2>
          <p className={s.portfolio_description}>
            {data[currentImage].descriotion}
          </p>{" "}
        </>
      )}
    </div>
  );
};

export default PortfolioRight;
