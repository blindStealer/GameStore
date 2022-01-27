import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'



const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'dialogs/1' + props.id}>{props.name} {props.id} </NavLink>
        </div>
    )

}










export default DialogItem