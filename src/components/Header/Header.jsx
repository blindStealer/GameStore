import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://connexxo.com/wp-content/uploads/2017/11/Less-Logo-150x150-300x300.png"
        alt="logo"
      />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>LOGIN</NavLink>}
      </div>
    </header>
  );
};

export default Header;
