
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="main-png"
        />
      </div>

      <div className={s.descriptionBlock}>
        ava + description
      </div>

    </div>
  );
};


export default ProfileInfo;
