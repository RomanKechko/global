import React from "react";
import s from "./offer.module.css";
import Joonistaja from "../../../icon/joonistaja.jpg";

const OfferLeft = () => {
  return (
    <div className={s.offer_left}>
      <img className={s.offer_image} src={Joonistaja} alt="Чертеж вала" />
      <h3 className={s.offer_title}>РАЗРАБОТКА ТЕХНИЧЕСКОЙ ДОКУМЕНТАЦИИ</h3>
      <h4 className={s.offer_subheading}>Эксплуатационная документация:</h4>
      <ul className={s.offer_lists}>
        <li>Паспорт изделия (ПС)</li>
        <li>Руководство по эксплуатации (РЭ)</li>
        <li>Программы и методики испытаний (ПМ)</li>
        <li>Формуляры</li>
      </ul>
    </div>
  );
};

export default OfferLeft;
