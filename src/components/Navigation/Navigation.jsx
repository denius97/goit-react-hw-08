import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";


const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
