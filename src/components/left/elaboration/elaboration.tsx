import React from "react";
import s from "./elaboration.module.css";

const ElaborationLeft = () => {
  return (
    <div className={s.elaboration_left}>
      <h3 className={s.elaboration_conteiner_title}>
        РАЗРАБОТКА КОНСТРУКТОРСКОЙ ДОКУМЕНТАЦИИ
      </h3>

      <ul className={s.elaboration_conteiner_lists}>
        <li>Разработка чертежей деталей и узлов</li>
        <li>Разработка чертежей по образцу изделия (Реверс-инжиниринг)</li>
        <li>Разработка схем</li>
        <li>Создание эксплуатационной документации</li>
        <li>Оцифровка конструкторской документации</li>
      </ul>
      <span className={s.border}></span>
      <div className={s.liaison}>
        <p className={s.communication}>Свяжитесь с нами </p>
      </div>
    </div>
  );
};

export default ElaborationLeft;
