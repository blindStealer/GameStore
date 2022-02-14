import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

let matStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(matStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
