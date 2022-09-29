const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: 8,
                message: body
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;        
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_BODY, body: newMessage})
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;
