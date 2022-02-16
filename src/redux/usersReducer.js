const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,

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
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUserCount
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

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalUserCountAC = (totalUserCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount: totalUserCount
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

