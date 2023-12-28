import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./app-header.module.css";

const AppHeader: FC = () => {
  const setNavStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? s.nav_link_active : s.nav_link;
  };

  return (
    <>
      <header className={s.header}>
        <ul className={s.nav_bar}>
          <li className={s.nav_list}>
            <NavLink to="/" className={setNavStyle}>
              услуги
            </NavLink>
          </li>
          <li className={s.nav_list}>
            <NavLink to="/b" className={setNavStyle}>
              возможности
            </NavLink>
          </li>
          <li className={s.nav_list}>
            <NavLink to="/portfolio" className={setNavStyle}>
              наши проекты
            </NavLink>
          </li>
          <li className={s.nav_list}>
            <NavLink to="/v" className={setNavStyle}>
              оставить заявку
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default AppHeader;
