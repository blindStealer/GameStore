const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [],


}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: !item.followed }
                    }
                    return item
                })
            }


        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }


        default:
            return state

    }
}


export const followAC = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId: userId,
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})

export default usersReducer
















// const usersReducer = (state = initialState, action) => {
//     if (action.type === FOLLOW) {
//         return {
//             ...state,
//             users: state.users.map((item) => {
//                 if (item.id === action.userId) {
//                     return { ...item, followed: !item.followed }
//                 }
//                 return item
//             })
//         }
//     } else if (action.type === setUsersAC) {
//         return {
//             ...state,
//             users: [...state.users, ...action.users]
//         }
//     }
//     return state
// }

