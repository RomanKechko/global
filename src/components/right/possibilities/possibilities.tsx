import s from "./possibilities.module.css";
import ok from "../../../icon/ok.png";

const PossibilitiesRight = () => {
  return (
    <div className={s.possibilities_right}>
      <h2 className={s.possibilities_title}>ности</h2>
      <ul className={s.possibilities_lists}>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>РАБОТАЕМ СО ВСЕМИ РЕГИОНАМИ РОССИИ</h3>
          <p className={s.description}>
            Все проекты мы закрываем дистанционно. В случае необходимости
            приезжаем
          </p>
        </li>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>ПОДДЕРЖКА НА ВСЕХ ЭТАПАХ ПРОЕКТА</h3>
          <p className={s.description}>
            От стадии подготовки ТЗ до выпуска серийной продукции
          </p>
        </li>
        <li className={s.list}>
          <img className={s.image} src={ok} alt="" />
          <h3 className={s.title}>ПРОЗРАЧНОСТЬ</h3>
          <p className={s.description}>
            Своевременная информация о текущем статусе на всех этапах проекта
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PossibilitiesRight;
