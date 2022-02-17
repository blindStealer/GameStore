
import Loader from "../../UI/Loader/Loader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = ({ profile }) => {

  if (!profile) {
    return <Loader />
  }

  return (
    <div>
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="main-png"
        />
      </div>

      <div className={s.descriptionBlock}>
        <div>
          <img src={profile.photos.large} alt="" />
        </div>
        ava + description
      </div>

    </div>
  );
};


export default ProfileInfo;
