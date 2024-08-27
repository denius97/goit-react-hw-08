import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <span className={css.userName}>{user.name}</span>
      <button onClick={() => dispatch(logout())}>LogOut</button>
    </div>
  );
};

export default UserMenu;
