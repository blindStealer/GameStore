

let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'its my first post', likesCount: 11 },
                { id: 3, message: 'its my second post', likesCount: 14 },
                { id: 4, message: 'its my third post', likesCount: 16 },
                { id: 5, message: 'its my fourth post', likesCount: 18 },
                { id: 6, message: 'its my fifth post', likesCount: 21 },
            ],

            newPostText: 'it-kamasutra.com'

        },

        messagesPage: {
            messagesData: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is your It kamasutra' },
                { id: 3, message: 'yo' },
                { id: 5, message: 'yo' },
                { id: 6, message: 'yo' },
                { id: 4, message: 'yo' },
            ],

            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
            ],
        },

    },

    _callSubscriber() {
        console.log('State is changes')
    },

    getState() {
        return this._state
    },



    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''

        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText

        this._callSubscriber(this._state)
    },


    subscribe(observer) {
        this._callSubscriber = observer
    }

}




export default store

window.store = store

// store OOP