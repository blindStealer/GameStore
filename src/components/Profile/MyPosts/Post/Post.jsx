import s from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/originals/e5/d8/3c/e5d83cfe33bff566ae3b57bbed9f68d3.jpg"
        alt="ava"
      />
      {message}
      <div>
        <span>like {likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
