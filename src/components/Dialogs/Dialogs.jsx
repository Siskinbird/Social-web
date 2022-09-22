import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Zubr'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Katya'} 
    ];

    let messagesData = [
        {id: 1, message: 'Hello world'},
        {id: 2, message: 'War is coming'},
        {id: 3, message: 'Check you document'},
        {id: 4, message: 'Go off you contry'},
        {id: 5, message: 'Stay away'},
        {id: 6, message: 'Run'} 
    ];

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
            <h2>Dialogs</h2>
        </section>
    )
}

export default Dialogs;