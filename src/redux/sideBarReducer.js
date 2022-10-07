
let initialState = {
    friends: [
        {id: 1, name: 'Stan', avatar: "https://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg"},
        {id: 2, name: 'Olya', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcq7ZuqVw0H36YcP38CM0rSKGMVDs3hOyIQ1pdB2f1WEwBJJt8tdV_Z7Xc1pVgNlrhiE&usqp=CAU"},
        {id: 3, name: 'Billy', avatar: "https://i1.sndcdn.com/avatars-000347483369-e3drlf-t500x500.jpg"}
    ],
    links: [
        {link: '/main', name: 'Profile'},
        {link: '/dialogs', name: 'Dialogs'},
        {link: '/news', name: 'News'},
        {link: '/contacts', name: 'Contacts'}
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return {
        ...state
    };
}

export default sideBarReducer;