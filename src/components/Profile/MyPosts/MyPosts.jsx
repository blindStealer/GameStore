import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = ({ posts, newPostText, dispatch }) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map((item) => (
          <Post message={item.message} id={item.id} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

// let postsElements = posts.map((item) => {
//   return (
//     <Post message={item.message} id={item.id} />
//   )
// })
