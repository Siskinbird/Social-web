import React from "react";

import { sendMessageActionCreator, addNewMessageActionCreator} from '../../../redux/dialogsReducer'
import Dialogs from "../Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (body) => { dispatch(addNewMessageActionCreator(body)) },
        sendMessage: () => { dispatch(sendMessageActionCreator()) }
    }
}

const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;