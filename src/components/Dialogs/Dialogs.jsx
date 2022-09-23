import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    
    let dialogsElements = props.state.persons
    .map((element, index) => (<Dialog key={index} name={element.name} id={element.id} avatar={element.avatar}/>))
    
    let messagesElements = props.state.messages
    .map((element, index) => (<Message message={element.message} key={index}/>))

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </section>
    )
}

export default Dialogs;