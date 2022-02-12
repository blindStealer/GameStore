import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = ({ posts, newPostText, updateNewPostText, addPost }) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  let newPostsArray = posts.map((item) => {
    return (
      <Post
        message={item.message}
        id={item.id}
        key={item.id}
        likesCount={item.likesCount}
      />
    );
  });

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
      <div className={s.posts}>{newPostsArray}</div>
    </div>
  );
};

export default MyPosts;

// let postsElements = posts.map((item) => {
//   return (
//     <Post message={item.message} id={item.id} />
//   )
// })
