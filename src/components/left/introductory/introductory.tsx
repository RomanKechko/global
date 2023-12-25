import s from "./introductory.module.css";
import table from "../../../icon/table.png";
import sheet from "../../../icon/sheet.png";
import style from "../../main/main.module.css";

const IntroductoryLeft = () => {
  return (
    <div className={s.introductory_description_left}>
      <div className={s.left_shift}>
        <h1 className={style.introductory_title}>
          РАЗРАБОТКА КОНСТРУКТОРСКОЙ ДОКУМЕНТАЦИИ
        </h1>
        <div className={style.introductory_conteiner}>
          <img className={style.icon} src={sheet} alt="карандаш" />
          <h3 className={style.introductory_conteiner_title}>
            РАЗРАБОТАЕМ КОНСТРУКТОРСКУЮ ДОКУМЕНТАЦИЮ
          </h3>
          <p className={style.introductory_conteiner_description}>
            Экспертная разработка 3-D моделей, чертежей деталей и узлов в
            соответствии с ЕСКД
          </p>
        </div>
        <div className={style.introductory_conteiner}>
          <img className={style.icon} src={table} alt="карандаш" />
          <h3 className={style.introductory_conteiner_title}>
            РАЗРАБОТАЕМ ЧЕРТЕЖИ ПО ОБРАЗЦУ ИЗДЕЛИЯ
          </h3>
          <div>
            <p className={style.introductory_conteiner_description}>
              Чертежи на заказ по образцу изделия (реверс-инжиниринг) для
              производства изделий и узлов в рамках импортозамещения
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductoryLeft;
