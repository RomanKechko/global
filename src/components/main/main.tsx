import { FC, useEffect, useRef } from "react";
import s from "./main.module.css";

import Offer from "../left/offer/offer";
import Possibilities from "../left/possibilities/possibilities";
import IntroductoryLeft from "../left/introductory/introductory";
import IntroductoryRight from "../right/introductory/introductory";
import OfferRight from "../right/offer/offer";
import OfferLeft from "../left/offer/offer";
import PossibilitiesLeft from "../left/possibilities/possibilities";
import PossibilitiesRight from "../right/possibilities/possibilities";
const Main: FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Укажите количество слайдов

  useEffect(() => {
    const height = window.innerHeight;
    if (leftRef.current) {
      const children: number = leftRef.current.children.length;
      let numberOfSlides = children;

      leftRef.current.style.top = `-${(numberOfSlides - 1) * 100}vh`;

      const handleScroll = (direction: string) => {
        if (direction === "up") {
          if (direction === "up") {
            numberOfSlides = (numberOfSlides + 1) % children;
          } else {
            numberOfSlides++;
          }
        } else if (direction === "down") {
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
        handleScroll(direction);
      });
    }
  }, []);

  return (
    <main className={s.main}>
      <div className={s.introductory_left_contents} ref={leftRef}>
        <OfferLeft />
        <PossibilitiesLeft />
        <IntroductoryLeft />
      </div>

      <div className={s.introductory_right_contents} ref={rightRef}>
        <IntroductoryRight />
        <OfferRight />
        <PossibilitiesRight />
      </div>
    </main>
  );
};

export default Main;
