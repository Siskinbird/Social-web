import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    
    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Zubr'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Katya'} 
    ];

    let messages = [
        {id: 1, message: 'Hello world'},
        {id: 2, message: 'War is coming'},
        {id: 3, message: 'Check you document'},
        {id: 4, message: 'Go off you contry'},
        {id: 5, message: 'Stay away'},
        {id: 6, message: 'Run'} 
    ];

    let dialogsElements = dialogs
    .map(element => (<Dialog name={element.name} id={element.id} />))
    


    let messagesElements = messages
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