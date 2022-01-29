
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {


    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body

    } else if (action.type === SEND_MESSAGE) {

        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messagesData.push({ id: 7, message: body })
    }


    return state


}


export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})




export default dialogsReducer