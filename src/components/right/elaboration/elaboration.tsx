import s from "./elaboration.module.css";
import hub from "../../../icon/hub.gif";
const ElaborationRight = () => {
  return (
    <div className={s.elaboration_right}>
      <img className={s.img} src={hub} alt="чертеж ступицы " />
      <div className={s.liaison}>
        <p className={s.communication}>932017482619</p>
      </div>
    </div>
  );
};

export default ElaborationRight;
