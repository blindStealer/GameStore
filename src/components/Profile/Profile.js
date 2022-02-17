
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile }) => {
  console.log(profile)
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
