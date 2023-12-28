import React from "react";
import s from "./portfolio.module.css";

const PortfolioLeft = () => {
  return (
    <div className={s.portfolio_left}>
      <h2 className={s.portfolio_title}>НАШИ ПРОЕКТЫ</h2>
      <span className={s.portfolio_border}></span>
      <p className={s.portfolio_description}>
        Мы обладаем большим навыком в области разработки и реализации сложных
        проектов
      </p>
    </div>
  );
};

export default PortfolioLeft;
