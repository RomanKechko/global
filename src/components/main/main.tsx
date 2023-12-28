import { FC, useEffect, useRef } from "react";
import s from "./main.module.css";

import IntroductoryLeft from "../left/introductory/introductory";
import IntroductoryRight from "../right/introductory/introductory";
import OfferRight from "../right/offer/offer";
import OfferLeft from "../left/offer/offer";
import PossibilitiesLeft from "../left/possibilities/possibilities";
import PossibilitiesRight from "../right/possibilities/possibilities";
import OfferModelsRight from "../right/offer-models/offer-models";
import OfferModelsLeft from "../left/offer-models/offer-models";
import PortfolioLeft from "../left/portfolio/portfolio";
import PortfolioRight from "../right/portfolio/portfolio";
import ElaborationLeft from "../left/elaboration/elaboration";
import ElaborationRight from "../right/elaboration/elaboration";
import { useNavigate } from "react-router-dom";

const Main: FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // Укажите количество слайдов

  useEffect(() => {
    const height = window.innerHeight;

    if (leftRef.current) {
      const children: number = leftRef.current.children.length;
      let numberOfSlides = children;

      leftRef.current.style.top = `-${(numberOfSlides - 1) * 100}vh`;

      const handleScroll = (direction: string) => {
        if (direction === "down") {
          if (direction === "down") {
            numberOfSlides = (numberOfSlides + 1) % children;
          } else {
            numberOfSlides++;
          }
        } else if (direction === "up") {
          numberOfSlides--;
          if (numberOfSlides < 0) {
            numberOfSlides = children - 1;
          }
        }

        const translateYValue = numberOfSlides * height;

        if (leftRef.current) {
          leftRef.current.style.transform = `translateY(${translateYValue}px)`;
        }

        if (rightRef.current) {
          rightRef.current.style.transform = `translateY(-${translateYValue}px)`;
        }
      };

      window.addEventListener("wheel", (e) => {
        const direction = e.deltaY > 0 ? "down" : "up";
        handleScroll(direction);
      });
    }
  }, [navigate]);

  return (
    <main className={s.main}>
      <div className={s.introductory_left_contents} ref={leftRef}>
        <PossibilitiesLeft />
        <PortfolioLeft />
        <OfferLeft />
        <ElaborationLeft />
        <OfferModelsLeft />
        <IntroductoryLeft />
      </div>

      <div className={s.introductory_right_contents} ref={rightRef}>
        <IntroductoryRight />
        <OfferModelsRight />
        <ElaborationRight />
        <OfferRight />
        <PortfolioRight />
        <PossibilitiesRight />
      </div>
    </main>
  );
};

export default Main;
