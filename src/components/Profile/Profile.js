import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, addPost, newPostText, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText} />
    </div>
  );
};


export default Profile;
