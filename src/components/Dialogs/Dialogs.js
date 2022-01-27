import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'




const Dialogs = ({ dialogsData, messagesData }) => {



    let dialogElements = dialogsData.map((item) => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    })

    let messagesElements = messagesData.map((item) => {
        return (
            <Message message={item.message} />
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs