
import { useEffect } from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = ({ profile }) => {

  

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
          <img src={profile.photos.large} alt="ava" />
        </div>

        <div>
          <span>Описание: </span>
          {profile.aboutMe === null ? 'У пользователя нет своего описания....' : profile.aboutMe}
        </div>

      </div>

    </div>
  );
};


export default ProfileInfo;
