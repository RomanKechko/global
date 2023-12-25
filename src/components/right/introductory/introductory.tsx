import s from "./introductory.module.css";
import pencil from "../../../icon/pencil.png";
import handshake from "../../../icon/handshake.png";
import style from "../../main/main.module.css";
const IntroductoryRight = () => {
  return (
    <div className={s.introductory_description_right}>
      <div className={s.right_shift}>
        <h2 className={style.introductory_title}>
          Создание 3д моделей, рассчеты деталей
        </h2>
        <div className={style.introductory_conteiner}>
          <img className={style.icon} src={pencil} alt="карандаш" />
          <h3 className={style.introductory_conteiner_title}>
            ОФОРМИМ ТЕХНИЧЕСКУЮ ДОКУМЕНТАЦИЮ
          </h3>
          <p className={style.introductory_conteiner_description}>
            Эксплуатационная и нормативная документация в соответствии с ЕСКД
            для сертификации и внесения в реестр Минпромторга.
          </p>
        </div>
        <div className={style.introductory_conteiner}>
          <img
            className={style.icon_handshake}
            src={handshake}
            alt="карандаш"
          />
          <h3 className={style.introductory_conteiner_title}>
            РЕШИМ ШИРОКИЙ СПЕКТР КОНСТРУКТОРСКИХ И ИНЖЕНЕРНЫХ ЗАДАЧ
          </h3>
          <p className={style.introductory_conteiner_description}>
            Поддержка производства, разработка печатных плат, программирование
            контроллеров, НИОКР.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductoryRight;
