
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loader from "../UI/Loader/Loader";

const Profile = () => {
  let { userID } = useParams()

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        setProfile(response.data)
        console.log(response.data)
      })
  }, [userID])

  if (!profile) {
    return <Loader />
  }

  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
