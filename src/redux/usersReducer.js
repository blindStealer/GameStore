const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

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

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }




        default:
            return state

    }
}


export const followToggle = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId: userId,
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalUserCount = (totalUserCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount: totalUserCount
})

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING,
    isFetching: isFetching
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

