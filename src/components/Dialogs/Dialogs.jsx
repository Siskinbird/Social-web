import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { sendMessageActionCreator, addNewMessageActionCreator} from '../../redux/state'


function Dialogs(props) {

    let state = props.store.getState().dialogsPage;
    
    let dialogsElements = state.persons
    .map((element, index) => (<Dialog key={index} name={element.name} id={element.id} avatar={element.avatar}/>))
    
    let messagesElements = state.messages
    .map((element, index) => (<Message message={element.message} key={index}/>))

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(addNewMessageActionCreator(body))
    }

    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter you message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>   
                </div>

            </div>
        </section>
    )
}

export default Dialogs;