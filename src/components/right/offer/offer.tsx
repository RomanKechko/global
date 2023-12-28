import React from "react";
import s from "./offer.module.css";
import Val from "../../../icon/Val.png";

const OfferRight = () => {
  return (
    <div className={s.offer_right}>
      <img className={s.offer_image} src={Val} alt="Чертеж вала" />
      <h3 className={s.offer_title}>РАЗРАБОТКА ТЕХНИЧЕСКОЙ ДОКУМЕНТАЦИИ</h3>
      <h4 className={s.offer_subheading}>Эксплуатационная документация:</h4>
      <ul className={s.offer_lists}>
        <li>Паспорт изделия (ПС)</li>
        <li>Руководство по эксплуатации (РЭ)</li>
        <li>Программы и методики испытаний (ПМ)</li>
        <li>Формуляры</li>
      </ul>
      <h4 className={s.offer_subheading}>Нормативная документация:</h4>
      <ul className={s.offer_lists}>
        <li>Технические условия (ТУ)</li>
        <li>Технические инструкции (ТИ)</li>
        <li>Регламенты</li>
        <li>Рабочие инструкции</li>
      </ul>
    </div>
  );
};

export default OfferRight;
