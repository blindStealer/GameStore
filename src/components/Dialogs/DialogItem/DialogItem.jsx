import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = ({ name, id }) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"dialogs/1" + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
