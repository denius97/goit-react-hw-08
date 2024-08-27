import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const AuthNav = () => {
  return (
    <ul className={css.authNav}>
      <li>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
