import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <Dialog name='Ivan' id='1' />
                <Dialog name='Zubr' id='2' />
                <Dialog name='Olya' id='3' />
                <Dialog name='Dima' id='4' />
                <Dialog name='Sveta' id='5' />
                <Dialog name='Katya' id='6' />
            </div>
            <div className={style.messages}>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
            </div>
            <h2>Dialogs</h2>
        </section>
    )
}

export default Dialogs;