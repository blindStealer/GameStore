const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "its my first post", likesCount: 11 },
    { id: 3, message: "its my second post", likesCount: 14 },
    { id: 4, message: "its my third post", likesCount: 16 },
    { id: 5, message: "its my fourth post", likesCount: 18 },
    { id: 6, message: "its my fifth post", likesCount: 21 },
  ],

  newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {

  if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  if (action.type === ADD_POST) {
    let newPost = {
      id: 7,
      message: state.newPostText,
      likesCount: 0,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  }

  return state;
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addPostActionCreator = () => ({
  type: ADD_POST,
});



export default profileReducer;
