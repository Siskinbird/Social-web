const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    persons: [
        {id: 1, name: 'Ivan', avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg'},
        {id: 2, name: 'Stan', avatar: 'https://filmschoolrejects.com/wp-content/uploads/2019/06/Gravity-Falls-Feature-Image-2.jpg'},
        {id: 3, name: 'Olya', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME48WX6IrWlLmHMehY3p55OE4v6e2lsGcWL5_Nrnk8_ukM8wiQvXC4XmvTZjsuAt7r3k&usqp=CAU'},
        {id: 4, name: 'Dima', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vfd8mqwb6d6de9qBz7okfjXrGP7HMs8BvCT4wL-kFa8SLxVh9tsFuMFOT3o1zb-spxU&usqp=CAU'},
        {id: 5, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcq7ZuqVw0H36YcP38CM0rSKGMVDs3hOyIQ1pdB2f1WEwBJJt8tdV_Z7Xc1pVgNlrhiE&usqp=CAU'},
        {id: 6, name: 'Billy', avatar: 'https://i1.sndcdn.com/avatars-000347483369-e3drlf-t500x500.jpg'} 
    ],
    messages:  [
        {id: 1, message: 'Hello world'},
        {id: 2, message: 'War is coming'},
        {id: 3, message: 'Check you document'},
        {id: 4, message: 'Go off you contry'},
        {id: 5, message: 'Stay away'},
        {id: 6, message: 'Run'} 
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 8, message: body}]
            };
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_BODY, body: newMessage})
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;
