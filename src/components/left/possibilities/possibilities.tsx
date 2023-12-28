import React from "react";
import s from "./possibilities.module.css";
import ok from "../../../icon/ok.png";

const PossibilitiesLeft = () => {
  return (
    <div className={s.possibilities_left}>
      <h2 className={s.possibilities_title}>Возмож</h2>
      <ul className={s.possibilities_lists}>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>СООТВЕТСТВИЕ ТРЕБОВНИЯМ ЕСКД</h3>
          <p className={s.description}>
            Документация оформляется в полном соответствии с общепринятыми
            стандартами
          </p>
        </li>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>НАДЕЖНОСТЬ - КОМПЕТЕНТНОСТЬ</h3>
          <p className={s.description}>
            Опыт работы более 10 лет. Реализовано более 1000 проектов
          </p>
        </li>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>УДОБСТВО СОТРУДНИЧЕСТВА</h3>
          <p className={s.description}>
            Централизованное решение вопросов. В распоряжении штат
            инженеров-конструкторов
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PossibilitiesLeft;
