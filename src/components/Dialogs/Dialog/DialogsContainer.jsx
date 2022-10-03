import React from "react";

import { sendMessageActionCreator, addNewMessageActionCreator} from '../../../redux/dialogsReducer'
import Dialogs from "../Dialogs";


function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(addNewMessageActionCreator(body))
    }

    return (
        <Dialogs dialogsPage={state}
                 sendMessage={onSendMessageClick}
                 changeMessage={onNewMessageChange}/>
    )
}

export default DialogsContainer;