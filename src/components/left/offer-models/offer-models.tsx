import React from "react";
import s from "./offer-models.module.css";
import Kompas from "../../../icon/Kompas.png";
import SolidList from "../../../icon/SolidList.jpg";
import SolidWorks from "../../../icon/SolidWorks.jpg";

const OfferModelsLeft = () => {
  return (
    <div className={s.models_lef}>
      <img className={s.models_Kompas} src={Kompas} alt="Скриншот Компас" />
      <img
        className={s.models_SolidList}
        src={SolidList}
        alt="Скриншот SolidList"
      />
      <img
        className={s.models_solidworks}
        src={SolidWorks}
        alt="Скриншот SolidWorks"
      />
    </div>
  );
};

export default OfferModelsLeft;
