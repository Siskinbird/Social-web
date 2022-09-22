import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    
    let dialogsElements = props.dialogs
    .map(element => (<Dialog name={element.name} id={element.id} />))
    


    let messagesElements = props.messages
    .map(element => (<Message message={element.message}/>))

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
            <h2>Dialogs</h2>
        </section>
    )
}

export default Dialogs;