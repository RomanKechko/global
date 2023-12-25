import React from "react";
import s from "./possibilities.module.css";
import hub from "../../../icon/hub.gif";
const PossibilitiesRight = () => {
  return (
    <div className={s.possibilities_right}>
      <img className={s.img} src={hub} alt="чертеж ступицы " />
    </div>
  );
};

export default PossibilitiesRight;
