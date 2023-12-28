import React from "react";
import s from "./offer-models.module.css";

const OfferModelsRight = () => {
  return (
    <div className={s.models_right}>
      <h3 className={s.models_title}>Разработка 3D модели</h3>
      <ul className={s.models_lists}>
        <li>Cоздание сложных 3D моделей для бизнеса </li>
        <li>Разработка деталей и узлов модели</li>
        <li>Разработка деталей и узлов модели</li>
        <li>Разработка модели по образцу изделия (Реверс-инжиниринг)</li>
      </ul>
      <span className={s.models_border}></span>
    </div>
  );
};

export default OfferModelsRight;
