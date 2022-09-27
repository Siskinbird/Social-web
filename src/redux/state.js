
let store = {
    _state: {
        sideBar: {
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
        },
        mainPage: {
            posts: [
                {id: 1, message: "Hellow its my first post", likesCount: 17},
                {id: 2, message: 'Hello wi all dieng', likesCount: 21},
                {id: 3, message: 'In this fucking world war', likesCount: 11},
                {id: 4, message: 'Russia come', likesCount: 44},
                {id: 5, message: 'Run', likesCount: 98},
                {id: 6, message: 'Away', likesCount: 113} 
            ],
            newPostText: 'new post from state'
        },
        dialogsPage: {
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
            ]
        } 
    },
    rerenderEntireTree() {
        console.log('State is changed')
    },
    addPost() {       
        let newPost = {
            id: 7,
            message: state.mainPage.newPostText,
         likesCount: 0
        };
        state.mainPage.posts.push(newPost);
        state.mainPage.newPostText = '';
        rerenderEntireTree(state);
    },
    updateNewPostText(updateText) {
        state.mainPage.newPostText = updateText;
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    }
}

window.state = state;
export default store;

/* let rerenderEntireTree = () => {
    console.log('State is changed')
}

let state = {
    sideBar: {
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
    },
    mainPage: {
        posts: [
            {id: 1, message: "Hellow its my first post", likesCount: 17},
            {id: 2, message: 'Hello wi all dieng', likesCount: 21},
            {id: 3, message: 'In this fucking world war', likesCount: 11},
            {id: 4, message: 'Russia come', likesCount: 44},
            {id: 5, message: 'Run', likesCount: 98},
            {id: 6, message: 'Away', likesCount: 113} 
        ],
        newPostText: 'new post from state'
    },
    dialogsPage: {
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
        ]
    } 
} */

/* export function addPost() {
    let newPost = {
        id: 7,
        message: state.mainPage.newPostText,
        likesCount: 0
    };
    state.mainPage.posts.push(newPost);
    state.mainPage.newPostText = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(updateText) {
    state.mainPage.newPostText = updateText;
    rerenderEntireTree(state);
}

export function subscribe(observer) {
    rerenderEntireTree = observer;
} */
/* export function addLike() {
    state.mainPage.posts.likesCount = state.mainPage.posts.likesCount++;
    rerenderEntireTree(state);
} */

