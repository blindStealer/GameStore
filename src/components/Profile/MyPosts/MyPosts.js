import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {

  let newPostElement = React.createRef()

  let onAddPost = () => {
    // let text = newPostElement.current.value  берем из textarea вэлью

    addPost()

    // updateNewPostText('') обнуление
  }

  let onPostChange = () => {

    let text = newPostElement.current.value
    updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map((item) => <Post message={item.message} id={item.id} />)}
      </div>
    </div>
  )
}

export default MyPosts;



// let postsElements = posts.map((item) => {
  //   return (
  //     <Post message={item.message} id={item.id} />
  //   )
  // })