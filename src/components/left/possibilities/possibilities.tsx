import React from "react";
import s from "./possibilities.module.css";

const PossibilitiesLeft = () => {
  return (
    <div className={s.possibilities_left}>
      <h3 className={s.possibilities_conteiner_title}>
        РАЗРАБОТКА КОНСТРУКТОРСКОЙ ДОКУМЕНТАЦИИ
      </h3>

      <ul className={s.possibilities_conteiner_lists}>
        <li>Разработка чертежей деталей и узлов</li>
        <li>Разработка чертежей по образцу изделия (Реверс-инжиниринг)</li>
        <li>Разработка схем</li>
        <li>Создание эксплуатационной документации</li>
        <li>Оцифровка конструкторской документации</li>
      </ul>
      <span className={s.border}></span>
    </div>
  );
};

export default PossibilitiesLeft;
