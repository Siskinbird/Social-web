const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        { id: 0,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: true,
            fullName: 'Dmitry C',
            status: 'Hello, im using...',
            location: {city: 'Moscow', country: 'Russia'}},
        { id: 1,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: false,
            fullName: 'Valera C',
            status: 'God bless Russia...',
            location: {city: 'Moscow', country: 'Russia'}},
        { id: 2,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: true,
            fullName: 'Sergey C',
            status: 'We are coming down...',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer;